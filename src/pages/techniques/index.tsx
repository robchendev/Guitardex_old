import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout/Layout"
import { TechList } from "../../styles/styles"

const Techniques = ({ data }) => {
  console.log(data)
  const techniques = data.techniques.nodes
  return (
    <Layout title="Techniques">
      <h1>Techniques</h1>
      <div>
        {techniques.map(technique => (
          <Link to={"/techniques/" + technique.frontmatter.slug} key={technique.id}>
            <TechList>
              <h3>{technique.frontmatter.title}</h3>
              <p>{technique.frontmatter.prereqs}</p>
            </TechList>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query TechniquesPage {
    techniques: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          title
          prereqs
          slug
        }
        id
      }
    }
  }
`

export default Techniques