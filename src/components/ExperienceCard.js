import React from 'react'

const ExperienceCard = ({id, title, place, date, innerWidth, text}) => {
  const getCard = () => {
    if (innerWidth <= 900) {
      return (
        <div className='card mobile-nospacing' id={id}>
          {title}
          <h2 className="minor"><em>{place + ', ' + date}</em></h2>
          <br /><br />
          {text}
        </div>
      )
    }
    return (
      <div className="card mobile-nospacing" id={id}>
            <div className="card-major p-right">
              {title}
              {text}
            </div>
            <div className="card-minor">
              <h2 className="minor">
                <em>{place}<br />{date}</em>
              </h2>
            </div>
          </div>
    )
  }

  return getCard()
}

export default ExperienceCard