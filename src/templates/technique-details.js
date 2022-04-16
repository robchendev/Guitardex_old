import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../newcomp/Layout/Layout';
import "./technique-styling.css"
import { Explanation, DarkBackground, VideoContainer } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import Save from '../newcomp/Save/Save';
import styled from '@emotion/styled';
import { v } from '../styles/globalstyles/variables';
import ReactTooltip from 'react-tooltip';
import { COLORS } from '../styles/globalstyles/theme';

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
  align-items: top;
  h2 {
    margin-bottom: 0.1em;
  }
  margin: 0 !important;
`
const AddedText = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top:0.25em;
  h4 {
    margin-top: -0.15em;
    margin-right: 0.5em;
  }
`
const PageHeader = styled.div`
  margin-bottom: 1em;
`
const TechniqueName = styled.h2`
  margin-bottom: 0;
`
const ExerciseLinks = styled.ul`
  margin-bottom: 0.5em;
  li {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
`
const EntireWrapper = styled.div`
  .ttEdit {
    padding: 3px 6px 4px 6px;
    background-color: var(--color-text, ${COLORS.text.light});
    color: var(--color-ttText, ${COLORS.ttText.light});
    opacity: 1 !important;
    font-size: 1rem;
    max-width: 13em;
    text-align: center;
    transition: none;
  }
`
const SaveItemButtonContainer = styled.div`
  top: 0;
  right: 0;
  border-radius: 0 ${v.borderRadius} ${v.borderRadius} 0;
  height: 3.5em;
  width: 3.5em;

`

function TechniqueDetails({ data }) {
  const { html } = data.allInfo;
  const {
    id, g, title, demo, exercises, prereqs
  } = data.allInfo.frontmatter;
  return (
    <Layout>

      <EntireWrapper>
        <HeadingContainer>
          <PageHeader>
            <TechniqueName>{title}</TechniqueName>
            <span>
              Reqs:{" "}
              {prereqs ?
                prereqs.map((prereq, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    <Link to={"/" + g + "/" + prereq.slug}>{prereq.name}</Link>
                  </span>
                ))
                :
                <span> None</span>}
            </span>

          </PageHeader>
          <span>


            <SaveItemButtonContainer>
              <Save id={id} />

            </SaveItemButtonContainer>

          </span>
        </HeadingContainer>
        <VideoContainer>
          {demo &&
            <EmbedContainer>
              <LiteYoutubeEmbed id={extractVideoURL(demo)} isMobile={true} mute={false} />
            </EmbedContainer>
          }
        </VideoContainer>
        <Explanation>

          {html ?
            <div dangerouslySetInnerHTML={{ __html: html }} />
            :
            <p>This page has no content.</p>
          }
        </Explanation>

        <DarkBackground>
          <h4>Tabs</h4>
          {exercises ?
            exercises.map(({ text, link, slce }) => (
              <React.Fragment key={text}>
                <ExerciseLinks>
                  <li><span>{text}:{" "}<a href={link}>PDF</a></span></li>
                </ExerciseLinks>
              </React.Fragment>
            ))
            :
            <p>There are no tabs.</p>
          }
        </DarkBackground>
        <ReactTooltip
          className="ttEdit"
          arrowColor="transparent"
          offset={{ top: -12 }}
          effect="solid"
          scrollHide={false}
          resizeHide={false}
        />
      </EntireWrapper>

    </Layout>
  );
}

export const query = graphql`
  query TechniquesOne($slug: String) {
    allInfo: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        id
        g
        title
        demo
        prereqs {
          name
          slug
        }
        exercises {
          link
          text
          slce
        }
      }
    }
  }
`

export default TechniqueDetails;
