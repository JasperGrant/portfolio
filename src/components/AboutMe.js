import DALISL from '../img/DALISL.png';
import LockheedMartin from '../img/LockheedMartin.png';
import ISE from '../img/ISE.png';
import Turnkey from '../img/Turnkey.png';
import MDA from '../img/MDA.png';
import Dalhousie from '../img/Dalhousie.png';
import NASA from '../img/NASA.jpg';
import PageHeading from './PageHeading';

export default function AboutMe() {
    return (
        <div className="max-w-6xl mx-auto min-h-screen bg-neutral">
            <PageHeading>About Me</PageHeading>
            <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-8 py-8 text-white shadow-lg backdrop-blur-sm sm:px-12">
                <p>
                    My name is Jasper Grant.
                    I am an Electrical and Computer Engineering MASc. Student
                    at Dalhousie University.
                    My research interests include <b className="text-yellow">Planetary Rovers</b> and <b className="text-yellow">Robotic Autonomy</b>.
                    In my free time I enjoy Sci-fi novels, Powerlifting, 3D Printing, Bouldering,
                    and Engineering competitions.
                </p>
                <p className="mt-4">
                    Contact me here:{" "}
                    <a className="text-turquoise hover:underline" href="mailto:jasper.grant@dal.ca">jasper.grant@dal.ca</a>
                </p>
                <p className="mt-4">
                    Currently seeking full-time roles in Robotics, Space and Software for September 2026.
                </p>
                <a
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    download
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow px-5 py-2.5 font-semibold text-neutral shadow-lg transition-all duration-300 hover:scale-105 hover:bg-turquoise hover:text-white"
                >
                    Download My Resume
                </a>
            </div>
            <PageHeading>My Past Work Experience</PageHeading>
            <div className="grid grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 md:grid-cols-3">
                <Coop
                    photo={NASA}
                    company="NASA Ames Research Center"
                    position={"Research Intern (Visual Navigation and Control for Lunar Rover Autonomy) - 2026"}
                />
                <Coop
                    photo={MDA}
                    company="MDA Space"
                    position={"MITACS Intern - 2026\nSoftware Engineering Co-op Student - 2023"}
                />
                <Coop
                    photo={Dalhousie}
                    company="Dalhousie University"
                    position={"Teaching Assistant (MECH4640 Robotics) - 2025\nTeaching Assistant (ECED3901 Robotics) - 2024"}
                />
                <Coop
                    photo={Turnkey}
                    company="Turnkey Aquaponics"
                    position="Electrical Engineering Intern - 2023"
                />
                <Coop
                    photo={ISE}
                    company="International Submarine Engineering"
                    position="Software Engineering Co-op Student - 2022"
                />
                <Coop
                    photo={LockheedMartin}
                    company="Lockheed Martin Canada"
                    position="Cyber-Security Co-op Student - 2022"
                />
                <Coop
                    photo={DALISL}
                    company="Dalhousie Intelligent Systems Lab"
                    position="Research Assistant - 2021"
                />
            </div>

        </div>

    );

}
export function Coop(props) {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/60 hover:shadow-2xl">
            <img className="h-56 w-full object-cover bg-white" src={props.photo} alt="Project" width="384" height="224" loading="lazy" decoding="async"/>
            <div className="flex flex-1 flex-col p-6">
                <h5 className="mb-2 text-xl font-bold text-yellow">{props.company}</h5>
                <p className="text-sm font-normal text-gray-300 whitespace-pre-line">{props.position}</p>
            </div>
        </div>
    );

}