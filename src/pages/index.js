import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <h1>All posts</h1>
  )
}

// fetch All blog posts

const AllBlogPosts = useStaticQuery(graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`)

export default IndexPage
