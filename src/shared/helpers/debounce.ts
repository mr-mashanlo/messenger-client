function debounce() {
  let timerID: ReturnType<typeof setTimeout> | null = null;

  return ( callback: () => void ) => {
    if ( timerID ) { clearTimeout( timerID ); }
    timerID = setTimeout( () => { callback(); }, 1000 );
  };
}

export default debounce;