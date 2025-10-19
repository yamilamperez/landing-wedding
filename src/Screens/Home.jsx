import React from "react";
import Header from '../Components/Header'
import Itinerary from '../Components/Itinerary';
import RSVPForm from '../Components/RSVPForm';
import Footer from '../Components/Footer';
import '../styles/global.css';
import Gift from '../Components/Gift';
import Playlist from '../Components/Playlist';


function Home(){
    return(
    <div className="app-container">
        <Header />
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