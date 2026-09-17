import {Link} from "react-router-dom";
import Jasper from '../img/Jasper.jpg';

export default function Homepage() {
    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden">
            {/* Monochrome background layer, kept separate so foreground content stays full color */}
            <div className="absolute inset-0 bg-Ames bg-center bg-cover bg-no-repeat grayscale contrast-125 scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"/>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6 py-20 text-center text-white md:px-24 lg:px-72">
                <img
                    className="rounded-full w-36 h-36 object-cover ring-4 ring-yellow shadow-2xl"
                    src={Jasper}
                    alt="Headshot"
                    width="144"
                    height="144"
                    decoding="async"
                />
                <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-8 py-10 shadow-2xl backdrop-blur-md sm:px-16">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-yellow sm:text-5xl">Jasper Grant</h1>
                    <h2 className="text-lg leading-relaxed text-gray-200 sm:text-xl">
                        NASA Ames Research Intern
                        <br/>
                        Electrical and Computer Engineering MASc. Student at Dalhousie University
                    </h2>
                </div>
                <Link
                    to="projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 font-semibold text-neutral shadow-lg transition-all duration-300 hover:scale-105 hover:bg-turquoise hover:text-white"
                >
                    See my projects
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
            </div>
        </div>
    );
}