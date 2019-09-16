import React from 'react'
import Painting from './Painting'

import paintings from '../data/paintings'

const PaintingList = props => (
  <div>
    {paintings.map(painting => (
      <Painting painting={painting} />
    ))}
  </div>
)

export default PaintingList
