import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #E5E5E5;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  transition:  0.9s linear;
  position: sticky;
  width;100%;
  
  @media screen and (max-width: 768px) {
    display: inline-block;
    top: 0px;
    transition:  0.9s ease;
    bottom:0px;
    position: fixed;
    text-align: center;
    height: 100vh;
    width: 19%;
    left:0px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  padding-top:10%;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin:  15px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #222;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 150px;
  height: 40px;
  left: 1185px;
  top: 34px;
  font-family: sans-serif;          
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

  &:hover {
    transition: all 0.8s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
