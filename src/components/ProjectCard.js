import React from 'react'

const ProjectCard = ({ id, img, img_alt, img_float_left, innerWidth, extra_classes, text }) => {
  var classes = (extra_classes) ? 'card ' + extra_classes : 'card'

  const getCard = () => {
    if (innerWidth <= 900 || img_float_left) {
      return (
        <div className={classes} id={id}>
          <div className='card-minor'>
            <img src={img} alt={img_alt}/>
          </div>
          <div className="card-major p-left">{text}</div>
        </div>
      )
    }
    return (
      <div className='card' id={id}>
        <div className="card-major p-right">{text}</div>
        <div className='card-minor'>
          <img src={img} alt={img_alt} />
        </div>
      </div>
    )
  }

  return getCard()
}

export default ProjectCard