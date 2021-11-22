import React from 'react'
import WelcomImg from "../../assets/images/welcom.jpg"
import Welcom1 from "../../assets/images/welcom1.jpg"
import Welcom2 from "../../assets/images/welcom2.jpg"
import Welcom3 from "../../assets/images/welcom3.jpg"
import Welcom4 from "../../assets/images/welcom4.jpg"
import Welcom5 from "../../assets/images/welcom5.jpg"
import Welcom6 from "../../assets/images/welcom6.jpg"
import Welcom7 from "../../assets/images/welcom7.jpg"
import Welcom8 from "../../assets/images/welcom8.jpg"
import "./index.css"

const index = () => {
    return (
        <div className="introduction container">
            <div className="left">
                <h3>Welcome to HAL Shopping</h3>
                <p>Myntra is one of the unique online shopping sites in Vietnam where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
            </div>
            <div className="right">
                <img src={WelcomImg} alt="welcom" className="img1" />
                <img src={Welcom1} alt="welcom" className="img2" />
                <img src={Welcom2} alt="welcom" className="img3" />
                <img src={Welcom3} alt="welcom" className="img4" />
                <img src={Welcom4} alt="welcom" className="img5" />
                <img src={Welcom5} alt="welcom" className="img6" />
                <img src={Welcom6} alt="welcom" className="img7" />
                <img src={Welcom7} alt="welcom" className="img8" />
                <img src={Welcom8} alt="welcom" className="img9" />
            </div>
        </div>
    )
}

export default index
