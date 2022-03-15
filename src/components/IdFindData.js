import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const IdFindData = ({id}) => { 
    console.log("id = " + id)
    return (
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark {
                        nodes {
                            frontmatter {
                                id
                                group
                                title
                                slug
                            }
                        }
                    }
                }`
            }
          render={data => {
            // TODO: CHECK IF ID IS EVEN IN THE DATABASE
            const selection = data.allMarkdownRemark.nodes.find(
                node => node.frontmatter.id === id
            )
            // Edit this into a component that displays each link
            return(<p>{selection.frontmatter.title}</p>)
          }}
        />
    )
}




export default IdFindData