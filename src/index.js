
import {Header} from "./Header"
import { MainContent } from "./MainContent";
import { Footer } from "./Footer";
import React from 'react';
import * as ReactDOM from 'react-dom';
import "./styles.css"
import reactLogo from "./images/logo192.png"


function Page(){
    return (  
        <div>
            <Header/>
            <MainContent/>
             <Footer />
        </div>)
        
}

ReactDOM.render(
    <Page/>,
    document.getElementById("root")
)