import React from 'react'

const Page2 = ({text,buttonText,bg}) => {
  return (
    <div style={{backgroundColor:bg}} className='page2'>
         <h2>{text}</h2>
         <button>{buttonText}</button>
         <img src="https://ik.imagekit.io/ad6av31ld/HOCCO/dash-1.svg?updatedAt=1779174730605" alt="" />
    </div>
  )
}

export default Page2