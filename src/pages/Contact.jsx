export default function Contact() {
    return (
      <section className="page-card">
        <h1>Contact</h1>
        <p>AUTO TEST CONTACT 999.</p>
  
        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea rows="5" placeholder="Enter your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    )
  }