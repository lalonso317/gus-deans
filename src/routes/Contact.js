import React from 'react'


const Contact = (props) =>{
    return(
        <div>
            <div className="contact-main-container">
                <div className="contact-student-union">
                    <p className="contact-title">
                        UNLV Student Union 
                    </p>
                    <p className="contact-body">
                    Open: Mon-Sat 10 AM - 6 PM
                    Las Vegas, NV
                    </p>
                    <iframe width="100%" height="450" frameborder="0" style={{border:'0'}} title="UNLV"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJa-Yx2ADFyIARX8VOk_n6nAo&key=AIzaSyCaaCWcczAfWmZYhzNIk2a1eWR2sk8__o0" allowfullscreen></iframe>
                </div>
                <div className="contact-meadows">
                    <p className="contact-title">
                        Meadows Mall
                    </p>
                    <p className="contact-body">
                        Open: Mon-Sat 10 AM - 8 PM
                        Las Vegas, NV
                    </p>
                    <iframe width="100%" height="450" frameborder="0" style={{border:'0'}} title="MEADOWS"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSVCC6nvByIARqjIif5GDXEA&key=AIzaSyCaaCWcczAfWmZYhzNIk2a1eWR2sk8__o0" allowfullscreen></iframe>
                </div>
                <div className="contact-upcoming">
                    <p className="contact-body">
                    Soon Coming to a Location Near You
                    </p>
                    <p className="contact-body">
                    Call Anytime:&nbsp;
                     <a className="c-link" href="tel:702-749-6721">702-749-6721</a>&nbsp;&nbsp;
                   <a className="c-link" href="mailto:bob@gusdeans.com">bob@gusdeans.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact