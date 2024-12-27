import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='bg-grey-600 text-black align-middle text-2xl'>User: {userid}</div>
  )
}

export default User