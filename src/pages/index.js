import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import BCL_ORANGE from "../images/BCL_ORANGE.png"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    font-family: Arial Black, sans-serif;
    line-height: 1.5;
  }
  h1 {
    margin: 0;
    text-align: center;
    font-size: 1.3rem;
    color: ghostwhite;
  }
  p {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    color: ghostwhite;    
  }
  svg {
    color: ghostwhite;
    height: 3rem;
    width: 3rem;
  }
`

const COLORS = {
  main: "#304FFE",
  secondary: "#FF5722",
}

const TEXTS = {
  french: "Français",
  english: "English",
  fr: {
    vision: "Notre vision",
    visionText:
      "Transformer le vélo en un mode de vie auprès des hommes urbains contemporains.",
    job: "Notre job",
    jobText:
      "Un vestiaire complet permettant de faire du vélo, d'aller au boulot et de terminer sur un apéro sans avoir à se changer.",
    you: "Et vous ?",
    youText:
      "Rejoignez la boucle et soyez les premiers à être tenus au courant de la sortie de la veste.",
  },
  en: {
    vision: "Our vision",
    visionText: "Turning cycling into lifestyle for contempoary urban men.",
    job: "Our job",
    jobText:
      "A whole wardrobe for cycling, working, and finishing with an afterwork without ha ving to change.",
    you: "And you ?",
    youText:
      "Join the movement now and be the first to know about the jacket's release.",
  },
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

const TextsContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  padding: 0 1rem;
`

const MainLogo = styled.img`
  margin-top: 1rem;
  max-width: 30%;
  max-height: 300px;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin: 1rem 3rem;
  justify-content: space-between;
  align-items: center;
`

const LangSwitcher = styled.button`
  font-family: Arial Black, sans-serif;
  color: ghostwhite;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export default function Home() {
  const [lang, setLang] = useState("fr")
  return (
    <>
      <GlobalStyle />
      <Layout>
        <MainLogo src={BCL_ORANGE} />
        <TextsContainer>
          <ButtonsContainer>
            <LangSwitcher onClick={() => setLang("fr")}>Français</LangSwitcher>
            <LangSwitcher onClick={() => setLang("en")}>English</LangSwitcher>
          </ButtonsContainer>
          <h1>{TEXTS[lang].vision}</h1>
          <p style={{ marginBottom: 40 }}>{TEXTS[lang].visionText}</p>
          <h1>{TEXTS[lang].job}</h1>
          <p style={{ marginBottom: 40 }}>{TEXTS[lang].jobText}</p>
          <h1>{TEXTS[lang].you}</h1>
          <p>{TEXTS[lang].youText}</p>
        </TextsContainer>
        <ButtonsContainer>
          <a href="https://www.facebook.com/rideinboucle">
            <FaFacebookSquare />
          </a>
          <div style={{ width: 100 }} />
          <a href="https://www.instagram.com/rideinboucle">
            <FaInstagramSquare />
          </a>
        </ButtonsContainer>
      </Layout>
    </>
  )
}
