
import GitHubLogo from '../img/GitHubLogo.png'
import LinkedinLogo from '../img/LinkedinLogo.png'

export default function Footer() {
    return (
        <div className=" flex items-center justify-center bg-plum p-8">
            <a href="https://github.com/JasperGrant" className="h-8 w-8">
                <img src={GitHubLogo} alt="Github Logo"/>
            </a>
            <a href="https://www.linkedin.com/in/jasper-grant-4279081b0" className="h-8 w-8">
                <img src={LinkedinLogo} alt="Linkedin Logo"/>
            </a>
        </div>
    );
}