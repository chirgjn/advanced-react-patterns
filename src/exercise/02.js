// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (allowedChildTypes.includes(child.type)) {
      return React.cloneElement(child, {on, toggle})
    }
    return child
  })
}

const ToggleOn = ({on, children}) => on === true ? children : null

const ToggleOff = ({on, children}) => on === false ? children : null

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

const allowedChildTypes = [ToggleOn, ToggleOff, ToggleButton];
function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
