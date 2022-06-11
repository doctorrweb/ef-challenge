import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetCountryListQuery } from '../queries/country'
import { Row, Col, Button, Typography, Descriptions, Divider, Space, Tag } from 'antd'

const { Title, Text } = Typography

const CountryDetails = ({ country }) => {

    const navigate = useNavigate()
    const [borders, setBorders] = useState()
    const [countries, setCountries] = useState()
    const [currencies, setCurrencies] = useState()
    const [languages, setLanguages] = useState()

    const { isLoading: isLoadingCountries, data: dataCountries, error: errorCountries, isFetched: isFetchedCountries, refetch: refetchCountries } = useGetCountryListQuery()



    useEffect(() => {
        let list = []
        for (const key in country?.currencies) {
            list = [...list, key]
        }

        setCurrencies(list)
    }, [country])

    useEffect(() => {
        let list = []
        for (const key in country?.languages) {
            list = [...list, country?.languages[key]]
        }

        
        setLanguages(list)
    }, [country])

    useEffect(() => {
        const list = countries?.reduce((acc, curr) => {
            if(country?.borders?.includes(curr.cca3)) {
                acc.push(curr)
            }
            return acc
        }, [])

        setBorders(list)
    }, [countries])


    useEffect(() => {
        if (dataCountries) {
            setCountries(dataCountries)
        }
        
    }, [isFetchedCountries])

    return (
        <>
            {
                country && (
                    <Row type="flex" justify="space-between" align="middle" className="content">
            
                        <Col lg={8} md={8} sm={24} xs={24} id='country-search-input'>
                            <img
                                width="100%"
                                src={country?.flags?.png}
                            />
                        </Col>

                        <Col lg={{ span: 14, offset: 1 }} md={{ span: 12, offset: 2 }} sm={24} xs={24}>
                            
                            <Descriptions 
                                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }} 
                                title={<Title>{country?.name?.common}</Title>}>
                                <Descriptions.Item label={<Text strong>Native Name</Text>}>{country?.altSpellings?.[1]}</Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Population</Text>}>{country?.population}</Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Region</Text>}>{country?.region}</Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Sub-Region</Text>}>{country?.subregion}</Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Capital</Text>}>{country?.capital?.[0]}</Descriptions.Item>

                                <Descriptions.Item label={<Text strong>Top Level Domain</Text>}>{country?.tld?.[0]}</Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Currencies</Text>}>
                                    { currencies && currencies.map(ctry => ( <Tag key={ctry} color='default'>{ctry}</Tag> )) }
                                </Descriptions.Item>
                                <Descriptions.Item label={<Text strong>Languages</Text>}>
                                    <Space>{ languages && languages.map(lang => lang) }</Space>
                                </Descriptions.Item>
                            </Descriptions>

                            <Divider />

                            <Descriptions>
                                <Descriptions.Item label={<Text strong>Border Countries</Text>}>
                                    <Row>
                                        {
                                            borders && borders.map(ctry => (
                                                <Button onClick={() => navigate(`/${ctry.name?.common}`)} key={ctry.cca3} size='small'>{ctry?.name.common}</Button>
                                            ))
                                        }
                                    </Row>
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                )
            }
        </>
    )
}

export default CountryDetails