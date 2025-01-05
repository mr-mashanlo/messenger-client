function debounce( timer: number ) {
  let timerID: ReturnType<typeof setTimeout> | null = null;

  return ( callback: () => void ) => {
    if ( timerID ) { clearTimeout( timerID ); }
    timerID = setTimeout( () => { callback(); }, timer );
  };
}

export default debounce;