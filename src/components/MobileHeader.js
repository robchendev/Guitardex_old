import React, { useState } from 'react'
import styled from '@emotion/styled'
import { v, minq } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { css } from '@emotion/css'
import { FiMenu, FiXCircle } from 'react-icons/fi'
import { Link } from 'gatsby'

const MHeaderRelative = styled.div`
    padding-bottom: 4em;
    position: relative;
    ${minq[1]} {
        display: none;
    }
`

const MHeader = styled.div`
    width: 100%;
    background: var(--color-bg, ${COLORS.bg.light});
    position: fixed;
    z-index: 10;    
    padding: 0.5em 0;
`
const MobileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

const MenuIcon = styled.div`
    padding: ${v.smSpacing} 5% 0 5%;
    font-size: 30px;
`


const Logo = styled.div`
    margin-left: 5%;
`

const MobileHeaderLink = styled(Link)`
    text-decoration: none;
    color: var(--color-text, ${COLORS.text.light});
    h2 {
        margin-bottom: 0;
        font-size: 20px;
    }
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
        <MHeaderRelative>
            <MHeader>
                <MobileContainer>
                    <Logo>
                        <MobileHeaderLink to="/">
                            <h2>Guitardex</h2>
                        </MobileHeaderLink>
                    </Logo>
                    <MenuIcon onClick={() => showSidebar()}>
                        {menuActive ? <FiXCircle /> : <FiMenu />}
                    </MenuIcon>
                </MobileContainer>
            </MHeader>
        </MHeaderRelative>
    )
}

export default MobileHeader