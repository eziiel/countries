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
`

const SearchName = styled.input.attrs({
  type:"text",
  placeholder:"nome"
})`
  color:#333;
  padding: ${pixelsToRem(8)};
  width: 300px;
  border-radius:5px;
  background: var(--grey);
  border: 2px solid var(--grey);

  ::placeholder{
    color: #b5b5b5;
  }

  :focus{
    outline: none;
    border: 2px solid #b5b5b5;
    box-shadow: 0 0 15px 1px #DFDFDF ;
    background: #fff;
  }
`

const Region = styled.div`

`

export {
  Section,
  SubSection,
  SearchName,

}