import React from 'react'

const Button = ({title, background}) => {
  return (
    <div  style={{backgroundColor:`${background}`, width:"200px", height:"50px" , color:"black",display:'flex', justifyContent:'center', alignItems:'center'}}>{title}</div>
  )
}

export default Button