function ReasonsReactIsExciting(){
    return (  
        <div>
            <header>
                <nav>
                    <img src="./reactLogo.png" width="50px"></img>

                </nav>
            </header>
            <h1>Reasons learning React is exciting</h1>
            <ul>
                <li>It's tangentially related to languages/frameworks I've work with before</li>
                <li>It's an in demand framework</li>
                <li>It's a useful skill to build full stack applications</li>
             </ul>
             <footer>
                 <small>© 2022 Young Development. All rights reserved.</small>
            </footer>
        </div>)
    
      
        
        
}

ReactDOM.render(
    <ReasonsReactIsExciting/>,
    document.getElementById("root")
)