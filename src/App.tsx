import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import ArticlesPage from './Pages/ArticlesPage';
import AdmissionDocuments from './Pages/AdmissionDocuments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/admission-documents' element={<AdmissionDocuments />} />
      </Routes>
    </div>
  );
}

export default App;
