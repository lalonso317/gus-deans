import React from 'react'
import FOUR from '../assets/fourIce.jpg'
import CLASSIC from '../assets/tripleClassic.jpg'


const Flavors = (props) =>{
    return(
    <div className="flavors-main-container">
        <div className="flavors">
            <ul className="flavors-list">
                <li className="li van">Vanilla</li>
                <li className="li stra">Strawberry</li>
                <li className="li red">Rebel Red</li>
                <li className="li choco">Chocolate</li>
                <li className="li fudge">Fudge Brownie</li>
                <li className="li cherry">Very Cherry Chocolate</li>
                <li className="li cnc">Cookies and Cream</li>
                <li className="li mint">Mint Chocolate Chip</li>
                <li className="li pecan">Butter Pecan</li>
                <li className="li almond">Butter Almond</li>
                <li className="li caramel">Salted Caramel</li>
                <li className="li coffee">Coffee</li>
                <li className="li mocha">Mocha</li>
                <li className="li exp">Expresso</li>
            </ul>
        </div>
        <div className="flavor-imgs">
            <img alt="" className="flavor-four" src={FOUR}></img>
            <img alt="" className="flavor-classic" src={CLASSIC}></img>
        </div>
    </div>
    )
}

export default Flavors