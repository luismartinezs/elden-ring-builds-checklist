import templar from './templar-lvl1-50'
import simpleGameProgress from './simple-game-progress'
import lightningLancer from './lightning-lancer-50-100'
import ranni from './ranni'
import newGamePlusProgress from './new-game-plus-progress'
import beforeNgPlus from './before-ngplus'
import { type TChecklist } from '~/features/checklist'


const lists: TChecklist[] = [
  // NOTE not sure why but TS gets confused without this type assertion
  simpleGameProgress as TChecklist,
  newGamePlusProgress as TChecklist,
  beforeNgPlus,
  templar,
  lightningLancer,
  ranni
]

export { lists }