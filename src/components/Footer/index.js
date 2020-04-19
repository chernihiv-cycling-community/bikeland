import React from "react"
import useTranslations from "../useTranslations"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage
  } = useTranslations()

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {maintainedBy}{" "}
          <a
            href="https://github.com/chernihiv-cycling-community"
            target="_blank"
          >
            Chernihiv Cycling Community
          </a>
          . {contributeMessage}{" "}
          <a
            href="https://github.com/chernihiv-cycling-community/bikeland"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
