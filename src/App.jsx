import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListaTareas } from './components/ListaTareas';

function App() {
  return (
        <BrowserRouter>      
          <main id='mainComponentes'>
            <Routes>
              <Route path="/" element={ <ListaTareas /> } />
            </Routes>
          </main>
        </BrowserRouter>
  )
}

export default App;
