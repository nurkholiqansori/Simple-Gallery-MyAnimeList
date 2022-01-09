import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import Popup from '/components/Popup'
import { useRecoilState } from 'recoil'

import { popupState } from '../../atoms/popupState'
import { day } from '../../atoms/days'
import { tabOnComing } from '../../atoms/tabOnComing'
import { numberAnime } from '../../atoms/numberAnime'

function GalleryOncoming({ data, theme }) {
  const [value, setValue] = useRecoilState(tabOnComing)

  const [popupData, setPopupData] = useRecoilState(numberAnime)

  const [days, setDays] = useRecoilState(day)

  const datas = data[days[value]]

  const [open, setOpen] = useRecoilState(popupState)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Container>
        <Box sx={{ maxWidth: 800, bgcolor: 'background.paper', mx: 'auto' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            aria-label='scrollable force tabs'
          >
            <Tab label='Sunday' />
            <Tab label='Monday' />
            <Tab label='Tuesday' />
            <Tab label='Wednesday' />
            <Tab label='Thursday' />
            <Tab label='Friday' />
            <Tab label='Saturday' />
            <Tab label='Other' />
            <Tab label='Unknown' />
          </Tabs>
        </Box>
        <div style={{ mx: '10px' }}>
          <ImageList
            sx={{
              width: 'auto',
              mx: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            cols={5}
            gap={5}
            rowHeight={{ md: 300, lg: 400 }}
          >
            {datas.map((data, index) => {
              return (
                <ImageListItem
                  key={data.mal_id}
                  sx={{
                    overflow: 'hidden',
                    minWidth: { xs: '150px', sm: '200px', md: '200px' },
                  }}
                >
                  {' '}
                  {data.image_url === 'undefined' ? 'NO IMAGE' : <img
                    src={`${data.image_url}?w=248&fit=crop&auto=format`}
                    srcSet={`${data.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={data.title}
                    loading='lazy'
                  />}
                  <ImageListItemBar
                    title={data.title}
                    subtitle={data.synopsis}
                    actionIcon={
                      <IconButton
                        onClick={() => {
                          setPopupData(index)
                          setOpen(true)
                        }}
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`Info about ${data.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              )
            })}
          </ImageList>
        </div>
        <Popup datas={data[days[value]]} theme={theme} />
      </Container>
    </div>
  )
}

export default GalleryOncoming
