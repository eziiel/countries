import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background:var(--grey-BG) ;
  border-bottom: 2px solid var(--grey);
  position: fixed;
  height: ${pixelsToRem(94)};
`
const SubHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelsToRem(22)};
`
const Logo = styled.span`
  display: inline-block;
  font: var(--font1);
`

const Theme = styled.button`
  font: var(--font2);
`


export {
  SubHeader,
  Head,
  Logo,
  Theme,
}

