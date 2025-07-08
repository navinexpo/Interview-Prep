import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UseReducerHook from './components/useReducer/UseReducerHook';
import Pagination from './components/pagination/Pagination';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/useReducer' element={<UseReducerHook/>} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>
    </Router>
  )
}
export default App;