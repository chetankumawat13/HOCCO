import React from 'react'
import Page from '../components/Page';
import NavBar from '../components/NavBar';
import Page2 from '../components/Page2';

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
        <Page2 bg={'#FDF7E8'} text={"Add flavor to your freezer"} buttonText={"Explore our category"} />
        <Page pageData={pageData} />
        <Page2 bg={'#DAEFFD'} text={"Be a part of our journey"} buttonText={"Franchise with us"} />
    </div>
  )
}

export default Product