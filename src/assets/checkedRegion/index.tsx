
import React from 'react'
import { ContextData } from '../context'
import * as S from "./styled"


interface PropsRegion {
  region:string
}

const CheckedRegion:React.FC= () => {
  const { region, regions, setRegion} = React.useContext(ContextData)
  const [statusRegion, setStatusRegion] = React.useState(false)
  const refList = React.useRef<HTMLDivElement>(null)

  const handleList = () => {
    setStatusRegion(!statusRegion)
  }
  
  const handleRegion = (value:string) => {
    setRegion(value)
  }
  //bubble efect
  const html = document.documentElement
  html.addEventListener("click",(e) => {
    refList.current == e.target?null:setStatusRegion(false)
  })

  return (
    <S.Nav>
      <S.Checked
        ref={refList}
        onClick={handleList}
      >{region}</S.Checked>
      <S.Ul 
        statusRegion ={statusRegion}>
          {
            regions.map((item) => (
              <li key={item}>
                <a href="#" 
                  onClick={() => handleRegion(item)}
                >{item}</a></li>
            ))
          }
      </S.Ul>
    </S.Nav>
  )
}

export default CheckedRegion