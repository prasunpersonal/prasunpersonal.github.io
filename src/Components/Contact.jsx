import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Apis from '../Apis';
import { MdLocationOn, MdOutlineAlternateEmail, MdEmail, MdPhone } from 'react-icons/md';
import { FaMapMarkedAlt, FaWhatsapp, FaHashtag, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';

export const Contact = (props) => {
    const initState = {
        name: "",
        email: "",
        subject: "",
        text: ""
    };

    const [data, setData] = React.useState(initState);

    const inputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        await fetch(Apis.EMAIL_SENDING_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((data) => {
                if (data.status) {
                    toast.success(data.message);
                    setData(initState);
                } else {
                    toast.error(data.message);
                }
            })
            .catch((e) => toast.error(e.message));
    }

    return (
        <section id="contacts">
            <h1 className="heading ">Contacts</h1>
            <div className="main-body">
                <div id="contact-left">
                    <div className="contact-info-box">
                        <div className="contact-info-heading">
                            <MdLocationOn />
                            <h2>Address</h2>
                        </div>
                        <div className="contact-info">
                            <p>Malanchapara, Chandracolony <br /> Nabadwip - 741302, <br /> WestBengal, India</p>
                            <a className="btn" href="https://goo.gl/maps/ETjbEGVAyPdYQhUf6" target="_blank" rel="noopener noreferrer"><FaMapMarkedAlt /></a>
                        </div>
                    </div>
                    <div className="contact-info-box">
                        <div className="contact-info-heading">
                            <MdOutlineAlternateEmail />
                            <h2>Email</h2>
                        </div>
                        <div className="contact-info">
                            <p>prasunsarkar.personal@gmail.com</p>
                            <a className="btn" href="mailto:prasunsarkar.personal@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                        </div>
                    </div>
                    <div className="contact-info-box">
                        <div className="contact-info-heading">
                            <MdPhone />
                            <h2>Phone & WhatsApp</h2>
                        </div>
                        <div className="contact-info">
                            <p> +91 73648 96287 <br /> +91 87686 95038 </p>
                            <a className="btn" href="http://wa.me/+917364896287" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        </div>
                    </div>
                    <div className="contact-info-box">
                        <div className="contact-info-heading">
                            <FaHashtag />
                            <h2>Social Profiles</h2>
                        </div>
                        <div className="contact-info">
                            <a className="btn" href="https://www.linkedin.com/in/prasunpersonal/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a className="btn" href="https://www.facebook.com/prasunsarkar.personal/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a className="btn" href="https://twitter.com/prasunpersonal/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a className="btn" href="https://www.instagram.com/prasun_personal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div id="contact-right">
                    <h2><FaPaperPlane /> Get in touch!</h2>
                    <form id="contact-form" onSubmit={sendEmail} method="post" autoComplete='off'>
                        <input className="input-box" type="text" name="name" id="name" value={data.name} onChange={inputChange} placeholder="Name" required />
                        <input className="input-box" type="email" name="email" id="email" value={data.email} onChange={inputChange} placeholder="Email" required />
                        <input className="input-box" type="text" name="subject" id="subject" value={data.subject} onChange={inputChange} placeholder="Subject" required />
                        <textarea className="input-box" name="text" id="message" value={data.text} onChange={inputChange} placeholder="Message" required ></textarea>
                        <button className="btn" type="submit">Send <FaPaperPlane /></button>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </section>
    )
}
