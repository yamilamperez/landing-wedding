import Header from './components/Header';
import Itinerary from './components/Itinerary';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import './styles/global.css';
import Gift from './components/Gift';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Playlist />
      <Itinerary />
      <Gift />
      <RSVPForm />
      <Footer />
    </div>
  );
}

export default App;