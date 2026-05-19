import React from 'react'

const CultureCard = ({aboutData}) => {
  return (
        aboutData.map((data,idx) => {
            return(
                <div key={idx} className='culture-card'>
                    <img src={data.img} alt="" />
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
                </div>
            )
        })
  )
}

export default CultureCard