import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useEffect, useState } from "react"
import { featuredPortfolio, personalPortfolio, schoolPortfolio, contentPortfolio, photoPortfolio } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "personal",
            title: "Personal Projects",
        },
        {
            id: "school",
            title: "School Projects",
        },
        {
            id: "content",
            title: "Content Creation",
        },
        {
            id: "photos",
            title: "Photography"
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
                case "personal":
                setData(personalPortfolio);
                break;
                case "school":
                setData(schoolPortfolio);
                break;
                case "content":
                setData(contentPortfolio);
                break;
                case "photos":
                setData(photoPortfolio);
                break;
                default:
                    setData(featuredPortfolio);
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio.</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <a href={d.link} target="_blank" rel="noreferrer noopener">
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
