import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout/Layout"
import { TechList } from "../../templates/technique-styling"

const Techniques = ({ data }) => {
  console.log(data)
  const techniques = data.techniques.nodes
  return (
    <Layout title="Techniques">
      <h1>Techniques</h1>
      <div>
        {techniques.map(technique => (
          <TechList>
            <Link to={"/techniques/" + technique.frontmatter.slug} key={technique.id}>
              
                <h3>{technique.frontmatter.title}</h3>
              
            </Link>
            <div>
              <p>Pre-reqs: {technique.frontmatter.prereqs}</p>
            </div>
          </TechList>
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
        html
        frontmatter {
          exercises {
            link
            text
            slce
          }
          prereqs
          slug
          title
          tags
          category
          artists
        }
        id
      }
    }
  }
`

export default Techniques