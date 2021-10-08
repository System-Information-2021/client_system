import React from 'react'
import "./index.css"

const index = () => {
    return (
        <div className="footer">
            <div className="footer_top container">
                <ul className="footer_top--list1">
                    <li>Blog</li>
                    <li>Product Index</li>
                </ul>
                <ul className="footer_top--list2">
                    <li>Terms and Conditions</li>
                    <li>Category Index</li>
                </ul>
                <ul className="footer_top--list3">
                    <li>Become an Affiliate</li>
                </ul>
                <div className="footer_top--formmail">
                    <div>MAILING LIST</div>
                    <form>
                        <input type="text" placeholder="email address" />
                        <button type="submit">GO</button>
                    </form>
                </div>
            </div>

            <div className="footer_middle container">
                <div className="footer_middle--social">
                    <div>STAY CONNECTED</div>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="footer_middle--payment">
                    <div>PAYMENTS</div>
                    <div>Not Active</div>
                </div>
            </div>

            <div className="footer_bottom">
                Copyright 2021 Sample Store. All Rights Reserved. powered by Thanh Linh.
            </div>
        </div>
    )
}

export default index
