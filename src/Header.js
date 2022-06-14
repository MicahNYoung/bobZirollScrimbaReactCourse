import reactLogo from "./images/logo192.png"

export function Header() {
    return (<header>
            <nav className="nav">
                <img src={reactLogo} className="image" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


