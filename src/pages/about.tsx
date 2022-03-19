import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"

const Text = styled.p`

`



const About = () => {
  return (
    <Layout title="About">
      <h1>About</h1>
      <h2>About me</h2>
      <p>
        My name is Robert Chen, I am a fingerstyle guitarist and fingerstyle transcriber from Canada and I'm the lead developer for this project.  If you're interested in my music, I've included my YouTube and Spotify links below.
      </p>
      <p>
        <a href="https://github.com/chendumpling/">GitHub</a> - <a href="https://www.youtube.com/c/RobertChen/">YouTube</a> - <a href="https://open.spotify.com/artist/4JQzZTSBYflrvsi3fiPJmZ">Spotify</a>
      </p><br />
      <h2>About the team</h2>
      <p>
        I will be outsourcing help from some friends who excel in fingerstyle if they're willing to help make content for this site. These are the wonderful people who have agreed to help me on the site so far:
      </p>
      <p>
        <a href="https://www.youtube.com/c/EddievanderMeer">Eddie van der Meer</a><br />
        <a href="https://www.youtube.com/channel/UCv5lp4CKs7tdTdJwTknjrpA">Bob Ma</a>
      </p>
    </Layout>
  )
}

export default About