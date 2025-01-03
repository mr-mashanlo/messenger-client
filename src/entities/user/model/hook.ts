import useUserStore from './store';

const useUserMediator = () => {
  const id = useUserStore( state => state.id );
  const setID = useUserStore( state => state.setID );

  return { id, setID };
};

export default useUserMediator;