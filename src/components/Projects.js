import Portfolio from '../img/Portfolio.png';
import LastSpot from '../img/LastSpot.png';
import LORIS from '../img/LORIS.png';
import LORIS2 from '../img/LORIS2.png';
import Hercules from '../img/Hercules.png';
import XMakina from '../img/XMakina.png';
import RSS from '../img/RSS.png';
import RSS2 from '../img/RSS2.png'
import YOLO from '../img/YOLO.png'
import RSSCMG from '../img/RSSCMG.png'
import Chip8 from '../img/Chip8.png'
import TurnkeyPCB from '../img/TurnkeyPCB.png'
import Firelink from '../img/Firelink.png'
import S_Machine from '../img/S_Machine_Tests.png'
import holidAI from '../img/holidAI.png'

export default function Projects() {
    return (
        <div className="">
            <h1 className="text-xl text-white text-center pt-8" > My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto xxl:h-screen">
                <Project
                    title="RSS Control Moment Gyro"
                    photo={RSSCMG}
                    link="https://www.linkedin.com/feed/update/urn:li:activity:7052032813725876224/"
                    description="CMG for the Robotic Spacecraft Simulator. Winner of the Dalhousie Capstone Conference 2023 - Best Poster (ECED4900)"
                />
                <Project
                    title="Firelink"
                    photo={Firelink}
                    link="https://www.canva.com/design/DAFwmd8YF6s/h91_qewKTttBqWk-wFcksg/view?utm_content=DAFwmd8YF6s&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=publishsharelink"
                    description="Real time Updatable Satellite and Aerial Photography Map. Winner of the NASA Spaceapps 2023 Nova Scotia Competition. Global Nominee in International Spaceapps Competition"
                />
                <Project
                    title="S-Machine 16-bit Verilog CPU"
                    photo={S_Machine}
                    link="https://github.com/JasperGrant/S-Machine-CPU"
                    description="Simple 16-bit Instruction set Architecture for a CPU known as the 'S-Machine'. Written in Verilog for ECED4260 IC Design"
                />
                <Project
                    title="holidAI"
                    photo={holidAI}
                    link="https://github.com/orgs/Generative-AI-2023/repositories"
                    description="AI trip planner designed for the 2023 Dalhousie Generative AI Hackathon"
                />
                <Project
                    title="Chip8 Emulator"
                    photo={Chip8}
                    link="https://github.com/JasperGrant/Chip-8-Emulator"
                    description="Simple interpreter using Chip8 instruction set. Uses SDL2 for graphics"
                />
                <Project
                    title="Turnkey Aquaponics Buck Converter"
                    photo={TurnkeyPCB}
                    link="https://turnkeyaquaponics.ca/"
                    description="Buck Converter PCB completed over a 50 hour work integrated learning term"
                />
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
                    title="Real Time Object Detection Explained"
                    photo={YOLO}
                    link="https://github.com/JasperGrant/Real-Time-Object-Detection-Explained"
                    description="Python demo project showing a simple use of yolov5 with OpenCV and Pytorch for Object Detection"
                />
                <Project
                    title="Hercules Robot"
                    photo={Hercules}
                    link="https://github.com/JasperGrant/Hercules-Robot"
                    description="Mine Detection Robot. Winner of 2nd place in the Gregson Robotic Design Competition."
                    skills="Autonomous Pathfinding, C++, Python"
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
                    title="X-Makina Assembly Emulator"
                    photo={XMakina}
                    link="https://github.com/JasperGrant/XMX-Emulator"
                    description="Assembly emulator written entirely in C"
                    skills="C Assembly"
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
                    src={props.photo} alt="Project" />
                <h5 className="text-center w-full mb-2 text-2xl font-bold text-white">{props.title}</h5>
                <p className="px-8 mx-8 text-left w-full font-normal text-white">{props.description}</p>
            </a>
        </div>
    );

}
