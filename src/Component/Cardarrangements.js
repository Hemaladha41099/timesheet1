import React from 'react'
import img1 from "./images/images (4).jpeg"
import img2 from "./images/download (1).jpeg"
import img3 from "./images/images (6).jpeg"
import img4 from "./images/images (5).jpeg"
import img5 from "./images/images.jpeg"
import img6 from "./images/images (1).jpeg"
import img7 from "./images/images (3).jpeg"
import img8 from "./images/download.jpeg"
import img9 from "./images/download (2).jpeg"
import img10 from "./images/images (4).jpeg"
const Cardarrangement = () => {
    const Cardlist = [
        {
            imgsrc: img1,
            name: 'Kalaivani',
            role: "studio lead"
        }, {
            imgsrc: img2,
            name: 'Semeon Samuel',
            role: "junior architect"
        },
        {
            imgsrc: img3,
            name: 'Visu varshini',
            role: "junior architect"
        },
        {
            imgsrc: img4,
            name: 'Kiruthikai',
            role: "junior architect"
        },
        {
            imgsrc: img5,
            name: 'venkatachalam',
            role: "junior architect"
        },
        {
            imgsrc: img6,
            name: 'mahalingam',
            role: "senior architect"
        },
        {
            imgsrc: img7,
            name: 'preethi',
            role: "senior architect"
        },
        {
            imgsrc: img8,
            name: 'Hussain M',
            role: "3D visualizer"
        },
        {
            imgsrc: img9,
            name: 'Vishal paapu',
            role: "graphic designer"
        },
        {
            imgsrc: img10,
            name: 'Karunya',
            role: "Digital marketing"
        },
    ]

        const today = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString(undefined, dateOptions);

    return (
        <div><h3 className='lorem'>Lorem ipsom</h3>
            <div className='cardarrangement'>
            <div className="row row-cols-1 row-cols-md-2 g-4" style={{ Width: "540px",height:"100px" }}>
                {Cardlist.map((cardlist, index) => (<div className='cardborder'>
                    <div key={index} className="row g-0">
                        <div className="col-md-4">
                            <img src={cardlist.imgsrc} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{alignContent:"start"}}>
                                <h5 className="card-title">{cardlist.name}</h5>
                                <p className="card-text">{cardlist.role}
                                <p>{formattedDate}</p></p>
                               
                            </div>
                        </div>
                    </div></div>
                ))}
            </div>

        </div>
        </div >


    )
}

export default Cardarrangement;