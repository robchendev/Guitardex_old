import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MetaInfo } from './styles'
import { Link } from 'gatsby';
import DifficultyStripe from '../DifficultyStripe/DifficultyStripe';

const DexItem = ({ id }) => {
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
								difficulty
								slug
								category
							}
						}
					}
				}`
			}
			render={data => {
				console.log(data.allMarkdownRemark.nodes) 
				const selection = data.allMarkdownRemark.nodes.find(
					node => node.frontmatter.id === id
				)
				return (
					<Link to={
						selection ? selection.frontmatter.g + '/' + selection.frontmatter.slug : `#`
					}>
						
						<MetaInfo>
							<DifficultyStripe difficulty={selection.frontmatter.difficulty} />
							<h4>
								{selection ? 
									selection.frontmatter.title 
									: 
									`Unknown (id: ${id})`
								}
							</h4>
							<p>
								{selection ? 
									`${selection.frontmatter.group}${selection.frontmatter.category ? ` - ${selection.frontmatter.category}` : ""}${selection.frontmatter.difficulty ? ` (${selection.frontmatter.difficulty})` : ""}`
									: 
									`Unrecognized ID`
								}
							</p>
						</MetaInfo>
					</Link>
				)
			}}
		/>
	)
}
 
export default DexItem