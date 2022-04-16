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