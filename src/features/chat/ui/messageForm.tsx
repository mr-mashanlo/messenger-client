import { FC, FormEvent, useContext } from 'react';

import { SocketContext } from '@/entities/chat/model';
import { MessageForm } from '@/entities/chat/ui';
import { validateMessageFormData } from '@/entities/message/model/validator';
import { useAuthMediator, useChatMediator } from '@/shared/hook';

const ConnectedMessageForm: FC = () => {
  const socket = useContext( SocketContext );
  const { sub: sender } = useAuthMediator();
  const { reciever } = useChatMediator();

  function handleSubmitForm( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = validateMessageFormData( formData );
      socket.emit( 'send_message', { text: fields.text, sender, reciever  } );
    } catch ( error ) {
      console.log( error );
    }
  }

  return <MessageForm onSubmit={e => handleSubmitForm( e )} />;
};

export default ConnectedMessageForm;