import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { MHeaderRelative, MHeader, MobileContainer, Logo, MobileHeaderLink, MenuIcon } from './styles'

const MobileHeader = () => {
	const [menuActive, setMenuActive] = useState(false)
	const showSidebar = () => {
		if (document.getElementById('mobilenav').style.display === 'block') {
			document.getElementById('mobilenav').style.display = 'none'
			setMenuActive(false)
		} else {
			document.getElementById('mobilenav').style.display = 'block'
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
						{menuActive ? <FiX /> : <FiMenu />}
					</MenuIcon>
				</MobileContainer>
			</MHeader>
		</MHeaderRelative>
	)
}

export default MobileHeader