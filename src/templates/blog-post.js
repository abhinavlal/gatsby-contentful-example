import React from "react"
import { graphql } from "gatsby"
import HeaderSimpleCentered from "../components/HeaderSimpleCentered"

export default function BlogPost({data}){
    const post = data.allContentfulBlogPost.nodes[0]
    console.log(post)
    return (
        <div className="wrapper">
            <HeaderSimpleCentered></HeaderSimpleCentered>
            <article className="flex flex-col shadow my-4">
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href={post.slug} className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
                    <div href="#" className="text-sm pb-3">
                        <p className="font-semibold hover:text-gray-800">By {post.author.name}, Published on {post.publishDate}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
                </div>
            </article>
        </div>
    )
}

export const query = graphql`
query BlogbySlug($slug: String!) {
    allContentfulBlogPost(filter: {slug: {eq: $slug}}) {
        nodes {
            id
            title
            tags
            publishDate(formatString: "MMM Do, YYYY")
            heroImage {
                resize(width: 800) {
                    src
                }
            }
            author {
                name
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
            slug
        }
    }
}
`