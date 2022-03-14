import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { v } from '../styles/variables'
import { COLORS } from '../styles/theme'

const SaveButton = styled.button`
    padding: ${v.mdSpacing} calc(${v.mdSpacing} * 1.5);
    border: none;
    color: #fff;
    background: var(--color-primary, ${COLORS.primary.light});
    border-radius: ${v.borderRadius};
    margin-bottom: ${v.mdSpacing};
`
const Save = ({title, group, slug}) => {
  const [saveState, setSaveState] = useState(false);
  let savedObj = {
    "name":"My Saved Profile",
    "items":[]
  } 
  if (window) {
    if (localStorage.getItem('save')) { // localStorage of save already exists
      savedObj = JSON.parse(localStorage.getItem('save')) //gets savedObj
    }
  }
  
  let index = savedObj.items.findIndex(item => item.t === title && item.g === group && item.s === slug)
  useEffect(() => {
    setSaveState(index >= 0);
  }, [index]);
  const addSave = (thisPage) => {
    const newSavedItems = savedObj.items.concat(thisPage) // [{"g":"tec","s":"wrist-thump"}...]
    let newSavedObj = {
      "name":"My Saved Profile",
      "items":newSavedItems
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) // make save into a CONST VARIABLE later
    setSaveState(true)
  }
  const removeSave = (index) => {
    savedObj.items.splice(index, 1)
    const newSavedItems = savedObj.items
    //this can be its own function
    let newSavedObj = {
      "name":"My Saved Profile",
      "items":newSavedItems
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) 
    setSaveState(false)
  }
  const updateSave = () => {
    if (localStorage.getItem('save')) { // localStorage of save already exists
      savedObj = JSON.parse(localStorage.getItem('save')) //gets savedObj
    }

    const thisPage = {t:title,g:group,s:slug}
    index = savedObj.items.findIndex(item => item.t === title && item.g === group && item.s === slug)

    if (index >= 0) { // item is in array
      removeSave(index)
    } else { // item is not in array, index < 0
      addSave(thisPage)
    }
  }
  return (
      // make sure to show button text as "save" and "saved" depending on localstorage
    <SaveButton onClick={updateSave}>
      {saveState ? "Unsave" : "Save"}
    </SaveButton>
  )
}

export default Save

