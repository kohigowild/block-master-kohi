import styled from 'styled-components'
import bgImage from '../../img/bg.jpeg'

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: ${(props) => `calc(${props.vh} * 100)`};
  background: url(${bgImage});
  background-size: 900px 660px;
  background-repeat: repeat;
  overflow: hidden;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`
export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`
