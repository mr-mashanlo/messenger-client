import useChatStore from './store';

const useChatMediator = () => {
  const query = useChatStore( state => state.query );
  const setQuery = useChatStore( state => state.setQuery );
  const reciever = useChatStore( state => state.reciever );
  const setReciever = useChatStore( state => state.setReciever );

  return { query, setQuery, reciever, setReciever };
};

export default useChatMediator;