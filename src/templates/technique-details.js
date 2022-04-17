import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import "./technique-styling.css"
import { EmbedContainer, HeadingContainer, PageHeader, TechniqueName, ExerciseLinks, EntireWrapper, SaveContainer, Explanation, DarkBackground, VideoContainer } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import Save from '../components/Save/Save';
import ReactTooltip from 'react-tooltip';

const extractVideoURL = (demo) => {
  return demo?.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
}

function TechniqueDetails({ data }) {
  const { html } = data.allInfo;
  const {
    id, g, title, demo, exercises, prereqs
  } = data.allInfo.frontmatter;
  return (
    <Layout title={title}>
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
            <SaveContainer>
              <Save id={id} />
            </SaveContainer>
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
