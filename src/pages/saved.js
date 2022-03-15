import React, { Component, useCallback, useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router";

// react beautiful dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import IdFindData from "../components/IdFindData"
import { Link } from "gatsby";


const SavedTechnique = styled.div`

`
const ExportSave = styled.div`
  textarea, input {
    white-space:nowrap;
    width:80%;
    overflow: scroll;
    overflow-y: hidden;
  }
  button {
    width:20%;
    height:100%;
  }
  display: flex;
  align-items:center;
`

const Saved = () => {
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

  const [name, setName] = useState(savedObj.n)
  useEffect(() => {
    let newSavedObj = {
      "n":name,
      "e":savedObj.e
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) // make save into a CONST VARIABLE later
    document.getElementById("exportText").value = localStorage.getItem('save') 
  }, [name]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const exportSave = () => {
    // This is delayed by one character input, SHOULD BE FIXED NOW
    navigator.clipboard.writeText(localStorage.getItem('save'))
  }
  const importSave = () => {
    localStorage.setItem('save', document.getElementById("importText").value)
    //window.location.reload();
  }

  const location = useLocation().pathname

  const onDragEnd = useCallback(() => {
  }, [])


  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <ul>
        <li>[x] edit save name</li>
        <li>[x] store save name in localStorage</li>
        <li>[x] store ids in localStorage</li>
        <li>[x] read ids to get query data (title, group, slug)</li>
        <li>[x] export/import save via textbox copy and paste</li>
        <li>[ ] reorder and delete the saved pieces (using Atlassian beautiful-dnd)</li>
        <li>[ ] clear the entire save</li>
        <li>[ ] make everything look nice</li>
      </ul><br />
      <ExportSave>
        <textarea id="exportText" rows="1" >{JSON.stringify(savedObj)}</textarea>
        <button onClick={exportSave}>Copy Save</button>
      </ExportSave>
      <ExportSave>
        <input id="importText" type="text" placeholder="paste your save code here"></input>
        <Link onClick={importSave} to={location}>Import Save</Link>
      </ExportSave>
      <input type="text" onChange={(e) => handleNameChange(e)} value={name} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="saved" > 
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {savedObj.e.map((id) => {
                return (
                  <li key={id}>
                    <SavedTechnique>
                      <IdFindData id={id}/>
                    </SavedTechnique>
                  </li>
                )
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      
    </Layout>
  )
  //{item.g}{item.s}
}

export default Saved