import React from 'react'
import './PageHeader.css'
import LeftPageHeader from './LeftPageHeader/LeftPageHeader'
import RightPageHeader from './RightPageHeader/RightPageHeader'

export default function PageHeader() {
    return (
        <div className="PageHeaderContainer">
           <div className="PageHeaderSubContainer">
                {/* <LeftPageHeader/> */}
                {/* <RightPageHeader/> */}
           

            <div className="leftHeaderText">
                <p>Array</p>
            </div>
            <div className="RightHeaderText">
                <p>Home/Arrays</p>
            </div>
           
           </div>
        </div>
    )
}
