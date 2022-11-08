import {Link} from "react-router-dom";
import Jasper from '../img/Jasper.png';

export default function Homepage() {
    return (
        <div className="md:px-24 lg:px-96 bg-center bg-no-repeat bg-DALCampus text-white text-center">
            <br/>
            <br/>
            <br/>
            <img className=" border-neutral border-8 mx-auto rounded-full w-36 h-36" src={Jasper} alt="Headshot"/>
            <br/>
            <div className=" rounded-lg bg-neutral text-center border-8 border-plum">
                <br/>
                <h1 className="text-3xl mb-8">Jasper Grant</h1>
                <h2 className="text-xl mb-8">Electrical Engineering Student with Computer Option</h2>
                <h2 className="text-xl mb-8">Software Engineering Co-op Student at ISE</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <Link to="projects"
                  className=" rounded-lg bg-neutral text-center px-3 py-2 border-8 text-white hover:text-turquoise">Click
                here to see
                my projects</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}