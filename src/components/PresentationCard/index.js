import React from 'react'

import './index.scss'

export default ({ data, id, onAir}) => {
  const { name, title, time } = data
  const start = `${time.slice(0,2)}:${time.slice(2)}`

  return (
    <div className="presentation">
      <div className="presentation_time">
        <time dateTime={ start }>{ start }</time>
      </div>
      <p className="presentation_name">{ name }</p>
      <p className="presentation_description">{title}</p>
      <a className="presentation_link" href="talk_summary.php">
        More details
      </a>

      { onAir && (<span className="presentation_live">On air</span>)}
    </div>
  )
}
