import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import Header from '../components/Header'
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
      allHomeJson {
        nodes {
          introduction {
            value
          }
          title {
            value
          }
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.allHomeJson.nodes[0].title.value} />
      <Layout>
        <div>
          <h1>Hi people</h1>
          <p>{data.allHomeJson.nodes[0].introduction.value}</p>

          <p>Go an put in some content.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </Layout>
    </>
  )
}

export default Page
