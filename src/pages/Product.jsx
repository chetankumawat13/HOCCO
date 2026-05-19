import React from 'react'
import Page from '../components/Page';
import NavBar from '../components/NavBar';

const pageData = [
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/party-pack-Png-1-1.png?updatedAt=1779174730448",
      color: "#D9EEFC"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/cones-artwork.png?updatedAt=1779174730513",
      color: "#FFDBF3"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/Cake-Banner.png?updatedAt=1779174730474",
      color: "#D9EEFC"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/cups-Png-1-1.png?updatedAt=1779174730178",
      color: "#FFDBF3"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/Candies-Banner.png?updatedAt=1779174730495",
      color: "#D9EEFC"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/Novelties-Banner.png?updatedAt=1779174730553",
      color: "#D8F2C0"
    },
    {
      img: "https://ik.imagekit.io/ad6av31ld/HOCCO/tub-website-1-1.png?updatedAt=1779174730395",
      color: "#EBDEFF"
    }
  ];



const Product = () => {
  return (
    <div className='product'>
        <NavBar />
        <Page pageData={pageData} />
    </div>
  )
}

export default Product