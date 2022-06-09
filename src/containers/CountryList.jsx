import React, {  } from 'react'
import { Layout, Row, Col, Input, Dropdown, Menu, Button, Space } from 'antd'
import CustomHeader from './CustomHeader'
import { DownOutlined } from '@ant-design/icons'


const { Content } = Layout
const { Search } = Input



const CountryList = () => {

    const onSearch = (value) => console.log(value)
    const handleChange = (value) => console.log(`selected ${value}`)

    const menu = (
        <Menu
            onClick={handleChange}
            items={[
                {
                    label: 'Africa',
                    key: '1',
                },
                {
                    label: 'America',
                    key: '2',
                },
                {
                    label: 'Asia',
                    key: '3',
                },
                {
                    label: 'Europe',
                    key: '4',
                },
                {
                    label: 'Oceania',
                    key: '5',
                },
            ]}
        />
    )

    return (
        <Content className="app">
            <CustomHeader />
            <Row type="flex" justify="space-between" align="middle" className="content">
                <Col lg={8} md={8} sm={24} xs={24}>
                    <Search
                        placeholder="Search for a country"
                        onSearch={onSearch}
                        size='large'
                    />
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Dropdown overlay={menu}>
                        <Button>
                            <Space>
                                Filter by Region
                            <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        </Content>
    )
}

export default CountryList