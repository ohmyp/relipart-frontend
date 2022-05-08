import {Home, News, ServicesPage, AboutUs, Admin} from './pages/pages'
import {Route} from 'react-router-dom'
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
            <Route path="/aboutus">
                <AboutUs/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </>
    );
}

export default App;
