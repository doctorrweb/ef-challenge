import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetCountryListQuery, useGetCountryQuery } from '../queries/country'
import { Row, Col, Button, Spin, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import CountryDetails from '../components/CountryDetails'


const Country = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const [countryList, setCountryList] = useState()
    const [ countryName, setCountryName ] = useState('')
    const [country, setCountry] = useState()

    const { isLoading: isLoadingCountries, data: dataCountries, error: errorCountries, isFetched: isFetchedCountries, refetch: refetchCountries } = useGetCountryListQuery()
    const { isLoading: isLoadingCountry, data: dataCountry, error: errorCountry, isFetched: isFetchedCountry, refetch: refetchCountry } = useGetCountryQuery(countryName, !!countryName)

    useEffect(() => {
        const finalPath = pathname.split('/')
        setCountryName(finalPath[finalPath.length - 1])
    }, [pathname])


    useEffect(() => {
        if(dataCountries) {
            const data = dataCountries.find(item => item.name.common === countryName )
            setCountryList(dataCountries)
        }
    }, [isFetchedCountries])


    useEffect(() => {
        if(dataCountry) {
            setCountry(dataCountry)
        }
    }, [isFetchedCountry])

    useEffect(() => console.log('dataCountries', dataCountries))
    useEffect(() => console.log('country', dataCountry))


    return (
        <>
            <Row type="flex" justify="space-between" align="middle" className="content">
                <Col sm={24} xs={24}>
                    <Button 
                        icon={<ArrowLeftOutlined />} 
                        size="large"
                        onClick={() => navigate('/')}
                    >
                        Back 
                    </Button>

                    <Spin tip="Loading Country Details..." spinning={isLoadingCountries || isLoadingCountry}>
                        { country && country.map(ctry => (
                            <div key={ctry.ccn3}>
                                <CountryDetails country={ctry} />
                                <Divider />
                            </div>
                        )) }
                    </Spin>
                    
                </Col>
            </Row>
        </>
    )
}


export default Country