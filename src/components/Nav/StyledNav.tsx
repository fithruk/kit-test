import styled from 'styled-components';
const StyledHeader = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 30vw 70px 20px;
`;

const StyledNav = styled('nav')``;

const NavList = styled('ul')`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: fit-content;
`;

const NavItem = styled('li')`
  margin-right: 30px;
  padding: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;

  &:last-child {
    position: relative;
    display: flex;
    cursor: pointer;
    background: #e61949;
    box-shadow: inset 0px 7px 3px rgba(0, 0, 0, 0.03), inset 0px 2px 3px rgba(0, 0, 0, 0.09),
      inset 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px 1px 1px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
  }

  &:last-child img {
    background-color: transparent;
  }

  &:last-child a {
    color: #eeeeee;
    margin-right: 5px;
  }
`;

const Counter = styled('div')`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  text-align: center;
  background: yellow;
  position: absolute;
  right: -10%;
  top: -10%;
  opacity: 0.9;
`;

export { StyledHeader, StyledNav, NavList, NavItem, Counter };
