import * as React from "react"
import HeroSimpleCentered from "../components/samples/HeroSimpleCentered"
import HeaderSimpleCentered from "../components/samples/HeaderSimpleCentered"
import FeatureGridList from "../components/samples/FeatureGridList"
import CtaSimpleCentered from "../components/samples/CtaSimpleCentered"
import StatsSimpleCards from "../components/samples/StatsSimpleCards"
import FaqsCenteredAccordian from "../components/samples/FaqsCenteredAccordian"
import LogoCloudSimple from "../components/samples/LogoCloudSimple"
import TeamsLargeImage from "../components/samples/TeamsLargeImage"
import TestimonialSimpleCentered from "../components/samples/TestimonialSimpleCentered"
import FooterSimpleCentered from "../components/samples/FooterSimpleCentered"
import FormCentered from "../components/samples/FormCentered"

const SamplePage = () => {
    return (
        <div>
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
            <HeroSimpleCentered></HeroSimpleCentered>
            <HeaderSimpleCentered></HeaderSimpleCentered>
            <FeatureGridList></FeatureGridList>
            <CtaSimpleCentered></CtaSimpleCentered>
            <StatsSimpleCards></StatsSimpleCards>
            <FaqsCenteredAccordian></FaqsCenteredAccordian>
            <LogoCloudSimple></LogoCloudSimple>
            <TeamsLargeImage></TeamsLargeImage>
            <TestimonialSimpleCentered></TestimonialSimpleCentered>
            <FormCentered></FormCentered>
            <FooterSimpleCentered></FooterSimpleCentered>
        </div>

    )
}

export default SamplePage
