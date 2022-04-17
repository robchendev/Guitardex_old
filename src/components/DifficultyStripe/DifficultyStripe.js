import React from 'react'
import { DStripe } from './styles'
import { COLORS } from '../../styles/globalstyles/theme'



const DifficultyStripe = ({ difficulty }) => {
  let diffColor = COLORS.diffEasy
  if (difficulty === "medium") diffColor = COLORS.diffMed;
  if (difficulty === "hard") diffColor = COLORS.diffHard;
  return (
    <DStripe diffColor={diffColor}/>
  )
}

export default DifficultyStripe