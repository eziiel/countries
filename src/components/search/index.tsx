
import React from 'react'
import * as S from "./styled"

const Search:React.FC = () => {
  const [country, setCountry] = React.useState(String)
  
  
  
  //optei por não fazer separado os components : input/checked, pois tem somente uma 
  return (
    <S.Section>
      <S.SubSection>
        <S.SearchName onChange={() => console.log("a")}/>
      </S.SubSection>
    </S.Section>
  )
}

export default Search