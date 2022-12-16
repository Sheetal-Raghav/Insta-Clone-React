import React from "react";
import "../Styles/NavHead.css"


export default function NavHead(){
    return(
        <div className="Nav">
            <p className="logo"><img src={require('../Svg/circle-oval-svgrepo-com.svg').default} alt=""/>Instaclone</p>
            <img className="Cam" src={require('../Svg/camera-svgrepo-com.svg').default} alt=""/>
        </div>
    )
}