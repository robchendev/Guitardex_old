import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../newcomp/Layout/Layout"
import { TechList } from "../../templates/technique-styling"
import SearchBar from "../../newcomp/SearchBar/SearchBar"

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

// TODO: Remove queries I dont need
export const query = graphql`
  query TechniquesPage {
    techniques: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          prereqs {
            name
          }
          slug
          title
          tags
          category
          id
        }
      }
    }
  }
`

export default Techniques