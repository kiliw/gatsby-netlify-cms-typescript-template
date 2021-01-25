import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import Header from '../components/Header'
import Layout from '../layouts'
import { LocaleProvider, usePathPrefix } from '../utils/hooks'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

const Page = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryEN {
      site {
        siteMetadata {
          title
        }
      }
      allHomeJson {
        nodes {
          en {
            title
            introduction
          }
        }
      }
    }
  `)
  return (
    <LocaleProvider value="en">
      <Header siteTitle={data.allHomeJson.nodes[0].en.title} />
      <Layout>
        <div>
          <h1>Hi people</h1>
          <p>{data.allHomeJson.nodes[0].en.introduction}</p>

          <p>Go an put in some content.</p>
          <Link to={usePathPrefix('/page-2/')}>Go to page 2</Link>
        </div>
      </Layout>
    </LocaleProvider>
  )
}

export default Page
