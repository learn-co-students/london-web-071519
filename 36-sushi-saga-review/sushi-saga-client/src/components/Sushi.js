import React from 'react'

const Sushi = ({ sushi, eatSushi, eaten }) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={() => eatSushi(sushi)}>
        {
          eaten
            ? null
            : <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi