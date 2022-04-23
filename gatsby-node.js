const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Techniques {
      allMarkdownRemark {
        nodes {
          frontmatter {
            id
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/t/' + node.frontmatter.id,
      component: path.resolve('./src/templates/technique-details.js'),
      context: {
        id: node.frontmatter.id,
      },
    })
  })
}
