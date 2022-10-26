import LastSpot from '../img/LastSpot.png'
import LORIS from '../img/LORIS.png'
import Hercules from '../img/Hercules.png'
import XMakina from '../img/XMakina.png'
import EGG from '../img/EGG.png'
import RSS from '../img/RSS.png'

export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stetch">
            <Project
                title="Last Spot"
                photo={LastSpot}
                link="https://github.com/fall-hack-2022/fall-hack"
            />
            <Project
                title="LORIS Satellite"
                photo={LORIS}
                link="https://dalorbits.ca/2019/07/01/loris-2021/"
            />
            <Project
                title="Hercules Robot"
                photo={Hercules}
                link="https://github.com/JasperGrant/Hercules-Robot"
            />
            <Project
                title="X-Makina Assembly Emulator"
                photo={XMakina}
                link="https://github.com/JasperGrant/XMX-Emulator"
            />
            <Project
                title="Atlantic Engineering Competition: EGG"
                photo={EGG}
                link="/EGG"
            />
            <Project
                title="RSS Project"
                photo={RSS}
                link="https://github.com/JasperGrant/RSS-Simulator"
            />
        </div>

    );
}

export function Project(props) {
    return (
        <div className="m-4 my-4 rounded-sm hover:border-forrest">
            <a href={props.link}>
                <img className="rounded-lg object-cover w-full h-56" src={props.photo} alt="Cannot Display Image"/>
                <h5 className="text-center w-full mb-2 text-2xl font-bold text-gray-900 dark:text-white">{props.title}</h5>
                <p className="mx-8 text-left w-full font-normal text-gray-700 dark:text-gray-400 ">Description Here</p>
            </a>
        </div>
    );

}