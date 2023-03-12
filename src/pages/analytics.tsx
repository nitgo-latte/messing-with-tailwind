import Layout from "@/components/Layout"
import DemoPie from "@/components/plots/donut"
import { Col, Divider, Row, Statistic } from "antd"
import { Button } from "flowbite-react"
import dynamic from "next/dynamic"
const Line = dynamic(
  () => import("@ant-design/plots").then(({ Line }) => Line),
  {
    ssr: false,
  }
)
const Area = dynamic(
  () => import("@ant-design/plots").then(({ Area }) => Area),
  {
    ssr: false,
  }
)

const style: React.CSSProperties = {
  padding: "12px 0",
  textAlign: "center",
}

type LineData = {
  year: string
  value: number
  category: string
}
type SalesData = {
  timePeriod: string
  value: number
}
interface Props {
  lines: LineData[]
  sales: SalesData[]
}

const Analytics = ({ lines, sales }: Props) => {
  const linesConfig = {
    data: lines,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v: string) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  }
  const areaConfig = {
    data: sales,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  }

  return (
    <Layout>
      <Divider orientation="center">Statistics</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="mb-12">
        <Col className="py-3 px-0 border-l border-l-zinc-500" flex={1}>
          <div style={style}>
            <Statistic title="Clicks" value={112893} />
          </div>
        </Col>
        <Col className="py-3 px-0 border-l border-l-zinc-500" flex={1}>
          <div style={style}>
            <Statistic title="Views" value={112893} />
          </div>
        </Col>
        <Col className="py-3 px-0 border-l border-l-zinc-500" flex={1}>
          <div style={style}>
            <Statistic title="Registrations" value={112893} />
          </div>
        </Col>
        <Col className="py-3 px-0 border-l border-l-zinc-500" flex={1}>
          <div style={style}>
            <Statistic title="Sales Calls" value={112893} />
          </div>
        </Col>
        <Col className="py-3 px-0 border-l border-l-zinc-500" flex={1}>
          <div style={style}>
            <Statistic title="Returning Users" value={112893} />
          </div>
        </Col>
      </Row>
      <Divider className="mt-24" orientation="center">
        Charts
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="mb-12">
        <Col span={12}>
          <Line {...linesConfig} />
        </Col>
        <Col span={12}>
          <Area {...areaConfig} />
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={18}>
          <DemoPie />
        </Col>
      </Row>
      <div className="absolute inset-x-0 bottom-0 h-1/3">
        <div className="h-full bg-gradient-to-t from-gray-800 to-transparent flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Subscribe to continue reading...
          </h2>
          <Button color="dark">Subscribe</Button>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
  )
  const lines = await res.json()
  const res2 = await fetch(
    "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
  )
  const sales = await res2.json()
  return {
    props: {
      lines,
      sales,
    },
  }
}

export default Analytics
