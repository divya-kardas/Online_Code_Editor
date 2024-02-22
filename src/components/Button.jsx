import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <div class="mx-2">
      <button
      type="button"
      class="btn btn-info"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
