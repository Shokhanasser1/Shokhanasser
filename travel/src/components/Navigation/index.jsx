import './style.scss'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'

function Navigation() {
    
    return (

        <div>
            <header>
                <Nav />
            </header>

            <div id='outlet'>
                <Outlet />
            </div>

        </div>
    )
}

export default Navigation;