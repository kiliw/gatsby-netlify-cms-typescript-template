import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import Header from '../components/Header'
import Layout from '../layouts'
import { LocaleProvider } from '../utils/hooks'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

const Page = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryDE {
      site {
        siteMetadata {
          title
        }
      }
      allHomeJson {
        nodes {
          de {
            title
            introduction
          }
        }
      }
    }
  `)
  return (
    <LocaleProvider value="de">
      <Header siteTitle={data.allHomeJson.nodes[0].de.title} />
      <Layout>
        <div>
          <h1>Hi people</h1>
          <p>{data.allHomeJson.nodes[0].de.introduction}</p>

          <p>Go an put in some content.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </Layout>
    </LocaleProvider>
  )
}

export default Page
