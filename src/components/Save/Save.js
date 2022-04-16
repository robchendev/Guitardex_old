import React, { useState, useEffect } from 'react'
import { SAVE_KEY } from '../../styles/globalstyles/variables'
import { ImCheckmark } from 'react-icons/im'
import { BiSave } from 'react-icons/bi'
import { SaveButton, UnChecked, Checked } from './styles'

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
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved)) 
  }, [index, savedObj.n, savedObj.e]);

  const addSave = (thisPage) => {
    const newSavedItems = savedObj.e.concat(thisPage) // [{"g":"tec","s":"wrist-thump"}...]
    let newSaved = { "n": savedObj.n, "e": newSavedItems }
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved))
    setSaveState(true)
  }

  const removeSave = (index) => {
    savedObj.e.splice(index, 1)
    const newSavedItems = savedObj.e
    let newSaved = { "n": savedObj.n, "e": newSavedItems }
    localStorage.setItem(SAVE_KEY, JSON.stringify(newSaved))
    setSaveState(false)
  }

  const updateSave = () => {
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
      updateSave()
      e.preventDefault()
    }}>
      {saveState ?
        <Checked><ImCheckmark /></Checked> : <UnChecked><BiSave /></UnChecked>
      }
    </SaveButton>
  )
}

export default Save