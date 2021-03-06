import styled, { css } from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

interface PropsList {
  statusRegion:boolean
}


const Nav = styled.nav`
  width: 200px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const Checked = styled.div<PropsList>`
  width: 100%;
  height: 39px;
  padding: ${pixelsToRem(8)};
  font: var(--small);
  border-radius:5px;
  background: var(--grey);
  border: 2px solid var(--grey);
  color: #000;
  cursor: pointer;

  ${props => props.statusRegion && css`
    background: #fff;
  `}
`


const Ul = styled.ul<PropsList>`
  position: absolute;
  width: 100%;
  border-radius:5px;
  background: var(--grey);
  border: 2px solid var(--grey);
  bottom:-120%;
  transform: translateX(60px);
  transition: .3s ease-in;
  opacity: 0;

  ${props => props.statusRegion && css`
    opacity: initial;
    transform: initial;
    background: #fff;
  `}

  li{
      a{
        width: 98%;
        display: inline-block;
        padding: ${pixelsToRem(8)};
        color: #333;
        font: inherit;
        font: var(--small);
        margin: 2px;
        cursor: default;
        ${props => props.statusRegion && css`
          cursor: pointer;
        `}
      }
  }

`





export {
  Nav,
  Checked,
  Ul,

}