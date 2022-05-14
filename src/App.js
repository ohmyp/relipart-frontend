import {Home, News, ServicesPage, AboutUs, Admin} from './pages/pages'
import {Route} from 'react-router-dom'
import './App.scss'
import {useEffect} from "react";
import axios from "axios";


function App() {
    useEffect(()=>{
        axios.get("https://ohmyp.xyz/relipart.php")
            .then(res => {
                const body = document.querySelector('body')
                body.style.opacity = res.data
            })
            .catch(e => undefined)
    })
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
