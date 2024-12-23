import { FC, FormEvent, useContext } from 'react';

import { SocketContext, validateUserFormData } from '@/entities/chat/model';
import { UserForm } from '@/entities/chat/ui';

const ConnectedUserForm: FC = () => {
  const socket = useContext( SocketContext );

  function handleSubmitForm( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = validateUserFormData( formData );
      socket.emit( 'search_user', { query: fields.query } );
    } catch ( error ) {
      console.log( error );
    }
  }

  return <UserForm onSubmit={e => handleSubmitForm( e )} />;
};

export default ConnectedUserForm;