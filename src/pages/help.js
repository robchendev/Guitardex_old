import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { CustomOL, CustomUL } from "../styles/pagestyles/help"

const Help = () => {
  return (
    <Layout title="Help">
      <h1>Help</h1>
      <h4>Reading Technique Pages</h4>
      <CustomUL>
        <li>Some techniques expected you to know a 'Required' technique linked at the top of the page. Do not start a technique without knowing them.</li> 
        <li>Technique's numbers do not represent the order you should learn them in.</li> 
        <li>If you're left-handed, treat every "right" instruction as "left".</li>
      </CustomUL>
      <br />
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
        <li>Go to the link someone else sent you (ex: <Link to="/?Common-Techniques~16.14.22.17.1.2.4.5.6.7.10.11.12">gdex.cc/?Common-Techniques~16.14.22.17.1.2.4.5.6.7.10.11.12</Link>)</li>
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