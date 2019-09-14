import React, { useEffect, useState, useRef } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PresentationCard from '../components/PresentationCard'

import './index.scss'

const IndexPage = props => {
  console.log(props.data.allMdx.edges)
  const speakers = props.data.allMdx.edges

  return (
    <>
      <svg
        className="triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 262 830"
      >
        <path d="M262 830L1 0h261.8l-.8 830z" />
      </svg>
      <Header />
      <main className="site_content">
        <section className="schedule">
          <div className="days">
            <a className="days_link" href="#">
              Day 1
            </a>
            <a className="days_link inactive" href="#">
              Day 2
            </a>
          </div>

          {speakers.map(speaker => (
            <PresentationCard
              key={speaker.id}
              data={speaker.node.frontmatter}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
    allMdx {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            name
            title
            image
          }
        }
      }
    }
  }
`
