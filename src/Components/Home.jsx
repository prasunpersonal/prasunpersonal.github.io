import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import { AiFillFilePdf } from 'react-icons/ai'

export const Home = () => {
    return (
        <section id="home">
            <div className="main-body">
                <h2>Hello there,</h2>
                <h1>I'm <span>Prasun Sarkar</span></h1>
                <ul className="key-points">
                    <li><FaAngleDoubleRight />I am eager to learn quickly.</li>
                    <li><FaAngleDoubleRight />I am determined and never give up until something is right.</li>
                    <li><FaAngleDoubleRight />I enjoy hard works and facing challenges.</li>
                    <li><FaAngleDoubleRight />I love turning great ideas into reality.</li>
                    <li><FaAngleDoubleRight />I like to keep a positive attitude.</li>
                    <li><FaAngleDoubleRight />I like working systematically.</li>
                </ul>
                <a href="/PRASUN_SARKAR_Resume.pdf" id="resume-download-btn" className="btn" download>Download Resume <AiFillFilePdf /></a>
            </div>
        </section>
    )
}