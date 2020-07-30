import React from "react";
import Layout from "./layout";
import { graphql, Link, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Image from "./image";

const ProjectPreview = ({slug, imageData, title, repo}) => {
console.log(slug, imageData)
        return(
// for previewing project, NOT show page
    <div className='project-preview'>
       Note: This component is ProjectPreview, project previews should be put into ProjectPreviewContainer

        <Link to={`/${slug}/`}>
            <Image fluid={imageData} alt={title}/>
        {/*    put a preview image here */}
        </Link>
        <h2>
            <Link to={`${slug}`}>{title}</Link>
        </h2>

        <h3>
            <Link to={repo}>{`${title} Github Repository`}</Link>
        {/*    This shouldnt be part of the preview, it should be on the
        lgbtq-meet main page*/}
        </h3>
    </div>
)
}

export default ProjectPreview