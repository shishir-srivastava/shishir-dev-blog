import React from "react"
import Header from "../components/Header"
// import { graphql } from "gatsby"

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div>Hello world! Shishir&apos;s blog is being setup.</div>
    </>
  )
}

export default Home

// export const pageQuery = graphql`
//   query MetadataQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
