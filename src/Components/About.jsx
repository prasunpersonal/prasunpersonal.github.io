import React from 'react'

export const About = (props) => {
	return (
		<section id="about">
			<h1 className="heading ">About Me</h1>
			<div className="main-body">
				<div className="description">
					<ul className="my-info">
						<li>Name: <span>Prasun Sarkar</span></li>
						<li>Age: <span>{ Math.abs(new Date(Date.now() - new Date(2002,8,12).getTime()).getUTCFullYear()-1970) }</span></li>
						<li>Qualification: <span>B.Tech (CSE)</span></li>
						<li>Passion: <span>Programming | Development</span></li>
						<li>Mainly I'm: <span>Android Developer</span></li>
						<li>Language: <span>Bengali, Hindi, English</span></li>
					</ul>
					<div className="vartical-divider"></div>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fugiat id sunt voluptas in ipsa, corporis laborum soluta adipisci minus! A ex iure numquam recusandae, velit enim ut quo cumque reiciendis quae maxime in nulla nemo odio! Exercitationem, omnis. Consequuntur et aut maxime ratione earum minus repudiandae, odit sint eligendi, sequi pariatur iure, ad animi quis! Hic saepe excepturi accusantium voluptates facere quae sed impedit quia voluptatibus dolore itaque minima fuga laborum fugit iusto consectetur quam magnam maiores reprehenderit minus, velit dicta tempora nihil? Quidem vero atque tempore veritatis rem commodi doloremque voluptatibus asperiores autem deleniti! Alias necessitatibus facilis distinctio?</p>
				</div>
			</div>
		</section>
	)
}
