import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"

const Text = styled.p`
  font-size: 18px;
`
const Container = styled.div`
  max-width: 1000px;
`

const Index = () => {
  return (
    <Layout title="Home">
      <Container>
        <h1>This website is under development, if you're viewing from a mobile device, this page will look terrible.</h1>
        <h2>Why I am developing this website</h2>
        <Text>
        Fingerstyle is a young style of guitar rising in popularity. Due to its infancy in
        history, it is not an officially recognized style of guitar by most music
        conservatories and is not documented heavily on. As a consequence, many avid
        learners of the style teach themselves without mentors and peers, causing them to
        develop incomplete foundations.
        </Text>
        <Text>
        To help solve this problem, I am developing this website to act as a centralized source of fingerstyle information.
        </Text>
        <h2>What the pricetag is</h2>
        <Text>
        This website will be <strong>completely free</strong>. Making this website's contents paid goes against the entire reason this website is being made in the first place. There won't be any of that "free trial for 7 days" crap. I'm intending for this site to be fully self-sufficient through donations and/or sponsors. Yes, there may be ads from possible sponsors, but I'll make sure they're not intrusive nor obnoxiously shoved in your face.
        </Text>
        <h2>How you can help</h2>
        <Text>
        Fill out <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">this survey</a>. I'm not 100% sure what the average aspiring fingerstyle guitarist wants to learn, so having a set of opinions from the fingerstyle community would greatly help the development of this site.
        </Text>
        <h2>Fingerstyle Central Community</h2>
        <Text>
        Join our <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">Discord Server</a>!
        </Text>
        <h2>About me</h2>
        <Text>
        My name is Robert Chen, I am a fingerstyle guitarist and fingerstyle transcriber from Canada and I'm the lead developer for this project.  If you're interested in my music, I've included my YouTube and Spotify links below.
        </Text>
        <Text>
        <a href="https://github.com/chendumpling/">GitHub</a> - <a href="https://www.youtube.com/c/RobertChen/">YouTube</a> - <a href="https://open.spotify.com/artist/4JQzZTSBYflrvsi3fiPJmZ">Spotify</a>
        </Text>
        <h2>About the team</h2>
        <Text>
        I will be outsourcing help from some friends who excel in fingerstyle if they're willing to help make content for this site. These are the wonderful people who have agreed to help me on the site so far:
        </Text>
        <Text>  
          <p><a href="https://www.youtube.com/c/EddievanderMeer">Eddie van der Meer</a><br />
          <a href="https://www.youtube.com/channel/UCv5lp4CKs7tdTdJwTknjrpA">Bob Ma</a></p>
        </Text>
      </Container>
    </Layout>
  )
}

export default Index