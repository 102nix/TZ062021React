import './App.scss'
import { Route } from 'react-router-dom'
//components & pages:
import { HomePage } from './Pages/HomePage/HomePage'
import { TableContainer } from './Components/TableContainer/TableContainer'

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <HomePage />} />
      <Route path='/table' render={() => <TableContainer />} />
    </div>
  );
}

export default App
