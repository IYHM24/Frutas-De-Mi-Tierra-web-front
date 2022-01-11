import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
/* import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js' */
/* Importar boostrap */
/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";  */
import "mdb-ui-kit/css/mdb.min.css"
import "mdb-ui-kit/js/mdb.min.js"
import "../node_modules/aos/dist/aos.css"
import Principal from './Principal';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AOS from "aos";
import { useEffect } from 'react';

const FrutasApp = ()=>{

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return(
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Principal/>}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );

}

ReactDOM.render( <FrutasApp/>,document.getElementById('root'));
