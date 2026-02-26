import templar from './templar-lvl1-50'
import simpleGameProgress from './simple-game-progress'
import lightningLancer from './lightning-lancer-50-100'
import ranni from './ranni'
import afflictioner from './afflictioner'
import newGamePlusProgress from './new-game-plus-progress'
import beforeNgPlus from './before-ngplus'
import { type TChecklist } from '~/features/checklist'
import moonveilSamurai from './moonveil-samurai'
import prepDlc from './prep-dlc'
import sote from './sote-game-progress'
import soteAsap from './sote-asap'
import pureFaithCaster from './pure-faith-caster'


const lists: TChecklist[] = [
  simpleGameProgress,
  sote,
  soteAsap,
  newGamePlusProgress,
  beforeNgPlus,
  prepDlc,
  moonveilSamurai,
  ranni,
  templar,
  lightningLancer,
  afflictioner,
  pureFaithCaster,
]

export { lists }