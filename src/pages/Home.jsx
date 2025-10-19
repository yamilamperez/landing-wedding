import React from "react";
import Header from '../components/Header'
import Itinerary from '../components/Itinerary';
import RSVPForm from '../components/RSVPForm';
import Footer from '../components/Footer';
import '../styles/global.css';
import Gift from '../components/Gift';
import Playlist from '../components/Playlist';


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