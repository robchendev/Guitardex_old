import React from "react"
import Layout from "../newcomp/Layout/Layout"
import { Link } from "gatsby"
import { CustomUL } from "../styles/pagestyles/about"

const About = () => {
  return (
    <Layout title="About">
      <h1>About</h1>
      <h2>Development Notes</h2>
      <p>View the change log, future plans, and known issues <Link to="/dev">here</Link>.</p>
      <br />
      <h2>Why I Am Developing This Website</h2>
      <p>
        Fingerstyle is a young style of guitar rising in popularity. Due to its infancy in
        history, it is not an officially recognized style of guitar by most music
        conservatories and is not documented heavily on. As a consequence, many avid
        learners of the style teach themselves without mentors and peers, causing them to
        develop incomplete foundations.
      </p>
      <p>
        To help solve this problem, I am developing this website to act as a centralized source of fingerstyle information. As someone who had experienced the severe lack of freely accessible resources while growing my own skills to become a decent fingerstyle guitarist, I want this site to help alleviate the troubles that future guitarists may run into.
      </p><br />
      <h2>How Teachers Can Use This Website</h2>
      <p>
        This website's contents will be built without a specific educational curriculum in mind. However, any teacher can tailor their own curriculums for their students and share it using the Guitardex's sharing feature.
      </p>
      <br />
      <h2>How Learners Can Use This Website</h2>
      <p>
        As this website's technique tutorials will be presented without a curriculum, learners are free to choose whatever techniques they wish to learn as long as they first learn the pre-requisite techniques that are mentioned at the top of each individual technique page. They can then share their own Guitardexes with their peers to easily show them what they are learning, or collaborate together to improve.
      </p>
      <br />
      <h2>How Professional Musicians Can Use This Website</h2>
      <p>
        A professional musician who sells tabs can use this site's main feature, Guitardex, to build a list of techniques necessary for to play the song they're selling. This will make it easier for both the professional musician and the learner as the musician would not need to be burdened with making a tutorial for the song and a learner would not need to scour different pages of the internet to learn all the techniques for one song.
      </p>
      <br />
      <h2>How Much This Website Will Cost</h2>
      <p>
        This website will be <strong>completely free</strong>. Making this website's contents paid goes against the entire reason this website is being made in the first place. There won't be any of that "free trial for 7 days" crap. I'm intending for this site to be fully self-sufficient through donations and/or sponsors. Yes, there may be ads from possible sponsors, but I'll make sure they're not intrusive nor obnoxiously shoved in your face.
      </p><br />
      <h2>How You Can Help</h2>
      <p>
        Fill out <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">this survey</a>. I'm not 100% sure what the average aspiring fingerstyle guitarist wants to learn, so having a set of opinions from the fingerstyle community would greatly help the development of this site.
      </p><br />
      <h2>Fingerstyle Central Community</h2>
      <p>
        Join our <a href="https://forms.gle/aSyb5cGpMMyVXTFN6">Discord Server</a>!
      </p><br />
      <h2>About Me</h2>
      <p>
        My name is Robert Chen, I am a fingerstyle guitarist and fingerstyle transcriber from Canada and I'm the lead developer for this project.  If you're interested in my music, I've included my YouTube and Spotify links below.
      </p>
      <p>
        <a href="https://github.com/chendumpling/">GitHub</a> - <a href="https://www.youtube.com/c/RobertChen/">YouTube</a> - <a href="https://open.spotify.com/artist/4JQzZTSBYflrvsi3fiPJmZ">Spotify</a>
      </p><br />
      <h2>About the Team</h2>
      <p>
        I will be outsourcing help from some friends who excel in fingerstyle if they're willing to help make content for this site. These are the wonderful people who have agreed to help me on the site so far:
      </p>
      <p>
        <CustomUL>
          <li><p><a href="https://www.youtube.com/RobertChen/">Robert Chen</a> - Development & Content Creation</p></li>
          <li><p><a href="https://www.davidjameszecchel.com/">David James Zecchel</a> - Content Editing</p></li>
          <li><p><a href="https://www.youtube.com/c/EddievanderMeer">Eddie van der Meer</a> - Content Creation</p></li>
          <li><p><a href="https://www.youtube.com/channel/UCv5lp4CKs7tdTdJwTknjrpA">Bob Ma</a> - Content Advising</p></li>
        </CustomUL>
      </p>
    </Layout>
  )
}

export default About