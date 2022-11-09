import React from 'react'
import { MdCardTravel } from 'react-icons/md';
import { FaPlaneDeparture } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const Aboutus = () => {
    return (
        <div className='page2'>
            <h1 className="p2h1">We help travelers</h1>
            <p className="p2px">ONLINE TRAVEL AGENCY</p>
            <div className="row">
                <div className="col">
                    <div className="icon1">
                    <MdCardTravel size="3.5em" color='blue'/>
                    </div>
                    <h1 className="p2h3">TRAVEL</h1>
                    <p className="p2p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                </div>
                <div className="col">
                    <div className="icon1">
                    <FaPlaneDeparture size="3.5em" color='blue'/>
                    </div>
                    <h1 className="p2h3">BENEFITS</h1>
                    <p className="p2p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                </div>
                <div className="col">
                    <div className="icon1">
                    <FaHourglassEnd size="3.5em" color='blue'/>
                    </div>
                    <h1 className="p2h3">ABOUT US</h1>
                    <p className="p2p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                </div>
                <div className="col">
                    <div className="icon1">
                    <FaMapMarkerAlt size="3.5em" color='blue'/>
                    </div>
                    <h1 className="p2h3">AWARDS</h1>
                    <p className="p2p1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
