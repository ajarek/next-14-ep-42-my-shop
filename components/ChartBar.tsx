'use client'
import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function ChartBar({ data }: any) {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <>
      {domLoaded && (
        <ResponsiveContainer height={320}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey='name'
            scale='point'
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray='3 3' />
          <Bar
            dataKey='Category'
            fill='#00C49F'
            background={{ fill: '#eee' }}
          />
        </BarChart>
        </ResponsiveContainer>
      )}
    </>
  )
}