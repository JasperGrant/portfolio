import LORIS from '../img/LORIS.png'

export default function Projects() {
    return (
        <div>
            <div className="inline-flex items-stretch items-center">
                <Project title="Last Spot"/>
                <Project title="LORIS Satellite"/>
                <Project title="Hercules Robot"/>
            </div>
            <div className="inline-flex items-stretch items-center">
                <Project title="X-Makina Assembly Emulator"/>
                <Project title="Atlantic Engineering Competition: EGG"/>
                <Project title="RSS Project"/>
            </div>
        </div>

    );
}

export function Project(props) {
    return (
        <div style={{backgroundImage: "url(" + {LORIS} + ")" }}>
            <a href="/"
               className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Description Here</p>
            </a>
            <img src={LORIS} alt="Cannot Display Image"/>
        </div>
    );

}