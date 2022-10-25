import LORIS from '../img/LORIS.png'

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stetch">
            <Project
                title="Last Spot"/>
            <Project
                title="LORIS Satellite"/>
            <Project
                title="Hercules Robot"/>
            <Project
                title="X-Makina Assembly Emulator"/>
            <Project
                title="Atlantic Engineering Competition: EGG"/>
            <Project
                title="RSS Project"/>
        </div>

    );
}

export function Project(props) {
    return (
        <div className="relative">
            <img className="object-cover w-full h-56" src={LORIS} alt="Cannot Display Image"/>
            <a href="/">
                <h5 className="text-center w-full absolute mb-2 text-2xl font-bold top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mx-8 text-left w-full absolute font-normal text-gray-700 dark:text-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Description Here</p>
            </a>
        </div>
    );

}