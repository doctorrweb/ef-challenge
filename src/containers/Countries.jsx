import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Input, Dropdown, Menu, Button, Space, Spin, Alert } from 'antd'
import CustomHeader from './CustomHeader'
import { useGetCountryListQuery } from '../queries/country'
import CountryList from '../components/CountryList'
import { DownOutlined } from '@ant-design/icons'


const { Content } = Layout
const { Search } = Input



const Countries = () => {

    const [activCountryList, setActivCountryList] = useState()
    const { isLoading: isLoadingCountries, data: dataCountries, error: errorCountries, isFetched: isFetchedCountries, refetch: refetchCountries } = useGetCountryListQuery()

    const onSearch = (value) => console.log(value)
    const handleChange = (value) => console.log(`selected ${value}`)

    useEffect(() => {
        if(dataCountries) {
            setActivCountryList(dataCountries)
        }
    }, [isFetchedCountries])

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

            <Row type="flex" justify="space-between" align="middle" className="alert">
                <Col span={12} offset={6}>
                    {
                        errorCountries && (
                            <Alert
                                message="Unable to load the Country List"
                                showIcon
                                description="Error Description Error Description Error Description Error Description"
                                type="error"
                                action={
                                    <Button 
                                        size="small" 
                                        danger
                                        onClick={() => refetchCountries()}
                                    >
                                    Try again
                                    </Button>
                                }
                            />
                        )
                }
                </Col>
            </Row>


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


            <Spin tip="Loading the Country List..." spinning={isLoadingCountries}>
                <Row type="flex" justify="space-between" align="middle" className="content">
                    {
                        isFetchedCountries && (
                            <Col span={24} >
                                <CountryList data={dataCountries} />
                            </Col>
                        )
                    }
                </Row>
            </Spin>
        </Content>
    )
}

export default Countries