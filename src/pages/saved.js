import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router";
import { v } from '../styles/variables'
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

// Remove stuff from here
const SavedTechnique = styled.div`
  background-color: var(--color-bg, ${COLORS.bg.light}) !important;
  transition: 0.3s;
  :hover {
    border: none !important;
    background-color: var(--color-bg, ${COLORS.bg.light}) !important;
    margin-left: 1em;
  }
  color: var(--color-text, ${COLORS.text.light}) !important;
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

  const hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
  }

  let savedObj = {
    "n": "My Saved Profile",
    "e": []
  }

  if (typeof window !== `undefined` && localStorage.getItem('save')) {
    try {
      const saveCheck = JSON.parse(localStorage.getItem('save'))

      // techniques array has duplicate ids
      if (hasDuplicates(saveCheck.e)) {
        throw new Error("Import code has duplicate ID")
      }
      // both NAME and ELEMENTS ARRAY are in the wrong format
      if (typeof saveCheck.n !== 'string' &&
        Object.prototype.toString.call(saveCheck.e) !== '[object Array]') {
        savedObj.n = "My Saved Profile"
        savedObj.e = []
      }
      // NAME is in the wrong format
      else if (typeof saveCheck.n !== 'string') {
        savedObj.n = "My Saved Profile"
      }
      // ELEMENTS ARRAY is in the wrong format
      else if (Object.prototype.toString.call(saveCheck.e) !== '[object Array]') {
        savedObj.e = []
      }
      // import localStorage into save
      else {
        savedObj = JSON.parse(localStorage.getItem('save'))
      }
    } catch (error) {
      alert("Invalid save profile detected. Clearing save to prevent site crash.\n" + error)
    }
  }

  const [savedObjState, setSavedObjState] = useState(savedObj)
  const [techniques, setTechniques] = useState(savedObjState.e)
  const [name, setName] = useState(savedObjState.n)

  useEffect(() => {
    setTechniques(savedObjState.e)
    setName(savedObjState.n)
    console.log("savedObjState useEffect")
  }, [savedObjState])

  useEffect(() => {
    let newSavedObj = { "n": savedObjState.n, "e": techniques }
    localStorage.setItem('save', JSON.stringify(newSavedObj))
    document.getElementById("exportText").value = JSON.stringify(newSavedObj)
  }, [savedObjState.n, techniques])

  useEffect(() => {
    let newSavedObj = { "n": name, "e": savedObjState.e }
    localStorage.setItem('save', JSON.stringify(newSavedObj))
    document.getElementById("exportText").value = JSON.stringify(newSavedObj)
  }, [name, savedObjState.e]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const remindValidSave = () => {
    document.getElementById("importText").value = ""
    document.getElementById("importText").placeholder = "Please use a valid save"
  }
  const resetValidSave = () => {
    document.getElementById("importText").value = ""
    document.getElementById("importText").placeholder = "Paste your save code here"
    document.getElementById("importText").placeholder = "Paste your save code here"
  }

  const exportSave = () => {
    navigator.clipboard.writeText(localStorage.getItem('save'))
    document.getElementById("copyButton").innerHTML = "Copied!"
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy Save"
    }, 2 * 1000);
  }

  const importSave = () => {
    try {
      if (document.getElementById("importText").value) {
        let newSavedObj = JSON.parse(document.getElementById("importText").value)
        if (newSavedObj.n.length > 100) {
          newSavedObj.n = newSavedObj.n.substring(0, 97) + "..."
        }
        if (hasDuplicates(newSavedObj.e)) {
          remindValidSave()
          return
        }
        setSavedObjState(newSavedObj)
        resetValidSave()
        document.getElementById("exportText").value = localStorage.getItem('save')
      } else {
        remindValidSave()
      }
    } catch (error) {
      remindValidSave()
    }

  }

  const clearSave = () => {
    if (window.confirm("This will delete your save. Click OK to continue.")) {
      setSavedObjState({ "n": "", "e": [] })
      resetValidSave()
    }
  }

  const clearItem = (id) => {
    document.getElementById(id.toString()).style.display = "none"
    const temp = techniques
    const index = temp.indexOf(id)
    if (index > -1) temp.splice(index, 1)
    let newSavedObj = {
      "n": savedObjState.n,
      "e": temp
    }
    setSavedObjState(newSavedObj)
  }
  const location = useLocation().pathname

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(techniques)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTechniques(items)
  }

  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <SaveNameInput>
        <SaveNameIcon>
          <RiPencilFill />
        </SaveNameIcon>
        <input id="saveName" type="text" maxLength="100" onChange={(e) => handleNameChange(e)} value={name} />
      </SaveNameInput>
      {techniques.length === 0 ? <p>You do not have any saved pages</p> : <></>}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="techniques" >
          {(provided) => (
            <TechniqueList {...provided.droppableProps} ref={provided.innerRef}>
              {techniques?.map((id, index) => {
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
        <textarea id="exportText" rows="1" defaultValue={JSON.stringify(savedObjState)} disabled></textarea>
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