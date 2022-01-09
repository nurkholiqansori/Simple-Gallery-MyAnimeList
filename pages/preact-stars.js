import { useState } from 'react'
import Link from 'next/link'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function PreactStars({ data }) {

  const [sunday, setSunday] = useState(true)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)
  const [other, setOther] = useState(false)
  const [unknown, setUnknown] = useState(false)

   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
     setValue(newValue)
   }


  return (
    <div>
      <Box sx={{ maxWidth: 800, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
          aria-label='scrollable force tabs example'
        >
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
          <Tab label='Item Four' />
          <Tab label='Item Five' />
          <Tab label='Item Six' />
          <Tab label='Item Seven' />
        </Tabs>
      </Box>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <a>Sunday</a>
        </div>
        <div>
          <a>Monday</a>
        </div>
        <div>
          <a>Tuesday</a>
        </div>
        <div>
          <a>Wednesday</a>
        </div>
        <div>
          <a>Thursday</a>
        </div>
        <div>
          <a>Friday</a>
        </div>
        <div>
          <a>Saturday</a>
        </div>
        <div>
          <a>Other</a>
        </div>
        <div>
          <a>Unknown</a>
        </div>
      </div>

      {/* {data.map((data1) => {
        return (
          <div key={data.mal_id}>
            {data.title}
          </div>
        )
      })} */}
      <Link href='/'>
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.jikan.moe/v3/schedule/')
  const json = await res.json()

  // console.log(json)

  return {
    props: {
      data: json,
    },
  }
}

export default PreactStars
