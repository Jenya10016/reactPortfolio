import React from 'react'
import resume from '../../assets/060122.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={resume} download className='btn btn-primary'>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
    </div>
  )
}

export default CTA