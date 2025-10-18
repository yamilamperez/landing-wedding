import '../styles/components/Itinerary.css'

function Itinerary() {
  return (
    <section className="itinerary">
      <h2>Itinerario del gran día</h2>
      <ul>
        <li>
          <span>- Inicio de ceremonia civil en el <a href='https://maps.app.goo.gl/sWCbWy2p2XqpKrvu6'>Registro Civil de la comuna 6</a> a las 11:30 hs (Av. Patricias Argentinas 277, CABA)</span>
        </li>
        <li>
          <span>- Almuerzo en <a href='https://maps.app.goo.gl/pFhqZDLe5SxLXToHA'>Horta</a> a las 13:00 hs (Aguirre 1080, CABA)</span>
        </li>
      </ul>
    </section>
  );
}
export default Itinerary;