import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './paginas/Home';
import FormDisciplina from './paginas/FormDisciplina';
import ListaDisciplina from './paginas/ListaDisciplina';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/listardisciplina' element={<ListaDisciplina />} />
            <Route path='/cadastrodisciplina' element={<FormDisciplina />} />
            <Route path='/cadastrodisciplina/:id' element={<FormDisciplina />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
