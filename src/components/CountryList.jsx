import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Card, Space, Typography } from 'antd'

const { Meta } = Card
const { Text, Title } = Typography

const Country = ({ data }) => {

    const navigate = useNavigate()

    return (
        <List
            grid={{
                gutter: 12,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 4,
                xl: 4,
                xxl: 6,
            }}
            pagination={{
                pageSize: 12,
            }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item>
                <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" className='country-item-img' src={item.flags.png} />}
                    className="country-item"
                    onClick={() => navigate(`/${item.name.common}`)}
                >
                    <Meta 
                        title={<Title level={3}>{item.name.common}</Title>} 
                        description={
                            <Space direction="vertical" size="small">
                                <Space>
                                    <Text strong>Population: </Text>
                                    <Text>{item.population}</Text>
                                </Space>
                                <Space>
                                    <Text strong>Region: </Text>
                                    <Text>{item.region}</Text>
                                </Space>
                                <Space>
                                    <Text strong>Capital: </Text>
                                    <Text>{item.capital && item.capital[0]}</Text>
                                </Space>
                            </Space>
                        } />
                </Card>
            </List.Item>
            )}
        />
    )
}


export default Country