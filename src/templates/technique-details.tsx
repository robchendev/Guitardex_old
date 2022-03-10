import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import "./technique-styling.css"
import { Description, Explanation, Exercises, DarkBackground } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

const extractVideoURL = (demo) => {
  return demo.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
}

function TechniqueDetails({ data }) {
  const { html } = data.markdownRemark;
  const { 
    title, demo, description, prereqs, exercises 
  } = data.markdownRemark.frontmatter;

  // const slugFinder = graphql`
  //   query preReqFound($slug: String){
  //     markdownRemark(frontmatter: {slug: {eq: $slug}}){
  //       frontmatter {
  //         title
  //         slug
  //       }
  //     }
  //   }
  // `
  return (
    <Layout>
      {/* Container */}
      <div>

        {/* This section will not have a color */}
        <h2>{title}</h2>
        <h3>Required: {prereqs}</h3>
        

        {/* This section will be a color */}
        <DarkBackground>
          <LiteYoutubeEmbed id={extractVideoURL(demo)} isMobile={true} />
          { description ? <br /> : <></>}
          <p>{description}</p>
        </DarkBackground>

        {/* This section will not have a color */}
        <Explanation>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Explanation>

        <DarkBackground>
        <h2>Exercises</h2>
          {exercises.map(({text,link,slce}) => (
              <p>{text}: <a href={link} target="_blank">Tablature</a><a href={slce} target="_blank">SoundSlice</a></p>
          ))}
        </DarkBackground>
        
      </div>
    </Layout>
  );
}



export const query = graphql`
  query Techniques {
    markdownRemark {
      html
      frontmatter {
        title
        demo
        prereqs
        artists
        category
        exercises {
          link
          text
          slce
        }
        slug
        tags
        description
      }
    }
  }
`;

export default TechniqueDetails;
