import '../styles/components/RSVPForm.css'

function RSVPForm() {
  return (
    <section className="rsvp">
      <h2>Por favor, <span>¡no te olvides de confirmar tu asistencia!</span></h2>
      <form>
        <input type="text" name="nombre" placeholder="Nombre y Apellido (*)" required />
        <input type="email" name="email" placeholder="E-mail (*)" required />
        <label>¿Tenés alguna restricción alimentaria?</label>
        <select name="dieta">
          <option value="">Sin restricciones</option>
          <option value="vegano">Veganx</option>
          <option value="vegetariano">Vegetarianx</option>
          <option value="sin-tacc">Sin TACC</option>
        </select>
        <button type="submit">Confirmar asistencia</button>
      </form>
    </section>
  );
}
export default RSVPForm;