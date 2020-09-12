import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import BCL_ROUGE from "../images/BCL_ROUGE.png"

// Ajouter typo
// Ajouter i18n
//

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
`

const COLORS = {
  main: "#304FFE",
  secondary: "#FF5722",
}

const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${COLORS.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainLogo = styled.img`
  width: 30%;
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <MainLogo src={BCL_ROUGE} />
      </Layout>
    </>
  )
}
