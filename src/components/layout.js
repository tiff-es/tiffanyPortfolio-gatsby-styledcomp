import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { Container, MainWrapper } from "./layoutComponents"
import Header from "./header"
import Footer from "./footer"
import ProjectPreview from "./ProjectPreview";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainWrapper>{children}</MainWrapper>
            <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
