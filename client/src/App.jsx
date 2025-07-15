import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UseReducerHook from './components/useReducer/UseReducerHook';
import Pagination from './components/pagination/Pagination';
import StopWatch from './components/stopwatch/StopWatch'
import ReduxUsers from './redux-components/ReduxUsers';
import UseCallbackAndUseMemo from './components/useCallbackanduseMemo/UseCallbackAndUseMemo';
import StringObjectPractice from './components/stringobject/StringObjectPractice ';
// import Dashbaord from './components/Dashbaord/Dashboard'

const App = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Dashbaord />} /> */}
        <Route path='/useReducer' element={<UseReducerHook/>} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/redux' element={<ReduxUsers />} />
        <Route path='/UseCallbackAndUseMemo' element={<UseCallbackAndUseMemo />} />
        <Route path='/stringobject' element={<StringObjectPractice />} />
      </Routes>
    </Router>
  )
}
export default App;