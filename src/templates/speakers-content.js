import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import SpeakerImage from '../components/SpeakerImage'
const Link = props => {
  const { url, text } = props

  return (
    <a href={url} rel="noopener">
      {text}
    </a>
  )
}
function SpeakersContentTemplate({ data: { mdx } }) {
  const {
    title,
    name,
    bio,
    image,
    color,
    from,
    link,
    twitter,
    github,
    company,
    company_url,
  } = mdx.frontmatter

  return (
    <div>
      {title} <br />
      {name} <br />
      {bio} <br />
      {image} <br />
      {color} <br />
      {from} <br />
      {link} <br />
      {twitter} <br />
      {github} <br />
      {company} <br />
      {company_url} <br />
    </div>
  )
}

export default SpeakersContentTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        name
        title
        image
        color
        bio
        from
        twitter
        github
        company
        company_url
        socialCard
      }
    }
  }
`
