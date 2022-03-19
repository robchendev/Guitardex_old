import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import "./technique-styling.css"
import { Explanation, DarkBackground } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import Save from '../components/Save';
import styled from '@emotion/styled';
import { v } from '../styles/variables';

const extractVideoURL = (demo) => {
  return demo?.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
}
const EmbedContainer = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
  position: relative;
`
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function TechniqueDetails({ data }) {
  const { html } = data.allInfo;
  const {
    id, title, demo, description, slug, exercises
  } = data.allInfo.frontmatter;

  return (
    <Layout>
      <div>
        <HeadingContainer>
          <h2>{title}</h2>
          <Save id={id} />
        </HeadingContainer>
        <DarkBackground>
          {demo ?
            <EmbedContainer>
              <LiteYoutubeEmbed id={extractVideoURL(demo)} isMobile={true} mute={false} />
            </EmbedContainer>
            :
            <p>No video.</p>
          }
          {description ? <br /> : <></>}
          <p>{description}</p>
        </DarkBackground>

        <Explanation>
          {html ?
            <div dangerouslySetInnerHTML={{ __html: html }} />
            :
            <p>This page has no content.</p>
          }
        </Explanation>

        <DarkBackground>
          <h3>Exercises</h3>
          {exercises ?
            exercises.map(({ text, link, slce }) => (
              <React.Fragment key={text}>
                <p>{text}: <a href={link} target="_blank">Tablature</a><a href={slce} target="_blank">SoundSlice</a></p>
              </React.Fragment>
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
        id
        group
        title
        demo
        slug
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
`

export default TechniqueDetails;
