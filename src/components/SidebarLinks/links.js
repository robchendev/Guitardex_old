import React from 'react'
import { HiOutlineChatAlt, HiOutlineUserGroup, HiOutlineHome, HiOutlineViewGrid, HiOutlineQuestionMarkCircle, HiOutlineDatabase, HiOutlineCurrencyDollar } from "react-icons/hi"
import changeLogData from "../../assets/development/change-log-data.json"

export const internalLinks = [
  {
    label: "My Guitardex",
    icon: <HiOutlineHome />,
    link: "/"
  },
  {
    label: "Techniques",
    icon: <HiOutlineViewGrid />,
    link: "/t"
  },  
  {
    label: "Help",
    icon: <HiOutlineQuestionMarkCircle />,
    link: "/help"
  },
]
export const devLinks = [
  {
    label: "About",
    icon: <HiOutlineUserGroup />,
    link: "/about"
  },
  {
    label: `Updated: ${changeLogData.changelog[0].date}`,
    icon: <HiOutlineDatabase />,
    link: "/dev"
  },
]
export const externalLinks = [
  {
    label: "Donate",
    icon: <HiOutlineCurrencyDollar />,
    link: "https://www.paypal.com/donate/?hosted_button_id=DHGEUWW4VMUVG",
  },
]
export const utilityLinks = [
  
]