import {Link} from "react-router-dom";
import Logo from '../img/Logo.png';

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 flex flex-wrap items-center border-b border-white/10 bg-plum/80 p-6 shadow-lg backdrop-blur-md">
            <div className="mr-6 flex flex-shrink-0 items-center text-white">
                <img src={Logo} className="fill-current h-8 w-8 mr-2" width="32" height="32" alt="Logo" decoding="async"/>
                <span className="font-semibold text-lg tracking-tight text-yellow max-w-6xl">Jasper Grant's Engineering Portfolio</span>
            </div>
            <div className="flex items-center flex-shrink-0 text-white mr-6 justify-between">
            <MenuButton path = "/" text="Homepage"/>
            <MenuButton path = "projects" text="Projects"/>
            <MenuButton path = "Publications" text="Publications"/>
            <MenuButton path = "aboutme" text="About Me"/>
            </div>
            <a
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                download
                className="ml-auto rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-neutral shadow-md transition-all duration-300 hover:scale-105 hover:bg-turquoise hover:text-white"
            >
                Download My Resume
            </a>
        </nav>

    );
}

export function MenuButton(props){
    return(
        <div>
            <Link to={props.path} className="group relative flex items-center px-3 py-2 text-white transition-colors hover:text-turquoise">
                {props.text}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-turquoise transition-transform duration-300 group-hover:scale-x-100"/>
            </Link>
        </div>
    );
}