import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import MainRouter from '../routers/MainRouter'
import { ThemeContext } from '../utils/themeContext'
import CustomHeader from './CustomHeader'
import '../styles/theme.dark.less'
import '../styles/theme.light.less'
import '../styles/app.less'


const { Content } = Layout

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
            <Content >
              <CustomHeader />
              <MainRouter />
            </Content>
        </Layout>
    </ThemeContext.Provider>
  )
}

export default App