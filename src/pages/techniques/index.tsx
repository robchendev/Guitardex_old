import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout/Layout"
import { TechList } from "../../styles/styles"
import { TabImg } from "../../components/Layout/styles"

const Techniques = ({ data }) => {
  console.log(data)
  const techniques = data.techniques.nodes
  return (
    <Layout title="Techniques">
      <h1>Techniques</h1>
      <div>
        {techniques.map(technique => (
          <>
            <Link to={"/techniques/" + technique.frontmatter.slug} key={technique.id}>
              <TechList>
                <h3>{technique.frontmatter.title}</h3>
              </TechList>
            </Link>
            <div>
              <p>Pre-reqs: {technique.frontmatter.prereqs}</p>
            </div>
          </>
        ))}
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query TechniquesPage {
    techniques: allMarkdownRemark(sort: {fields: id}) {
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
      }
    }
  }
`

export default Techniques