import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">kyleigh sacbibit</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <a href="tel:905-870-9014">+1 (905) 870-9014</a>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <a href="mailto:ksacbibi@uwaterloo.ca">ksacbibi@uwaterloo.ca</a>
                    </div>
                    <div className="itemContainer">
                        <GitHubIcon className="icon"/>
                        <a href="https://github.com/ksacbibi" target="_blank" rel="noreferrer">ksacbibi</a>
                    </div>
                    <div className="itemContainer">
                        <ContactPageIcon className="icon"/>
                        <a href="">resume</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
