import React from 'react'
import { Layout, Row, Col, Typography, Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useTheme } from '../utils/themeContext'

const { Header } = Layout
const { Title } = Typography


const CustomHeader = () => {

    const { setTheme, theme } = useTheme()
    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <Header 
            className='navbar'
        >
            <Row type="flex" justify="space-between" align="middle">
                <Col span={12}>
                    <Title level={3} >Where in the World ?</Title>
                </Col>
                <Col span={4} offset={8}>
                    <Button
                        id='theme-switcher'
                        type='text'
                        icon={<FontAwesomeIcon icon={faMoon} size="lg" />}
                        onClick={changeTheme}
                    >
                        {` ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    </Button>
                </Col>
            </Row>
        </Header>
    )
}

export default CustomHeader