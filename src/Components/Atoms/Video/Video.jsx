import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ data }) => {
  const url = `https://www.youtube.com/embed/${data.key}`

  return (
    <iframe
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title={'title'}
    />
  )
}

Video.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired
  })
}

export default Video
