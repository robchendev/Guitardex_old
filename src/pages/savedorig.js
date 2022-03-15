import React, { Component, useCallback, useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"

// react beautiful dnd
import { DragDropContext, Droppable } from "react-beautiful-dnd"


const SavedTechnique = styled.div`

`

const Saved = () => {

  
  let savedObj = {
    "name":"My Saved Profile",
    "items":[]
  } 
  if(typeof window !== `undefined`){
    if(localStorage.getItem('save')){
      savedObj = JSON.parse(localStorage.getItem('save'))
    }
  }
  console.log(savedObj)

  const [name, setName] = useState(savedObj.name)
  useEffect(() => {
    let newSavedObj = {
      "name":name,
      "items":savedObj.items
    }
    localStorage.setItem('save', JSON.stringify(newSavedObj)) // make save into a CONST VARIABLE later
  }, [name]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const onDragEnd = useCallback(() => {

  }, [])
  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <input type="text" onChange={(e) => handleNameChange(e)} value={name} />
      <p><strong>Notice for testers:</strong> For now this page only displays saved techniques. There will be clickable links, a way to re-order and delete saved pages, and a way to edit the "My Saved Profile" name. It will be implemented later.</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="saved" > 
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {savedObj.items.map(({t,g,s}) => {
                return (
                  <li key={t}>
                    <SavedTechnique>
                      <p>{t}: {g}/{s}</p>
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