import "./intro.scss"

export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="mainwrap">
                <div className="left">
                    <div className="wrapper">
                        <h2>test There, I'm</h2>
                        <h1>Kyleigh Sacbibit</h1>
                        <p>I'm a Systems Design Engineering student at the University of Waterloo with interests in software development and content creation.</p>
                    </div>
                    <a href="#about">
                        <img src="assets/down.png" alt=""/>
                    </a>
                </div>
                <div className="right">
                    <div className="imgContainer">
                        <img src="assets/updated_intro_pic_cropped.jpeg" alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
