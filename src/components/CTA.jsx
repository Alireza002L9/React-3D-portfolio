import React from 'react'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text '>
            Reach out if you're intrigued and let's explore the possibilities together! 
        </p>
        <Link to="/contact" className="btn">Contact</Link>
    </section>
  )
}

export default CTA