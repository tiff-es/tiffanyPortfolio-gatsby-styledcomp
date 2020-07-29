import React from "react"
import { Link } from "gatsby"

import styled from "styled-components";
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const StyledContainer = styled.div`

`
const StyledHeader = styled.h1`
    font-family: roboto;
`
const LgbtqMeet = () => (
    <Layout>
        <StyledContainer>
            <SEO title="lgbtq-meet" />
            <StyledHeader>LGBTQ+ Meet</StyledHeader>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
        </StyledContainer>
    </Layout>
)

export default LgbtqMeet
