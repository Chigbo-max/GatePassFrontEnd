import React from 'react'

function Button(props) {

    const{type, style, action} =  props;
  return (
    <div>
        <button type={type} className={style}>{action}</button>
      
    </div>
  )
}

export default Button
