const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 240px;
  background: #11101d;
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
    top: 6px;
    font-size: 20px;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
  }
`
const Logo = styled.div`
  font-size: 28px;
  margin-right: 5px;
`
const LogoName = styled.div`
  font-size: 20px;
  font-weight: 400;
`
const NavUL = styled.ul`
  margin-top: 20px;
  li {
    list-style: none;
    height: 50px;
    width: 100%;
    position: relative;
    margin: 0 5px;
    a {
      color: #fff;
      display: flex;
      height: 100%;
      align-items: center;
      text-decoration: none;
      transition: all 0.4s ease;
      border-radius: 12px;
      :hover {
        background-color: #fff;
        color: #11101d;

      }
    }
  }
  //fontSize: "20px"
`

// This can be styled components for each icon
// such as <BiSearch />
const list_icon = {
  display:'inline-flex',
  verticalAlign: 'middle', 
  //fontSize: '20px',
  marginRight: '5px',
  height: '20px',
  minWidth: '20px',
  borderRadius: '12px',
  lineHeight: '20px'
}

const list_items = {
  //fontSize: "20px"
}