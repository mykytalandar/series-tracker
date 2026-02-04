import { useState } from 'react'
import './App.css'
import { AddSeriesForm } from './components/AddSeriesForm/AddSeriesForm'
import { SeriesList } from './components/SeriesList/SeriesList'

function App() {
  const [modalForm, setModalForm] = useState(false);

  return (
    <div>
      <h1>Series tracker</h1>
      <button onClick={() => setModalForm(prev => !prev)}>Добавить сериал</button>
      {modalForm && <AddSeriesForm/>}
      <SeriesList />
    </div>
  )
}

export default App
