
import React from 'react'
import * as S from "./styled"

export const Header:React.FC = () => {
  return (
    <S.Head>
      <S.SubHeader>
        <S.Logo>Countries</S.Logo>
        <S.Theme>theme</S.Theme>
      </S.SubHeader>
    </S.Head>
  )
}
