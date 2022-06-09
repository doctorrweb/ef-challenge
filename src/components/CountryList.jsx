import React from 'react'
import { List, Card, Space, Typography } from 'antd'

const { Meta } = Card
const { Text, Title } = Typography

// const data = [
//   {
//     title: 'Title 1',
//   },
//   {
//     title: 'Title 2',
//   },
//   {
//     title: 'Title 3',
//   },
//   {
//     title: 'Title 4',
//   },
//   {
//     title: 'Title 5',
//   },
//   {
//     title: 'Title 6',
//   },
// ]

const Country = ({ data }) => {
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
                onChange: page => {
                    console.log(page);
                },
                pageSize: 12,
            }}
            dataSource={data}
            renderItem={(item) => (
            <List.Item>
                <Card
                    hoverable
                    cover={<img alt="example" style={{ height: 150, width: 250 }} src={item.flags.png} />}
                    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta 
                        title={<Title level={3}>{item.name.common}</Title>} 
                        description={
                            // <Space direction="vertical">
                            //     <><Text strong>Population: </Text> {item.population}</>
                            //     <><Text strong>Region: </Text> <Text>{item.region}</Text></>
                            //     <><Text strong>Capital: </Text> <Text>{item.capital && item.capital[0]}</Text></>
                            // </Space>
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
                {/* <Card style={{ minWidth: 350 }} title={item.title}>Card content</Card> */}
            </List.Item>
            )}
        />
    )
}


export default Country