import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout/Layout"
import SearchBar from "../../components/SearchBar/SearchBar"

const Techniques = ({ data }) => {
  const techniques = data.techniques.nodes
  return (
    <Layout title="Techniques">
      <h1>Techniques</h1>
      <div>
        <SearchBar placeholder="Search Techniques..." data={techniques} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TechniquesPage {
    techniques: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          title
          difficulty
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
  }
`

export default Techniques

/*


    descending: allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }

    easy: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "easy" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    med: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "med" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    hard: allMarkdownRemark(filter: {frontmatter: {difficulty: { eq: "hard" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }

    basics: allMarkdownRemark(filter: {frontmatter: {category: { eq: "basics" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    articulation: allMarkdownRemark(filter: {frontmatter: {category: { eq: "articulation" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    percussion: allMarkdownRemark(filter: {frontmatter: {category: { eq: "percussion" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }
    harmonics: allMarkdownRemark(filter: {frontmatter: {category: { eq: "harmonics" }}}) {
      nodes {
        frontmatter {
          title
          difficulty
          tags
          category
          id
          prereqs {
            name
            id
          }
        }
      }
    }

    */