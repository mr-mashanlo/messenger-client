import { useChatStore } from '@/entities/chat/model';

const useChatMediator = () => {
  const reciever = useChatStore( state => state.reciever );
  const setReciever = useChatStore( state => state.setReciever );

  return { reciever, setReciever };
};

export default useChatMediator;