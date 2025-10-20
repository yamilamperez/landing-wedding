import React from "react";
import '../styles/global.css';
import Header from '../Components/Header';
import Playlist from '../Components/Playlist';
import Itinerary from '../Components/Itinerary';
import Gift from '../Components/Gift';
import RSVPForm from '../Components/RSVPForm';
import Footer from '../Components/Footer';


function Home(){
    return(
    <div className="app-container">
        <Header/>
        <div className='row-container'>
            <div className='row-item-1'><Playlist /></div>
            <div className='row-item-2'><Itinerary /></div>
        </div>
        <Gift />
            <RSVPForm />
                <Footer />
    </div>
    )
}

export default Home