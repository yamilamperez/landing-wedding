import React from 'react';
import Home from './Screens/Home'
import FormmularioRecibido from './Screens/FormularioRecibido'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/FormularioRecibido' element={<FormmularioRecibido/>}/>
    </Routes>
  );
}

export default App;