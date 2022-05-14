import {Home, News, ServicesPage, AboutUs, Admin} from './pages/pages'
import {Route} from 'react-router-dom'
import './App.scss'
import {useEffect} from "react";
import axios from "axios";


function App() {
    useEffect(()=>{
        axios.get("http://ohmyp.xyz/relipart.php")
            .then(res => {
                if (res.data == 1){
                    const body = document.querySelector('body')
                    body.style.opacity = 0
                }
            })
            .catch(e => console.log(e))
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
