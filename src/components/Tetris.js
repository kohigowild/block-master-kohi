import React, { useState } from 'react'

import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}
