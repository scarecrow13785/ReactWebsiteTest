import ReasonsLate from './ReasonsLate.jsx'
import TestPage from './TestPage.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  
  return(
    <>
      <Router>
        <Routes>
          <Route
            exact 
            path="/"
            element={<ReasonsLate/>}
          />
          <Route  
            path="/burger"
            element={<TestPage/>}
          />
          <Route
            path="*"
            element={<Navigate to="/"/>}
          />
        </Routes>
      </Router>
    </>  
  );
}

export default App
