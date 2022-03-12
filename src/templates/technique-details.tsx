import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import "./technique-styling.css"
import { Description, Explanation, Exercises, DarkBackground } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

const extractVideoURL = (demo) => {
  return demo?.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
}

function TechniqueDetails({ data }) {
  const { html } = data.allInfo;
  const { 
    title, demo, description, prereqs, exercises 
  } = data.allInfo.frontmatter;

  // const slugFinder = graphql`
  //   query preReqFound($slug: String){
      // preReqs: markdownRemark(frontmatter: {prereqs: {eq: $prereqs}}){
      //   frontmatter {
      //     prereqs
      //     slug
      //   }
      // }
  //   }
  // `
  return (
    <Layout>
      {/* Container */}
      <div>

        {/* This section will not have a color */}
        <h2>{title}</h2>
        {/* <h3>Required: {prereqs}</h3> */}
        

        {/* This section will be a color */}
        <DarkBackground>
          { demo ? 
            <LiteYoutubeEmbed id={extractVideoURL(demo)} isMobile={true} mute={false} />
            :
            <p>No video.</p>
          }
          
          { description ? <br /> : <></>}
          <p>{description}</p>
        </DarkBackground>

        {/* This section will not have a color */}
        <Explanation>
          { html ? 
            <div dangerouslySetInnerHTML={{ __html: html }} />
            :
            <p>This page has no content.</p>
          }
          
        </Explanation>

        <DarkBackground>
        <h2>Exercises</h2>
          {exercises ? 
            exercises.map(({text,link,slce}) => (
              <p>{text}: <a href={link} target="_blank">Tablature</a><a href={slce} target="_blank">SoundSlice</a></p>
            ))
            :
            <p>There are no exercises.</p>
          }
        </DarkBackground>
        
      </div>
    </Layout>
  );
}



export const query = graphql`
  query TechniquesOne($slug: String) {
    allInfo: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        demo
        prereqs {
          name
          slug
        }
        artists
        category
        exercises {
          link
          text
          slce
        }
        tags
        description
      }
    }
  }
`;

export default TechniqueDetails;
