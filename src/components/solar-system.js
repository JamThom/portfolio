import React from 'react'
import Orbit from 'Styles/orbit'
import Ring from 'Styles/ring'

const rings = (count) => {

  const output = [];

  while (output.length < count) {
    output.push(<Ring
      key={output.length}
      index={output.length}
      cx="252"
      cy="252"
      r={102 + (36 * output.length)}
    />)
  }

  return output;

}

export default ({ ringCount }) => (
  <Orbit viewBox="0 0 504 504">
      {rings(ringCount)}
  </Orbit>
)
