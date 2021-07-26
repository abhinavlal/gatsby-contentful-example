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

const SamplePage = () => {
    return (
        <div>
            <HeroSimpleCentered></HeroSimpleCentered>
            <HeaderSimpleCentered></HeaderSimpleCentered>
            <FeatureGridList></FeatureGridList>
            <CtaSimpleCentered></CtaSimpleCentered>
            <StatsSimpleCards></StatsSimpleCards>
            <FaqsCenteredAccordian></FaqsCenteredAccordian>
            <LogoCloudSimple></LogoCloudSimple>
            <TeamsLargeImage></TeamsLargeImage>
            <TestimonialSimpleCentered></TestimonialSimpleCentered>
            <FooterSimpleCentered></FooterSimpleCentered>
        </div>

    )
}

export default SamplePage
