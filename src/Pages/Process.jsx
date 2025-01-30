import React from 'react'
import ProcessBanner from '../Components/ProcessBanner'
import ProcessProgress from '../Components/ProcessProgress'

const Process = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <ProcessBanner/>
      <ProcessProgress/>
    </div>
  )
}

export default Process