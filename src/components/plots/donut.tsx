import { PieConfig } from "@ant-design/charts"
import dynamic from "next/dynamic"
const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
})

const DemoPie = () => {
  const data = [
    {
      type: "Mon",
      value: 27,
    },
    {
      type: "Tues",
      value: 25,
    },
    {
      type: "Wedn",
      value: 18,
    },
    {
      type: "Thurs",
      value: 15,
    },
    {
      type: "Fri",
      value: 10,
    },
    {
      type: "Sat",
      value: 5,
    },
  ]
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Total\nSales",
      },
    },
  }
  return <Pie {...config} />
}

export default DemoPie
