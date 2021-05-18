import React from "react"
import Header from "../components/Header"
// import { graphql } from "gatsby"

const Home = (): React.ReactElement => {
  return (
    <>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <Header />
        <div>Hello world! Shishir&apos;s blog is being setup.</div>
      </div>
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
