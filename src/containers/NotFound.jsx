import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Result, Button, Layout, Typography, Row } from 'antd'

const { Content } = Layout
const { Title } = Typography

const NotFound = () => {

    const navigate = useNavigate()


    return (
        <Layout
            // style={{ padding: '5% 10% 10%', backgroundColor: 'transparent' }}
        >
            <Row justify="center" align="middle">
                <Result
                    status="404"
                    title={<Title level={1}>Page not found</Title>}
                    subTitle={<Title level={5}>Sorry, the page you visited does not exist.</Title>}
                    extra={<Button onClick={() => navigate('/')} type="primary">Back Home</Button>}
                />
            </Row>
        </Layout>
    )
}

export default NotFound