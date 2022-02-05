import * as React from "react"
import { Link } from "gatsby"
import Page from '../components/page'

const NotFoundPage = () => {
  return (
    <Page
      title="Page not found"
    >
      <div style={{'text-indent': 0}}>
        <Link to="/">Go back!</Link>
      </div>
    </Page>
  )
}

export default NotFoundPage
