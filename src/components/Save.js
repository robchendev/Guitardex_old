import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { v, SAVE_KEY } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { ImCheckmark } from 'react-icons/im'

const SaveButton = styled.button`
    font-family: 'Fredoka';
    font-size: 22px;
    
    letter-spacing: .6px;
    height: 100%;
    //padding: calc(${v.smSpacing} * 1.5) 0;
    border: none;


    border-radius: ${v.borderRadius};
    margin-bottom: ${v.mdSpacing};
    cursor: pointer;
    transition: 0.3s ease;

    display: inline-flex;
    justify-content: center;
`

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-bg2, ${COLORS.bg2.light});
  border-radius: ${v.borderRadius};

  padding-top: 5px;
  border: 2px solid var(--color-text, ${COLORS.text.light});
  width: 2em;
  height: 2em;


  :hover {

    border: 2px solid var(--color-text, ${COLORS.text.light});
    filter: invert(0.1);
  }
`
const UnChecked = styled.div`
  color: var(--color-bg2, ${COLORS.bg2.light});
`
const Checked = styled.div`
  color: var(--color-text, ${COLORS.text.light});
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
      {saveState ? <Checkbox><Checked><ImCheckmark /></Checked></Checkbox> : <Checkbox><UnChecked><ImCheckmark /></UnChecked></Checkbox>}
    </SaveButton>
  )
}

export default Save