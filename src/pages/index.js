import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import HeaderSimpleCentered from "../components/HeaderSimpleCentered"
import BlogSummary from "../components/BlogSummary"

// markup
const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query allPosts {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          author {
            name
          }
          body {
            childrenMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`)

  return (
    <div>
      <HeaderSimpleCentered></HeaderSimpleCentered>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {data.allContentfulBlogPost.edges.map(({ node }) => {
            return (
              <BlogSummary node={node} key={node.id}></BlogSummary>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default IndexPage
