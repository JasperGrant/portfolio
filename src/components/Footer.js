
import GitHubLogo from '../img/GitHubLogo.png'
import LinkedinLogo from '../img/LinkedinLogo.png'

export default function Footer() {
    return (
        <div className="space-x-4 flex items-center justify-center border-t border-white/10 bg-plum/80 p-8 backdrop-blur-md">
            <a href="https://github.com/JasperGrant" className="h-8 w-8 opacity-80 transition-opacity hover:opacity-100">
                <img src={GitHubLogo} alt="Github Logo" width="32" height="32" className="object-contain" loading="lazy" decoding="async"/>
            </a>
            <a href="https://www.linkedin.com/in/jasper-grant-4279081b0" className="h-8 w-8 opacity-80 transition-opacity hover:opacity-100">
                <img src={LinkedinLogo} alt="Linkedin Logo" width="32" height="32" className="object-contain" loading="lazy" decoding="async"/>
            </a>
        </div>
    );
}