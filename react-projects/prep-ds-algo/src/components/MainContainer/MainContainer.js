import React from 'react'
import './MainContainer.css'
import Post from './Post/Post'
import SideNavbar from './SideNavbar/SideNavbar'

export default function MainContainer() {
    return (
        <div className="mainContainer">
            <div className="row">
                    <div className="postContainer">
                        <Post/>
                    </div>
                    
                    <div className="sideNavbar">
                        <SideNavbar/>
                    </div>
            </div>
        </div>
    )
}
