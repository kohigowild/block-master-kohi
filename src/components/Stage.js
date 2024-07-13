import React from 'react'
import { StyledStage } from './styles/StyledStage'
import Cell from './Cell'
import GameOver from './GameOver'

export default function Stage({ stage, gameOver, callback }) {
  return (
    <>
      <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map((row) =>
          row.map((cell, x) => <Cell key={x} type={cell[0]} />)
        )}
        {gameOver && <GameOver callback={callback} />}
      </StyledStage>
    </>
  )
}
