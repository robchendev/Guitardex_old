import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const IdFindData = ({ id }) => {
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
                const selection = data.allMarkdownRemark.nodes.find(
                    node => node.frontmatter.id === id
                )
                // Edit this into a component that displays each link
                return (<h3>{selection ? selection.frontmatter.title : `Unknown (id: ${id})`}</h3>)
            }}
        />
    )
}




export default IdFindData