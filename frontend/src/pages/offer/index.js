import React, { useState } from 'react'
import ModelPopup from './components/ModelPopup'
import OfferHome from './components/OfferHome'

const index = () => {
  const [open, openChange] = useState(false)
  const [data, setData] = useState({})

  return (
    <div className='offer'>
      <ModelPopup open={open} openChange={openChange} data={data} setData={setData} />
      <h2>course offer</h2>
      <OfferHome />
    </div>
  )
}

export default index
