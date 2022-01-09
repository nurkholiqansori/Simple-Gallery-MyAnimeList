import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { RecoilRoot } from 'recoil'
import GalleryOncoming from '../components/GalleryOncoming'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

function Index({ data }) {

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536, // large screens
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Head>
            <title>HALO</title>
          </Head>
          <CssBaseline />
          <Typography variant='h4' align='center' sx={{ marginTop: '50px', textTransform: 'uppercase' }} gutterBottom>
            Schedule Anime
          </Typography>
          <GalleryOncoming data={data} theme={theme} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.jikan.moe/v3/schedule/')
  const json = await res.json()

  return {
    props: {
      data: json,
    },
  }
}

export default Index
