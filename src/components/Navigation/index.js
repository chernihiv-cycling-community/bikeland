import React from "react"
import useMenu from "../useMenu"
import useTranslations from "../useTranslations"

import * as S from "./styled"

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu()
  const { addRouteButton } = useTranslations()

  return (
    <>
      <S.Navigation className={isActive ? "active" : ""}>
        {menuItems.map(menu => (
          <S.NavigationLink
            to={menu.link}
            aria-label={menu.name}
            activeClassName="active"
            onClick={() => handleToggleMenu()}
          >
            {menu.name}
          </S.NavigationLink>
        ))}

        <S.NavigationButton to="" aria-label="Login">
          {addRouteButton}
        </S.NavigationButton>
      </S.Navigation>
    </>
  )
}

export default Navigation
