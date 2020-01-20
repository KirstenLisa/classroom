import React from 'react'
import './utils.css'

export function Hyph() {
    return <span className='Hyph'>{' | '}</span>
  }
  
export function Button({ className, ...props }) {
    return <button className={['Button', className].join(' ')} {...props} />
  }

export function Red() {
    return <span className='red'></span>
}

