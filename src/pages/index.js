import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"
import { v, maxq, SAVE_KEY } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { btnReset } from "../styles/variables"
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import IdFindData from "../components/IdFindData"
import { Link } from 'gatsby';

const DeleteItemButtonContainer = styled.div`
  position: absolute;
  top: calc(50% - 18px);
  right: 9px;
`
const DeleteItemButton = styled.span`
  background: transparent;
  opacity: 50%;
  transition: 0.2s;
  :hover {
    background: var(--color-primary, ${COLORS.primary.light});
    cursor: pointer;
    color: white;
    opacity: 100%;
  }
  border-radius: ${v.borderRadius};
  padding: 5px;
  font-size: 26px; 
  display: flex;
  z-index: 99;
`
const TechniqueList = styled.ul`
  padding-bottom: 1em;
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  transition: 0.3s ease padding;
  
`
const SavedTechnique = styled.div`
  background-color: var(--color-bg, ${COLORS.bg.light}) !important;
  transition: 0.3s ease margin;
  :hover {
    margin-left: 1em;
  }
  border-radius: ${v.borderRadius};
  user-select: none;
  position: relative;
  width: 100%;
  h3 {
    margin-bottom: 0;
  }
  cursor: pointer;
`
const SaveNameInput = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.mdSpacing} 0 0;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 20px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
  margin-bottom: 1em;
`
const SaveNameIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`
const ExportSave = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  textarea {
    resize: none;
    white-space: nowrap;
    width:100%;
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    background: transparent;
    color: ${COLORS.placeholder};
    ::-webkit-scrollbar {
      display: none;
    }
    padding: calc(${v.smSpacing} * 1.3);
  }
  button {
    width:30%;
    padding: calc(${v.smSpacing} * 1.3);
    color: #fff;
    background-color: var(--color-primary, ${COLORS.primary.light});
    border: none;
    border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      background: #972036;
    }
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -2em;
      top: 0;
      width: 2em;
      height: 100%;
      background: linear-gradient(to left, var(--color-bg, ${COLORS.bg.light}), transparent); 
    }
  }
  ${maxq[1]} {
    button {
      width: 50%;
    } 
  }
  display: flex;
  align-items:center;
  margin-bottom: ${v.mdSpacing};
`
const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const DeleteButton = styled.button`
  width:20%; 
  padding: calc(${v.smSpacing} * 1.3);
  color: #fff;
  background-color: var(--color-primary, ${COLORS.primary.light});
  border: none;
  border-radius: ${v.borderRadius};
  ${maxq[1]} {
    width:32%;
  }
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    background: #972036;
  }
`
const HelpLinkContainer = styled(Link)`
    padding: 0 !important;
`

const HelpLinkDiv = styled.div`
    padding: ${v.mdSpacing} !important;
    color: var(--color-text, ${COLORS.text.light}) !important;
    background-color: transparent !important;
    :hover {
        border: none !important;
        background-color: transparent !important;
        color: var(--color-link, ${COLORS.link.light}) !important;
    }
`
const Saved = () => {
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
    if (window.confirm("This will delete your save. Click OK to continue.")) {
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
    const newName = e.target.value.replace(/[-=~]/g, '')
    let newSaved = { "n": newName, "e": saved.e }
    setSaved(newSaved)
  }
  const handleTechniqueOrderChange = (result) => {
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
        console.log('should be here')
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
  }, [saved])
  return (
    <Layout title="My Guitardex">
      <h1>My Guitardex</h1>
      <SaveNameInput>
        <SaveNameIcon>
          <HiOutlinePencilAlt />
        </SaveNameIcon>
        <input id="saveName" type="text" placeholder="Untitled" maxLength="100" onChange={(e) => handleNameChange(e)} value={saved.n} />
      </SaveNameInput>
      {saved.e.length === 0 ?
        <TechniqueList>
          <li>
            <SavedTechnique>
              <HelpLinkContainer to='t'>
                <HelpLinkDiv>
                  <h3>Start adding techniques!</h3>
                  <p>Click here to browse techniques</p>
                </HelpLinkDiv>
              </HelpLinkContainer>
            </SavedTechnique>
          </li>
          <li>
            <SavedTechnique>
              <HelpLinkContainer to='help'>
                <HelpLinkDiv>
                  <h3>Need help?</h3>
                  <p>Click here for help</p>
                </HelpLinkDiv>
              </HelpLinkContainer>
            </SavedTechnique>
          </li>

        </TechniqueList>
        :
        <></>
      }
      <DragDropContext onDragEnd={handleTechniqueOrderChange}>
        <Droppable droppableId="techniques" >
          {(provided) => (
            <TechniqueList iqueList {...provided.droppableProps} ref={provided.innerRef}>
              {saved.e?.map((id, index) => {
                return (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <li id={id.toString()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <SavedTechnique>
                          <IdFindData id={id} />
                          <DeleteItemButtonContainer>
                            <DeleteItemButton onClick={() => { clearItem(id) }}>
                              <HiOutlineTrash />
                            </DeleteItemButton>
                          </DeleteItemButtonContainer>
                        </SavedTechnique>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </TechniqueList>
          )}
        </Droppable>
      </DragDropContext>
      <ExportSave>
        <textarea id="exportURL" rows="1" defaultValue={"https://gdex.cc/?" + encode(saved)} disabled></textarea>
        <button id="copyURLButton" onClick={exportURL}>Copy Link</button>
      </ExportSave>
      <DeleteButtonContainer>
        <DeleteButton onClick={clearSave}>Delete Save</DeleteButton>
      </DeleteButtonContainer>
    </Layout>
  )
}
export default Saved