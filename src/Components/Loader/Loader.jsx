import React from 'react'


export default function Loader() {
    const loaderStyle = {width:"100vw",height:'100vh',background:'white',opacity:'0.50',position:'fixed',zIndex:'100'}
  return (
    <div style={loaderStyle}></div>
  )
}
