import React from 'react'

import { createState } from '../gameHelpers'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

export default function Tetris() {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createState()} />
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}
