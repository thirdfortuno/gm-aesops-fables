import * as React from "react"
import { graphql, Link } from 'gatsby'

import Page from "../components/page"

import "./index.scss"

const IndexPage = ({ data }) => {
  return (
    <Page title="A List of the Fables" header={<span>The Æsop for Newbies</span>}>
      <ul className="index__list">
      {
        data.allMdx.nodes.map(node => (
          <li className="index__item" key={node.slug}>
            <Link className='index__link' to={`/fables/${node.slug}`}>{node.frontmatter.title}</Link>
          </li>
        ))
      }
      </ul>
      <h3>More coming soon!</h3>
    </Page>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: slug, order: ASC}) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`

export default IndexPage
