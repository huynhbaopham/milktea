import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundVideo from "../images/videos/backgroundVideo.mp4"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <video autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  </Layout>
)

export default IndexPage
