import Layout from "@/components/Layout"
import SearchPage from "@/components/search/SearchPage"
import { GetServerSideProps } from "next"
import { getSession, useSession } from "next-auth/react"

export default function Home() {
  const { status } = useSession()

  return (
    <Layout>
      <SearchPage status={status} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: { session },
  }
}
