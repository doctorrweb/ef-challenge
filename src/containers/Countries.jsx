import React, { useState, useEffect } from 'react'
import { Row, Col, Input, Dropdown, Menu, Button, Space, Spin, Alert, notification } from 'antd'
import { useGetCountryListQuery } from '../queries/country'
import CountryList from '../components/CountryList'
import { DownOutlined } from '@ant-design/icons'


const { Search } = Input



const Countries = () => {

    const [activCountryList, setActivCountryList] = useState()
    const [countryList, setCountryList] = useState()
    const [region, setRegion] = useState()
    
    const { isLoading: isLoadingCountries, data: dataCountries, error: errorCountries, isFetched: isFetchedCountries, refetch: refetchCountries } = useGetCountryListQuery()


    const menu = (
        <Menu
            onClick={({key}) => handleChangeRegion(key)}
            items={[
                {
                    label: 'Africa',
                    key: 'Africa',
                },
                {
                    label: 'Americas',
                    key: 'Americas',
                },
                {
                    label: 'Asia',
                    key: 'Asia',
                },
                {
                    label: 'Europe',
                    key: 'Europe',
                },
                {
                    label: 'Oceania',
                    key: 'Oceania',
                }
            ]}
        />
    )

    const handleSearch = (value) => {

        const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase()

        if(!value) return setActivCountryList(countryList)

        const list = countryList.reduce((acc, curr) => {
            if (curr.name.common.startsWith(capitalize(value))) {
                acc.push(curr)
            }
            return acc
        }, [])
        setActivCountryList(list)
    }


    const handleChangeRegion = (value) => {
        setRegion(value)
        const list = countryList.filter(ctry => ctry.region === value)
        setActivCountryList(list)
    }


    const handleResetRegion = () => {
        if(region) {
            console.log('handleResetRegion')
            setRegion('')
            setActivCountryList(countryList)
        }
    }

    useEffect(() => {
        if(dataCountries) {
            setCountryList(dataCountries)
            setActivCountryList(dataCountries)
        }
    }, [isFetchedCountries])

    

    return (
        <>
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
                
                <Col lg={8} md={8} sm={24} xs={24} id='country-search-input'>
                    <Search
                        placeholder="Search for a country"
                        onSearch={(e) => handleSearch(e)}
                        size='large'
                        allowClear
                        
                    />
                </Col>
                <Col lg={6} md={6} sm={24} xs={24}>
                    <Dropdown id="filter-region-btn" overlay={menu}>
                        <Button id="filter-region-btn" onClick={() => handleResetRegion()}>
                            <Space>
                                {region ? `Selected: ${region}` : 'Filter by Region'}
                            <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Col>
            </Row>


            <Spin tip="Loading the Country List..." spinning={isLoadingCountries} size='large'>
                <Row type="flex" justify="space-between" align="middle" className="content">
                    {
                        activCountryList && (
                            <Col span={24} >
                                <CountryList data={activCountryList} />
                            </Col>
                        )
                    }
                </Row>
            </Spin>
        </>
    )
}

export default Countries