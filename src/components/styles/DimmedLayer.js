import styled from 'styled-components'

export const DimmedLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;

  .container {
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: #f4dfba;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
