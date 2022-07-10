import React from 'react'

export const Contact = (props) => {
	const EMAIL_SENDING_URL = "https://prasun-portfolio-server.herokuapp.com/services/sendemail";

	const initState = {
		name:"",
		email:"",
		subject:"",
		text:""
	};

	const [data, setData] = React.useState(initState);

	const inputChange = (e) => {
		setData({...data, [e.target.name]: e.target.value});
	}

	const sendEmail = async (e) => {
		e.preventDefault();
		await fetch(EMAIL_SENDING_URL, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}).then((res) => res.json())
		.then((data) => console.log(data.message))
		.catch((e) => console.log(e));
	}

	return (
		<section id="contacts">
			<h1 className="heading ">Contacts</h1>
			<div className="main-body">
				<div id="contact-left">
					<div className="contact-info-box">
						<div className="contact-info-heading">
							<i className="fa-solid fa-location-dot"></i>
							<h2>Address</h2>
						</div>
						<div className="contact-info">
							<p>Malanchapara, Chandracolony <br /> Nabadwip - 741302, <br /> WestBengal, India</p>
							<a className="btn" href="https://goo.gl/maps/ETjbEGVAyPdYQhUf6" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-map-location-dot"></i></a>
						</div>
					</div>
					<div className="contact-info-box">
						<div className="contact-info-heading">
							<i className="fa-solid fa-at"></i>
							<h2>Email</h2>
						</div>
						<div className="contact-info">
							<p>prasunsarkar.personal@gmail.com</p>
							<a className="btn" href="mailto:prasunsarkar.personal@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
						</div>
					</div>
					<div className="contact-info-box">
						<div className="contact-info-heading">
							<i className="fa-solid fa-phone"></i>
							<h2>Phone & WhatsApp</h2>
						</div>
						<div className="contact-info">
							<p> +91 73648 96287 <br /> +91 87686 95038 </p>
							<a className="btn" href="http://wa.me/+917364896287" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
						</div>
					</div>
					<div className="contact-info-box">
						<div className="contact-info-heading">
							<i className="fa-solid fa-hashtag"></i>
							<h2>Social Profiles</h2>
						</div>
						<div className="contact-info">
							<a className="btn" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
							<a className="btn" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
							<a className="btn" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
							<a className="btn" href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
						</div>
					</div>
				</div>
				<div id="contact-right">
					<h2><i className="fa-solid fa-paper-plane"></i> Get in touch!</h2>
					<form id="contact-form" onSubmit={sendEmail} method="post" autoComplete='off'>
						<input className="input-box" type="text" name="name" id="name" value={data.name} onChange={inputChange} placeholder="Name" required />
						<input className="input-box" type="email" name="email" id="email" value={data.email} onChange={inputChange} placeholder="Email" required />
						<input className="input-box" type="text" name="subject" id="subject" value={data.subject} onChange={inputChange} placeholder="Subject" required />
						<textarea className="input-box" name="text" id="message" value={data.text} onChange={inputChange} placeholder="Message" required ></textarea>
						<button className="btn" type="submit">Send <i className="fa-solid fa-paper-plane"></i></button>
					</form>
				</div>
			</div>
		</section>
	)
}
