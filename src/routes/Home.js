import React, {useState, useEffect} from 'react'
import PREMIUM from '../assets/premiumIce.png'
import MULTI from '../assets/multipleIce.jpg'
import Axios from "axios"
import InstagramEmbed from "react-instagram-embed"

const Home = (props) =>{
const [igPost, setIgPost] = useState()

// useEffect(() =>{
//     getPost()
// },[])

// const getPost = () => {
//     Axios.get('https://api.instagram.com/oembed?url=https://www.instagram.com/p/B43OkfxAZOL/').then(resp =>{
//         setIgPost(resp.data)
//         console.log(resp.data)
//     })
// }

    return(
        <div>
            <div className="home-main-container">
                <div className="home-top-img">
                    <img className="home-multi-img" src={MULTI}></img> 
                    <div className="home-promise">
                        <p className="home-promise-title">Our Promise</p>
                        <p className="home-promise-body">To produce the best premium ice cream in and for Las Vegas!</p>
                    </div> 
                </div>
                <div className="home-mid-img">
                    <img className="home-premium-img" src={PREMIUM}></img>
                    <div className="home-insta">
                        <InstagramEmbed 
                        url='https://www.instagram.com/p/B43OkfxAZOL/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home