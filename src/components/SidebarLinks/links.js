import React from 'react'
import { HiOutlineChatAlt, HiOutlineUserGroup, HiOutlineHome, HiOutlineViewGrid, HiOutlineQuestionMarkCircle } from "react-icons/hi"

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
    label: "About",
    icon: <HiOutlineUserGroup />,
    link: "/about"
  }
]
export const externalLinks = [
  {
    label: "Community",
    icon: <HiOutlineChatAlt />,
    link: "community",
  },
]
export const utilityLinks = [
  {
    label: "Help",
    icon: <HiOutlineQuestionMarkCircle />,
    link: "/help"
  },
]