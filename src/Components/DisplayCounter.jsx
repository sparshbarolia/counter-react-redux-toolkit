import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {

  //store me se counter me se counterVal ki value le ao
  const counterValue = useSelector((store) => store.counter.counterVal);

  return (
    <>
        <p className="lead mb-4 my-4">Counter current value : {counterValue}</p>
    </>
  )
}

export default DisplayCounter
