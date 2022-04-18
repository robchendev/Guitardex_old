import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { CustomOL, CustomUL } from "../styles/pagestyles/help"

const Help = () => {
  return (
    <Layout title="Help">
      <h1>Help</h1>
      <h4>Add/Remove Techniques to Your Guitardex</h4>
      <CustomOL>
        <li>Go to the <Link to="/t">Techniques</Link> library</li>
        <li>Click the save icon at the right of the technique you want saved</li>
        <li>Go to your <Link to="/">Guitardex</Link> to view saved techniques</li>
      </CustomOL>
      <br />
      <h4>Edit Your Guitardex</h4>
      <CustomOL>
        <li>Go to your <Link to="/">Guitardex</Link></li>
        <li>Do any of the following:</li>
        <CustomUL>
          <li>Re-order your techniques by dragging and dropping them</li>
          <li>Click the Guitardex's name to edit it</li>
          <li>Delete techniques using the trash bin buttons</li>
        </CustomUL>
        <li>Changes are automatically saved</li>
      </CustomOL>
      <br />
      <h4>Share Your Guitardex</h4>
      <CustomOL>
        <li>Go to your <Link to="/">Guitardex</Link></li>
        <li>Copy your generated share URL and paste it wherever you want</li>
      </CustomOL>
      <br />
      <h4>View Someone Else's Guitardex</h4>
      <CustomOL>
        <li>Go to the link someone else sent you (ex: <a href="https://gdex.cc/?Common-Techniques~12.1.3.2.5.6">gdex.cc/?Common-Techniques~12.1.3.2.5.6</a>)</li>
        <li>Click OK if prompted</li>
      </CustomOL>
      <br />
      <h4>Delete/Reset Your Guitardex</h4>
      <CustomOL>
        <li>Go to your <Link to="/">Guitardex</Link></li>
        <li>Click 'Delete Dex'</li>
      </CustomOL>
    </Layout> 
  )
}

export default Help