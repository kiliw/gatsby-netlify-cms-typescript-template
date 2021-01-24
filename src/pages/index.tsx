import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import Layout from '../layouts'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

const Page = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      homeJson {
        title {
          value
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <h1>Hi people</h1>
        <p>
          Welcome to your new <strong>{data.site.siteMetadata.title}</strong>{' '}
          site.
        </p>
        <p>Now go build something great.</p>
        <p>Go an put in some content. {data.homeJson.title.value}</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
  )
}

export default Page
