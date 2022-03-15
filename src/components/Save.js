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
const Save = ({id, title, group, slug}) => {
  const [saveState, setSaveState] = useState(false);
  let savedObj = {
    "n":"My Saved Profile",
    "e":[]
  } 
  if(typeof window !== `undefined`){
    if(localStorage.getItem('save')){
      try {
        const saveCheck = JSON.parse(localStorage.getItem('save'))

        // both NAME and ELEMENTS ARRAY are in the wrong format
        if (typeof saveCheck.n !== 'string' && 
        Object.prototype.toString.call(saveCheck.e) !== '[object Array]'){
          savedObj.n = "My Saved Profile"
          savedObj.e = []
        }
        // NAME is in the wrong format
        else if(typeof saveCheck.n !== 'string') {
          savedObj.n = "My Saved Profile"
        } 
        // ELEMENTS ARRAY is in the wrong format
        else if (Object.prototype.toString.call(saveCheck.e) !== '[object Array]'){
          savedObj.e = []
          console.log(savedObj.e)
        }
        // import localStorage into save
        else {
          savedObj = JSON.parse(localStorage.getItem('save'))
          console.log('oops')
        }
      } catch (error) {
        alert("Invalid save profile detected. Clearing save to prevent site crash.")
      }
    }
  }
  
  let index = savedObj.e.findIndex(item => item === id)
  useEffect(() => {
    setSaveState(index >= 0);
    let newSavedObj = {
      "n":savedObj.n,
      "e":savedObj.e
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) // make save into a CONST VARIABLE later
  }, [index]);

  // FIX 'n' TO PULL FROM LOCALSTORAGE
  const addSave = (thisPage) => {
    const newSavedItems = [thisPage].concat(savedObj.e) // [{"g":"tec","s":"wrist-thump"}...]
    let newSavedObj = {
      "n":savedObj.n,
      "e":newSavedItems
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) // make save into a CONST VARIABLE later
    setSaveState(true)
  }
  const removeSave = (index) => {
    savedObj.e.splice(index, 1)
    const newSavedItems = savedObj.e
    //this can be its own function
    let newSavedObj = {
      "n":savedObj.n,
      "e":newSavedItems
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) 
    setSaveState(false)
  }
  const updateSave = () => {
    if (localStorage.getItem('save')) { // localStorage of save already exists
      savedObj = JSON.parse(localStorage.getItem('save')) //gets savedObj
    }

    //const thisPage = {t:title,g:group,s:slug}
    const thisPage = id
    index = savedObj.e.findIndex(item => item === id)

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

