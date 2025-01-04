interface Arguments {
  elements: NodeListOf<HTMLDivElement>,
  callback: ( entry: IntersectionObserverEntry ) => void,
  options: object
}

export function intersection( { elements, callback, options = {} }: Arguments ) {
  const observer = new IntersectionObserver(
    ( entries, observer ) => {
      entries.forEach( entry => {
        if ( entry.isIntersecting ) {
          callback( entry );
          observer.unobserve( entry.target );
        }
      } );
    },
    options
  );
  elements.forEach( element => observer.observe( element ) );
}