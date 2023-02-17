import Layout from "@/components/Layout"
import { Button, Card } from "flowbite-react"
import React from "react"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

interface Props {
  imgSrc: string
}
interface QueryProps extends ParsedUrlQuery {
  imgSrc?: string
}

const ImageDetail = () => {
  const router = useRouter()
  const query = router.query as QueryProps
  const {
    imgSrc = "https://cdn.shopify.com/s/files/1/0685/9209/articles/Image_header_thunder_blog_OP_1024x1024.jpg?v=1529686946",
  } = query
  return (
    <Layout>
      <div className="flex justify-center mt-24 space-x-12">
        <Card imgSrc={imgSrc} className="w-3/5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <div className="flex flex-col space-y-6">
          <div className="grid gap-y-1">
            <h3 className="font-semibold text-lg font-mono tracking-wider text-gray-400">
              style
            </h3>
            <p className="text-base text-gray-700 font-medium">retro comic</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg font-mono tracking-wider text-gray-400">
              average clicks
            </h3>
            <p className="text-base text-gray-700 font-medium">17k</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg font-mono tracking-wider text-gray-400">
              Price
            </h3>
            <p className="text-base text-gray-700 font-medium">$320</p>
          </div>
          <Button size="lg" color="dark">
            Download
          </Button>
          <div className="flex flex-wrap">
            <a
              className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/sharer/sharer.php?u="
              aria-label="Share on Facebook"
              draggable="false"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <title>Facebook</title>
                <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"></path>
              </svg>
            </a>
            <a
              className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source="
              aria-label="Share on Linkedin"
              draggable="false"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <title>Linkedin</title>
                <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"></path>
              </svg>
            </a>
            <a
              className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-3 rounded-lg text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pinterest.com/pin/create/button/?url=&amp;media=&amp;description="
              aria-label="Share on Pinterest"
              draggable="false"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <title>Pinterest</title>
                <path d="M268 6C165 6 64 75 64 186c0 70 40 110 64 110 9 0 15-28 15-35 0-10-24-30-24-68 0-81 62-138 141-138 68 0 118 39 118 110 0 53-21 153-90 153-25 0-46-18-46-44 0-38 26-74 26-113 0-67-94-55-94 25 0 17 2 36 10 51-14 60-42 148-42 209 0 19 3 38 4 57 4 3 2 3 7 1 51-69 49-82 72-173 12 24 44 36 69 36 106 0 154-103 154-196C448 71 362 6 268 6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ImageDetail
