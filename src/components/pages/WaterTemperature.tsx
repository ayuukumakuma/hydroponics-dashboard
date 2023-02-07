import { Box } from '@chakra-ui/react'
import { PagesContainer } from '../parts'
import ReactECharts from 'echarts-for-react'
import { useContext, useEffect } from 'react'
import { SensingDataContext, useSensingData } from '../functional'


export const WaterTemperature = () => {
  const {waterTemperatureDatas, times, setWaterTemperatureDatas, setTimes} = useContext(SensingDataContext)
  const nowDate = new Date().toISOString().slice(0, 10)
  const datas = useSensingData(nowDate)

  useEffect(() => {
    setWaterTemperatureDatas(datas.map((data) => data.water_temperature))
    setTimes(datas.map((data) => data.time))
  }, [datas])

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        fontFamily: `'M PLUS Rounded 1c'`,
        fontWeight: '800',
      },
      top: 16,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      alignWithLabel: true,
      data: times,
      axisLabel: {
        fontFamily: `'M PLUS Rounded 1c'`,
        fontWeight: '800',
        fontSize: 12,
        margin: 16,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        fontFamily: `'M PLUS Rounded 1c'`,
        fontWeight: '800',
        fontSize: 12,
        margin: 12,
      },
    },
    series: [
      {
        name: 'Water Temperature (℃)',
        type: 'line',
        smooth: true,
        data: waterTemperatureDatas,
        lineStyle: {
          color: '#4FD1C5',
          width: 4,
          cap: 'round'
        },
        itemStyle: {
          color: '#4FD1C5'
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
          label: {
            fontFamily: `'M PLUS Rounded 1c'`,
            fontWeight: '800'
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          label: {
            fontFamily: `'M PLUS Rounded 1c'`,
            fontWeight: '800'
          },
        },
      },
    ],
  }
  return (
    <PagesContainer>
      <Box w={'100%'} h={'100%'} bg={'white'} shadow={'xl'} rounded={'xl'}>
        <ReactECharts option={option} style={{height: '100%', width: '100%'}} />
      </Box>
    </PagesContainer>
  )
}