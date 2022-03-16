import React, { useState } from 'react'
import styled from '@emotion/styled'
import { v, minq, maxq } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { css } from '@emotion/css'
import { FiMenu, FiXCircle } from 'react-icons/fi'

const MHeader = styled.div`
  width: 100%;
  background: var(--color-bg, ${COLORS.bg.light});

  ${minq[1]} {
    display: none;
  }
`

const MenuIcon = styled.div`
    padding: ${v.smSpacing} 5% 0 5%;
    font-size: 30px;
`

const MobileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Logo = styled.div`
    margin-left: 5%;
`



const MobileHeader = () => {
    const [menuActive, setMenuActive] = useState(false)
    const showSidebar = () => {
        if (document.getElementById('sidenav').style.display === 'block') {
            document.getElementById('sidenav').style.display = 'none'
            setMenuActive(false)
        } else {
            document.getElementById('sidenav').style.display = 'block'
            setMenuActive(true)
        }
    }

    return (
        <MHeader>
            <MobileContainer>
                <Logo>
                    <h3 className={css`
                        margin-bottom: 0;
                    `}>
                        Fingerstyle Central
                    </h3>
                </Logo>
                <MenuIcon onClick={() => showSidebar()}>
                    {menuActive ? <FiXCircle /> : <FiMenu />}
                </MenuIcon>
            </MobileContainer>
        </MHeader >
    )
}

export default MobileHeader