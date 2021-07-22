import React from "react"

export default function BlogSummary(props) {
    return (
        <article className="flex flex-col shadow my-4">
            <div className="bg-white flex flex-col justify-start p-6">
                <a href={props.node.slug} className="text-3xl font-bold hover:text-gray-700 pb-4">{props.node.title}</a>
                <div href="#" className="text-sm pb-3">
                    <p className="font-semibold hover:text-gray-800">By {props.node.author.name}, Published on {props.node.publishDate}</p>
                </div>
                <p className="pb-6">{props.node.body.childrenMarkdownRemark[0].excerpt}</p>
            </div>
        </article>
    )
}