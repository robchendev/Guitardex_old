import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"
import { v, maxq, SAVE_KEY } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { btnReset } from "../styles/variables"
import { RiPencilFill } from 'react-icons/ri'
import { FiTrash2 } from 'react-icons/fi'

// react beautiful dnd
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import IdFindData from "../components/IdFindData"
import { Link } from "gatsby"

// calc(50% - ${n}px) where n is h3 font size / 2
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
`

const SavedTechnique = styled.div`
  background-color: var(--color-bg, ${COLORS.bg.light}) !important;
  transition: 0.3s;
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
    font-size: 16px;
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
  }
  button {
    width:30%;
    padding: ${v.smSpacing};
    color: #fff;
    background-color: var(--color-primary, ${COLORS.primary.light});
    border: none;
    border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  }
  ${maxq[1]} {
    button {
      width: 50%;
    } 
  }
  display: flex;
  align-items:center;
  margin-bottom: ${v.smSpacing};
`
const ImportSave = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  input {
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
    color: inherit;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  display: flex;
  align-items:center;
  margin-bottom: ${v.smSpacing};
`

// This is bad practice. Change it.
const LinkButton = styled(Link)`
  color: #fff !important;
  background-color: var(--color-primary, ${COLORS.primary.light}) !important;
  :hover {
    border: none !important;
    background-color: var(--color-primary, ${COLORS.primary.light}) !important;
  }
  width:30%;
  padding: ${v.smSpacing} !important;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${maxq[1]} {
    width: 50%;
  }
`
const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const DeleteButton = styled.button`
  width:20%; 
  padding: ${v.smSpacing};
  color: #fff;
  background-color: var(--color-primary, ${COLORS.primary.light});
  border: none;
  border-radius: ${v.borderRadius};
  ${maxq[1]} {
    width:32%;
  }
`

const Saved = () => {



  const hasDupes = (array) => (new Set(array)).size !== array.length
  let savedObj = {
    "n": "",
    "e": []
  }


  const remindValidSave = (v) => {
    document.getElementById("importText").value = ""
    let textToUpdate = v === 'remind' ? "Please use a valid save" : "Paste your save code here"
    document.getElementById("importText").placeholder = textToUpdate
  }

  const exportSave = () => {
    navigator.clipboard.writeText(encode(JSON.parse(localStorage.getItem(SAVE_KEY))))
    document.getElementById("copyButton").innerHTML = "Copied!"
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy Save"
    }, 2 * 1000);
  }

  const exportURL = () => {
    navigator.clipboard.writeText(window.location.href + "?"
      + encode(JSON.parse(localStorage.getItem(SAVE_KEY))))
    document.getElementById("copyURLButton").innerHTML = "Copied!"
    setTimeout(() => {
      document.getElementById("copyURLButton").innerHTML = "Copy URL"
    }, 2 * 1000);
  }

  const importSave = () => {

    try {
      if (document.getElementById("importText").value) {
        let load = document.getElementById("importText").value

        if (load.includes(window.location.href)) {
          load = load.replace(window.location.href + "?", "")
        }

        let newSaved = decode(load)

        if (newSaved.n.length > 100) {
          newSaved.n = newSaved.n.substring(0, 97) + "..."
        }
        if (hasDupes(newSaved.e)) {
          remindValidSave('remind')
          return
        }
        if (window.confirm("Your existing save will be overwritten. Continue?")) {
          setSaved(newSaved)
          remindValidSave('reset')
          document.getElementById("exportText").value =
            encode(JSON.parse(localStorage.getItem(SAVE_KEY)))
          document.getElementById("exportURL").value = window.location.href +
            "?" + document.getElementById("exportText").value
        }
      } else {
        remindValidSave('remind')
      }
    } catch (error) {
      remindValidSave('remind')
    }
  }

  const clearSave = () => {
    if (window.confirm("This will delete your save. Click OK to continue.")) {
      setSaved({ "n": "", "e": [] })
      remindValidSave('reset')
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
    // Fingerstyle-Basics=1.3.2.5.6.10


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
  if (typeof window !== `undefined` && localStorage.getItem(SAVE_KEY)) {
    try {
      if (window.location.search.includes("?")) {
        const stringToImport = window.location.search.replace("?", "")
        let newSaved = decode(stringToImport)
        if (localStorage.getItem(SAVE_KEY) === "{\"n\":\"\",\"e\":[]}") {
          localStorage.setItem('save', JSON.stringify(newSaved))
        }
        else {
          if (window.confirm("This will replace your current save. Continue?")) {
            localStorage.setItem('save', JSON.stringify(newSaved))
          }
        }
        window.history.replaceState({}, document.title, location);
      }
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
      else savedObj = JSON.parse(localStorage.getItem(SAVE_KEY))
    } catch (error) {
      alert("Invalid save profile detected. Clearing save.\n" + error)
    }
  }

  const [saved, setSaved] = useState(savedObj)

  useEffect(() => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved))
    document.getElementById("exportText").value = encode(saved)
    document.getElementById("exportURL").value = window.location.href +
      "?" + document.getElementById("exportText").value
  }, [saved])


  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <SaveNameInput>
        <SaveNameIcon>
          <RiPencilFill />
        </SaveNameIcon>
        <input id="saveName" type="text" placeholder="Save Name" maxLength="100" onChange={(e) => handleNameChange(e)} value={saved.n} />
      </SaveNameInput>
      {saved.e.length === 0 ? <p>You do not have any saved pages</p> : <></>}
      <DragDropContext onDragEnd={handleTechniqueOrderChange}>
        <Droppable droppableId="techniques" >
          {(provided) => (
            <TechniqueList {...provided.droppableProps} ref={provided.innerRef}>
              {saved.e?.map((id, index) => {
                return (
                  <Draggable key={id} draggableId={id.toString()} index={index}>
                    {(provided) => (
                      <li id={id.toString()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <SavedTechnique>
                          <IdFindData id={id} />
                          <DeleteItemButtonContainer>
                            <DeleteItemButton onClick={() => { clearItem(id) }}>
                              <FiTrash2 />
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
        <textarea id="exportText" rows="1" defaultValue={encode(saved)} disabled></textarea>
        <button id="copyButton" onClick={exportSave}>Copy Save</button>
      </ExportSave>
      <ExportSave>
        <textarea id="exportURL" rows="1" defaultValue={window.location.href + "?" + encode(saved)} disabled></textarea>
        <button id="copyURLButton" onClick={exportURL}>Copy URL</button>
      </ExportSave>
      <ImportSave>
        <input id="importText" type="text" placeholder="Paste your save code here"></input>
        {/* i WOULD make an on Enter key event here, but that wont work well with <Link> */}
        <LinkButton onClick={importSave} to={location}>Load Save</LinkButton>
      </ImportSave>
      <DeleteButtonContainer>
        <DeleteButton onClick={clearSave}>Delete Save</DeleteButton>
      </DeleteButtonContainer>
    </Layout>
  )
}
export default Saved