import { Home, News, ServicesPage } from './pages/pages'
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
      <Route path="/services">
        <ServicesPage/>
      </Route>
     
    </>
  );
}

export default App;
