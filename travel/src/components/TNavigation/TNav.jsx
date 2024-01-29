import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo white.png'
function TNav(props) {
    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/about')

    }

    return (
        <div className="nav-container">

            <div className="nav-wrapper">
                <div className="logo">
                    <Link to={'/about'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu">
                    <div className="nav-links">
                        <Link to='/' >
                            Главная
                        </Link>

                        <Link onClick={goToTeamsHash} to={'/blog'}>
                            Экскурсия 
                        </Link>

                        <Link to={'/profile'} >
                            Личный кабинет
                        </Link>
                    </div>
                </div>

                <div className="travel-text">
                    <h2>Путешествуй</h2>
                    <span className='together'>вместе с</span>
                    <h1>Pero travel</h1>
                    <button className='btn'>К экскурсиям</button>
                </div>

            </div>
        </div>
    )
}

export default TNav;