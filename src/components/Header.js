import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-fuchsia-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54"/>
                <span className="font-semibold text-xl tracking-tight">Jasper Grant's Engineering Portfolio</span>
            </div>
            <MenuButton path = "/" text="Homepage"/>
            <MenuButton path = "/projects" text="Projects"/>
            <MenuButton path = "/about" text="About"/>
        </nav>

    );
}

export function MenuButton(props){
    return(
        <div>
            <Link to={props.path} className="flex items-center px-3 py-2 text-orange-600 hover:text-white">
                {props.text}
            </Link>
        </div>
    );
}