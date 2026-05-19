import React from 'react'
import '../style/journey-page.css'

const JourneyCard = ({historyData}) => {
  return (
     historyData.map((data,idx) => {
        console.log(data.reverse);
        return(
            <div key={idx} className={`journey-card ${data.reverse ? "reverse" : ""}`}>
                <img src={data.img} alt="" />
                <div className="journey-content">
                    <h4>{data.year}</h4>
                    <h5>{data.title}</h5>
                    <p>{data.desc}</p>
                </div>
            </div>
        )
     })
  )
}

export default JourneyCard