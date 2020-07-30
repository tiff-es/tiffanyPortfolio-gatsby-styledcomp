import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import styled from "styled-components";
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import ProjectPreview from "../components/ProjectPreview";

const StyledContainer = styled.div`

`
const StyledHeader = styled.h1`
    font-family: roboto;
`
const LgbtqMeet = ({slug, imageData, title, repo}) => {
    const data = useStaticQuery(graphql`  {
        allProjectsJson {
          edges {
            node {
              title
              url
              repo
              slug
              images {
                create_account_0_wide
                create_meetup_0_wide {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                home_0_mobile {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                home_1 {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                loginRequired_0_wide {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                loginRequired_1_ultrawide {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                loginRequired_2 {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                meetups_0 {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                meetups_0_wide {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                meetups_2 {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                meetups_3_wide {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                meetups_4_cropped {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
                mobile_0
                mobile_3 {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }`);

    const projects = data.allProjectsJson.edges[0].node;

    return(
        <Layout>
        <SEO title="lgbtq-meet"/>
        <StyledContainer>

            {(projects > 1) ? projects.map((p) => {
                    //if theres more than one project in the data, map thru it and return ProjectPreview
                    const title = p.title
                    const slug = p.slug
                    const repo = p.repo
                    const imageData = p.images

                    return (
                        <ProjectContainer title={title} slug={slug} repo={repo} imageData={imageData}/>
                    )
                }
            ) : <ProjectContainer title={projects.title} slug={projects.slug} repo={projects.repo}
                                imageData={projects.imageData}/>

                //  console.log('Returned one project', projects)
            }

        </StyledContainer>
    </Layout>)
}

export default LgbtqMeet
