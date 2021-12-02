import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import backgroundVideo from "../images/Videos/AdvertisingVideo.mp4"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <VideoContainer>
      <Video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </Video>
      <Video autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </Video>
    </VideoContainer>
  </Layout>
)

export default IndexPage

const VideoContainer = styled.div`
  display: block;
  justify-content: center;
`

const Video = styled.video`
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 100% !important;
    overflow-x: hidden;
  }
`
