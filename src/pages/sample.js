import * as React from "react"
import HeroSimpleCentered from "../components/HeroSimpleCentered"
import HeaderSimpleCentered from "../components/HeaderSimpleCentered"
import FeatureGridList from "../components/FeatureGridList"
import CtaSimpleCentered from "../components/CtaSimpleCentered"
import StatsSimpleCards from "../components/StatsSimpleCards"
import FaqsCenteredAccordian from "../components/FaqsCenteredAccordian"
import LogoCloudSimple from "../components/LogoCloudSimple"
import TeamsLargeImage from "../components/TeamsLargeImage"
import TestimonialSimpleCentered from "../components/TestimonialSimpleCentered"
import FooterSimpleCentered from "../components/FooterSimpleCentered"

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
