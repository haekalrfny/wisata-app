import React from 'react'

const Input = (props) => {
  return (
    <input value={props.value} onChange={props.onChange} type={props.type} className=' bg-[#f6f6f6] rounded-[8px] h-5 p-6 outline-none' placeholder={props.placeholder} />
  )
}

export default Input