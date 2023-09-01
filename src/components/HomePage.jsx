import React from 'react'
import millify from 'millify'
import { Typography, Row, TableColumnGroupType, Statistic, Col } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography;


const HomePage = () => {

  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return 'loading'

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
    </>
  )
}

export default HomePage