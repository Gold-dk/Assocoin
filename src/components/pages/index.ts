import HomeMain from './main/Home.vue'
import AssoMain from './main/Asso.vue'
import ToolMain from './main/Tool.vue'
import DonMain from './main/Don.vue'
import EchangeMain from './main/Echange.vue'

import HomeAside from './aside/Home.vue'
import AssoAside from './aside/Asso.vue'
import ToolAside from './aside/Tool.vue'
import DonAside from './aside/Don.vue'
import EchangeAside from './aside/Echange.vue'

export const selectPage: { [key: string]: any } = {
  "Home": {
    "aside": HomeAside,
    "main": HomeMain
  },
  "Asso": {
    "aside": AssoAside,
    "main": AssoMain
  },
  "Tool": {
    "aside": ToolAside,
    "main": ToolMain
  },
  "Don": {
    "aside": DonAside,
    "main": DonMain
  },
  "Echange": {
    "aside": EchangeAside,
    "main": EchangeMain
  }
}
