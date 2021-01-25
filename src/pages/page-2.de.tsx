import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import * as React from 'react'

import Header from '../components/Header'
import Layout from '../layouts'
import { LocaleProvider, usePathPrefix } from '../utils/hooks'

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      page2Json {
        de {
          title
          introduction
        }
      }
    }
  `)
  return (
    <LocaleProvider value="de">
      <Header siteTitle={data.page2Json.de.title} />
      <Layout>
        <p>{data.page2Json.de.introduction}</p>
        <Link to={usePathPrefix('/')}>Go back to the homepage</Link>
      </Layout>
    </LocaleProvider>
  )
}

export default SecondPage
