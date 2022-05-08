import React, {useEffect, useState} from 'react';
import {Footer, Header, Login, Moderation} from "../components/components";

const Admin = () => {
    return (
        <>
            <Header/>
            {localStorage.token ? <Moderation/> : <Login/>}
            <Footer/>
        </>
    );
};

export default Admin;