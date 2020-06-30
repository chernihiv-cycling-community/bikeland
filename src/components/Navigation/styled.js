import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';
import { Link } from 'gatsby';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: 0;
  min-height: 0;
  overflow: hidden;
  transition: min-height 1s, margin-top 1s;
  &.active {
    margin-top: var(--space);
    height: 100%;
    min-height: 180px;
    transition: min-height 1s, margin-top 1s, height 0s 1s;
  }
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    margin-top: var(--space-sm);
  `}
`;

export const NavigationLink = styled(LocalizedLink)`
  color: var(--text-dark);
  text-decoration: none;
  position: relative;
  padding: 0 5px;
  margin-bottom: var(--space-sm);
  text-align: center;
  ${media.greaterThan('medium')`
    margin-left: var(--space-sm);
    margin-bottom: 0;
  `}
  ${media.greaterThan('large')`
    margin-left: var(--space);
    padding: 0 var(--space-sm);
  `} 

  &:after {
    ${media.greaterThan('medium')`
      content: '';
      display: inline-block;
      width: 0;
      height: 4px;
      border-radius: 3px;
      background: var(--secondary-color);
      position: absolute;
      left: 5px;
      bottom: -5px;
      opacity: 0;
      transition: .3s ease-in-out;
    `}
    ${media.greaterThan('large')`
      left: var(--space-sm);
    `}
  }

  &:hover,
  &.active {
    font-weight: bold;
    ${media.greaterThan('medium')`
      font-weight: normal;
    `}

    &:after {
      opacity: 1;
      width: calc(100% - 10px);
      ${media.greaterThan('large')`
        width: calc(100% - var(--space-sm)*2);
      `}
    }
  }
`;

export const NavigationButton = styled(Link)`
  background: var(--primary-color);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  padding: var(--space-sm) var(--space);
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  &:hover{
    background: var(--secondary-color);
  }
  ${media.greaterThan('medium')`
    margin-left: var(--space);
  `}
`;
