import { useState } from 'react'
import './App.css'
import { AddSeriesForm } from './components/AddSeriesForm/AddSeriesForm'
import { SeriesList } from './components/SeriesList/SeriesList'
import { AddButton } from './components/AddButton/AddButton';
import { Header } from './components/Header/Header';
import { AppToastProvider } from './components/AppToastProvider/AppToastProvider';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(prev => !prev);
  };

  return (
    <div className="App">
      <Header />
      <AddButton action={toggleForm} title={isFormOpen ? "Close form" : "Add series"}/>
      {isFormOpen && <AddSeriesForm/>}
      <SeriesList />
      <AppToastProvider />
    </div>
  )
}

export default App;
