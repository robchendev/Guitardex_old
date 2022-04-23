import React from 'react'
import { DContainer } from './styles'
import { COLORS } from '../../styles/globalstyles/theme'

const DiffContainer = ({ difficulty }) => {
  let diffColor = COLORS.diffEasy
  let diffText = "easy"
  if (difficulty === "med") {
    diffColor = COLORS.diffMed
    diffText = "med"
  }
  if (difficulty === "hard") {
    diffColor = COLORS.diffHard
    diffText = "hard"
  }
  return (
    <span><DContainer diffColor={diffColor}>{diffText}</DContainer> </span>
  )
}

export default DiffContainer