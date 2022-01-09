import { atom } from 'recoil'

export const day = atom({
  key: 'day',
  default: {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'other',
    8: 'unknown',
  },
})
