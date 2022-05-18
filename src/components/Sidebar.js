import React from 'react'
import Likebutton from './Likebutton';

export default function ShowInTheSidebar({RequestedAnime}){
    console.log("someathng");
    console.log(RequestedAnime)
return(
    <>
    <div className="sidebar">
        <img src={RequestedAnime.img} alt="" className="mainImg" />
        <div className="textInSidebar">
        <div className="mainName">{RequestedAnime.title}</div>
        <div className="text">{RequestedAnime.name}</div>
        </div>
        <div className="likes">
            <div className="like"><Likebutton data={RequestedAnime.title}/></div>
        </div>

    </div>
    </>
)

}