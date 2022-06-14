import { Link, Outlet } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Cryptoverse</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">

                            { /* Link is used to change the route */ }
                            <Link to="/" className={`nav-link active`} >Home</Link>
                            <Link to="news" className={`nav-link`} >News</Link>
                        </div>
                    </div>
                </div>
            </nav>

            { /* outlet is used to hold the child component */ }
            <Outlet />
        </header>
    )
}

export default Navbar ;