import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { v } from '../styles/variables';
import { Link } from 'gatsby';
import { COLORS } from '../styles/theme';

const ELinkContainer = styled(Link)`
    padding: 0 !important;
`

const ELinkDiv = styled.div`
    padding: ${v.mdSpacing} !important;
    color: var(--color-text, ${COLORS.text.light}) !important;
    background-color: transparent !important;
    :hover {
        border: none !important;
        background-color: transparent !important;
        color: var(--color-link, ${COLORS.link.light}) !important;
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
                return (
                    <ELinkContainer to={
                        selection ? '../' + selection.frontmatter.group + '/' + selection.frontmatter.slug : `#`
                    }>
                        <ELinkDiv>
                            <h3>{selection ? selection.frontmatter.title : `Unknown (id: ${id})`}</h3>
                        </ELinkDiv>
                    </ELinkContainer>
                )
            }}
        />
    )
}




export default IdFindData