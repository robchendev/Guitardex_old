import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import { useLocation } from "@reach/router"
import { SAVE_KEY } from '../styles/globalstyles/variables'
import { HiOutlineTrash } from 'react-icons/hi'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import DexItem from "../components/DexItem/DexItem"
import { MdDragIndicator } from 'react-icons/md'
import { TrashContainer, Trash, TrashIcon, DexList, EmptyList, EmptyListEntries, SaveNameInput, ExportSave, DeleteAllContainer, DeleteAll, HelpLinkDiv, SavedDexItem, DragIconContainer, MoveableContainer, EmptyListEntryContainer, InputCounter, InputCounterContainer, InputCounterInner, MobileReminder } from "../styles/pagestyles/index"
import { Link } from 'gatsby';

const Saved = () => {
  function handleEnterKey(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  }
  function handleBackButton(event) {
    event.preventDefault();
    event.target.blur();
  }


  const hasDupes = (array) => (new Set(array)).size !== array.length
  let savedObj = {
    "n": "",
    "e": []
  }
  const exportURL = () => {
    navigator.clipboard.writeText("https://gdex.cc/?"
      + encode(JSON.parse(localStorage.getItem(SAVE_KEY))))
    document.getElementById("copyURLButton").innerHTML = "Copied!"
    setTimeout(() => {
      document.getElementById("copyURLButton").innerHTML = "Copy Link"
    }, 2 * 1000);
  }
  const clearSave = () => {
    if (window.confirm("This will clear your guitardex. Click OK to continue.")) {
      setSaved({ "n": "", "e": [] })
    }
  }
  const clearItem = (id) => {
    document.getElementById(id.toString()).style.display = "none"
    const temp = saved.e
    const index = temp.indexOf(id)
    if (index > -1) temp.splice(index, 1)
    let newSaved = {
      "n": saved.n,
      "e": temp
    }
    setSaved(newSaved)
  }
  const location = useLocation().pathname
  const handleNameChange = (e) => {
    const newName = e.target.value.replace(/[-=~']/g, '')    
    let newSaved = { "n": newName, "e": saved.e }
    setSaved(newSaved)
  }
  const handleDexOrderChange = (result) => {
    if (!result.destination) return
    const items = Array.from(saved.e)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    let newSaved = { "n": saved.n, "e": items }
    setSaved(newSaved)
  }
  const encode = (objectToEncode) => {
    const encodedItems = objectToEncode.e.join('.')
    if (objectToEncode.n === "") return encodedItems
    return objectToEncode.n.replace(/\s/g, '-') + '~' + encodedItems
  }
  const decode = (stringToDecode) => {
    let decoded = []
    let result = { "n": "", "e": [] }
    if (stringToDecode.includes("~")) {
      decoded = stringToDecode.split("~")
    } else { // Only Second half
      decoded = [stringToDecode]
    }
    // If saveName=1.2.3
    if (decoded.length === 2) {
      const decodedText = decoded[0].replace(/-/g, ' ')
      let decodedItems = []
      // check if 1.2.3 has number
      if (!(/\d/.test(decoded[1]))) {
        return { "n": decodedText, "e": decodedItems }
      }
      // If saveName=1.2.3 or saveName
      else if (decoded[1] !== '') {
        decodedItems = decoded[1].split(".").map(function (item) {
          return parseInt(item, 10);
        });
      }
      // If saveName= do nothing, since decodedItems is set to []
      return { "n": decodedText, "e": decodedItems }
    }
    else if (decoded.length === 1) {
      let decodedText = ""
      let decodedItems = []
      // if not an empty string
      if (decoded[0] !== '') {
        // If 2.4 (string has numbers)
        if (/\d/.test(decoded[0])) {
          decodedItems = decoded[0].split(".").map(function (item) {
            return parseInt(item, 10);
          })
        }
        // If "" (string has no numbers), or asdfg, the save will clear
        else return false
      }
      result = { "n": decodedText, "e": decodedItems }
    }
    // Decoded array is >2 or 0 length
    else return false
    return result
  }
  let hasUrl = false
  if (typeof window !== `undefined`) {
    try {
      let stringToImport = ""
      let newSaved = {}
      if (window.location.search.includes("?")) {
        stringToImport = window.location.search.replace("?", "")
        newSaved = decode(stringToImport)
        window.history.replaceState({}, document.title, location);
        // If save is NOT empty or does not exist
        // This will work when save exists OR save is not empty 
        if (hasDupes(newSaved.e)) throw new Error("Save has duplicate ID")
        if (localStorage.getItem(SAVE_KEY) !== null && localStorage.getItem(SAVE_KEY) !== "{\"n\":\"\",\"e\":[]}") {
          if (window.confirm("This will replace your current save. Continue?")) {
            savedObj = newSaved
          }
          else {
            savedObj = JSON.parse(localStorage.getItem(SAVE_KEY))
          }
        }
        else {
          savedObj = newSaved
        }
        hasUrl = true
      }
    }
    catch (error) {
      alert("Invalid save profile detected. Save will not be loaded.\n" + error)
    }
  }
  if (typeof window !== `undefined` && localStorage.getItem(SAVE_KEY)) {
    try {
      const save = JSON.parse(localStorage.getItem(SAVE_KEY))
      if (hasDupes(save.e)) throw new Error("Save has duplicate ID")
      if (typeof save.n !== 'string' &&
        Object.prototype.toString.call(save.e) !== '[object Array]') {
        savedObj.n = ""
        savedObj.e = []
      }
      else if (typeof save.n !== 'string') savedObj.n = ""
      else if (Object.prototype.toString.call(save.e) !== '[object Array]') {
        savedObj.e = []
      }
      else if (!hasUrl) savedObj = JSON.parse(localStorage.getItem(SAVE_KEY)) // PROBLEM
    } catch (error) {
      alert("Invalid save profile detected. Clearing save.\n" + error)
    }
  }
  const [saved, setSaved] = useState(savedObj)
  useEffect(() => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved))
    document.getElementById("exportURL").value = "https://gdex.cc/?" + encode(saved)
    document.getElementById("inputLimit").innerHTML = saved.n.length
  }, [saved])
  
  return (
    <Layout title="My Guitardex">
      <SaveNameInput>
        <input
          autoComplete="off" 
          id="saveName" 
          type="text" 
          placeholder="Edit Name..." 
          maxLength="24" 
          onInput={handleNameChange} 
          value={saved.n} 
          onKeyUp={handleEnterKey}
        />
        <InputCounterContainer>
          <InputCounter>
            <MobileReminder>Click enter when done</MobileReminder>
            <span>
              <span id="inputLimit"></span>
              <span>/24</span>
            </span>
          </InputCounter>
        </InputCounterContainer>
      </SaveNameInput>
      
      {saved.e.length === 0 &&
        <EmptyList>
          <Link to='t'>
            <EmptyListEntryContainer>
              <EmptyListEntries>
                <HelpLinkDiv>
                  <h4>Start adding techniques!</h4>
                  <p>Click here to browse techniques</p>
                </HelpLinkDiv>
              </EmptyListEntries>
            </EmptyListEntryContainer>
          </Link>
          <Link to='help'>
            <EmptyListEntryContainer>
              <EmptyListEntries>
                <HelpLinkDiv>
                  <h4>New to Guitardex?</h4>
                  <p>Click here for help</p>
                </HelpLinkDiv>
              </EmptyListEntries>
            </EmptyListEntryContainer>
          </Link>
        </EmptyList>
      }
      <DragDropContext onDragEnd={handleDexOrderChange}>
        <Droppable droppableId="techniques">
          {(provided) => (
            <DexList {...provided.droppableProps} ref={provided.innerRef}>
              {saved.e?.map((id, index) => {
                return (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <li id={id.toString()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <DragIconContainer>
                            <MdDragIndicator />
                          </DragIconContainer> 
                        <MoveableContainer>
                          <SavedDexItem>
                            <DexItem id={id} />
                            <TrashContainer>
                              <Trash onClick={(e) => {
                                clearItem(id)
                                e.preventDefault()
                              }}> 
                                <TrashIcon>
                                  <HiOutlineTrash />
                                </TrashIcon>
                              </Trash>
                            </TrashContainer>
                          </SavedDexItem>
                        </MoveableContainer>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </DexList>
          )}
        </Droppable>
      </DragDropContext>
      <ExportSave>
        <input id="exportURL" defaultValue={"https://gdex.cc/?" + encode(saved)} disabled></input>
        <button id="copyURLButton" onClick={exportURL}>Copy Link</button>
      </ExportSave>
      <DeleteAllContainer>
        <DeleteAll onClick={clearSave}>Delete Dex</DeleteAll>
      </DeleteAllContainer>
    </Layout>
  )
}
export default Saved