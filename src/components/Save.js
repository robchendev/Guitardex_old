import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { v, SAVE_KEY } from '../styles/variables'
import { COLORS } from '../styles/theme'

const SaveButton = styled.button`
    padding: ${v.mdSpacing} calc(${v.mdSpacing} * 1.5);
    border: none;
    color: #fff;
    background: var(--color-primary, ${COLORS.primary.light});
    border-radius: ${v.borderRadius};
    margin-bottom: ${v.mdSpacing};
`



const Save = ({ id }) => {
  const [saveState, setSaveState] = useState(false);
  const hasDupes = (array) => (new Set(array)).size !== array.length
  let savedObj = {
    "n": "My Saved Profile",
    "e": []
  }
  if (typeof window !== `undefined` && localStorage.getItem(SAVE_KEY)) {
    try {
      const save = JSON.parse(localStorage.getItem(SAVE_KEY))
      if (hasDupes(save.e)) throw new Error("Save has duplicate ID")
      if (typeof save.n !== 'string' &&
        Object.prototype.toString.call(save.e) !== '[object Array]') {
        savedObj.n = "My Saved Profile"
        savedObj.e = []
      }
      else if (typeof save.n !== 'string') savedObj.n = "My Saved Profile"
      else if (Object.prototype.toString.call(save.e) !== '[object Array]') {
        savedObj.e = []
      }
      else savedObj = JSON.parse(localStorage.getItem(SAVE_KEY))
    } catch (error) {
      alert("Invalid save profile detected. Clearing save.\n" + error)
    }
  }

  let index = savedObj.e.findIndex(item => item === id)
  useEffect(() => {
    setSaveState(index >= 0);
    let newSaved = {
      "n": savedObj.n,
      "e": savedObj.e
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved)) // make save into a CONST VARIABLE later
  }, [index, savedObj.n, savedObj.e]);

  const addSave = (thisPage) => {
    const newSavedItems = [thisPage].concat(savedObj.e) // [{"g":"tec","s":"wrist-thump"}...]
    let newSaved = { "n": savedObj.n, "e": newSavedItems }
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved)) // make save into a CONST VARIABLE later
    setSaveState(true)
  }

  const removeSave = (index) => {
    savedObj.e.splice(index, 1)
    const newSavedItems = savedObj.e
    let newSaved = { "n": savedObj.n, "e": newSavedItems }
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved))
    setSaveState(false)
  }

  const updateSave = (e) => {

    if (localStorage.getItem(SAVE_KEY)) { // localStorage of save already exists
      savedObj = JSON.parse(localStorage.getItem(SAVE_KEY))
    }
    const thisPage = id
    index = savedObj.e.findIndex(item => item === id)
    if (index >= 0) removeSave(index) // item is in array 
    else addSave(thisPage)

  }

  return (
    <SaveButton onClick={(e) => {
      updateSave(e)
      e.preventDefault()
    }}>
      {saveState ? "Unsave" : "Save"}
    </SaveButton>
  )
}

export default Save