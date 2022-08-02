
import React, { FormEvent } from 'react'
import CheckedRegion from '../../assets/checkedRegion'
import { ContextData } from '../../assets/context'
import * as S from "./styled"

const Search:React.FC = () => {
  const { countries } = React.useContext(ContextData)
  const [country, setCountry] = React.useState(String)

  const handleCountry = (value:string) =>{
    setCountry(value)
  }

  const handleForm = (e:FormEvent) => {
    e.preventDefault()
  }
  
  return (
    <S.Section>
      <S.SubSection>
        
        <S.FormCountry onSubmit={(e) => handleForm(e)}>
          <S.SearchName onChange={(value) => handleCountry(value.target.value)}/>
        </S.FormCountry>

        <CheckedRegion/>
      
      </S.SubSection>
    </S.Section>
  )
}

export default Search