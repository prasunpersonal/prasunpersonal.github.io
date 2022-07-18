import React from 'react'

export const Home = (props) => {
	return (
		<section id="home">
			<div className="main-body">
				<h2>Hello there,</h2>
				<h1>I'm <span>Prasun Sarkar</span></h1>
				<ul className="key-points">
					<li><i className="fa-solid fa-angles-right"></i>I'm eager to learn quickly.</li>
					<li><i className="fa-solid fa-angles-right"></i>I'm determined so I never give up until I get something right.</li>
					<li><i className="fa-solid fa-angles-right"></i>I enjoy hard works and facing challenges.</li>
					<li><i className="fa-solid fa-angles-right"></i>I love turning great ideas into reality.</li>
					<li><i className="fa-solid fa-angles-right"></i>I like to keep a positive attitude.</li>
					<li><i className="fa-solid fa-angles-right"></i>I like working systematically.</li>
				</ul>
				<a href="" id="resume-download-btn" className="btn">Download Resume<i className="fa-solid fa-file-arrow-down"></i></a>
			</div>
		</section>
	)
}
