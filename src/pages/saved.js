import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router";
import { v, SAVE_KEY } from '../styles/variables'
import { COLORS } from '../styles/theme'
import { btnReset } from "../styles/variables";
import { RiPencilFill } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'

// react beautiful dnd
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import IdFindData from "../components/IdFindData"
import { Link } from "gatsby";

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
  display: flex;
  align-items:center;
  margin-bottom: ${v.smSpacing};
`
const ImportSave = styled.div`
  background: var(--color-bg, ${COLORS.bg.light});
  border-radius: ${v.borderRadius};
  border: 1px solid var(--color-bg3, ${COLORS.bg3.light});
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
  button {
    width:30%;
    padding: ${v.smSpacing};
    color: #fff;
    background-color: var(--color-primary, ${COLORS.primary.light});
    border: none;
    border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
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
`
const DeleteButton = styled.button`
  width:20%; 
  padding: ${v.smSpacing};
  color: #fff;
  background-color: var(--color-primary, ${COLORS.primary.light});
  border: none;
  border-radius: ${v.borderRadius};
`

const Saved = () => {

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

  const [saved, setSaved] = useState(savedObj)

  useEffect(() => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved))
    document.getElementById("exportText").value = JSON.stringify(saved)
  }, [saved])

  const remindValidSave = (v) => {
    document.getElementById("importText").value = ""
    let textToUpdate = v === 'remind' ? "Please use a valid save" : "Paste your save code here"
    document.getElementById("importText").placeholder = textToUpdate
  }

  const exportSave = () => {
    navigator.clipboard.writeText(localStorage.getItem(SAVE_KEY))
    document.getElementById("copyButton").innerHTML = "Copied!"
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy Save"
    }, 2 * 1000);
  }

  const importSave = () => {
    try {
      if (document.getElementById("importText").value) {
        let newSaved = JSON.parse(document.getElementById("importText").value)
        if (newSaved.n.length > 100) {
          newSaved.n = newSaved.n.substring(0, 97) + "..."
        }
        if (hasDupes(newSaved.e)) {
          remindValidSave('remind')
          return
        }
        setSaved(newSaved)
        remindValidSave('reset')
        document.getElementById("exportText").value = localStorage.getItem(SAVE_KEY)
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
    let newSaved = { "n": e.target.value, "e": saved.e }
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

  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <SaveNameInput>
        <SaveNameIcon>
          <RiPencilFill />
        </SaveNameIcon>
        <input id="saveName" type="text" maxLength="100" onChange={(e) => handleNameChange(e)} value={saved.n} />
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
                              <MdClose />
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
        <textarea id="exportText" rows="1" defaultValue={JSON.stringify(saved)} disabled></textarea>
        <button id="copyButton" onClick={exportSave}>Copy Save</button>
      </ExportSave>
      <ImportSave>
        <input id="importText" type="text" placeholder="Paste your save code here"></input>
        {/* i WOULD make an on Enter key event here, but that wont work well with <Link> */}
        <LinkButton onClick={importSave} to={location}>Load Save</LinkButton>
      </ImportSave>
      <DeleteButton onClick={clearSave}>Delete Save</DeleteButton>
    </Layout>
  )
}
export default Saved