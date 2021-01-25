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
        en {
          title
          introduction
        }
      }
    }
  `)
  return (
    <LocaleProvider value="en">
      <Header siteTitle={data.page2Json.en.title} />
      <Layout>
        <p>{data.page2Json.en.introduction}</p>
        <Link to={usePathPrefix('/')}>Go back to the homepage</Link>
      </Layout>
    </LocaleProvider>
  )
}
export default SecondPage
