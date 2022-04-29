import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { IconLink, InfoContainer, LinkContainer, LinkedSiteIcon, LinksBackground, ProfilePicture, ProfilePictureContainer, TeamContainer } from "../styles/pagestyles/about"
import { EmbedContainer } from "../templates/technique-styling"
import { LiteYoutubeEmbed } from "react-lite-yt-embed"

import { FaYoutube, FaGithub, FaSpotify, FaGlobe } from "react-icons/fa"

import robertChen from "../assets/team-members/robert-chen.jpg"
import davidZecchel from "../assets/team-members/david-james-zecchel.jpg"
import bobMa from "../assets/team-members/bob-ma.jpg"
import eddieVanDerMeer from "../assets/team-members/eddie-van-der-meer.jpg"
import weijunSyu from "../assets/team-members/weijun-syu.jpg"
import bryanQuan from "../assets/team-members/bryan-quan.jpg"


const About = () => {
  return (
    <Layout title="About">
      <h1>About</h1>
      <EmbedContainer>
        <LiteYoutubeEmbed 
          id="ef2ZcJt0EaU"
          isMobile={true} 
          mute={false} 
          desktopResolution='maxresdefault'
          mobileResolution='maxresdefault'
          params={{rel: "0"}}
        />
      </EmbedContainer>
      <br /><br />
      <h3>Why I Made Guitardex</h3>
      <p>
        Fingerstyle is a young style of guitar rising in popularity. Due to its infancy in
        history, it is not an officially recognized style of guitar by most music
        conservatories and is not documented heavily on. As a consequence, many avid
        learners of the style teach themselves without guidance.
      </p>
      <p>
        My name is Robert Chen, and I created this web app ("Guitardex", "Guitar Index", "Gdex") to provide easy and free access to fingerstyle tutorials and information. As someone who had experienced the lack of freely accessible resources while growing my own skills as a fingerstyle guitarist, I want this site to give guitarists a convenient access to fingerstyle information.
      </p><br />
      <h3>Is Guitardex Free?</h3>
      <p>
        Guitardex is and will remain completely free. If you want to help support my work and help pay for Guitardex's server costs, please consider <a href="https://www.paypal.com/donate/?hosted_button_id=DHGEUWW4VMUVG">donating</a>.
      </p><br />
      <h3>Fingerstyle Community</h3>
      <p>
        Join our <a href="https://discord.gg/Khh9gN59fk">Discord</a> server!
      </p><br />
      <h3>How It Works</h3>
      <p>
        Guitardex does not have a curriculum but any user can make one through the usage of it's saving and sharing functionality. For example, a Guitardex shared by a musician gives their fans direct access to the specific tutorials necessary for them to learn in order to play their songs.
      </p>
      <p>
        See the <Link to="/help">Help</Link> page for more details on how to add and share your Guitardex, or try using this pre-made Guitardex: <Link to="/?Common-Techniques_16.14.22.17.1.2.4.5.6.7.10.11.12">Common Techniques</Link>.
      </p>
      <p>
        At the top of each technique tutorial links the required techniques, if any, that the user must know before learning it and at the bottom is a list of the techniques that requires the current technique, again if any.
      </p>
      <br />
      <h3>Future Development</h3>
      <p>
        Guitardex is a regularly updating project that aims to have more than just fingerstyle techniques. It is programmed to save items from any 'library' within the web app. Currently, <Link to="/t">Techniques</Link> is the only library. Future libraries can include information such as audio mixing and equipment.
      </p>
      <p>
        When I am able, I will be making improvements to this web app's functionality, UI, and content. You can view the changelog on the <Link to="/dev">Development</Link> page.
      </p>
      <br />
      <h3>Guitardex Team</h3>
      <p>
        I have outsourced help from friends who excel in fields necessary to make this project as serviceable as possible. These are the people who have worked on this project:
      </p>
      {teamMembers.map(teamMember => (
        <TeamContainer>
          <ProfilePictureContainer>
            <ProfilePicture src={teamMember.image} alt={teamMember.name} />
          </ProfilePictureContainer>
          <InfoContainer>
            <h4>{teamMember.name}</h4>
            <p>{teamMember.roles.map(role => role).join(", ")}</p>
            <LinksBackground>
              {teamMember.links.map(link => (
                  <LinkContainer>
                    <IconLink href={link.url}>
                      <LinkedSiteIcon>{link.icon}</LinkedSiteIcon>
                    </IconLink>  
                  </LinkContainer>
              ))}
            </LinksBackground>
          </InfoContainer>
        </TeamContainer>
      ))}
      
    </Layout>
  )
}

export default About

const teamMembers = [
  {
    name: "Robert Chen",
    image: robertChen,
    roles: [
      "Project Lead", "Developer", "Content Creator", "Content Writer"
    ],
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/chendumpling"
      },
      {
        icon: <FaYoutube />,
        url: "https://youtube.com/RobertChen"
      },
      {
        icon: <FaSpotify />,
        url: "https://open.spotify.com/artist/4JQzZTSBYflrvsi3fiPJmZ"
      },
      {
        icon: <FaGlobe />,
        url: "https://robertchenyt.com/"
      }
    ]
  },
  {
    name: "David James Zecchel",
    image: davidZecchel,
    roles: [
      "Content Writer", "Content Editor"
    ],
    links: [
      {
        icon: <FaGlobe />,
        url: "https://davidjameszecchel.com/"
      }
    ]
  },
  {
    name: "Bob Ma",
    image: bobMa,
    roles: [
      "Content Advisor"
    ],
    links: [
      {
        icon: <FaYoutube />,
        url: "https://youtube.com/oBobma/"
      },
      {
        icon: <FaSpotify />,
        url: "https://open.spotify.com/artist/0AzJ9NCXlRf3dVbSBqU24i"
      },
    ]
  },
  // {
  //   name: "Eddie van der Meer",
  //   image: eddieVanDerMeer,
  //   roles: [
  //     "Content Advisor"
  //   ],
  //   links: [
  //     {
  //       icon: <FaYoutube />,
  //       url: "https://www.youtube.com/user/eddie2754/"
  //     },
  //     {
  //       icon: <FaSpotify />,
  //       url: "https://open.spotify.com/artist/08WRjJPbPqSEOkFuc99ymW"
  //     },
  //     {
  //       icon: <FaGlobe />,
  //       url: "https://eddievdmeer.com/"
  //     }
  //   ]
  // },
  {
    name: "WeiJun Syu",
    image: weijunSyu,
    roles: [
      "Software Consultant"
    ],
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/weijunsyu"
      },
      {
        icon: <FaGlobe />,
        url: "https://weijunsyu.com/"
      }
    ]
  },
  {
    name: "Bryan Quan",
    image: bryanQuan,
    roles: [
      "Quality Assurance"
    ],
    links: [
      {
        icon: <FaGithub />,
        url: "https://github.com/biryaniq"
      }
    ]
  },
]