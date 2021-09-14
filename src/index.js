/* Este es el punto de entrada, aqui importamos react, asi como react-dom y todos aquellos
componetes o archivos que requiera nuesta aplicacion.
*/

import React from "react";
import ReactDOM  from "react-dom";
import HelloWorld from "./components/HelloWorld";

/* con ReactDOM.render empujamos el componente al html */
ReactDOM.render(< HelloWorld/>, document.getElementById(app));


