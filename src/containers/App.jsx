import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import CountryList from './CountryList'
import MainRouter from '../routers/MainRouter'
import { ThemeContext } from '../utils/themeContext'
import '../styles/theme.dark.less'
import '../styles/theme.light.less'
import '../styles/app.less'


const App = () => {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [theme])
  

  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
        <Layout>
            <MainRouter />
            {/* <CountryList /> */}
        </Layout>
    </ThemeContext.Provider>
  )
}

export default App