import { faSearchengin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Select } from "antd"
import { Button } from "flowbite-react"
import { useState } from "react"
import {
  ContentType,
  Mutable,
  OptionCustomProps,
  ProductType,
  SearchObj,
  StyleType,
  searchTree,
} from "../components/search/types"
import Layout from "@/components/Layout"
const { Option } = Select

export type SearchPageProps = {
  status: "authenticated" | "loading" | "unauthenticated"
}

const SearchWithGallery = ({ status }: SearchPageProps) => {
  const [searchObj, setSearchObj] = useState<SearchObj>({
    style: "cartoon",
    contents: [],
    productType: "food & beverage",
  })
  const searchTreeClone: Mutable<typeof searchTree> = JSON.parse(
    JSON.stringify(searchTree)
  )
  const contentOptions = searchTreeClone.contents.map((option, idx) => (
    <Option key={idx}>{option}</Option>
  ))

  const handleStyleDropdown = ({
    target: { name: fieldName, value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchObj((prev) => ({
      ...prev,
      [fieldName]: value as StyleType | ProductType,
    }))
  }

  const handleMultiSelect = (
    _indices: string[],
    options: OptionCustomProps<ContentType> | OptionCustomProps<ContentType>[]
  ) => {
    Array.isArray(options) &&
      setSearchObj((prev) => ({
        ...prev,
        contents: options.map((opt) => opt.children),
      }))
  }

  const handleSubmit = (e: any) => {
    // TODO: let content types select be required
    e.preventDefault()
    console.log("searchObj", searchObj)
  }

  return (
    <Layout>
      <div className="h-full p-3 mt-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex items-center justify-center space-x-0">
            <select
              className="block appearance-none max-w-fit bg-gray-700 border border-gray-700 text-white py-3 px-4 rounded flex-1"
              name="style"
              value={searchObj.style}
              onChange={handleStyleDropdown}
            >
              {searchTreeClone.styles.map((val) => {
                const capitalizedVal = val[0].toUpperCase() + val.substring(1)
                return (
                  <option key={val} value={val}>
                    {capitalizedVal}
                  </option>
                )
              })}
            </select>
            <div className="flex items-center w-1/2">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 py-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
              />
              <Button type="submit" size="lg">
                <FontAwesomeIcon size="lg" icon={faSearchengin} />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex w-full space-x-4">
              <div className="w-1/2 flex items-center justify-end">
                <p className="text-xl -tracking-tighter font-thin">with</p>
                <Select
                  mode="multiple"
                  size="large"
                  className="p-2 w-2/5"
                  placeholder="Please select content type(s)"
                  onChange={handleMultiSelect}
                >
                  {contentOptions}
                </Select>
              </div>
              <div className="w-1/2 flex items-center justify-start">
                <p className="text-xl mr-2 -tracking-tighter font-thin">for </p>
                <select
                  className="block appearance-none max-w-fit bg-gray-700 border border-gray-700 text-white rounded"
                  name="productType"
                  value={searchObj.productType}
                  onChange={handleStyleDropdown}
                >
                  {searchTreeClone.productTypes.map((val) => {
                    const capitalizedVal =
                      val[0].toUpperCase() + val.substring(1)
                    return (
                      <option key={val} value={val}>
                        {capitalizedVal}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default SearchWithGallery
