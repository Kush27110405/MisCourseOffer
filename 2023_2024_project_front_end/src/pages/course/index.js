import React from 'react'
import { useAuth } from 'src/hooks/useAuth'
import Button from '@mui/material/Button'
import { useState } from 'react'

const index = () => {
  const [data, setData] = useState(null)
  const auth = useAuth()
  const handleClick = async () => {
    const res = await auth.checking()
    setData(res)
  }

  return (
    <div>
      <Button onClick={handleClick}>Check</Button>
      {JSON.stringify(data)}
    </div>
  )
}

export default index
