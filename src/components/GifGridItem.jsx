import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s" key={id}>
      <img src={url} alt={title} />
      {title && <p>{title}</p>}
    </div>
  )
}
