import React from 'react'

import './index.scss'

export default ({ data }) => {
  console.log(data)

  const { name, title } = data

  return (
    <div className="presentation">
      <div className="presentation_time">
        <time dateTime="08:00">8:00</time> -<time dateTime="08:20">8:20</time>
      </div>
      <p className="presentation_name">{name}</p>
      <p className="presentation_description">{title}</p>
      <a className="presentation_link" href="talk_summary.php">
        More details
      </a>

      <span className="presentation_live">On air</span>
    </div>
  )
}
