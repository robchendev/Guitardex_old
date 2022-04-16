import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { v, maxq } from '../styles/variables';
import { Link } from 'gatsby';
import { COLORS } from '../styles/theme';

const ELinkContainer = styled(Link)`
    padding: 0 !important;
`

const ELinkDiv = styled.div`
    padding: calc(${v.smSpacing} * 1.5) ${v.mdSpacing} !important;
    color: var(--color-text, ${COLORS.text.light}) !important;
    background-color: transparent !important;
    width: calc(100% - 4.5em);
    ${maxq[1]} {
        width: calc(100% - 3.5em);
    } 
    :hover {
        border: none !important;
        background-color: transparent !important;
        color: var(--color-link, ${COLORS.link.light}) !important;
    }
    h4 {
        margin-bottom: 0.1em;
    }
    p {
        color: ${COLORS.placeholder};
        text-transform: capitalize;
    }
`

const IdFindData = ({ id }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark {
                        nodes {
                            frontmatter {
                                id
                                g
                                group
                                title
                                slug
                                category
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
                return (
                    <ELinkContainer to={
                        selection ? selection.frontmatter.g + '/' + selection.frontmatter.slug : `#`
                    }>
                        <ELinkDiv>
                            <h4>{selection ? selection.frontmatter.title : `Unknown (id: ${id})`}</h4>
                            {selection ? <p>{selection.frontmatter.group} - {selection.frontmatter.category}</p> : <p>Unrecognized ID</p>}
                        </ELinkDiv >
                    </ELinkContainer >
                )
            }}
        />
    )
}




export default IdFindData