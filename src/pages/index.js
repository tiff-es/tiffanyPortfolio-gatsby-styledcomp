import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import ProjectPreview from "../components/ProjectPreview";


const IndexPage = ( ) => {
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
        <Container>
            <SEO title="Home " keywords={[`gatsby`, `application`, `react`]}/>
            {(projects > 1) ? projects.map((p)=> {
                const title = p.title
                const slug = p.slug
                const repo = p.repo
                const imageData = p.images

                //for temporary testing addee [0]
                return (
                    <ProjectPreview title={title} slug={slug} repo={repo} imageData={imageData}/>
                )
            }
                 ):   <ProjectPreview title={projects.title} slug={projects.slug} repo={projects.repo} imageData={projects.imageData}/>

                //  console.log('Returned one project', projects)
            }

            <Link to="/page-2/">Go to page 2</Link>
            {/*<Link to="/lgbtq-meet/">Go to LGBTQ+ Meet</Link>*/}

        </Container>
    </Layout>
    )
}

export default IndexPage
