import "./works.scss";
import {useState} from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            place: "Rich Media",
            title: "Mobile and Web Developer",
            time: "September 2022 - December 2022 (4 months)",
            desc:
                ["• Worked on the development of various projects for large corporate clients, using mostly React, Angular, JavaScript/Typescript in conjunction with SVN and Gulp", "• Performed maintenance on company’s code libraries to increase efficiency and usability for future projects using NodeJS, TypeScript", "• Ensured projects meet accessibility standards and are properly traversed using screen readers"],
            linkLabel: "Rich Media Website",
            link: "https://www.richmedia.com/",
            img:
                "assets/richmedia.jpeg",
          },
        {
            id: "2",
            place: "Studica",
            title: "Full-Stack Developer",
            time: "January 2022 - April 2022 (4 months)",
            desc:
                ["• Responsible for the design and full-stack development of an educational robotics controller for students in grades K-12 to assist in teaching coding and robot building skills", "• Built from scratch using mainly HTML, CSS, JavaScript, and PHP", "• Web-based client with a VMX HAL built upon a Raspberry Pi as server", "• Gained experience utilizing PHP scripts and AJAX requests"],
            linkLabel: "Studica Website",
            link: "https://www.studica.com/",
            img:
                "assets/studicalogo.jpeg",
        },
        {
            id: "3",
            title: "There is nothing here yet.",
            desc:
            ["You can contact me by phone or email with any business inquiries!"],
            img: "assets/books.jpeg",
        },
        // {
        //   id: "3",
        //   icon: "./assets/writing.png",
        //   title: "Branding",
        //   desc:
        //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //   img:
        //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        // },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div class="bg-image"></div>
            <div className="title">work experience.</div>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <p className="workplace">{d.place}</p>
                                <h2>{d.title}</h2>
                                <p className="worktime">{d.time}</p>
                                <ul>
                                    {d.desc.map((de) => (
                                        <li>{de}</li>
                                    ))}
                                </ul>
                                <a href={d.link} target="_blank" rel="noreferrer noopener">{d.linkLabel}</a>
                            </div>
                        </div>
                        <div className="right">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <img src="assets/arrow.png" class="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" class="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
