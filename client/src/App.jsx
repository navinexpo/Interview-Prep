import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UseReducerHook from './components/useReducer/UseReducerHook';
import Pagination from './components/pagination/Pagination';
import StopWatch from './components/stopwatch/StopWatch'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/useReducer' element={<UseReducerHook/>} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/stopwatch' element={<StopWatch />} />
      </Routes>
    </Router>
  )
}
export default App;