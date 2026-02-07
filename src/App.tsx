import { useState } from 'react'
import './App.css'
import { AddSeriesForm } from './components/AddSeriesForm/AddSeriesForm'
import { SeriesList } from './components/SeriesList/SeriesList'
import { AddButton } from './components/AddButton/AddButton';
import { Header } from './components/Header/Header';

function App() {
  const [modalForm, setModalForm] = useState(false);

  const toggleModalForm = () => {
    setModalForm(prev => !prev);
  };

  return (
    <div className="App">
      <Header />
      {/* <AddButton action={toggleModalForm} title={modalForm ? "Close form" : "Add series"}/>
      {modalForm && <AddSeriesForm/>} */}
      <AddSeriesForm/>
      <SeriesList />
    </div>
  )
}

export default App;
