
import { Link, useNavigate } from "react-router-dom";

function ThirdItem() {

    const navigate = useNavigate()

    const goToTeamsHash = () => {
        navigate('/about')
    }
    return (
        <div className="nav-wrapper3">

            <div className="logo">
                <h2>
                    <Link to={'/'}>
                    Heading
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">

                    <Link to='/'>
                        Главная
                    </Link>
                    <Link onClick={goToTeamsHash} to={'/blog'}>
                        Экскурсия
                    </Link>
                    <Link to={'/contact'}>
                        Личный кабинет
                    </Link>
                </div>
            </div>

            <div className="travel-text3">
                <h2>Автобусный Тур</h2>

                <h1>ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ
                    (ИЗ АДЛЕРА)</h1>
                    <button className="info-btn">К Экскурсиям</button>
            </div>

            <Link to={'./blog'}>

            </Link>

        </div>

    );
}

export default ThirdItem;