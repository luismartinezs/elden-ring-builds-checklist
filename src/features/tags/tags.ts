import type { TTagKeys } from "./types";
import { TAGS } from "./constants";

export type TTagValue = {
  label: string;
  key: TTagKeys;
  buttonClasses: string;
  tagClasses: string;
  questlineRewards?: string[];
}

export type TTags = Record<TTagKeys, TTagValue>

export const tags: TTags = {
  [TAGS.OPTIONAL]: {
    label: 'Optional',
    key: TAGS.OPTIONAL,
    buttonClasses: '',
    tagClasses: 'border border-amber-500 text-amber-500',
  },
  [TAGS.TUNNELS]: {
    label: 'Tunnels',
    key: TAGS.TUNNELS,
    buttonClasses: 'border-stone-400 text-stone-400 hover:bg-stone-400 hover:text-black focus:ring-stone-400',
    tagClasses: 'bg-stone-400 text-black',
  },
  [TAGS.CATACOMBS]: {
    label: 'Catacombs',
    key: TAGS.CATACOMBS,
    buttonClasses: 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black focus:ring-gray-300',
    tagClasses: 'bg-gray-300 text-black',
  },
  [TAGS.HERO_GRAVES]: {
    label: 'Hero Graves',
    key: TAGS.HERO_GRAVES,
    buttonClasses: 'border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:text-black focus:ring-yellow-100',
    tagClasses: 'bg-yellow-100 text-black',
  },
  [TAGS.CAVES]: {
    label: 'Caves',
    key: TAGS.CAVES,
    buttonClasses: 'border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-black focus:ring-stone-300',
    tagClasses: 'bg-stone-300 text-black',
  },
  [TAGS.VOLCANO_MANOR_ASSASSINATION]: {
    label: 'Tanith',
    key: TAGS.VOLCANO_MANOR_ASSASSINATION,
    buttonClasses: 'border-red-400 text-red-400 hover:bg-red-400 hover:text-black focus:ring-red-400',
    tagClasses: 'bg-red-400 text-black',
    questlineRewards: [
      "Magma Shot",
      "Serpentbone Blade",
      "Taker's Cameo",
      "Consort's Set",
      "Aspect of the Crucible: Breath",
      "Hoslow's Set",
      "Hoslow's Petal Whip",
      "Crepus's Vial",
      "Scaled Set",
    ]
  },
  [TAGS.RANNI_QUESTLINE]: {
    label: 'Ranni',
    key: TAGS.RANNI_QUESTLINE,
    buttonClasses: 'border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-black focus:ring-sky-200',
    tagClasses: 'bg-sky-200 text-black',
    questlineRewards: [
      "Dark Moon Greatsword",
      "Age of the Stars Ending",
      "Miniature Ranni",
      "Carian Inverted Statue",
    ]
  },
  [TAGS.VARRE_QUESTLINE]: {
    label: 'Varré',
    key: TAGS.VARRE_QUESTLINE,
    buttonClasses: 'border-red-700 text-red-700 hover:bg-red-700 hover:text-black focus:ring-red-700',
    tagClasses: 'bg-red-700 text-black',
    questlineRewards: [
      "Varre's Bouquet",
      "War Surgeon Set",
      "Bloody Finger",
      "Pureblood Knight's Medal",
    ]
  },
  [TAGS.NEPHELI_QUESTLINE]: {
    label: 'Nepheli',
    key: TAGS.NEPHELI_QUESTLINE,
    buttonClasses: 'border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black focus:ring-orange-300',
    tagClasses: 'bg-orange-300 text-black',
    questlineRewards: [
      'Arsenal Charm',
      'Ancient Dragon Smithing Stone'
    ]
  },
  [TAGS.SMITHING_STONE_BELL]: {
    label: 'Smithing Stone Bell',
    key: TAGS.SMITHING_STONE_BELL,
    buttonClasses: 'border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-black focus:ring-orange-200',
    tagClasses: 'bg-orange-200 text-black',
  },
  [TAGS.SOMBER_STONE_BELL]: {
    label: 'Somber Stone Bell',
    key: TAGS.SOMBER_STONE_BELL,
    buttonClasses: 'border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-black focus:ring-gray-100',
    tagClasses: 'bg-gray-100 text-black',
  },
  [TAGS.GLOVEWORT_BELL]: {
    label: 'Glovewort Bell',
    key: TAGS.GLOVEWORT_BELL,
    buttonClasses: 'border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-black focus:ring-zinc-300',
    tagClasses: 'bg-zinc-300 text-black',
  },
  [TAGS.GHOST_GLOVEWORT_BELL]: {
    label: 'Ghost Glovewort Bell',
    key: TAGS.GHOST_GLOVEWORT_BELL,
    buttonClasses: 'border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-black focus:ring-blue-200',
    tagClasses: 'bg-blue-200 text-black',
  },
  [TAGS.SELUVIS_QUESTLINE]: {
    label: 'Seluvis',
    key: TAGS.SELUVIS_QUESTLINE,
    buttonClasses: 'border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-black focus:ring-sky-300',
    tagClasses: 'border border-sky-500 bg-sky-900 text-sky-100 -m-px',
    questlineRewards: [
      "Magic Scorpion Charm",
      "Preceptor's Set",
      "Nepheli Loux Puppet",
      "Dung Eater Puppet",
    ]
  },
  [TAGS.WHETBLADES]: {
    label: 'Whetblades',
    key: TAGS.WHETBLADES,
    buttonClasses: 'border-green-300 text-green-300 hover:bg-green-300 hover:text-black focus:ring-green-300',
    tagClasses: 'bg-green-300 text-black',
  },
  [TAGS.LATENNA_QUESTLINE]: {
    label: 'Latenna',
    key: TAGS.LATENNA_QUESTLINE,
    buttonClasses: 'border-cyan-200 text-cyan-200 hover:bg-cyan-200 hover:text-black focus:ring-cyan-200',
    tagClasses: 'bg-cyan-200 text-black',
    questlineRewards: [
      "Latenna the Albinauric",
      "Somber Ancient Dragon Smithing Stone",
    ]
  },
  [TAGS.ALEXANDER_QUESTLINE]: {
    label: 'Alexander',
    key: TAGS.ALEXANDER_QUESTLINE,
    buttonClasses: 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black focus:ring-orange-400',
    tagClasses: 'bg-orange-400 text-black',
    questlineRewards: [
      "Gesture: Triumphant Delight",
      "Jar Helmet",
      "Warrior Jar Shard (Killed before Farum Azula)",
      "Shard of Alexander (Killed in Farum Azula)",
      "Alexander's Innards",
    ]
  },
  [TAGS.MILLICENT_QUESTLINE]: {
    label: 'Millicent',
    key: TAGS.MILLICENT_QUESTLINE,
    buttonClasses: 'border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-black focus:ring-rose-400',
    tagClasses: 'bg-rose-400 text-black',
    questlineRewards: [
      "Prosthesis-Wearer Heirloom",
      "Miquella's Needle",
      "Somber Ancient Dragon Smithing Stone",
      "Rotten Winged Sword Insignia",
      "Millicent's Prosthesis",
    ]
  },
  [TAGS.ALL_REMEMBERANCES]: {
    label: 'All Rem.',
    key: TAGS.ALL_REMEMBERANCES,
    buttonClasses: 'border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black focus:ring-amber-400',
    tagClasses: 'bg-amber-400 text-black',
  },
  [TAGS.HYETTA_QUESTLINE]: {
    label: 'Hyetta',
    key: TAGS.HYETTA_QUESTLINE,
    buttonClasses: 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring-yellow-400',
    tagClasses: 'bg-yellow-400 text-black',
    questlineRewards: [
      "Gesture: As You Wish",
      "Frenzied Flame Seal",
      "The Lord of the Frenzied Flame Ending",
    ]
  },
  [TAGS.DUNG_EATER_QUESTLINE]: {
    label: 'Dung Eater',
    key: TAGS.DUNG_EATER_QUESTLINE,
    buttonClasses: 'border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-black focus:ring-pink-600',
    tagClasses: 'bg-pink-600 text-black',
    questlineRewards: [
      "Sword of Milos",
      "Mending Rune of the Fell Curse",
      "Omen Set",
    ]
  },
  [TAGS.SELLEN_QUESTLINE]: {
    label: 'Sellen',
    key: TAGS.SELLEN_QUESTLINE,
    buttonClasses: 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black focus:ring-cyan-500',
    tagClasses: 'bg-cyan-500 text-black',
    questlineRewards: [
      "Jerren's Armor",
      "Glintstone Kris",
      "Shard Spiral",
      "Witch's Glintstone Crown",
      "Ancient Dragon Smithing Stone",
    ]
  },
  [TAGS.PATCHES_QUESTLINE]: {
    label: 'Patches',
    key: TAGS.PATCHES_QUESTLINE,
    buttonClasses: 'border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black focus:ring-orange-300',
    tagClasses: 'border border-orange-500 bg-orange-900 text-orange-100 -m-px',
    questlineRewards: [
      "Margit's Shackle",
      "Calm Down gesture",
      "Grovel for Mercy gesture",
      "Crouch gesture",
      "Magma Whip Candlestick",
    ]
  },
  [TAGS.YURA_QUESTLINE]: {
    label: 'Yura',
    key: TAGS.YURA_QUESTLINE,
    buttonClasses: 'border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-black focus:ring-zinc-300',
    tagClasses: 'border border-zinc-400 bg-zinc-600 text-white -m-px',
    questlineRewards: [
      "Purifying Crystal Tear",
      "Eleonora's Poleblade",
      "Nagakiba",
      "Ronin's Set",
    ]
  },
  [TAGS.CORHYN_QUESTLINE]: {
    label: 'Corhyn',
    key: TAGS.CORHYN_QUESTLINE,
    buttonClasses: 'border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black focus:ring-yellow-300',
    tagClasses: 'bg-yellow-300 text-black',
    questlineRewards: [
      "Great Heal",
      "Lightning Fortification",
      "Discus of Light",
      "Immutable Shield",
      "Corhyn's Bell Bearing",
      "Flail",
      "Corhyn's Robe",
      "Goldmask's Set",
      "Mending Rune of Perfect Order"
    ]
  },
  [TAGS.RYA_QUESTLINE]: {
    label: 'Rya',
    key: TAGS.RYA_QUESTLINE,
    buttonClasses: 'border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-black focus:ring-rose-600',
    tagClasses: 'bg-rose-600 text-black',
    questlineRewards: [
      "Easy access to Volcano Manor",
      "Daedicar's woe",
      "Zorayas' Letter"
    ]
  },
  [TAGS.BOGGART_QUESTLINE]: {
    label: 'Boggart',
    key: TAGS.BOGGART_QUESTLINE,
    buttonClasses: 'border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black focus:ring-lime-500',
    tagClasses: 'bg-lime-500 text-black',
    questlineRewards: [
      "Boiled Prawn",
      "Boiled Crab",
      "Seedbed Curse",
    ]
  },
  [TAGS.D_QUESTLINE]: {
    label: 'D',
    key: TAGS.D_QUESTLINE,
    buttonClasses: 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black focus:ring-orange-500',
    tagClasses: 'bg-orange-500 text-black',
    questlineRewards: [
      "Twinned Set",
      "Litany of Proper Death",
      "Order's Blade",
      "Inseparable Sword"
    ]
  },
  [TAGS.ROGIER_QUESTLINE]: {
    label: 'Rogier',
    key: TAGS.ROGIER_QUESTLINE,
    buttonClasses: 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black focus:ring-teal-400',
    tagClasses: 'bg-teal-400 text-black',
    questlineRewards: [
      "Ash of War: Glintstone Pebble",
      "Ash of War: Carian Greatsword",
      "Ash of War: Spinning Weapon",
      "Rogier's Rapier",
      "Ash of War: Glintblade Phalanx",
      "Spellblade Set"
    ]
  },
  [TAGS.FIA_QUESTLINE]: {
    label: 'Fia',
    key: TAGS.FIA_QUESTLINE,
    buttonClasses: 'border-gray-300 text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-800',
    tagClasses: 'bg-gray-900 text-white border border-gray-400 -m-px',
    questlineRewards: [
      "Fia's Set",
      "Baldachin's Blessing",
      "Radiant Baldachin's Blessing",
      "Mending Rune of the Death-Prince"
    ]
  },
  [TAGS.GOLDEN_SEED]: {
    label: 'Golden Seed',
    key: TAGS.GOLDEN_SEED,
    buttonClasses: 'border-yellow-200 text-yellow-200 hover:bg-yellow-200 hover:text-black focus:ring-yellow-200',
    tagClasses: 'bg-yellow-200 text-black',
  },
  [TAGS.SACRED_TEAR]: {
    label: 'Sacred Tear',
    key: TAGS.SACRED_TEAR,
    buttonClasses: 'border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-black focus:ring-rose-300',
    tagClasses: 'bg-rose-300 text-black',
  },
  [TAGS.LARVAL_TEAR]: {
    label: 'Larval Tear',
    key: TAGS.LARVAL_TEAR,
    buttonClasses: 'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black focus:ring-gray-400',
    tagClasses: 'bg-gray-400 text-black',
  },
  [TAGS.RITUAL_POT]: {
    label: 'Ritual Pot',
    key: TAGS.RITUAL_POT,
    buttonClasses: 'border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black focus:ring-amber-500',
    tagClasses: 'bg-amber-500 text-black',
  },
  [TAGS.LEGENDARY_WEAPONS_ACH]: {
    label: 'Leg. Weapons (ach.)',
    key: TAGS.LEGENDARY_WEAPONS_ACH,
    buttonClasses: 'border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black focus:ring-amber-500',
    tagClasses: 'bg-amber-500 text-black',
  },
  [TAGS.LEGENDARY_WEAPONS]: {
    label: 'Leg. Weapons',
    key: TAGS.LEGENDARY_WEAPONS,
    buttonClasses: 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black focus:ring-gray-300',
    tagClasses: 'bg-gray-300 text-black',
  },
  [TAGS.LEGENDARY_ASHES]: {
    label: 'Leg. Ashes',
    key: TAGS.LEGENDARY_ASHES,
    buttonClasses: 'border-white text-white hover:bg-white hover:text-black focus:ring-white',
    tagClasses: 'bg-white text-black',
  },
  [TAGS.LEGENDARY_ASHES_ACH]: {
    label: 'Leg. Ashes (ach.)',
    key: TAGS.LEGENDARY_ASHES_ACH,
    buttonClasses: 'border-white text-white hover:bg-white hover:text-black focus:ring-white',
    tagClasses: 'bg-white text-black',
  },
  [TAGS.LEGENDARY_SPELLS]: {
    label: 'Leg. Spells',
    key: TAGS.LEGENDARY_SPELLS,
    buttonClasses: 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black focus:ring-blue-500',
    tagClasses: 'bg-blue-500 text-black',
  },
  [TAGS.LEGENDARY_TALISMANS]: {
    label: 'Leg. Talismans',
    key: TAGS.LEGENDARY_TALISMANS,
    buttonClasses: 'border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black focus:ring-emerald-500',
    tagClasses: 'bg-emerald-500 text-black',
  },
  [TAGS.MEMORY_STONE]: {
    label: 'Memory Stone',
    key: TAGS.MEMORY_STONE,
    buttonClasses: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-blue-400',
    tagClasses: 'bg-blue-400 text-black',
  },
  // SOTE
  [TAGS.LEDA]: {
    label: 'Leda',
    key: TAGS.LEDA,
    buttonClasses: 'border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:text-black focus:ring-yellow-100',
    tagClasses: 'bg-yellow-100 text-yellow-900',
    questlineRewards: [
      "Leda's Sword",
      "Leda's Armor",
      "If helping Hornsent: Ash of War: Swift Slash, Leda's Rune",
      "If invading Hornsent: Falx, Caterpillar Mask, Braided Cord Robe, Braided Arm Wraps, Soiled Loincloth, Lacerating Crossed-Tree",
      "If helping Sir Ansbach: Leda's Rune, Ansbach's Longbow",
      "If invading Sir Ansbach: Wise Man's Mask, Ansbach's Attire, Ansbach's Manchettes, Ansbach's Boots, Retaliatory Crossed-Tree (This will end Ansbach's questline and lock you out of his final rewards)"
    ]
  },
  [TAGS.FREYJA]: {
    label: 'Freyja',
    key: TAGS.FREYJA,
    buttonClasses: 'border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-black focus:ring-amber-200',
    tagClasses: 'bg-amber-200 text-amber-900',
    questlineRewards: [
      "Golden Lion Shield",
      "Letter for Freyja",
      "Freyja's Helm",
      "Freyja's Armor",
      "Freyja's Gauntlets",
      "Freyja's Greaves",
      "Freyja's Greatsword",
    ]
  },
  [TAGS.DANE]: {
    label: 'Dane',
    key: TAGS.DANE,
    buttonClasses: 'border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black focus:ring-orange-300',
    tagClasses: 'border border-orange-500 bg-orange-900 text-orange-100 -m-px',
    questlineRewards: [
      "Dryleaf Arts",
      "Dane's Hat",
      "Dryleaf Robe",
      "Dryleaf Arm Wraps",
      "Dryleaf Cuissardes",
      "Dane's Footwork"
    ]
  },
  [TAGS.MOORE]: {
    label: 'Moore',
    key: TAGS.MOORE,
    buttonClasses: 'border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black focus:ring-teal-300',
    tagClasses: 'border border-teal-500 bg-teal-900 text-teal-100 -m-px',
    questlineRewards: [
      "Verdigris Greatshield",
      "Verdigris Helm",
      "Verdigris Armor",
      "Verdigris Gauntlets",
      "Verdigris Greaves",
      "Moore's Bell Bearing",
    ]
  },
  [TAGS.ANSBACH]: {
    label: 'Ansbach',
    key: TAGS.ANSBACH,
    buttonClasses: 'border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-black focus:ring-orange-200',
    tagClasses: 'bg-orange-200 text-gray-900',
    questlineRewards: [
      "Secret Rite Scroll",
      "Leda's Rune",
      "Wise Man's Mask",
      "Ansbach's Attire",
      "Ansbach's Manchettes",
      "Ansbach's Boots",
      "Ansbach's Longbow",
      "Furious Blade of Ansbach",
      "Obsidian Lamina",
    ]
  },
  [TAGS.THIOLLIER]: {
    label: 'Thiollier',
    key: TAGS.THIOLLIER,
    buttonClasses: 'border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-black focus:ring-purple-300',
    tagClasses: 'border border-purple-500 bg-purple-300 text-gray-800 -m-px',
    questlineRewards: [
      "Thiollier's Hidden Needle",
      "Thiollier's Garb",
      "Thiollier's Gloves",
      "Thiollier's Trousers",
      "St. Trina's Smile",
    ]
  },
  [TAGS.QUEELIGN]: {
    label: 'Queelign',
    key: TAGS.QUEELIGN,
    buttonClasses: 'border-red-300 text-red-300 hover:bg-red-300 hover:text-black focus:ring-red-300',
    tagClasses: 'bg-red-300 text-gray-800',
    questlineRewards: [
      "Crusade Insignia",
      "Ash of War: Flame Skewer",
      "Iris of Grace: Fire Knight Queelign Spirit Ash",
      "Iris of Occultation: Queelign's Greatsword"
    ]
  },
  [TAGS.HORNSENT]: {
    label: 'Hornsent',
    key: TAGS.HORNSENT,
    buttonClasses: 'border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black focus:ring-cyan-300',
    tagClasses: 'border border-cyan-500 bg-cyan-900 text-cyan-100 -m-px',
    questlineRewards: [
      "Falx",
      "Caterpillar Mask",
      "Braided Cord Robe",
      "Braided Arm Wraps",
      "Soiled Loincloth",
      "If helping Hornsent fight Needle Knight Leda: Swift Slash, Leda's Rune"
    ]
  },
  [TAGS.IGON]: {
    label: 'Igon',
    key: TAGS.IGON,
    buttonClasses: 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black focus:ring-orange-500',
    tagClasses: 'border border-orange-700 bg-orange-900 text-orange-100 -m-px',
    questlineRewards: [
      "Igon's Furled Finger",
      "Igon's Greatbow",
      "Igon's Helm",
      "Igon's Armor",
      "Igon's Gauntlets",
      "Igon's Loincloth",
      "Igon's Bell Bearing",
    ]
  },
  [TAGS.FORAGER]: {
    label: 'Foragers',
    key: TAGS.FORAGER,
    buttonClasses: 'border-red-600 text-red-600 hover:bg-red-600 hover:text-black focus:ring-red-600',
    tagClasses: 'bg-red-300 text-gray-800',
    questlineRewards: [
    ]
  },
  [TAGS.YMIR]: {
    label: 'Ymir',
    key: TAGS.YMIR,
    buttonClasses: 'border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-black focus:ring-violet-700',
    tagClasses: 'border border-violet-700 bg-violet-900 text-violet-100 -m-px',
    questlineRewards: [
      "Beloved Stardust",
      "Cerulean Seed Talisman +1",
      "Ymir's Bell Bearing",
      "Maternal Staff",
      "High Priest Hat",
      "High Priest Robe",
      "High Priest Gloves",
      "High Priest Undergarments",
    ]
  },
  [TAGS.JOLAN]: {
    label: 'Jolan',
    key: TAGS.JOLAN,
    buttonClasses: 'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black focus:ring-gray-400',
    tagClasses: 'border border-gray-400 bg-gray-900 text-gray-100 -m-px',
    questlineRewards: [
      "Iris of Grace: Swordhand of Night Jolan Spirit Ash",
      "Iris of Occultation: Sword of Night"
    ]
  },
  [TAGS.DRAGON_PRIESTESS]: {
    label: 'Dragon Priestess',
    key: TAGS.DRAGON_PRIESTESS,
    buttonClasses: 'border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-black focus:ring-rose-300',
    tagClasses: 'bg-rose-300 text-gray-800',
    questlineRewards: [
      "If given Thiollier's Concoction: Dragonbolt of Florissax, Ancient Dragon Florissax",
      "If not given Thiollier's Concoction: Flowerstone Gavel, Priestess Heart"
    ]
  },
  [TAGS.MAP_FRAGMENT]: {
    label: 'Maps',
    key: TAGS.MAP_FRAGMENT,
    buttonClasses: 'border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black focus:ring-amber-300',
    tagClasses: 'bg-amber-300 text-amber-900',
  },
  [TAGS.DUNGEON]: {
    label: 'Dungeon',
    key: TAGS.DUNGEON,
    buttonClasses: 'border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black focus:ring-gray-300',
    tagClasses: 'bg-gray-300 text-gray-900',
  }
}
