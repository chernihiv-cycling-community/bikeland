import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const LanguageWrapper = styled.ul`
  display: flex;
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  ${media.greaterThan('medium')`
    margin-left: 0;
    position: relative;
    top: 0;
    right: 0;
  `}
`;

export const LanguageItem = styled.li`
  margin-left: 0.5em;
  display: flex;
  &:not(:last-child):after{
    content: '/'
  }
`;

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5em;
  color: var(--grayColor);
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.5s;
  &:hover{
    color: var(--secondary-color);
  }
`;
