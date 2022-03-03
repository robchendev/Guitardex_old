import * as React from "react"
import '../components/layout.css';
import { 
  BiHome, BiFolder, BiWrench, BiQuestionMark,
  BiMenu, BiSearch, BiGridAlt
} from "react-icons/bi";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled, { createGlobalStyle } from "styled-components"
  
//styles
const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }
`
const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  background: #25234A;
  padding: 6px 14px;
`
const LogoContent = styled.div`
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  #btn {
    position: absolute;
    left: 90%;
    top: 18px;
    font-size: 20px;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
  }
  
`
const Logo = styled.div`

`
const LogoName = styled.div`

`
const Input = styled.input.attrs({ type: 'text' })`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #3E3B7D;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
`

const NavUL = styled.ul`
  margin-top: 20px;
  li {
    list-style: none;
    height: 50px;
    width: 100%;
    position: relative;

    a {
      color: #fff;
      display: flex;
      height: 100%;
      align-items: center;
      text-decoration: none;

      border-radius: 12px;
      &:hover {
        background-color: #B0253E;
        position: relative;
        color: #FFF;
        background: #B0253E;
        transition: all 0.4s ease;
      }
    }
  }
  //fontSize: "20px"
`

// This can be styled components for each icon
// such as <BiSearch />
const list_icon = {
  display: 'inline-flex',
  verticalAlign: 'middle', 
  marginBottom: '3px',
  height: '24px',
  minWidth: '50px',
  borderRadius: '12px',
  lineHeight: '20px',
  textAlign: 'center',
}

const search_icon = {
  
  position: 'relative',
  height: '24px',
  minWidth: '50px',
  zIndex: '99',
  color: '#fff',
  fontSize: '22px'
}

const list_items = {
  //fontSize: "20px"
}

// Thank you tommy
const IconWrapper = ({Icon}) => (
  <IconContext.Provider value={{style: list_icon}}>
    <Icon/>
  </IconContext.Provider>
);
const SearchIconWrapper = () => (
  <IconContext.Provider value={{style: search_icon}}>
    <BiSearch />
  </IconContext.Provider>
);

// Eventually move this code somewhere else
const NavItem = (props) => {
  const {icon,text,url} = props;
  return (
    <li>
      <a href={url}>
        <span style={list_items}><IconWrapper Icon={icon}/>{text}</span>
      </a>
    </li>
  )
}

const NavSearch = () => (
  <li>
    <SearchIconWrapper />
    <Input type="text" placeholder="Search..." />
  </li>
)

//bimenu needs btn id
const NavHeader = () => (
  <LogoContent>
    <Logo>
      <LogoName>
        Fingerstyle Central
      </LogoName>
    </Logo>
    <IconWrapper Icon={BiMenu} />
  </LogoContent>
)

const NavList = () => (
  <NavUL>
    <NavSearch />
    <NavItem icon={BiHome} text="Home" url="#"/>
    <NavItem icon={BiGridAlt} text="Techniques" url="#"/>
    <NavItem icon={BiFolder} text="???" url="#"/>
    <NavItem icon={BiWrench} text="Tools" url="#"/>
    <NavItem icon={BiQuestionMark} text="About" url="#"/>
    <NavItem icon={FaDiscord} text="Discord" url="#"/>
    <NavItem icon={FaYoutube} text="YouTube" url="#"/>
  </NavUL>
)

const NavBarPage = () => {
  return (
    <Sidebar>
      <GlobalStyle />
      <NavHeader />
      <NavList />
    </Sidebar>

  )
}

export default NavBarPage;