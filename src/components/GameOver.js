import React from 'react'
import { DimmedLayer } from './styles/DimmedLayer'

export default function GameOver() {
  return (
    <DimmedLayer>
      <div className='container'>
        <div>Game Over!</div>
      </div>
    </DimmedLayer>
  )
}
