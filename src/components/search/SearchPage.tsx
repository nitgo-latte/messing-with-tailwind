import { Select } from "antd"
import { Button, Dropdown } from "flowbite-react"
import { useState } from "react"
import {
  ContentType,
  FieldName,
  Mutable,
  OptionCustomProps,
  ProductType,
  SearchObj,
  StyleType,
  searchTree,
} from "./types"
import Link from "next/link"
import { SearchPageProps } from "@/pages/searchgallery"

const { Option } = Select

const SearchPage = ({ status }: SearchPageProps) => {
  const [searchObj, setSearchObj] = useState<SearchObj>({
    style: "cartoon",
    contents: ["image"],
    productType: "food & beverage",
  })
  const notLoggedIn = status !== "authenticated"
  const searchTreeClone: Mutable<typeof searchTree> = JSON.parse(
    JSON.stringify(searchTree)
  )
  const contentOptions = searchTreeClone.contents.map((option, idx) => (
    <Option key={idx}>{option}</Option>
  ))

  // TODO: use Callback hook here
  const renderDropdownList = (
    field: FieldName,
    options: StyleType[] | ProductType[]
  ) =>
    options.map((option, idx) => {
      return (
        <Dropdown.Item
          key={`${option}_${idx}`}
          onClick={() => handleDropdownChange(field, option)}
        >
          {option}
        </Dropdown.Item>
      )
    })
  const handleDropdownChange = (
    field: FieldName,
    item: StyleType | ProductType
  ) => {
    setSearchObj((prev) => ({
      ...prev,
      [field]: item,
    }))
  }
  const handleMultiSelect = (
    _indices: string[],
    options: OptionCustomProps<ContentType> | OptionCustomProps<ContentType>[]
  ) => {
    Array.isArray(options) &&
      setSearchObj((prev) => ({
        ...prev,
        content: options.map((opt) => opt.children),
      }))
  }
  const handleSubmit = () => {
    console.log("searchObj", searchObj)
  }

  return (
    <div className="flex flex-col items-center space-y-12 md:space-x-3">
      <div className="mt-24">
        <h1 className="text-6xl font-extrabold text-purple-400 tracking-wide">
          red potatoes
        </h1>
      </div>
      {/* search bar container */}
      <div className="flex items-center justify-center border border-transparent px-12 py-6 rounded-md shadow-lg">
        <form action="#" className="p-2">
          <div className="flex justify-center items-center space-x-1">
            <p className="text-xl font-light">Search ads in</p>
            <Dropdown
              defaultValue={"cartoon"}
              label={
                <input
                  type="text"
                  name="style"
                  size={7}
                  value={searchObj.style}
                  disabled
                  className="font-light border-none p-0 m-0 placeholder:text-xl"
                  placeholder="style"
                />
              }
              color="light"
              size="xs"
            >
              {renderDropdownList("style", searchTreeClone["styles"])}
            </Dropdown>

            <p className="text-xl font-light">with</p>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select content type(s)"
              onChange={handleMultiSelect}
            >
              {contentOptions}
            </Select>

            <Dropdown
              defaultValue={"others"}
              label={
                <input
                  type="text"
                  name="style"
                  size={7}
                  value={searchObj.productType}
                  disabled
                  className="font-light border-none p-0 m-0 placeholder:text-xl"
                  placeholder="style"
                />
              }
              color="light"
              size="xs"
            >
              {renderDropdownList(
                "productType",
                searchTreeClone["productTypes"]
              )}
            </Dropdown>
          </div>

          <div className="flex justify-center mt-7">
            {/* TODO: replace link with next router to handle routing logic based on auth status */}
            <Link href={notLoggedIn ? "" : "searchgallery"}>
              <Button size="md" onClick={handleSubmit} disabled={notLoggedIn}>
                Start your search
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchPage
