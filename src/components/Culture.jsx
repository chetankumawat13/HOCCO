import React from 'react'
import CultureCard from './CultureCard';
import '../style/culture.css'


const aboutData = [
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/about-2.svg",
      title: "Ice Cream is Better With Everyone",
      desc: "We believe that great ice cream moments happen when people come together. That’s why our people are at the heart of everything we do - the people who make the ice creams, serve them and eat them."
    },
  
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/about-1.svg",
      title: "The Power of ‘Acchai, Sacchai & Safai’",
      desc: "We don’t put anything into our ice creams that we wouldn’t love to eat ourselves or share with our families. ‘Acchai & Sacchai’ are values we have inherited and those that guide us."
    },
  
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/about-3.svg",
      title: "Arms Wide Open",
      desc: "We aim to be an arms-wide-open brand for everyone - from the way we price our products to the environments we strive to create in our parlours. No one should ever feel like they don’t belong."
    }
  ];

const Culture = () => {
  return (
    <div className='culture'>
        <h3>Our Culture</h3>
        <div className="culture-cards">
                <CultureCard aboutData={aboutData} />
        </div>
    </div>
  )
}

export default Culture