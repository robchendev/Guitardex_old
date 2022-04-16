const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Techniques {
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
      path: '/t/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/technique-details.js'),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
