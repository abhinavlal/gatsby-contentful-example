import React from "react"
import { graphql } from "gatsby"
import ContentfulHeaderSimpleCentered from "../components/ContentfulHeaderSimpleCentered"
import ContentfulCtaSimpleCentered from "../components/ContentfulCtaSimpleCentered"
import ContentfulFeatureGridList from "../components/ContentfulFeatureGridList"
import ContentfulFaqsCenteredAccordian from "../components/ContentfulFaqsCenteredAccordian"

export default function Landing({data}){
    const page = data.contentfulLandingPage
    console.log(page)
    const project = (ComponentType, section) => {
        switch(ComponentType) {
  
          case "ContentfulHeaderSimpleCentered":   return <ContentfulHeaderSimpleCentered section = {section} />;
          case "ContentfulCtaSimpleCentered":   return <ContentfulCtaSimpleCentered section = {section} />;
          case "ContentfulFeatureGridList": return <ContentfulFeatureGridList section = {section} />;
          case "ContentfulFaqsCenteredAccordian":  return <ContentfulFaqsCenteredAccordian section = {section} />;
  
          default:      return <h1>No project match</h1>
        }
    }

    return (
        <div className="wrapper">
            <header className="bg-indigo-600">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                        <span className="sr-only">Practo Site Builder</span>
                        <img
                            className="h-10 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                            alt=""
                        />
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            <a href="/" className="text-base font-medium text-white hover:text-indigo-50">
                                Home
                            </a>
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                        href="#"
                        className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                        >
                        Sign in
                        </a>
                        <a
                        href="#"
                        className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                        Sign up
                        </a>
                    </div>
                    </div>
                </nav>
            </header>
            <article className="flex flex-col shadow my-4">
                <div className="bg-white flex flex-col justify-start p-6">
                    {page.sections.map(  section  => {
                        return (
                            <div key={section.id}>
                                { project(section.internal.type, section) }
                            </div>
                        )
                    })}
                </div>
            </article>
        </div>
    )
}

export const query = graphql`
query landingPageBySlug($slug: String!) {
    contentfulLandingPage(slug: {eq: $slug}) {
        slug
        title
        sections {
            ... on ContentfulCtaSimpleCentered {
              id
              internal {
                type
              }
              title
              primaryCta {
                title
                url
              }
              secondaryCta {
                title
                url
              }
            }
            ... on ContentfulFaqsCenteredAccordian {
                id
                internal {
                    type
                }
                title
                faq {
                    question
                    answer {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
            ... on ContentfulFeatureGridList {
                id
                internal {
                    type
                }
                title
                features {
                    id
                    name
                    description
                }
            }
            ... on ContentfulHeaderSimpleCentered {
                id
                internal {
                    type
                }
                title
                subtitle
                description {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
}
`