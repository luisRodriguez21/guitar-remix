import { Link } from "@remix-run/react"
import Navigation from "./Navigation"
import logo from  '../../public/img/logo.svg'


export default function Header() {
    

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>

                <Navigation />
                
            </div>
        </header>
    )
}
