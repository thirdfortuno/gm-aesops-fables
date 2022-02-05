import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Page from '../../components/page'

import './{mdx.slug}.scss'

const Fable = ({ data }) => {
  console.log(data)

  return(
    <Page
      header={
        <div className='fable__header'>
          <div className='fable__side-button'>
            {data.mdx.slug > 1 && <Link className='fable__link' to={`/fables/${data.mdx.slug - 1}`}>‹ back</Link>}
          </div>
          <span>
            <Link className='fable__link' to="/">The Æsop for Newbies</Link>
          </span>
          <div className='fable__side-button'>
            {data.mdx.slug < 11 && <Link className='fable__link' to={`/fables/${data.mdx.slug - -1}`}>next ›</Link>}
          </div>
        </div>
      }
      title={data.mdx.frontmatter.title}
    >
      <div className='fable__body'>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
      <div className='fable__moral fable__link'>
        <a href={data.mdx.frontmatter.parody} target="_blank" rel="noopener noreferrer">
          {data.mdx.frontmatter.moral}
        </a>
      </div>
    </Page>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        moral
        parody
      }
      body
      slug
    }
  }
`

export default Fable;