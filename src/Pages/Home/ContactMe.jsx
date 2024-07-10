export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact-title">Contactez moi</h2>
      </div>
      <form 
        className="contact--form--container"
        action="https://formspree.io/f/mzzpzpvd"  // Your actual Formspree form URL
        method="POST"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Prénom</span>
            <input
              type="text"
              className="contact--input"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Nom</span>
            <input
              type="text"
              className="contact--input"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">E-mail</span>
            <input
              type="email"
              className="contact--input"
              name="_replyto" // Formspree requires _replyto for the email field
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Numéro de téléphone</span>
            <input
              type="tel" // Use tel for phone number
              className="contact--input"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choisir un sujet</span>
          <select id="choose-topic" name="choose-topic" className="contact--input">
            <option value="">Sélectionnez-en un...</option>
            <option value="Article 1">Article 1</option>
            <option value="Article 2">Article 2</option>
            <option value="Article 3">Article 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input"
            name="message"
            id="message"
            rows="8"
            placeholder="Taper votre message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">J'accepte les conditions</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Soumettre</button>
        </div>
      </form>
    </section>
  );
}