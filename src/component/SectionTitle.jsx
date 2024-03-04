import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className='border-b border-base-300 pb-5'>
        <h2 className='text-3xl font-medium tracking-wider capitalize'></h2>
      {text}
    </div>
  )
}

export default SectionTitle
