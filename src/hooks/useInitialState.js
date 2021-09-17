
/* aqui vamos a implementar el react hook para la fake api */
import { useState, useEffect } from 'react';

/* creamos una funcion que nos permitira manejar el estado y el ciclo de vida de cualquier componente
de nuestra aplicacion, por que la vamos a poder utilizar donde sea necesario.
*/

const useInitialState = (API) => {
  //useState
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  }) ;

  //useEffect
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
