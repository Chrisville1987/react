import React, { useState } from 'react'

const ContactPage = () => {
  const [left, setleft] = useState(0)
  const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  })

  const [votes, setVotes] = useState([0, 0, 0])
  const apc = () => {
    setVotes(votes[0] +1)
  }

  const pdp = () => {
    setVotes(votes[1] +1)
  }

  const lp = () => {
    setVotes(votes[2] +1)
  }

  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})}
    
    

  const handleLeftClick = () => {
    const newClick = {
      left: clicks.left +1,
      right: clicks.right
    }
    setClicks(newClick)
  }

  return (
    <main>
          <h2>This is the contact Page</h2> 
          {clicks.left}
          {clicks.right}
          <button onClick={handleLeftClick}>Left Click</button>
            
          <button onClick={handleRightClick}>Right Click</button>

          
          <button onClick={apc}>Apc</button>
          <button onClick={pdp}>Pdp</button>
          <button onClick={lp}>Lp</button>
    </main>
  )
}

export default ContactPage