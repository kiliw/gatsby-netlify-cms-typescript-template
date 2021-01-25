import { HistoryLocation } from '@reach/router'
import { Link } from 'gatsby'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { useLocale, useLocation } from '../../utils/hooks'

export const LanguageSwitcher: FunctionComponent = () => {
  const locale = useLocale()
  const { location } = useLocation()
  const toPrefix = locale === 'en' ? '/de' : '/en'
  const linkText = locale === 'en' ? 'DE' : 'EN'
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  const to = R.pipe<HistoryLocation, string, string>(
    R.prop('pathname'),
    R.replace(currentPrefix, toPrefix),
  )(location)
  return (
    <Link
      to={to}
      style={{
        color: `white`,
        textDecoration: `none`,
        float: 'right',
      }}
    >
      {linkText}
    </Link>
  )
}
