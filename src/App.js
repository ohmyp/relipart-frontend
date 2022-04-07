import { Home, News } from './pages/pages'
import { Route } from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/news">
        <News/>
      </Route>
     
    </>
  );
}

export default App;
