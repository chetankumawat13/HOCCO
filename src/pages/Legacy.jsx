import React from 'react'
import NavBar from '../components/NavBar'
import Page2 from '../components/Page2'
import Journey from '../components/Journey';
import JourneyCard from '../components/JourneyCard';
import Culture from '../components/Culture';

const historyData = [
  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/1.jpg",
    year: "1944",
    title: "How it all started",
    desc: "Satish Chona, a then engineer with BOAC, starts his entrepreneurial journey in Karachi (then part of India).",
    reverse: false
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/2.jpg",
    year: "1953",
    title: "The first store that still exists",
    desc: "Post-partition and after moving multiple cities, Satish Chona finally settles in Ahmedabad and opens the first QSR outlet at Relief Road.",
    reverse: true
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/3.jpg",
    year: "1983",
    title: "First casual dine in restaurant in Baroda",
    desc: "The Chona Family becomes known for serving quality food and ice cream, leading to the launch of its first casual dine-in restaurant.",
    reverse: false
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/4.jpg",
    year: "1992",
    title: "Pradeep Chona takes over the management",
    desc: "A one-of-a-kind ice cream factory is commissioned in Ahmedabad while maintaining innovation and quality.",
    reverse: true
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/5.jpg",
    year: "2000",
    title: "The first central kitchen is commissioned",
    desc: "Operations become standardized while scaling the QSR and restaurant business with consistent taste.",
    reverse: false
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/6.jpg",
    year: "2005",
    title: "First franchisee operations begin",
    desc: "Ankit Chona starts franchisee operations and expands the ice cream business into neighbouring states.",
    reverse: true
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/7.jpg",
    year: "2017",
    title: "Selling of the ice cream business",
    desc: "The Chonas sell their stake in the ice cream business and shift focus to food service ventures.",
    reverse: false
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/Photo%20(1).jpeg",
    year: "2019",
    title: "HOCCO – A new journey",
    desc: "The HOCCO brand is launched, standing for House of Chonas Collaborative.",
    reverse: true
  },

  {
    img: "https://ik.imagekit.io/ad6av31ld/HOCCO/9.jpg",
    year: "2023",
    title: "HOCCO gains momentum with 100+ outlets in India",
    desc: "HOCCO expands across India and enters the USA with its first QSR outlet in Virginia.",
    reverse: false
  }
];

const Legacy = () => {
  return (
    <div className='legacy'>
      <NavBar />
      <Page2 text={"We are Pioneers"} buttonText={"But ice cream will always be our first love"} bg={'#FDF7E8'} />
      <Journey />
       <h2>Our Journey</h2>
      <JourneyCard historyData={historyData} />
      <Culture />
    </div>
  )
}

export default Legacy