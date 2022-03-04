const path = require('path')

exports.createPages = async ({graphql, actions}) => {

  const { data } = await graphql(`
    query TechniquesPage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/techniques/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/technique-details.tsx'),
      context: { 
        slug: node.frontmatter.slug,
      },
    })
  })
}