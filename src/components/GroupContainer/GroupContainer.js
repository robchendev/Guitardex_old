import React from 'react'
import { GContainer } from './styles'

const GroupContainer = ({ group }) => {
  return (
    <span><GContainer>{group}</GContainer> </span>
  )
}

export default GroupContainer