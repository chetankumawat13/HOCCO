import React from 'react'
import '../style/page.css'

const Page = ({pageData}) => {
  return (
     pageData.map((data,idx) => {
        return(
            <div style={{backgroundColor: data.color}} key={idx} className='page'>
                <img src={data.img} alt="" />
             </div>
        )
       
     })
  )
}

export default Page