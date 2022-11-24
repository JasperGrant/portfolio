import DALISL from '../img/DALISL.png';
import LockheedMartin from '../img/LockheedMartin.png';
import ISE from '../img/ISE.png';

export default function AboutMe() {
    return (
        <div className="max-w-6xl mx-auto abxl:h-screen">
            <h1 className="text-xl text-white text-center py-8" > About Me</h1>
            <div className="text-white px-8 sm:px-8 md:px-24">
                My name is Jasper Grant.
                I am a fourth year Electrical Engineering Student with Computer Option
                at Dalhousie University.
                My main Engineering interests are <b>Robotics</b> and <b>The Space Industry</b>.
                In my free time I enjoy Powerlifting and participating in
                Hackathons and Engineering Competitions.
                I am currently looking for a co-op position for summer 2023.
                <br/>
                Contact me here:
                <br/>
                <a className="text-center hover:text-turquoise" href="mailto:jasper.grant@dal.ca"><u>jasper.grant@dal.ca</u></a>
                <br/>
                <br/>
                <br/>
                <h1 className="text-xl text-center py-8" > My Past Work Terms</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stetch">
                <Coop
                    photo={DALISL}
                    company="Dalhousie Intelligent Systems Lab"
                    position="Research Assistant - 2021"
                />
                <Coop
                    photo={LockheedMartin}
                    company="Lockheed Martin Canada"
                        position="Cyber-Security Co-op Student - 2022"
                />
                <Coop
                    photo={ISE}
                    company="International Submarine Engineering"
                        position="Software Engineering Co-op Student - 2022"
                />

            </div>
        </div>


    );

}
export function Coop(props) {
    return (
        <div className="m-4 my-4 rounded-sm">
            <img className="bg-white rounded-lg object-cover w-full h-56" src={props.photo} alt="Project"/>
            <h5 className="text-center w-full mb-2 text-2xl font-bold text-white">{props.company}</h5>
            <p className="mx-8 text-left w-full font-normal text-white">{props.position}</p>
        </div>
    );

}