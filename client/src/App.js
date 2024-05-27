import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Interaction from './Interaction';
import CreateAssistant from './CreateAssistant';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateAssistant />}></Route>
        <Route path='/interaction' element={<Interaction />}></Route>
      </Routes>
    </BrowserRouter>
  )

};

export default App;
