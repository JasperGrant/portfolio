import Portfolio from '../img/Portfolio.png';
import LastSpot from '../img/LastSpot.png';
import LORIS from '../img/LORIS.png';
import LORIS2 from '../img/LORIS2.png';
import Hercules from '../img/Hercules.png';
import XMakina from '../img/XMakina.png';
import EGG from '../img/EGG.png';
import RSS from '../img/RSS.png';
import RSS2 from '../img/RSS2.png'
import {Link} from "react-router-dom";

export default function Projects() {
    return (
        <div className="">
            <h1 className="text-xl text-white text-center pt-8" > My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto xxl:h-screen">
                <Project
                    title="Portfolio Website"
                    photo={Portfolio}
                    link="https://github.com/JasperGrant/portfolio"
                    description="Website to highlight my personal projects and experience"
                    skills="React JavaScript HTML CSS"
                />
                <Project
                    title="Last Spot"
                    photo={LastSpot}
                    link="https://github.com/fall-hack-2022/fall-hack"
                    description="Application for finding nearby parking lots. Winner of third place at SFU Fall-Hacks 2022"
                    skills="React JavaScript HTML CSS"
                />
                <Project
                    title="LORIS Satellite PCBs"
                    photo={LORIS2}
                    link="https://dalorbits.ca/2019/07/01/loris-2021/"
                    description="Printed Circuit Boards for first satellite designed in Nova Scotia"
                    skills="PCB Design Project Management C"
                />
                <Project
                    title="LORIS Satellite Microcontroller Firmware"
                    photo={LORIS}
                    link="https://dalorbits.ca/2019/07/01/loris-2021/"
                    description="MSP430 and Teensy 3.6 Firmware for first satellite designed in Nova Scotia"
                    skills="PCB Design Project Management C"
                />
                <Project
                    title="Hercules Robot"
                    photo={Hercules}
                    link="https://github.com/JasperGrant/Hercules-Robot"
                    description="Mine Detection Robot. Winner of 2nd place in the Gregson Robotic Design Competition."
                    skills="Autonomous Pathfinding, C++, Python"
                />
                <Project
                    title="X-Makina Assembly Emulator"
                    photo={XMakina}
                    link="https://github.com/JasperGrant/XMX-Emulator"
                    description="Assembly emulator written entirely in C"
                    skills="C Assembly"
                />
                <LinkedToSiteProject
                    title="Atlantic Engineering Competition: EGG"
                    photo={EGG}
                    link="/egg"
                    description="Egg Protection Rocket. Winner of 1st place in the Senior Design category of the Atlantic Engineering Competition."
                />
                <Project
                    title="Robotic Spacecraft Simulator Software"
                    photo={RSS2}
                    link="https://github.com/JasperGrant/RSS-Simulator"
                    description="Software for a robotic microgravity simulation testbed"
                />
                <Project
                    title="Robotic Spacecraft Simulator PCBs"
                    photo={RSS}
                    link="https://github.com/JasperGrant/RSS-Simulator"
                    description="Printed circuit boards for the RSS Project"
                />
            </div>
        </div>
    );
}

export function Project(props) {
    return (
        <div className="m-4 my-4 rounded-sm">
            <a href={props.link}>
                <img className="bg-white rounded-lg object-cover w-full h-56 hover:border-8 hover:border-turquoise"
                     src={props.photo} alt="Project"/>
                <h5 className="text-center w-full mb-2 text-2xl font-bold text-white">{props.title}</h5>
                <p className="px-8 mx-8 text-left w-full font-normal text-white">{props.description}</p>
            </a>
        </div>
    );

}


export function LinkedToSiteProject(props) {
    return (
        <div className="m-4 my-4 rounded-sm">
            <Link to={props.link}>
                <img className="bg-white rounded-lg object-cover w-full h-56 hover:border-8 hover:border-turquoise"
                     src={props.photo} alt="Project"/>
                <h5 className="text-center w-full mb-2 text-2xl font-bold text-white">{props.title}</h5>
                <p className="px-8 mx-8 text-left w-full font-normal text-white">{props.description}</p>
            </Link>
        </div>
    );

}