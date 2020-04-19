import React from "react"

import * as S from "./styled"

const Languages = () => {
  return (
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to="/" hrefLang="uk">
          Українська
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/en" hrefLang="en">
          English
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
  )
}

export default Languages
