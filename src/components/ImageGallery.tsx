import { Image } from "antd"
import { useRouter } from "next/router"

interface Props {
  images: string[]
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  const router = useRouter()
  const viewImageDetails = (imgSrc: string) => {
    router.push(
      {
        pathname: "/imageDetail",
        query: {
          imgSrc: imgSrc,
        },
      },
      "/imageDetail"
    )
  }

  return (
    <>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full bg-indigo-600 hover:bg-opacity-75"
            >
              <Image
                src={image}
                preview={false}
                alt="empty alt messsage"
                onClick={() => viewImageDetails(image)}
                className="hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageGallery
