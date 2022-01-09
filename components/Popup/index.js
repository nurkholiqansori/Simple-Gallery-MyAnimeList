import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { popupState } from '../../atoms/popupState'
import { day } from '../../atoms/days'
import { tabOnComing } from '../../atoms/tabOnComing'
import { numberAnime } from '../../atoms/numberAnime'
import { Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { TempleBuddhistSharp } from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      position: 'fixed',
    },
  },
  imageWrap: {
    [theme.breakpoints.up('xs')]: {
      maxHeight: '400px',
      overflow: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: 'auto',
      overflow: 'visible',
    },
  },
}))

function popup({ datas, theme }) {
  const [open, setOpen] = useRecoilState(popupState)

  const [popupData, setPopupData] = useRecoilState(numberAnime)

  const [value, setValue] = useRecoilState(tabOnComing)

  const [days, setDays] = useRecoilState(day)

  const data = datas[popupData]

  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <Grid container spacing={9} direction={'row'} sx={{ overflow: 'auto', width: 'auto' }}>
          <Grid
            className={classes.imageWrap}
            item
            md={4}
            sx={{
              marginBottom: '-7px',
            }}
          >
            <img
              className={classes.image}
              src={`${data.image_url}?auto=format`}
              srcSet={`${data.image_url}?auto=format&dpr=2 2x`}
              alt={data.title}
              loading='lazy'
            />
          </Grid>
          <Grid item md={8} sx={{ paddingLeft: '10px', flexWrap: 'wrap' }}>
            <DialogTitle>{data.title}</DialogTitle>

            <Box
              sx={{
                margin: '0 auto 5px 23px',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <Typography sx={{ display: 'flex' }}>
                Producer{data.producers.length > 1 ? 's' : ''} :{' '}
                {data.producers
                  .map((producer) => {
                    return (
                      <div
                        key={producer.mal_id}
                        style={{
                          border: '1px solid black',
                          padding: '1px 5px',
                          marginLeft: '5px',
                          borderRadius: '100px',

                        }}
                      >
                        <Typography variant='caption' sx={{ color: 'black' }}>
                          {producer.name}
                        </Typography>
                      </div>
                    )
                  })}
              </Typography>
            </Box>
            <div
              style={{
                margin: '0 auto 20px 20px',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {data.genres.map((genre) => {
                return (
                  <div
                    key={genre.mal_id}
                    style={{
                      border: '1px solid green',
                      padding: '1px 5px',
                      marginTop: '5px',
                      marginLeft: '5px',
                      borderRadius: '100px',
                    }}
                  >
                    <Typography variant='caption' sx={{ color: 'green' }}>
                      {genre.name}
                    </Typography>
                  </div>
                )
              })}
              {data.themes.map((tema) => {
                return (
                  <div
                    key={tema.mal_id}
                    style={{
                      border: '1px solid blue',
                      padding: '1px 5px',
                      marginTop: '5px',
                      marginLeft: '5px',
                      borderRadius: '100px',
                    }}
                  >
                    <Typography variant='caption' sx={{ color: 'blue' }}>
                      {tema.name}
                    </Typography>
                  </div>
                )
              })}
            </div>
            <DialogContent sx={{ maxHeight: '150px' }}>
              <DialogContentText id='alert-dialog-slide-description'>
                {data.synopsis}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}

export default popup
