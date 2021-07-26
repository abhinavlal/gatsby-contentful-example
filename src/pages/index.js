import { graphql } from "gatsby"
import * as React from "react"
import HeaderSimpleCentered from "../components/samples/HeaderSimpleCentered"
import { Link } from "@reach/router"


// markup
const IndexPage = ({data}) => {

    const landingPages = data.allContentfulLandingPage.edges

    return (
        <div>
            <HeaderSimpleCentered></HeaderSimpleCentered>
            <div className="bg-white">
                 <div className="max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-left">
                        <ul className="px-0">
                            {data.allContentfulLandingPage.edges.map(({node}) => {
                                return(
                                    <Link to={node.slug}>
                                    <li className="border list-none rounded-sm px-3 py-3 text-blue-600">{node.title}</li> 
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage

export const query = graphql`
    query MyQuery {
        allContentfulLandingPage {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
    }`
