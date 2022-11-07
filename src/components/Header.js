import {Link} from "react-router-dom";
import Logo from '../img/Logo.png';

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-plum p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={Logo} className="fill-current h-8 w-8 mr-2" width="256" height="256" alt="Logo"/>
                <span className="font-semibold text-xl tracking-tight">Jasper Grant's Engineering Portfolio</span>
            </div>
            <MenuButton path = "/" text="Homepage"/>
            <MenuButton path = "projects" text="Projects"/>
            <MenuButton path = "aboutme" text="About Me"/>
        </nav>

    );
}

export function MenuButton(props){
    return(
        <div>
            <Link to={props.path} className="flex items-center px-3 py-2 text-white hover:text-turquoise">
                {props.text}
            </Link>
        </div>
    );
}