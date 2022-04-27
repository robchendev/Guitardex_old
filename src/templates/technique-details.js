import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import "./technique-styling.css"
import { EmbedContainer, HeadingContainer, PageHeader, PreRequisites, ExerciseLinks, EntireWrapper, SaveContainer, Explanation, DarkBackground, VideoContainer, ContinueLearning } from "./technique-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';
import Save from '../components/Save/Save';
import ReactTooltip from 'react-tooltip';
import DiffContainer from '../components/DiffContainer/DiffContainer';
import CategoryContainer from '../components/CategoryContainer/CategoryContainer';
import GroupContainer from '../components/GroupContainer/GroupContainer';

const extractVideoURL = (demo) => {
  return demo?.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
}

function TechniqueDetails({ data }) {
  const { html } = data.allInfo;
  const {
    id, g, group, title, category, difficulty, demo, prereqs
  } = data.allInfo.frontmatter;
  const postReqData = data.getPostReqs;
  const allPostReqs = postReqData.nodes.filter( //returns array
    node => (
      node.frontmatter.prereqs?.find( //returns one element
        prereq => prereq.id === id
      ) 
    )
  ) 
  console.log(allPostReqs)
  return (
    <Layout title={title}>
      <EntireWrapper>
        <HeadingContainer>
          <PageHeader>
            <h1>{title}</h1>
            <PreRequisites>
              Required:{" "}
              {prereqs ?
                prereqs.map((prereq, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    <Link to={"/" + g + "/" + prereq.id}>{prereq.name}</Link>
                  </span>
                ))
                :
                <span> None</span>}
            </PreRequisites>
            <div>
              <DiffContainer difficulty={difficulty} />
              <GroupContainer group={group} />
              <CategoryContainer category={category} />
            </div>
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
          {/* <h4>Tabs</h4>
          {exercises ?
            exercises.map(({ text, link }) => (
              <React.Fragment key={text}>
                <ExerciseLinks>
                  <li><span>{text}:{" "}<a href={link}>PDF</a></span></li>
                </ExerciseLinks>
              </React.Fragment>
            ))
            :
            <p>There are no tabs yet.</p>
          } */}
          <ContinueLearning>
            <h4>Continue learning...</h4>
            {allPostReqs.length !== 0 ? 
              <ul>
                {allPostReqs &&
                  allPostReqs.map(({ frontmatter }) => (
                    <React.Fragment key={frontmatter.id}>
                      <li><Link to={`/${g}/${frontmatter.id}`}>{frontmatter.title}</Link>
                      {frontmatter.prereqs.map((prereq) => (
                        prereq.id !== id && 
                          <span> (Required: <Link to={`/${g}/${prereq.id}`}>{prereq.name}</Link>)</span>
                      ))}</li>
                    </React.Fragment>
                  )) 
                }
              </ul>
              :
              <p>There is no continuation to this technique.</p>
            }
          </ContinueLearning>
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
  query TechniquesOne($id: Int) {
    allInfo: markdownRemark(frontmatter: {id: {eq: $id}}) {
      html
      frontmatter {
        id
        g
        group
        title
        category
        difficulty
        demo
        prereqs {
          name
          id
        }
      }
    }
    getPostReqs: allMarkdownRemark {
      nodes {
        frontmatter {
          prereqs {
            name
            id
          }
          id
          g
          title
          difficulty
          category
        }
      }
    }

  }
`

export default TechniqueDetails;
