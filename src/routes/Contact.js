import React from 'react'


const Contact = (props) =>{
    return(
        <div>
            <div>
            <p>LOCATIONS</p>
                <div>
                    <p>
                        Nellis AFB Exchange
                        Open: Mon-Sat 10 AM - 8 PM
                        Las Vegas, NV
                    </p>
                    <iframe width="600" height="450" frameborder="0" style={{border:'0'}}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJf8FO5nXdyIARIF2Repn0Lm0&key=AIzaSyCaaCWcczAfWmZYhzNIk2a1eWR2sk8__o0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>
                        UNLV Student Union
                        Open: Mon-Sat 10 AM - 6 PM
                        Las Vegas, NV
                    </p>
                    <iframe width="600" height="450" frameborder="0" style={{border:'0'}}
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJa-Yx2ADFyIARX8VOk_n6nAo&key=AIzaSyCaaCWcczAfWmZYhzNIk2a1eWR2sk8__o0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>
                    Soon Coming to a Location Near You
                    </p>
                    <p>
                    Call Anytime
                    (702) 749-6721
                    bob@gusdeans.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact