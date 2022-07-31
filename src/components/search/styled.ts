import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Section = styled.section`
  width: 100%;
  height: ${pixelsToRem(194)};
  display: flex;
  justify-content: center;
  margin-top: ${pixelsToRem(94)};
  border-bottom: 2px solid var(--grey);

`

const SubSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelsToRem(22)};
  background: red;
`

const SearchName = styled.input.attrs({
  type:"text",
})`


`

export {
  Section,
  SubSection,
  SearchName,
  
}