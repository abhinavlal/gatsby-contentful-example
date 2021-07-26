const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create landing pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const landingTemplate = path.resolve(`src/templates/landing.js`)
  const result = await graphql(`
    query {
      allContentfulLandingPage {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulLandingPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: landingTemplate,
      context: {
        title: edge.node.title,
        slug: edge.node.slug
      },
    })
  })
}