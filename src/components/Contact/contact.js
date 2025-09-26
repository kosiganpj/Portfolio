import React, { useRef } from 'react';
import './contact.css';
import Freelancer from '../../assets/Freelancer.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github.png';
import LinkedIcon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x5ffpi8',     // ✅ Replace with your EmailJS Service ID
        'template_oz7m985',    // ✅ Replace with your EmailJS Template ID
        form.current,
        'it9MNMQMU5chLyUWG'      // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // ✅ Clears the form after submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Experience</h1>
        <p className="clientDesc">
          Worked as a freelance Full Stack Developer in FREELANCERX, delivering end-to-end web solutions with a focus on performance, scalability, and user-friendly design.
        </p>
        <div className="clientImgs">
            <a 
    href="https://yu-dev-x-freelancer-website-446q.vercel.app/" 
    target="_blank" 
    rel="noopener noreferrer">
<img src={Freelancer} alt="Freelancer" className="clientImg" />
  </a>

          
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="submitBtn">Submit</button>
          <div className="links">


            <a 
    href="https://www.linkedin.com/in/p-j-kosigan-122975260/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={LinkedIcon} alt="LinkedIn" className="link" />
  </a>

  <a 
    href="https://github.com/kosiganpj" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={GithubIcon} alt="Github" className="link" />
  </a>

  <a 
    href="https://www.instagram.com/kosigan_koushik?igsh=MXZ5dmJ5dzhsN3hqbw==" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={InstagramIcon} alt="Instagram" className="link" />
  </a>

  <a 
    href="https://www.facebook.com/share/16RpZaVR3G/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={FacebookIcon} alt="Facebook" className="link" />
  </a>

</div>

        </form>
      </div>
    </section>
  );
};
export default Contact;
