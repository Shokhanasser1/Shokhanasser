import './style.scss'


import ColorLogo from "../../assets/icons/logo_color 1f.png"

function Heading2(props) {
    const imgSize = {
        imgSize: `calc(50px / ${props.size})`
    }

    return (
        <div className="heading-wrapper">
            <img
                style={imgSize}
                src={ColorLogo}
                alt="Logo"
                width={`calc(50px / ${props.size})`}
            />
            {props.children}
        </div>
    );
}

export default Heading2;