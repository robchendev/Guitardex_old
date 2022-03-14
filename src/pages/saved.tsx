import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"

const SavedTechnique = styled.div`

`

const Saved = () => {
  let savedObj = {
    "name":"My Saved Profile",
    "items":[]
  } 
  if(window){
    if(localStorage.getItem('save')){
      savedObj = JSON.parse(localStorage.getItem('save'))
    }
  }
  
  console.log(savedObj)
  
  return (
    <Layout title="Saved">
      <h1>Saved</h1>
      <h2>{savedObj.name}</h2>
      <p><strong>Notice for testers:</strong> For now this page only displays saved techniques. There will be clickable links, a way to re-order and delete saved pages, and a way to edit the "My Saved Profile" name. It will be implemented later.</p>
      {/** Make this into <ul> later on for react-reorder */}
      {savedObj.items.map(({t,g,s}) => (
        <SavedTechnique>
          <p>{t}: {g}/{s}</p>
        </SavedTechnique>
      ))}
      
    </Layout>
  )
  //{item.g}{item.s}
}

export default Saved