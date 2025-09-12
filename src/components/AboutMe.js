import DALISL from '../img/DALISL.png';
import LockheedMartin from '../img/LockheedMartin.png';
import ISE from '../img/ISE.png';
import Turnkey from '../img/Turnkey.png';
import MDA from '../img/MDA.png';
import Dalhousie from '../img/Dalhousie.png';

export default function AboutMe() {
    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <h1 className="text-xl text-yellow text-center py-8" > About Me</h1>
            <div className="text-white px-8 sm:px-8 md:px-24">
                My name is Jasper Grant.
                I am an Electrical and Computer Engineering MASc. Student
                at Dalhousie University.
                My research interests include <b>Planetary Rovers</b> and <b>Robotic Autonomy</b>.
                In my free time I enjoy Sci-fi novels, Powerlifting, 3D Printing, Bouldering,
               and Engineering competitions.
                <br/>
                Contact me here:
                <br/>
                <a className="text-center hover:text-turquoise" href="mailto:jasper.grant@dal.ca"><u>jasper.grant@dal.ca</u></a>
                <br/>
                <br/>
                <br/>
                <h1 className="text-xl text-center py-8 text-yellow" > My Past Work Experience</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto xxl:h-screen">

                <Coop
                    photo={Dalhousie}
                    company="Dalhousie University"
                    position= "Teaching Assistant (ECED3901 Robotics) - 2024"
                />
                <Coop
                    photo={MDA}
                    company="MDA Space"
                    position="Software Engineering Co-op Student - 2023"
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
        <div className="m-4 my-4 rounded-sm">
            <img className="bg-white rounded-lg object-cover w-full h-56" src={props.photo} alt="Project"/>
            <h5 className="text-center w-full mb-2 text-2xl font-bold text-yellow">{props.company}</h5>
            <p className="mx-8 text-left w-full font-normal text-white">{props.position}</p>
        </div>
    );

}