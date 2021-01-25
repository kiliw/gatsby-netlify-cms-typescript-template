import { globalHistory } from '@reach/router'
import React, { useContext, useEffect, useState } from 'react'

import { Locale } from '../types'

const LocaleContext = React.createContext<Locale>('de')
export const useLocale = () => useContext(LocaleContext)
export const LocaleProvider = LocaleContext.Provider

export const getPathPrefix = (locale: Locale) => (to: string): string => {
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  return `${currentPrefix}${to}`
}

export const usePathPrefix = (to: string): string => {
  const locale = useLocale()
  return getPathPrefix(locale)(to)
}

export const useLocation = () => {
  const initialState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate,
  }
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const removeListener = globalHistory.listen((params) => {
      const { location } = params
      const newState = Object.assign({}, initialState, { location })
      setState(newState)
    })
    return () => {
      removeListener()
    }
  }, [initialState])

  return state
}
