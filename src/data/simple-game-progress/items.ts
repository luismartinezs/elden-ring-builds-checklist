import { TAGS, EXTRA_TAGS, tags } from '~/features/tags';

const { ALL_REMEMBERANCES, NEPHELI_QUESTLINE, OPTIONAL, RANNI_QUESTLINE, VARRE_QUESTLINE, SMITHING_STONE_BELL, SOMBER_STONE_BELL, GLOVEWORT_BELL, GHOST_GLOVEWORT_BELL, SELUVIS_QUESTLINE, WHETBLADES, LATENNA_QUESTLINE, ALEXANDER_QUESTLINE, MILLICENT_QUESTLINE, VOLCANO_MANOR_ASSASSINATION, HYETTA_QUESTLINE, DUNG_EATER_QUESTLINE, SELLEN_QUESTLINE, PATCHES_QUESTLINE, YURA_QUESTLINE, CORHYN_QUESTLINE, RYA_QUESTLINE, TUNNELS, BOGGART_QUESTLINE, GOLDEN_SEED, SACRED_TEAR, LARVAL_TEAR, RITUAL_POT, LEGENDARY_WEAPONS_ACH, LEGENDARY_WEAPONS, LEGENDARY_ASHES_ACH, LEGENDARY_SPELLS, LEGENDARY_TALISMANS, D_QUESTLINE, ROGIER_QUESTLINE, FIA_QUESTLINE } = TAGS
const { NGPLUS, ALWAYS_SHOW } = EXTRA_TAGS

/**
 * NGPLUS tag is only to indicate what items are shown both in ng and ng+
 * use it when the tags are empty or the only tag is OPTIONAL, if there is any other tag, by default that one will be shown always but only when that filter tag is active
 * The reason this is like that is that all NG+ are already repeated in NG and in the same order so we can reuse both lists
 */

export const items = [
  // WEST LIMGRAVE L1-15 +0-1
  {
    id: '684b6a6d-5025-4839-9615-aea8c9b64b36',
    description: 'Buy crafting kit from Kale in the Church of Elleh',
    tags: []
  },
  {
    id: '57d6459a-e986-4f97-b651-92af4c20c3fc',
    description: 'Pick Whetstone Knife from Gatefront Ruins',
    tags: []
  },
  {
    id: 'd8487a9c-3444-4ead-b11e-fb4decfb5518',
    description: 'Rest in Gatefront Site of Grace to get Torrent',
    tags: []
  },
  {
    id: 'eae88862-a416-413b-9730-e269e7263cb1',
    description: 'Teleport to the Church of Elleh Site of Grace and talk to Ranni to get Spirit Calling Bell and Wolves spirit summon. Feel free to upgrade the wolves before you get whatever spirit summon you will use in the end game',
    tags: []
  },
  {
    id: "ae6663f5-a9a3-4f29-80eb-9d6fc348227f",
    description:
      "By the golden tree in West Limgrave beside the path from the Storm Gate to the Stormhill Shack.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '2ffa52b8-8b74-4111-a975-4da2c97d3c4c',
    description: 'Let Magrit kill you to access Roundtable Hold',
    tags: []
  },
  {
    id: 'fd2775db-5c31-41af-b4e2-b32a05d2a6f5',
    description: 'Talk to Corhyn in Rountable Hold',
    tags: [CORHYN_QUESTLINE]
  },
  // EAST LIMGRAVE & MISTWOOD L10-20 +2
  {
    id: 'cd0ca78a-4fb2-4147-9167-f7a56520017e',
    description: 'Get Flask of Wondrous Physick from the Third Church of Marika in north east Limgrave.',
    tags: []
  },
  {
    id: '4ebcae06-9fe8-4ea4-a3f0-40de655cd20f',
    description: 'Get Sacred Tear from the Third Church of Marika in north east Limgrave.',
    tags: [SACRED_TEAR]
  },
  {
    id: "bcbe2f2e-3935-4560-bb1a-d66e2c905840",
    description: "(optional) meet D, Hunter of the Dead in Stormhill, Limgrave, east of Stormhill Shack",
    tags: [D_QUESTLINE]
  },
  {
    id: "90d30381-e793-413b-8781-da37301f6b62",
    description: "(optional) defeat Tibia Mariner in Summonwater Village, Stormhill, Limgrave",
    tags: [D_QUESTLINE]
  },
  {
    id: "d78e1f00-e938-485f-b4d4-41958cd1a7ad",
    description: "(optional) meet D in Roundtable Hold and show him the Deathroot",
    tags: [D_QUESTLINE]
  },
  {
    id: "0a31a7cb-b53f-4bc7-9387-d298da1d9bf8",
    description: "Decide how you want to reach Altus Plateau later in the game: A) With the two halves of the Dectus medallion, B) Through the Ruin-Strewn Precipice, accessible going north past the Bellum church, north of the path toward the Dectus Lift, C) By letting the Abductor Virgin at the bottom of Raya Lucaria telport you to Volcano Manor, and defeating the Abductor Virgin duo. (option A is the easiest one, option C is possibly the fastest one)",
    tags: [NGPLUS]
  },
  {
    id: "4b4279e9-8aac-4618-90d5-1c1086df3449",
    description: "If you choose to access Altus Plateau with the Dectus Medallion, you need to grab both halves of the Dectus Medallion",
    tags: [NGPLUS],
    items: [
      {
        id: 'd9792932-bdf7-4d3f-8011-d2c2c45acbc9',
        description: 'Get the Dectus Medallion (Left) from Fort Haight in Limgrave (east Limgrave, south of Mistwood)',
        tags: [NGPLUS],
      },
      {
        id: '1a279fba-f36b-4524-98f9-b4957e7bbbaa',
        description: 'Dectus Medallion (Right) from Fort Faroth in Dragonbarrow (Caelid). Easiest way to reach there is from waygate portal behind Third Church of Marika and going south from Bestial Sanctum, or you can just ride all the way there from Limgrave. To get the item you can just run through all the enemies up the stairs, you don\'t need to fight anything. Optionally you can get the Radagon\'s Soreseal in Fort Faroth, which is a good early game Talisman',
        tags: [NGPLUS]
      },
    ]
  },
  {
    id: "e126a382-2b42-440a-ba36-ae037ee1ce12",
    description:
      "(optional) Talk to Gurranq in the Bestial Sanctum, Caelid. You can reach him from the teleport directly north from Third Church of Marika",
    tags: [D_QUESTLINE],
  },
  {
    id: "51ba690c-2757-4bc5-bad2-20b30872c444",
    description:
      "Speak to D in Rountable Hold",
    tags: [D_QUESTLINE],
  },
  {
    id: "4bc4e028-c645-431c-ae1b-00157a0462f6",
    description:
      "At the base of the golden tree along the path just outside of the Bestial Sanctum where Gurranq resides. Easily reachable from the waygate north of Third Church of Marika in Limgrave. Caelid",
    tags: [GOLDEN_SEED],
  },
  {
    id: "b621c491-da19-4817-bfb5-bc0e4f596ff5",
    description:
      "Under a glowing tree in the open near Fort Haight in East Limgrave.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'a7d48287-d886-42c1-aa6c-c728b0014419',
    description: 'Clear Fort Haight (east Limgrave, south of Mistwood) from enemies',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: '5dc416a2-5fec-4a37-a2a4-e5b5e9d57983',
    description: 'Speak to Kenneth Height atop the battlements southwest of Third Church of Marika',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: "e4d35217-bd47-44ce-b9f9-712f8711f40c",
    description: "Dropped by Kenneth Haight if you kill him. Limgrave. This might lock you out of Nepheli's questline, so it's not recommended.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '384fc0f5-c356-4d8a-a31e-351494896d8a',
    description: 'Find Alexander in Northern Stormhill, West to the river and North of the Agheel Lake North Site of Grace. Him a few times on the back with any weapon until you free him. He will reward you with some items',
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '4bf628bc-957c-4dbf-bd29-b8f85870f488',
    description: 'Limgrave Tunnels, on the northern area of the Agheel Lake, just south from "Agheel Lake North" grace',
    tags: [TUNNELS]
  },
  // WEEPING PENINSULA L20-30 +3
  {
    id: '2fa6873f-d44c-4b9c-adda-596b6e7fa74b',
    description: 'Talk to Sellen at the Waypoint Ruins Cellar grace and select the "I want to learn sorcery" dialogue option. Located Western Limgrave, right east to Agheel Lake, downstairs Waypoint Ruins. If you want to get the Legendary Spell Stars of Ruin, you will have to progress Sellen\'s questline',
    tags: [SELLEN_QUESTLINE, LEGENDARY_SPELLS]
  },
  {
    id: 'c2b353c2-e317-4414-b978-ae17257c33a0',
    description: 'Just east of the Agheel Lake South Site of Grace is a raised ledge. On the ledge are a few Wandering Nobles digging in the grass at the base of large tombstones, and to the left is one noble standing by himself. Kill him. Limgrave.',
    tags: [LARVAL_TEAR]
  },
  {
    id: '0b151bb2-2176-4a5a-a68d-effc8018e4cc',
    description: 'Talk to Irina south of the Bridge of Sacrifice grace (Weeping Peninsula)',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '3f73105e-8ed4-4398-9f01-0f5552d2d969',
    description: 'Callu Baptismal Church, directly south of Ailing Village in Weeping Peninsula. Limgrave. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164844" target="_blank">Location</a>',
    tags: [SACRED_TEAR]
  },
  {
    id: '6e07f73c-8943-4370-8181-f175a9b29fc4',
    description: 'Fourth Church of Marika, to the northwest of Weeping Peninsula.',
    tags: [SACRED_TEAR]
  },
  {
    id: 'c6b74a2f-22e3-46d7-8fa5-b5660760bdc3',
    description: 'Church of Pilgrimage in the northern peak of Weeping Peninsula',
    tags: [SACRED_TEAR]
  },
  {
    id: '73fcc602-563d-4ae9-bdc9-d363dd2ecaf0',
    description: 'Morne Tunnel, in Weeping Peninsula. From the South of the Tower grace then head West and then South around the mountain. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=2318&lat=-214.054&lng=108.91&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: 'cc380636-9bd9-45ef-a590-e87c202acd53',
    description: 'Lhutel the Headless: Dropped by the Cemetery Shade at the Tombsward Catacombs. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=163989" target="_blank">Location</a>',
    tags: [LEGENDARY_ASHES_ACH]
  },
  {
    id: '8a19443f-919d-4ba9-891f-b88ad22ae163',
    description: "Give Irina's letter to Edgar in Castle Morne (Weeping Peninsula)",
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: "fee1c271-cca1-4de5-bff5-76c58614c0b6",
    description:
      "At the foot of the golden tree on the ledge overlooking Castle Morne in the Weeping Peninsula. Limgrave",
    tags: [GOLDEN_SEED],
  },
  {
    id: '1e158447-b964-481d-a85f-ced438fb45a5',
    description: 'Defeat Leonine Misbegotten, the boss of Castle Morne (Weeping Peninsula). It is strong vs magic, holy and lightning, and weak vs slash and fire',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: 'b7a283cd-fa50-4362-b374-4fe865705df8',
    description: 'Talk with Edgar in Castle Morne (Weeping Peninsula)',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '3d8d139a-1376-4720-9466-02fadf977d74',
    description: 'Go to where Irina was, next to Bridge of Sacrifice grace, and talk with Edgar.',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '70ae7823-f107-4017-8a5b-051e5359b441',
    description: 'Grafted Blade Greatsword: Stolen by the Leonine Misbegotten, the boss of Castle Morne (Weeping Peninsula)',
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '0ea07403-34ab-4707-b6f6-68d1e11449e2',
    description: "Note: Yura's questline can be skipped and the player can still get the Purifying Crystal Tear, Eleonora's Poleblade and the Nagakiba",
    tags: [YURA_QUESTLINE]
  },
  {
    id: '0346c139-2ad7-45e3-8fb6-91c99c97cd94',
    description: '(optional) Find Yura under a ruin directly northeast of "Seaside Ruins" Grace in southern Limgrave and talk to him',
    tags: [YURA_QUESTLINE]
  },
  {
    id: 'd5d366d3-ba31-4e74-8777-8f1bdf514c21',
    description: 'Approach Murkwater Cave, to be invaded by Bloody Finger Nerijus. Murkwater Cave is found north of Agheel Lake, up the river',
    tags: [YURA_QUESTLINE]
  },
  {
    id: '59a8441b-4f9f-4fbf-be31-a0790a0db161',
    description: 'After defeating Bloody Finger Nerijus, talk to Yura right north from where Nerijus invaded',
    tags: [YURA_QUESTLINE]
  },

  {
    id: '3f7cc832-d965-4dd2-91bc-8288e505c113',
    description: 'Meet Patches at Murkwater Cave as a boss, and accept his surrender (in Limgrave. halfway through the Murkwater River)',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: 'a755ce58-3d0d-4866-823e-d764ab55d3ec',
    description: 'Optionally, attack Patches 3 times, then allow him to reduce your HP to 1/4, then use the Grovel for Mercy gesture',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: '0b78d8fe-7e46-4505-8918-9313a3ad59cd',
    description: "Talk to Patches, reload the game and talk to him again to enable his shop. Optionally buy Margit's Shackle",
    tags: [PATCHES_QUESTLINE]
  },
  // CAELID EARLY

  {
    id: '3ebfbeb9-f5f8-42fc-957b-2a83ecf15d88',
    description: 'Get 50,000 runes from killing the sleeping dragon Greyoll in Dragonbarrow with bleed (Reduvia, Uchigatana or Bloody slash ash of war)',
    tags: [OPTIONAL]
  },
  {
    id: '60440abd-aed0-4710-86d2-bdefbb2ac9ad',
    description: 'Greyoll\'s Roar: Can be purchased at the Cathedral of Dragon Communion for three Dragon Hearts after defeating Greyoll in Caelid. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166189" target="_blank">Greyoll Location</a>, <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166067" target="_blank">Cathedral of Dragon Communion Location</a>',
    tags: [LEGENDARY_SPELLS]
  },
  {
    id: 'c2032110-34a5-4c0d-b8b7-74ab6de2f77d',
    description: 'By this point, your weapon can be upgraded to +3-4 (1-2)',
    tags: []
  },

  // STORMVEIL CASTLE L30-40 +3-4
  {
    id: '7aba047b-6da2-46ab-9f3a-0c5acf36e752',
    description: 'Defeat Margit, the Fell Omen. He\'s strong vs holy and weak to slash.',
    tags: [NGPLUS]
  },
  {
    id: 'd8af39dd-4f24-4cfb-863d-cadb55a57cf0',
    description: 'Iron Whetblade (Heavy, Keen, and Quality). Stormveil Castle Can be looted off a corpse found in the armory room, through the north-western door in the hall with the Grafted Scion. You will need to use the Stonesword Key on the imp statue to dispel fog gate blocking the doorway',
    tags: [WHETBLADES]
  },
  {
    id: '7cee6c15-4126-4835-8b39-6aaf9cea1661',
    description: 'Find Sorcerer Rogier in Stormveil Castle by the altar of the Chapel in the northwest section, before beating Godrick',
    tags: [ROGIER_QUESTLINE]
  },
  {
    id: '44674406-7a68-4cd5-af01-d2b7713d363b',
    description: 'Talk to Nepheli in the north room of Stormveil Castle courtyard',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: "69d2b9c9-6317-4c85-b2e6-4676f0bc4f86",
    description:
      "At the foot of a golden tree on the path to Godrick the Grafted near the end of Stormveil Castle. Limgrave",
    tags: [GOLDEN_SEED],
  },
  {
    id: "2d5b9870-3717-48fd-aa52-9b645378a641",
    description:
      "Defeat the Lesser Ulcerated Tree Spirit under Stormveil Castle. Limgrave",
    tags: [GOLDEN_SEED, ROGIER_QUESTLINE],
  },
  {
    id: 'b9690395-5806-49d1-85fb-89411478266b',
    description: 'Beat Godrick in Stormhill Castle (or alternatively beat any one of the other Shardbearers: Radahn, Rykard, or Rennala). Godrick is strong vs holy and weak vs standard, slash, strike and pierce.',
    tags: [NGPLUS]
  },
  {
    id: 'e0f37cd2-88a8-4b4b-9625-40851fa21be3',
    description: "After defeating Godrick, talk to Rogier in Roundtable Hold to get Rogier's Rapier +8 with Ash of War: Glintblade Phalanx",
    tags: [ROGIER_QUESTLINE]
  },
  {
    id: 'fde348c8-899f-413c-b7f3-39c857762de2',
    description: "In the Ulcerated Tree Spirit area below Stormveil Castle, find Rogier's bloodstain and activate it, then talk to Rogier in Roundtable Hold",
    tags: [ROGIER_QUESTLINE]
  },
  {
    id: '425e3001-3b29-4bc3-a180-99b3c947bba6',
    description: "Most of Fia's questline can be skipped. There are two places where Fia's quest is skipped: 1) Activaitng the Radahn Festival: Fia gives you the Weathered Dagger, 2) Burning the Erdtree: Fia will move to Fia's Champions arena in Deeproot Depths",
    tags: [FIA_QUESTLINE]
  },
  {
    id: '03c5b589-8a67-4d45-9577-949b6d90cd90',
    description: "(optional) Optionally talk to Fia multiple times until exhausting her dialogue to get the Knifeprint Clue",
    tags: [ROGIER_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: '4b32da9d-db54-4496-b07c-c1236d8c71ad',
    description: "Get Shabriri Grape from Godrick's throne room at Stormveil Castle",
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '9f2e43fc-e06f-4c47-ab9b-a1ec32abcac3',
    description: 'Get the Lake-Facing Cliffs grace near Godrick\'s throne, in Liurnia',
    tags: [NGPLUS]
  },
  {
    id: '9e08c5b1-b098-476b-be81-224c8a58a9bd',
    description: 'Church of Irith, once you enter Liurnia, located behind Stormveil Castle',
    tags: [SACRED_TEAR]
  },
  {
    id: "f56fdffc-dcd7-4c99-af99-27426b91ad84",
    description:
      "Given as a reward for completing Roderika's Task at Stormhill Shack. Limgrave. If you skipped her quest, rest in any grace in Liurnia and you can get the Golden Seed from where she was in Stormhill Shack regardless.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'd1d73580-25f5-46b3-92c9-9c8d68a943e5',
    description: 'Give Shabriri Grape to Hyetta in the Lake-Facing Cliffs site of grace in Liurnia',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '062f0984-ff7b-4da1-ba5f-b05e12ac7eae',
    description: 'After defeating Godrick and resting at his grace, talk to Nepheli in Roundtable Hold (you might need talk first to Gideon and rest in a grace for Nepheli to appear)',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: 'a316a47a-313e-4e83-81cc-23bfaca40eec',
    description: "Obtain any of the Great Runes (a good choice is to get Godrick's Great Rune as it's useful and easy to get, or beating Rennala will also get you her Great Rune)",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '7e6a03fc-5f33-4cd8-bb14-a0bf30791888',
    description: 'Talk to Enia in Roundtable Hold',
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '36b4789b-0dcf-41ca-ad9a-48955ede3b30',
    description: '(optional) In the The First Step grace, interact with the message beneath where White Mask Varre was originally to obtain the "Bravo!" gesture',
    tags: [VARRE_QUESTLINE]
  },
  // LIURNIA SOUTH L40-50 +3-4
  {
    id: 'a8b99a0d-6dab-4328-8ef6-9aa1f0c85b8c',
    description: 'If you don\'t have a lantern, buy one from Nomadic Merchant in Liurnia of the Lakes in Liurnia Lake Shore grace',
    tags: []
  },
  {
    id: '37e42814-4ccc-4113-9104-48f2c3d92be2',
    description: 'Reach the Laskyar Ruins right north from the Liurnia Lake Shore grace and travel through the waygate portal to reach the South Raya Lucaria Gate grace.',
    tags: [NGPLUS]
  },
  {
    id: 'ac63dd7a-986c-41dc-923c-99afb13ae417',
    description: 'Laskyar Ruins, North-West of Liurnia Lake Shore Grace: near columns on the northern side',
    tags: [RITUAL_POT]
  },
  {
    id: 'e5a95bc9-4780-48f0-93f0-aa8c5a626d7f',
    description: 'Optionally, talk to Patches at Scenic Isle grace, north west of the Laskyar Ruins, in Liurnia',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: '8bc9716d-bb20-4011-9778-29d0d30b5e67',
    description: 'Get Shabriri Grape from Purified Ruins, found along the lake shore on the eastern landmass of Liurnia (stick to the east side of the lake from the Liurnia Lake Shore grace). The Grape is at the lower level, behind a breakable wooden plank',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '609a2db8-67fb-42d7-b5d4-40e6ff2303a0',
    description: 'Find Hyetta west from the Purified Ruins and give her a Shabriri Grape',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '66b31c30-f5ac-4d8e-b8dd-9f8cdad31ae6',
    description: 'Meet Rya in Liurnia of the Lakes under the under the pavilion next to the Birdseye Telescope north of Laskyar ruins',
    tags: [RYA_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '6fe533c0-09e4-4fa8-8a30-d000b927fc44',
    description: 'Head north west from the pavilion where Rya is located to reach the Boilprawn Shack, speak to Boggart and buy the necklace from him for 1000 runes (or kill him, if you don\'t care about his questline)',
    tags: [RYA_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '93cb87ca-1cae-4436-9117-56490613b6a4',
    description: 'Buy prawns from Boggart and talk to him. If you plan to follow Dung Eater\'s questline, but you want Boggart to survive, you can postpone this step until you have completed Dung Eater\'s questline, to prevent Boggart from moving to Altus. Note that this will prevent you from getting one Seedbed Curse',
    tags: [BOGGART_QUESTLINE]
  },
  {
    id: '34ec7a0c-0adc-41f9-9ebf-3d3f243214f8',
    description: 'Give the necklace to Rya to get the Volcano Manor Invitation',
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'b817d286-a7b9-4b67-9e6c-3345d8f6deee',
    description: 'Just southeast of the Fallen Ruins of the Lake Site of Grace is a Giant Crayfish in the water, separate from the three Giant Crayfish surrounding the small building nearby. Kill the lone one. Liurnia. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165606" target="_blank">Location</a>',
    tags: [LARVAL_TEAR]
  },
  {
    id: 'f892cb40-deaa-4852-88d2-2121f978749b',
    description: 'Talk to Varré in Rose Church (west from Fallen Ruins of the Lake grace in Liurnia) and get Festering Bloody Finger',
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '90857748-9645-4423-8937-1c5bd67158c7',
    description: 'Use Festering Bloody Finger to invade players three times (you can exit their world immediately',
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '98f9ae6e-2b36-42c0-94eb-17c92aecbd29',
    description: "Talk to Varré in Rose Church, accept the dialog and get Lord of Blood's Favor",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '66a02c1f-6695-4eaa-9ab0-ecb38938b2eb',
    description: 'Flame of the Fell God: Dropped by Adan, Thief of Fire upon defeat. From the Scenic Isle grace go south uphill and then east to reach the Evergaol. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166816" target="_blank">Location</a>',
    tags: [LEGENDARY_SPELLS]
  },
  {
    id: '772d7a3e-503e-437f-822b-cfac4f7528b9',
    description: "Get Shabriri grape by killing Edgar, either in Revenger's Shack in south-western Liurnia (directly north from the minor Erdtree) OR in Castle Morne if you didn't progress Irina and Edgar's questline",
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '5d177901-90f6-449b-b13f-f8df8eef3ee4',
    description: 'Get Academy Glintstone Key from Liurnia of the Lakes, south from Crystalline Woods site of grace, behind Glintstone Dragon Smarag',
    tags: [NGPLUS]
  },
  {
    id: '83eb9516-23c0-4f13-b05f-4a8b006fb5c3',
    description: 'Talk to Nepheli at Village Of The Albinaurics and defeat Omenkiller',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: '4066e81e-82ad-40d6-96db-c3145242e576',
    description: 'In Village of the Albinaurics, find one in a graveyard near the Site of Grace surrounded by first-generation Albinauric enemies. Liurnia',
    tags: [LARVAL_TEAR]
  },
  {
    id: 'de7fc925-2ad3-441b-a0f3-8cff17922c2e',
    description: 'Get Haligtree Secret Medallion (Right) by speaking to Albus in Village of the Albinaurics (Albus is hidden inside a jar, roll into the jar and talk to Albus)',
    tags: [OPTIONAL, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: "82983c08-5a06-4d1e-a6a8-dfea29452f1b",
    description: "From Liurnia Lake Shore grace, looking north hug the left wall until finding the entrance to Lakeside Crystal Cave. Progress through the dungeon to find Latenna at the end and grab the grace",
    tags: [LATENNA_QUESTLINE]
  },
  {
    id: '20c9774e-370d-4629-8d21-28c36d60deb2',
    description: 'Find Hyetta north of the Gate Town Bridge, easter Liurnia of the Lakes (in front of the southern broken bridge in the east side of the lake, above the cliffs) and give her a Shabriri Grape. Exhaust her dialogue. Reload the area, and exhaust her dialogue again. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166642" target="_blank">Location</a>',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '1ff4c70a-d0d0-48a1-80a3-ade3b0bfe625',
    description: 'Talk to Nepheli in Roundtable Hold',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: 'c8b74d84-e7f3-486b-b6c3-faff626150c1',
    description: 'Talk to Gideon Ofnir about Nepheli',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: '5a0652e2-9114-4ea8-912a-6bc10cb93723',
    description: "Progress Roderika's questline if you didn't, by talking to Roderika and Hewg multiple times in Roundtable Hold (and resting at the grace) until Roderika moves nearby Hewg",
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: 'b0aae07c-ebd4-4f3c-b9d5-897faaf90710',
    description: 'From the Four Belfries (Liurnia), seek the waygate that has the message "Precipice of Anticipation" and use the Imbued Sword Key you find at the top (fourth) belfry to activate the waygate. You will reach the Chapel of Anticipation',
    tags: [NEPHELI_QUESTLINE, VARRE_QUESTLINE]
  },
  {
    id: '0f198bb6-04cf-4f22-be36-15cb2e10fd95',
    description: 'Defeat the Grafted Scion. Grafted Scions are strong vs magic, fire, lightning and holy, and weak to slash, bleed and frost. Receive a lot of damage from healing incantations',
    tags: [NEPHELI_QUESTLINE, VARRE_QUESTLINE]
  },
  {
    id: '88ccfcfa-b338-40cb-be66-604611b1cca7',
    description: 'Get the Stormhawk King found in the Chapel of Anticipation and give it to Nepheli',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: '00a5650b-1f3d-49dc-b0d2-48a485f80008',
    description: "Soak Lord of Blood's Favor in the corpse at Chapel of Anticipation (you can also do this by killing Irina in Weeping Peninsula or in the Church of Inhibition in north Liurnia)",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: 'e1c9c66f-2c56-4772-a8a5-e3cd29a54641',
    description: "Talk to Varré in Rose Church multiple times until he gives you the Pureblood Knight's Medal",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '5b1e909e-ac7c-4f46-a620-cf8d0b06bda0',
    description: "Use the Pureblood Knight's Medal to reach Mohgwyn's Palace (it's also possible to reach Mohgwyn's Palace from Consecrated Snowfield much later in the game though a waygate portal)",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: "6a9eef7f-4afd-4cdf-aa59-0ccde4fbf010",
    description:
      "At the foot of a golden tree, at the end of the broken bridge just outside the lift up to the Academy of Raya Lucaria.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '9b5f5777-df9a-4874-a85a-f0ee064dcefb',
    description: 'Use the Red Summon Sign at the Main Academy gate site of Grace in Raya Lucaria and defeat Ravenmount Assassin. It is found through the bridge beyond the magic gate. You will get Ash of war: Raptor of the mist',
    tags: [YURA_QUESTLINE]
  },
  {
    id: 'f287ded0-1d43-4455-8b81-136fd5a7102b',
    description: 'Talk to Yura near to where the red summon sign was',
    tags: [YURA_QUESTLINE]
  },
  {
    id: 'fd0bafb4-5adc-4add-a0da-4beca2f6c711',
    description: "2 in Jarburg, located in East Liurnia, down the cliffs just South of Carian Study Hall.",
    tags: [RITUAL_POT]
  },
  // RAYA LUCARIA L50-60 +4-6
  {
    id: "96bf5675-a5b6-4b9b-9ef4-7023a8c64aa9",
    description:
      "At the foot of the golden tree in the middle of Liurna's sunken town below Raya Lucaria.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'd802f8f5-b9d0-4631-ab80-2a51f8d21935',
    description: 'Near the Schoolhouse Classroom Site of Grace, in a chest guarded by mages and a giant Living Jar, in Raya Lucaria',
    tags: [RITUAL_POT]
  },
  {
    id: '054a08f7-70ba-4ede-a188-b3a286808cb5',
    description: 'Beat Red Wolf of Radagon in Raya Lucaria and activate the Debate Parlor grace. It\'s strong vs magic, bleed and frost, and weak vs slash',
    tags: [NGPLUS]
  },
  {
    id: 'e7d07e93-5789-41b7-a8bc-5742cc8437f1',
    description: `Radagon Icon: Found inside a treasure chest on the second floor of the Debate Parlor Site of Grace. To reach it, exit the Debate Parlor room north, make two hard rights and enter the building`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: "8872b89b-082f-440e-bc9a-d3409e847acc",
    description:
      "At the foot of a golden tree. In the north-western part of the courtyard, past the Debate Parlor site of grace in Raya Lucaria.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '1837cb85-1a8e-42a2-9694-9f9fe5975ecd',
    description: 'Glintstone Whetblade (Magic and Cold). Raya Lucaria Academy Looted from a corpse hanging off the window ledge of an office balcony. From the Debate Parlor site of grace, head west of the courtyard fountain, up the collapsed stairs, past the kneeling Commoners, and into the room with the Twinsage Sorcerer',
    tags: [WHETBLADES]
  },
  {
    id: 'b3ac9d19-2b5b-4667-96bd-4af37febd329',
    description: 'By this point your weapon could be +4-6 (2)',
    tags: []
  },
  {
    id: 'cbcd93c6-4334-4301-ace4-be411f02f3ab',
    description: 'Go through the waygate after the stairs with the giant rolling balls after wolf of Radagon to reach Church of Vows, and get Flame, Cleanse Me incantation (12 FAI) at the fire monk camp southeast of Church of Vows',
    tags: [OPTIONAL]
  },
  {
    id: 'd7a3f9a6-f5d8-4c2e-85fc-102a3bdeb792',
    description: "Beat Rennala. Or, just for game progression (excluding quests), beat any one of the other remaining Shardbearers that you didn't defeat yet: Godrick, Radahn, or Rykard. Rennala is very strong vs magic, strong vs all status effects, and weak vs standard, slash and pierce",
    tags: [ALWAYS_SHOW, NGPLUS, SELLEN_QUESTLINE]
  },
  // LIURNIA EAST 50-60 +4-6
  {
    id: '91ae81a1-8d30-428c-95c6-c0fd35612f0b',
    description: 'Raya Lucaria Crystal Tunnel, northeastern Liurnia of the Lakes, near the walking mausoleum in the lake. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=5905&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: '958046df-4b2e-41dd-9692-d6e74f5d4d1b',
    description: 'Dropped by the Crystalian Boss at the end of Raya Lucaria Crystal Tunnel (northeastern Liurnia, east from the walking mausoleum in the lake)',
    tags: [SMITHING_STONE_BELL]
  },
  // AINSEL RIVER L50-60 +4-6
  {
    id: '3ffa2105-a1e0-428c-8a40-c7a6b64fe72f',
    description: 'Obtain the Black Knifeprint from Black Knife Catacombs in Liurnia, behind an illusory wall in the room before dropping down to a flooded pit with levers',
    tags: [ROGIER_QUESTLINE]
  },
  // LIURNIA WEST, CARIA MANOR L50-60 +4-6
  {
    id: 'e9c27c57-bdf9-413b-ac69-7a330225f33b',
    description: 'Sword of Night and Flame: Hidden in the Caria Manor. Liurnia. Start from the Manor Lower Level Grace, go toward the left side platforms, and parkour down the rooftops to eventually reach it.',
    tags: [LEGENDARY_WEAPONS_ACH],
  },
  {
    id: "0ba1c797-4998-4834-a990-758e6f6a5768",
    description:
      "Near a golden tree after going down the steps from the Caria Manor Upper Level Site of Grace. Liurnia",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'ebb627a5-1cb1-496f-8339-6da8d51587b6',
    description: 'Beat Royal Knight Loretta in Caria Manor. She is strong vs magic and fire, and weak vs lightning. Note: If you are collecting the legendary weapon Dark Moon Greatsword, follow Ranni\'s questline until the end to get it.',
    tags: [RANNI_QUESTLINE, SELLEN_QUESTLINE, LEGENDARY_WEAPONS_ACH, FIA_QUESTLINE]
  },
  {
    id: '90813e2a-75de-4167-8603-af4bab0bd2ca',
    description: 'Among the rewards of the Resurrection painting. The painting is in the Artist\'s Shack in North-East Liurnia of The Lakes, heading north in the path up from the Liurnia Highway North. To find the painting rewards, start at the Behind Caria Manor Site of Grace (<a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165492" target="_blank">Location</a>) and head slightly southeast until you arrive at a graveyard, behind a big rock you should see the spirit of the artist sitting in a chair',
    tags: [LARVAL_TEAR]
  },
  {
    id: '6a3ee424-5159-4ccc-b1a9-c6114741a5ba',
    description: "Give the Black Knifeprint to Rogier in Roundtable Hold, reload the area and talk to him again. He should suggest you to serve Ranni, after which you talk to Ranni and become her vassal. If Ranni does not accept you, go back to talk to Rogier until he suggest you become Ranni's vassal",
    tags: [ROGIER_QUESTLINE]
  },
  {
    id: '983e4f51-15f7-4b5a-a927-5eee5c12f5c1',
    description: 'Talk to Ranni, then her servants, then Ranni again. If you don\'t find Ranni, it\'s possible that you have started the Radahn festival, so you will have to kill Radahn before progressing',
    tags: [RANNI_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: 'b7931f96-7e09-40bb-87dc-468c1c01ccbb',
    description: "Talk to Seluvis in Seluvis's Rise to get Seluvis's Potion (beware that giving this item to certain NPCs can lock you out of their quests)",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: 'c962fdce-6197-4bfa-b2d2-bf986444c117',
    description: 'After Caria Manor, go West of the Manor then head South. Along the cliffs on the East side, you can jump down, back into Caria manor. Sold by Pidia for 1500 runes. Liurnia',
    tags: [RITUAL_POT]
  },
  {
    id: '8ff56795-72a5-4753-9299-f4413d23bbb1',
    description: 'Sold for 3000 runes by Pidia, Carian Servant, in Caria Manor (accessed by dropping down from Three Sisters). Liurnia.',
    tags: [LARVAL_TEAR]
  },
  {
    id: '1caa21de-0501-498b-a89e-764d22ae588e',
    description: "After becoming Ranni's vassal, talk to Rogier in Roundtable Hold, rest at a grace and find him in slumber. After resting a handful of times at a grace, eventually Rogier will die and you can get his Bell Bearing and the Spellblade Set.",
    tags: [ROGIER_QUESTLINE]
  },
  // high level Limgrave
  {
    id: "e80a68b7-f557-434f-a969-ab03b206215a",
    description:
      "Dropped by the Ulcerated Tree Spirit in Fringefolk Hero's Grave next to Stranded Graveyard grace. You will need 2 stonesword keys to access this area. Limgrave",
    tags: [GOLDEN_SEED],
  },
  // SIOFRA 50-60 +8-12
  {
    id: '6952e240-11ed-48d8-b937-b8bf01661540',
    description: "Sold by the Abandoned Merchant for 3000 runes. (To find him, from the Worshippers' Woods Site of Grace, climb the scaffolding you can see directly west - climb the ladders, drop down around the corner, cross the wooden bridge, and follow the cave-like path until you can drop down into his room.). Siofra River",
    tags: [LARVAL_TEAR]
  },
  {
    id: "66af425c-8b81-44f9-b79d-87edc5e3b0e3",
    description:
      "Near the massive castle-like structure protruding from the rocks along the northern side of the underground Siofra River, below the lift leading up to Caelid. Siofra River",
    tags: [GOLDEN_SEED],
  },
  {
    id: '2d87bde3-61d2-4991-896f-d53d17123d86',
    description: 'Beat Ancestor Spirit in Siofra river, which you can access through the Siofra Well in Mistwood. It\'s strong vs magic and status effects, and weak vs fire and holy',
    tags: [OPTIONAL, NGPLUS]
  },

  {
    id: "b4518ea7-237c-4cc1-95d7-ae53964e36d3",
    description:
      "At the base of a golden tree along the path that leads south to Castle Redmane. Caelid",
    tags: [GOLDEN_SEED],
  },
  {
    id: '8d9fb6dd-c390-42ff-ae5e-24df91cdda04',
    description: 'Red-Hot Whetblade (Fire and Flame Art). Redmane Castle (south Caelid) From the Chamber Outside The Plaza site of grace, head out the south-side door, west past the flamethrower enemies, and then to the door past the Abductor Virgin and hanging bodies. Note: if you reach Altus before this step, you will need to defeat Radahn to access the rest of Redmane Castle and then talk to Jerren inside Redmane castle near the elevator to Radahn to reset the area.',
    tags: [WHETBLADES]
  },
  {
    id: 'acc2284a-56fe-4874-a6c1-d5a8d5d8827a',
    description: 'Ruins Greatsword: Defended by the Misbegotten Warrior and Crucible Knight in Redmane Castle. Note: if you reach Altus before this step, you will need to defeat Radahn to access the rest of Redmane Castle and then talk to Jerren inside Redmane castle near the elevator to Radahn to reset the area.',
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '7353be03-4279-4710-a59a-bfc3290b1b80',
    description: 'Kill Festering Fingerprint Vyke near the Church of Inhibition (the pathway south from Dectus Lift in the Liurnia side) as he drops a Fingerprint Grape',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '2b785494-8a3c-49c8-870c-030496f23aa6',
    description: 'Church of Inhibition in Liurnia. To reach it the pathway south from Dectus Lift in the Liurnia side. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167186" target="_blank">Location</a>',
    tags: [SACRED_TEAR]
  },
  {
    id: '3a89fd95-2ab2-4e02-a80d-c785b09d52ba',
    description: 'Bellum Church in Liurnia, to reach it follow the path toward the Dectus Lift from the East Raya Lucaria Gate grace, hugging the left side',
    tags: [SACRED_TEAR]
  },
  {
    id: '143197cd-8e4b-4934-ba17-4e35eb28214d',
    description: 'Find Hyetta in Bellum Church in Liurnia of the Lakes (the path toward the Dectus Lift from the East Raya Lucaria Gate grace, hugging the left side) and give her the Fingerprint Grape. If Hyetta is not there, make sure you have exhauster her dialog in her previous location.',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: "36fc0ad2-a169-43da-9845-cc36de22133b",
    description:
      "At the foot of a Golden Tree deep in the northern ravine of Liurnia, surrounded by giant Land Squirts",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'fbb653b6-f068-427c-8cca-9f5d8b0554cf',
    description: "Ruin-Strewn Precipice and miner's caves. Accessed from the Ravine-Vailed Village grace, going all the way north through the ravine in between Caria Manor and the path to the Lift of Dectus, in Liurnia. <a href='https://eldenring.wiki.fextralife.com/Interactive+Map?id=1651&code=mapA' target='_blank'>Location</a>",
    tags: [TUNNELS]
  },
  // ACCESS ALTUS
  {
    id: '124edfc5-0bb8-49fd-b3ba-030bd037a279',
    description: 'Reach Altus Plateau in one of 3 ways',
    tags: [NGPLUS],
    items: [
      {
        id: 'ac864e1c-4124-4e90-aec9-16934b811d37',
        description: 'A) With the Dectus Lift. From the Main Academy Gate site of grace, cross the sealed gate to reach the other side of the bridge, then head straight to the Grand Lift of Dectus and use the Dectus Medallion to reach Altus Plateau',
        tags: [NGPLUS]
      },
      {
        id: 'feed873b-be6b-4af0-a653-cc0947166ac4',
        description: 'B) Through the Ruin-Strewn Precipice after defeating Magma Wyrm Makar. Accessible going north past the Bellum church, north of the path toward the Dectus Lift from the Main Academy Gate site of grace. Magma Wyrm Makar is very strong vs fire, strong vs frost and weak vs standard, strike, pierce and sleep',
        tags: [NGPLUS],
      },
      {
        id: '360f46c8-e567-4d99-8ad6-98ae74f27032',
        description: 'C) By letting the Abductor Virgin at the bottom of Raya Lucaria telport you to Volcano Manor (let her do the grab attack when you have HP low enough for it to kill you) and defeating the Abductor Virgins boss',
        tags: [NGPLUS]
      }
    ]
  },

  {
    id: 'bd19aee2-3a7b-419e-9950-c5d2462483d8',
    description: 'Rest in any site of grace in Altus',
    tags: [NGPLUS]
  },
  {
    id: "80944ed0-683f-4044-b440-aa051bc7f65a",
    description:
      "At the foot of a Golden Tree on the western side of the Altus Plateau, leading toward the Abandoned Coffins and exit to the Ruin-Strewn Precipice dungeon that connects Altus and Liurnia. Altus Plateau",
    tags: [GOLDEN_SEED],
  },
  {
    id: '7b8da92c-f70a-4908-b5c9-e27275c853d8',
    description: 'After reaching Altus, talk to Rya either in the lower part of Lux ruins, near the Erdtree-Gazing Hill site of grace (if you reached Altus via the Ruin-Strewn Precipice) or at the top of the Grand Lift of Dectus, to the left (if you used the lift to reach Altus), and she will teleport you inside Volcano Manor',
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'f1e13540-ebde-451c-928a-252aac611f41',
    description: "It will be possible to now progress Fia's quest after Radahn's Festival is activated, but Fia's quest can be also skipped as she will be in Deeproot Depths regardless after you burn the Erdtree",
    tags: [FIA_QUESTLINE]
  },
  {
    id: 'd9744eb5-d1fb-4237-b017-a12005dea981',
    description: "Receive the Weathered Dagger from Fia in the Roundtable Hold, then give the Weathered Dagger to D, reload the area by resting at a grace, and find D's Bell Bearing and the Twinned Set in a newly opened room in Roundtable Hold",
    tags: [FIA_QUESTLINE, D_QUESTLINE]
  },
  {
    id: 'f5033fcc-bfe8-401c-8336-6dca652cb63b',
    description: 'Talk to Corhyn in Roundtable Hold (after reaching Altus)',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '2866b2b2-d058-4999-9078-cb1833a47275',
    description: 'Talk to Corhyn north of the Altus Highway Junction grace, nearby the monument with the map',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'f2c7bed2-e302-4f98-aef5-8987532420f1',
    description: 'Talk to Goldmask across the broken bridge in Altus. Reach him by using the teleporter next to the Forest-Spanning Greatbridge grace',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '27b2577e-3ecc-4727-bc8e-98e1fafbfee4',
    description: 'Talk to Corhyn north of the Altus Highway Junction grace',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '77b9a027-bc96-4ded-9370-cfe155b6a7d4',
    description: 'Talk to Corhyn across the broken bridge in Altus, next to Goldmask',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'ea5372e9-62af-4277-9050-c2b3a0c8a07e',
    description: 'By this point your weapon can be +10-14 (3-5)',
    tags: []
  },

  {
    id: 'be83ba65-f7f1-4aa5-bf25-116dbbed9c9d',
    description: 'Dropped by Erdtree Burial Watchdog in Wyndham Catacombs, in Altus Plateau. At the top of the Wyndham Ruins, reachable north of Erdtree-Gazing Hill grace',
    tags: [GLOVEWORT_BELL]
  },
  {
    id: 'e373c6f2-0fb9-479a-a7c6-6de82814771c',
    description: 'Old Altus Tunnel, in central-west Altus Plateau, accessible with two Stonesword Keys. From the Erdtree-Gazing Hill Grace go down into the vallye north, and hug the left side. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=1196&lat=-91.171875&lng=78.604109&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: "6fee411a-b7a6-416c-867f-cbb6b8874f66",
    description:
      "At the base of a golden tree in the foggy woods where a Minor Erdtree is located, east of a broken great bridge. Altus Plateau",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'bbd31431-ecf6-441f-b07d-6e0b7044c43f',
    description: 'Altus Tunnel, in Altus. Directly south from the Minor Erdtree in Altus Plateau. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=5837&lat=-93.49&lng=93.82&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: '28473d9d-19f7-468f-b25f-5739ec5511ec',
    description: 'Defeat Crystalian Spear and Ringblade boss in Altus Tunnel, directly south from the Minor Erdtree in Altus Plateau',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: '8b040470-0f63-4521-a3ef-1c00f3dd78ac',
    description: 'Sealed Tunnel, found in Capital Outskirts, in Altus. Down at south of the lake right next to the west gate to Leyndell Royal Capital from the outside. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=2858&lat=-105.75&lng=105.660584&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: '0852f8c6-a18d-418c-a4ce-76fa413d7194',
    description: 'In a chest at the first secret area inside the Sealed Tunnel (Down at south of the lake right next to the west gate to Leyndell Royal Capital from the outside, Altus Plateau)',
    tags: [SMITHING_STONE_BELL]
  },
  // CAELID, RADAHN 60-70 +10-14
  {
    id: "ebb20350-a610-4f97-b30a-6aecde04779b",
    description:
      "Up the stairs, at the golden tree near the large door in Sellia. Caelid",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'ee715878-7bf1-4165-a0b0-9dc024d63d68',
    description: "Isolated Merchant's Shack in North Caelid. Sold by the Isolated Merchant for 3000 runes. Go north and then west from the Dragonbarrow West grace",
    tags: [RITUAL_POT]
  },
  {
    id: '3e6c55bc-c6ae-43bd-ace8-ef333487397d',
    description: 'Gael Tunnel, in the border between Limgrave and Caelid. Found along the western cliffs of Caelid heading south from the Rotview Balcony grace',
    tags: [TUNNELS]
  },
  {
    id: 'ee0a544b-eeca-4add-b94f-59fbd9505236',
    description: "Alexander's next location is in Gael Tunnel, found from the rear entrance that borders Limgrave and Caelid. You can skip this step as it is not necessary",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '64c35e10-0644-4208-bb4f-de808b0a0bfb',
    description: 'In the southwestern corner of Caelid, south of the Caelid Highway South Site of Grace, is a crowd of Wandering Nobles milling about amongst sarcophagi. Kill the noble in the back.',
    tags: [LARVAL_TEAR]
  },
  {
    id: 'e60b8967-d589-44b4-ae29-dbc1abdb4041',
    description: 'Sellia Crystal Tunnel, in Caelid. Can be reached early by opening a chest in Dragon-Burnt Ruins in Limgrave. It can also be reached by going north from Sellia. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=1177&lat=-172.515625&lng=144.836114&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: 'fbca363b-8c3c-4c24-812f-60b2700116a6',
    description: 'Dropped by the Fallingstar Beast in Sellia Crystal Tunnel (Caelid). Reachable by opening the chest in Dragon-Burnt Ruins in Limgrave',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: 'cf37795e-81dc-407c-8186-cf7fce297c06',
    description: "Speak with Gowry in Gowry's Shack within Caelid. The Gowry's Shack is found in eastern Caelid, just before Sellia, Town of Sorcery. Players can reach this location by following the Caelid Highway to the east and the north. Or from Sellia Under-Stair grace going south. You can skip this step, but it will enable you to summon Polyanna for O'Neil's fight",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'be885107-017a-44a5-a6c0-3c911e0c15de',
    description: "Defeat Commander O'Neil, located in the Swamp of Aeonia (central Caelid). He will drop the Unalloyed Gold Needle. You can cheese O'Neil by sneaking behind him and repeatedly casting Posion Mist (FAI 12). He is strong vs slash, immune to scarlet rot, and weak to pierce",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '57743956-81fa-4eaa-b062-9577779f31ce',
    description: 'Give the Unalloyed Gold Needle to Gowry, reload the game and get the repaired needle from him',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '6d94d45e-94e0-4bb9-a570-66ccc5c2f1ec',
    description: 'Church of Plague in Caelid. Reached by heading southwest from the Fort Faroth grace site and taking the Spiritspring down or from the backstreets of Sellia, Town of Sorcery. Or, coming from Dragonbarrow, jump down a Spirit Spring to the north of the Church',
    tags: [SACRED_TEAR]
  },
  {
    id: 'f2064b8a-8a2f-4430-b801-d85af7139a4b',
    description: `Radagon's Soreseal: Found on a corpse in Fort Faroth, Caelid. <a href="https://www.youtube.com/watch?v=6tL5cGjIgBE&ab_channel=ItsShatter" target="_blank">Video guide</a>`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: '4c0725a1-f7d3-4aea-9f75-d55efcfbc105',
    description: "Reach the Church of the Plague and give the needle to Millicent. It's reached by heading southwest from the Fort Faroth grace site and taking the Spiritspring down or from the backstreets of Sellia, Town of Sorcery. Or, coming from Dragonbarrow, jump down a Spirit Spring to the north of the Church",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '9a982aa4-aad0-45cb-b890-9e5729bd8fc4',
    description: 'Rest at a grace, then talk to Millicent again and exhaust her dialog. She will gift you the Prosthesis-Wearer Heirloom',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'ca41c5c4-06bd-462d-98d7-3b7da6e8cba9',
    description: "Find Millicent in Gowry's shack. Exhaust her dialogue. Reload the game and Millicent will be gone and you can purchase spells from Gowry",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '7d2912a9-f6d1-45a1-bdb6-36ba9a63f0c6',
    description: 'Radahn Festival should be active now, and you can defeat Starscourge Radahn. He is strong vs holy and sleep, and weak vs pierce and scarlet rot',
    tags: [OPTIONAL, RANNI_QUESTLINE, ALEXANDER_QUESTLINE, NGPLUS, ALL_REMEMBERANCES, SELLEN_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: '214e0b27-c6c2-41a8-8acf-cba7f5ab0b6b',
    description: 'Find Alexander next to the Radahn grace and talk to him',
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: 'f049aa3e-d603-41a8-9fb7-9032d7a2f9e4',
    description: 'Godslayer\'s Greatsword: Defended by the Godskin Apostle beneath the Divine Tower of Caelid. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166668" target="_blank">Location</a>',
    tags: [LEGENDARY_WEAPONS]
  },
  {
    id: "56421d70-5f43-43ef-9484-a8e26c78f9f2",
    description:
      "A Golden Seed and Redmane Knight Ogha Spirit Ash are dropped by Putrid Tree Spirit in the War Dead Catacombs. From Starscourge Radahn grace, head directly north and hug the cliff until you find the entrance. Caelid. You need to defeat Radahn first.",
    tags: [GOLDEN_SEED, LEGENDARY_ASHES_ACH],
  },
  {
    id: '710569d9-691d-4a88-8e02-63fc3c559370',
    description: "Follow the path south from the Artist's Shack Site of Grace (east Liurnia, west of the Divine Tower). Alexander will call out for help. Use an Oil Pot or Roped Oil Pot to free him (this step can be skipped by going to Mt. Gelmir after the Radahn festival)",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '609c347c-c2b5-488b-80e5-1db0d9417a41',
    description: 'If you defeated Starscourge Radahn, you can now access Nokron',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // NOKRON CITY AND AQUEDUCT 70-80 +10-14
  {
    id: 'ac4fd9cb-ed95-4e3f-b977-2b85e70a9f5b',
    description: "From the Nokron, Eternal City Site of Grace, head out the eastern door. It's sitting on a body in the building on your right.",
    tags: [LARVAL_TEAR]
  },
  {
    id: '4630abf5-f6ce-4f48-a82a-091c04117844',
    description: 'On a corpse lying at the base of a gazebo near the Nokron, Eternal City grace',
    tags: [GHOST_GLOVEWORT_BELL]
  },
  {
    id: '32fcaa13-b71f-4b0b-b469-85679271249b',
    description: 'In Nokron. Before the Mimic Tear boss room is a large gazebo with the Larval Tear on a body in its center, guarded by Silver Tears.',
    tags: [LARVAL_TEAR]
  },
  {
    id: 'f4000e4f-9974-48f8-9ea1-9f7566eb565d',
    description: '2 dropped by Mimic Tear in Nokron.',
    tags: [LARVAL_TEAR]
  },
  {
    id: "40a23af2-c9a0-405b-bbf2-3ffbd67bda6f",
    description: "get the Mimic Tear spirit summon from Nokron. Found in a chest locked behind an imp statue door in Night's Sacred Ground",
    tags: [OPTIONAL, LEGENDARY_ASHES_ACH]
  },
  {
    id: 'c5b0dfbf-2e28-450c-b87b-6a30a5ec5a17',
    description: "Black Whetblade (Poison, Blood, and Occult). Nokron, Eternal City Found on a corpse slumped in front of an altar in Night's Sacred Ground grace",
    tags: [WHETBLADES]
  },
  {
    id: '4eba6264-6c8a-47b3-8a1f-7136eb6108c8',
    description: "If you don't plan to follow Seluvis' questline, you could complete most of Ranni's questline by this point",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '4b183117-666d-4d64-9f51-2484e0f1d764',
    description: 'Beat Regal Ancestor Spirit in Siofra river, the part reachable after beating Mimic Tear (Nokron). It is strong vs magic and status effects, and weak vs fire and holy',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '03c2239f-0006-40d2-ac76-4fa27340b5a7',
    description: 'Beat Valiant Gargoyles in Siofra Aqueduct, and access Deeproot Depths through the coffin in their arena. They are strong vs slash, pierce, fire, lightning, holy and status effects, and weak vs strike',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // DEEPROOT DEPTHS 80-90 +15-20
  {
    id: '66a047e2-dcb9-41ce-b693-109b43a31d1c',
    description: 'Elden Stars: Can be found near the Great Waterfall Crest site of grace in Deeproot Depths. On a corpse, at the end of a cave with Ants. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168441" target="_blank">Location</a>. Deeproot Depths is accessed by resting in a coffin after defeating the Valiant Gargoyle in Siofra Aqueduct, or alternatively, through a hidden passage near the Frenzied Flame Proscription grace in the Subterranean Shunning-Grounds',
    tags: [LEGENDARY_SPELLS]
  },
  {
    id: "dac22469-8749-46e7-ace3-73bad82b3db3",
    description:
      "Defeat Fia's Champions in Deeproot Depths",
    tags: [FIA_QUESTLINE],
  },
  {
    id: "456b965f-62c9-44c1-af87-7968211d8872",
    description:
      "Find Fia in Fia's Champions arena, Deeproot Depths and talk to her",
    tags: [FIA_QUESTLINE],
  },
  // LAKE OF ROT 80-100 +15-20

  // MT GELMIR 80-100 +15-20
  {
    id: "22436ce7-c4a3-4612-aa32-6aaf689cb517",
    description:
      "At the base of the Golden Tree in the ravine to the south of a burnt up Minor Erdtree. Mt. Gelmir. Head north through the ravine west of Wyndham Ruins to find it.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'b9da8bb8-6125-41bc-bb4c-6143ffdd2a59',
    description: 'Talk to Alexander near the Seethewater Terminus Site of Grace at a lava lake behind a Magma Wyrm, south of Fort Laiedd in Mt. Gelmir. To reach Seethewater Terminus Grace, head north through the ravine west of Wyndham Ruins',
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: 'de07597b-b541-4932-8378-226d7fa57d58',
    description: "Get the Comet Azur spell at the Primeval Sorcerer Azur grace. Reachable from Altus Plateau: start at Altus Plateau or Erdtree-Gazing Hill grace, go north through Wyndham Ruins and find Seethewater River grace. From that grace it's a long straight path around Mt. Gelmir. At the very end you will find Primeval Sorcerer Azur",
    tags: [SELLEN_QUESTLINE, LEGENDARY_SPELLS]
  },
  {
    id: '5ff38f33-2edd-43d5-bf3c-db0bbf61215d',
    description: 'Talk to Sellen at the Waypoint Ruins Cellar grace and select the "Let us journey together" dialogue option. You will receive the Sellian Sealbreaker key.',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: 'cb018c4a-8717-4bf2-908a-f6ef4067dca0',
    description: "Find Lusat in the Sellia Hideaway and get the Stars of Ruin spell. He is behind a secret cave behind an illusory wall. To reach the entrance, start at the Church of the Plague site of grace and head north up the hill and straight under the wooden arch. Look to the North-East for a small graveyard with a single sorcerer enemy wielding a staff and a club. Behind the main headstone, along the cliffside, there's a secret door you can reveal by rolling or attacking it",
    tags: [SELLEN_QUESTLINE, LEGENDARY_SPELLS]
  },
  {
    id: 'f1ab993b-65d3-41f1-bc29-df9dfc65d386',
    description: "Talk to Sellen at the Waypoint Ruins Cellar grace about her request and about Lusat's location.",
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: 'b25f8720-6454-443f-b5bf-57fa6c3c68fb',
    description: "Talk to Sellen in the Witchbane Ruins where she is shackled. You will receive Sellen's Primal Glintstone. Witchbane Ruins are located directly south of the Fourth Church of Marika, in the west region of Weeping Peninsula",
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '59161dac-f393-45ba-be0d-386df975a173',
    description: 'Talk to Witch-Hunter Jerren in the chapel near the Chamber Outside the Plaza grace. If you rest at a grace, Redmane Castle will reset to its version filled with enemies. If Jerren is not there it could be that you already talked to him, in which case you can skip this step',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: 'c213d7dd-1685-4687-8be3-fb75848a7e15',
    description: "Talk to Witch-Hunter Jerren at the Witchbane Ruins where Sellen's dead body is shackled.",
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: 'cdbdb960-3205-413b-ba73-cc24df0f6a16',
    description: "Find Seluvis's Secret Puppet Room in the Three Sister, in an illusory floor in between Ranni's Rise and Renna's Rise, and transplant Sellen's primal glintstone in Sellen's puppet. Sellen's puppet is behind an illusory wall next to a glowing message",
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: 'ec182c35-b4ed-4b61-b788-c107b42b1296',
    description: 'Assuming you have defeated Rennala, assist or challenge Sellen near the Raya Lucaria Grand Library grace. Depending on what you choose you will get different rewards',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '8b9d2c89-e48e-45a5-98c1-b43aee1e8526',
    description: 'If you assisted Sellen, you are rewarded with the Eccentric Set',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '6cb8e868-f22b-40a6-872c-b20b1fd47912',
    description: 'If you assisted Sellen, you can get Master Azur and Master Lusat armor sets from their respective locations',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '8e6b59eb-087a-4b71-92ca-e31e17d60b48',
    description: 'If you assisted Sellen, you can speak to her to get the Glintstone Kris and buy Shard Spiral. She might have become a School of Graven Mages, depending on questline progression',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '98b5448e-d133-4a15-9c13-fa421b8b32a2',
    description: "If you challenged Sellen, you get the Witch's Glintstone Crown and Sellen's Bell Bearing",
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '8849e0e2-9c77-4bc8-804d-eebcde630aa5',
    description: 'If you challenged Sellen, you can speak to Jerren just outside the entrance to the Grand Library to get an Ancient Dragon Smithing Stone. If then you kill him, you can get the Eccentric Set',
    tags: [SELLEN_QUESTLINE]
  },
  {
    id: '35ea6a80-fe78-419d-b817-002882705950',
    description: 'You can reach Mt. Gelmir and Volcano Manor by going north east from Altus Plateau site of grace until Forest-Spanning Greatbridge grace, crossing the bridge with the magic portal, then heading south west through the only path available',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: 'a4a5a59d-380d-44a5-82c5-382cea68aec3',
    description: 'From the Road of Iniquity Site of Grace, face east and head to the burning fire you can see. Right in front of it is a flaming enemy. Kill it. Altus',
    tags: [LARVAL_TEAR]
  },
  {
    id: "e47e9dad-f9b7-4e44-9360-192bfc7d9436",
    description:
      "At the foot of a Golden Tree in the far north of the mountain past a summit with a Fallingstar Beast, on the road down towards the Volcano Manor. Mt. Gelmir",
    tags: [GOLDEN_SEED],
  },
  {
    id: '39a80317-b0b4-4274-9690-2898095e16d3',
    description: 'Optionally, find Patches close to the cliff west of the First Mt. Gelmir Campsite grace. There is a message on a nearby stone bridge. Follow the trail of glowing stones.',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: '4eebbb14-632b-4c83-9251-65998c861e3f',
    description: "Speak with Tanith in the manor's lobby to join Volcano Manor and get the Drawing-Room Key",
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE, PATCHES_QUESTLINE]
  },
  {
    id: 'eb8f700c-f37c-48f3-abcc-6956c50d3ce1',
    description: 'Upstairs from Tanith, Defeat Inquisitor Ghiza',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE]
  },
  {
    id: 'b049db63-dee0-4a43-8c28-f116b0134880',
    description: 'Collect the Recusant Finger and Letter from Volcano Manor from the nearby room with Rya and Bernahl',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE, PATCHES_QUESTLINE]
  },
  {
    id: '176d4a46-ea03-436a-9a57-54d6473396c9',
    description: 'Talk to Patches in the entrance of Volcano Manor',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: '2eef1716-8768-475d-ab54-e45eea352c8e',
    description: "Defeat Old Knight Istvan using the summon sign north from the Warmaster's Shack (Limgrave). There's a red sign on your map.",
    tags: [VOLCANO_MANOR_ASSASSINATION, PATCHES_QUESTLINE, RYA_QUESTLINE]
  },
  {
    id: '778461c2-d725-4a4b-9598-cfd4406928fa',
    description: 'Report back to Tanith and receive Magma Shot Sorcery',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE, PATCHES_QUESTLINE]
  },
  {
    id: '8af9f542-12a7-4a39-8522-1e3d9d8dd383',
    description: 'Talk to Rya in Volcano Manor, in her snake form',
    tags: [RYA_QUESTLINE]
  },
  {
    id: '0b51b4b9-6134-434a-8f85-3fbc1b583fb9',
    description: "Receive Letter to Patches from Patches in Volcano Manor (if Patches is not in Volcano Manor, it's possible that you have to meet him first at Murkwater Cave for him to show up at Volcano Manor, the wiki is not clear about that) ",
    tags: [PATCHES_QUESTLINE, RYA_QUESTLINE]
  },
  {
    id: '77738365-a822-4500-85e2-14af16746280',
    description: "Invade and defeat Great Horned Tragoth at Ruin-Strewn Precipice Overlook inside Magma Wyrm Makar's boss room after resting at the grace inside the boss room. You will get the Bull-Goat Set",
    tags: [PATCHES_QUESTLINE, RYA_QUESTLINE]
  },
  {
    id: '3a21455b-efd1-4b48-8bc9-3c435ddd4dff',
    description: 'Collect the next Letter from the room nearby Tanith',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE]
  },
  {
    id: '7fa43dbd-7a2b-4978-ac9c-15c9609cc128',
    description: 'Talk to Patches in Volcano Manor, reload the game and talk to him again to get the Magma Whip Candlestick (must be done before defeating Rykard)',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: '95d2715c-35c8-4468-b939-925ad6c8416b',
    description: 'Defeat Rileigh using the summon sign midway through the path south of Shaded Castle (Altus)',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE]
  },
  {
    id: 'b30a881e-6c3b-4c28-84c6-88f942f4686d',
    description: 'Report back to Tanith for the Serpentbone Blade reward',
    tags: [VOLCANO_MANOR_ASSASSINATION, RYA_QUESTLINE]
  },
  {
    id: '48ac2b74-5082-4b41-8ac3-28b059c69d20',
    description: 'Talk to Rya in her human form in Volcano Manor',
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'dbd20cf0-6029-49d5-b14d-bc66ca8a0d69',
    description: 'go through the illusory wall in Volcano Manor, if you didn\'t, to reach the Prison Town Church grace and open the doors that lead to the Volcano Manor legacy dungeon',
    tags: [RYA_QUESTLINE]
  },
  {
    id: '8a6406cb-ddfa-4e79-bf25-e35e699d6c61',
    description: 'Talk to Tanith about Rya',
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'a5318288-6ea7-49dd-bd82-1b59456cfc4b',
    description: "Defeat Godskin Noble in the Temple of Eiglay (Volcano Manor) to get the Serpent's Amnion. He is strong vs fire, holy and strike, and weak vs slash, bleed and sleep. Sleep pots are extremely effective to incapacitate him.",
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'a45c34d8-6219-4fdd-abe0-1d1787076d4e',
    description: "Give the Serpent's Amnion to Rya and rest at any site of grace",
    tags: [RYA_QUESTLINE]
  },
  {
    id: 'f962ad09-a015-425f-bd40-c825d1b27ef0',
    description: 'Talk to Tanith and get the Tonic of Forgetfulness',
    tags: [RYA_QUESTLINE]
  },
  {
    id: "c68a1902-1696-49cb-91e4-836825f23057",
    description:
      "Find Rya inside the Volcano Manor dungeon and pick one of the following options. <a href='https://www.youtube.com/watch?v=rbfEiQu5Ft4&t=544s)' target='_blank'>Where to find her</a>",
    tags: [RYA_QUESTLINE],
    items: [
      {
        id: "4a1bdfa6-ed19-42d5-b9b3-ae1d03198a32",
        description: "Kill Rya to get Daedicar's Woe (ends Rya's questline)",
        tags: [RYA_QUESTLINE],
      },
      {
        id: "8b664cda-0e97-4600-abc1-7f3dfe2996f5",
        description: "Leave Rya alone",
        tags: [RYA_QUESTLINE],
      },
      {
        id: "9ea5e5b0-2822-48fd-bb0f-523eca597235",
        description:
          "Give Rya the Tonic of Forgetfulness. After Rykard is killed find her back in the Manor, exhaust her dialogue and reload the area to get Daedicar's Woe",
        tags: [RYA_QUESTLINE],
      },
    ],
  },
  {
    id: '2beaab01-b227-4b7a-abf7-1ff6861ea4b0',
    description: "Get Sentry's torch from merchant in Hermit Merchant's Shack, northeast of the Outer Wall Battleground site of grace (Altus), useful if you want to reach Malenia (buy it from the merchant before killing him)",
    tags: [OPTIONAL, ALL_REMEMBERANCES]
  },
  // ALTUS 60-80 +10-14
  {
    id: "01d30b40-f04b-4df2-a7dc-46a0c4c95a95",
    description:
      'At the base of the golden tree on the side of the road when headed North from "Altus Highway Junction" Site of Grace. Altus Plateau',
    tags: [GOLDEN_SEED],
  },
  {
    id: "565b41cd-d27e-4470-bab4-a68add733dbf",
    description:
      "2 at the base of the golden tree on the southwestern edge of the Capital Outskirts. Altus Plateau. <a href=\"https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166423\" target=\"_blank\">Location</a>",
    tags: [GOLDEN_SEED],
  },
  {
    id: "81506999-d1fd-478d-8b13-452c25c5ce14",
    description:
      "Directly South of Outer Wall Phantom Tree site of grace. It drops from the Ulcerated Tree Spirit. Altus Plateau",
    tags: [GOLDEN_SEED],
  },
  {
    id: "4198b455-5418-467c-a8fb-f1346590c259",
    description:
      '2 under the larger Golden Tree in the center of the courtyard. Altus Plateau. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166522" target="_blank">Location</a>',
    tags: [GOLDEN_SEED],
  },
  {
    id: '50700a00-1045-492d-b94d-9abba5c2e17c',
    description: 'Second Church of Marika, in Altus. Go directly north from the Altus Highway Junction grace in Altus Plateau',
    tags: [SACRED_TEAR]
  },
  {
    id: '5576f7ac-4935-49b4-ac6b-ffc048e50356',
    description: `Godfrey Icon: Drops from Godefroy the Grafted in the Golden Lineage Evergaol in Altus Plateau, south of the Altus Plateau grace. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167647" target="_blank">Location</a>`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: 'efee0480-6110-4c57-af6e-9ea5d5c31635',
    description: 'Talk to Yura in the Second Church of Marika to get the Nagakiba. To reach this location, go directly north from the Altus Highway Junction grace in Altus Plateau',
    tags: [YURA_QUESTLINE]
  },
  {
    id: '6f7dcb3a-0fb3-440f-aa04-40e60a4fe921',
    description: "Defeat the invader Eleonora, Violet Bloody Finger in the Second Church of Marika to get the Purifying Crystal Tear and Eleonora's Poleblade (if you did not follow Yura's questline, Eleonora should still invade after you reach Mountaintops of the Giants and possibly talk to Yura next to Zamor Ruins grace)",
    tags: [YURA_QUESTLINE]
  },
  {
    id: 'acf83ead-4866-4670-90f1-245de9554bc0',
    description: 'Black Knife: Wielded by the Black Knife Assassin outside Sainted Hero\'s Grave. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167676" target="_blank">Location</a>',
    tags: [LEGENDARY_WEAPONS]
  },
  {
    id: 'cee0d282-0f32-40ec-bb6e-a0752bc26e11',
    description: 'Ancient Dragon Knight Kristoff: Can be found in Sainted Hero\'s Grave west of Leyndell, Royal Capital. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165891" target="_blank">Location</a>',
    tags: [LEGENDARY_ASHES_ACH]
  },
  {
    id: '3e908ded-2825-48c2-b96b-93068276438d',
    description: 'Reach the Shaded Castle, heading north through the valley between the Mt. Gelmir and Altus Plateau regions, heading north from the Altus Tunnel to find your way to the Castle',
    tags: [MILLICENT_QUESTLINE, LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '622dccd0-0982-401e-9ab3-58122db1e93a',
    description: "Retrieve the Valkyrie's Prosthesis from the Shaded Castle, in a chest in a room guarded by a single Cleanrot Knight, on the northwestern edge of the castle",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'dd473c61-a367-4f15-9110-e01a07410efc',
    description: "Marais Executioner's Sword: Defiled and wielded by Elemer of the Briar, Bell Bearing Hunter and lord of The Shaded Castle.",
    tags: [LEGENDARY_WEAPONS_ACH],
  },
  {
    id: '1e9eeb4a-6634-4a97-988c-08338bd47e4a',
    description: "Find Millicent just north-northeast of the Erdtree-Gazing Hill site of grace in Altus Plateau and give her the Valkyrie's Prosthesis",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '5e0dd977-dfcc-4a9f-8604-b6d7b303a6b2',
    description: 'Go to Dominula, Windmill Village (East of the "Road of Iniquity Side Path" Site of Grace. Follow the main path southeast, then bend east), and defeat the Godskin Apostle. You can summon Millicent for this battle. The Godskin Apostle is strong vs fire and holy, and weak vs slash, bleed and sleep',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '85ae981b-9770-4262-848d-abc3ab1caa3b',
    description: 'Rest at the Windmill Heights site of grace, and find Millicent and exhaust her dialoge',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: "b149dd94-865e-4ae3-b8df-1a73ddee810f",
    description:
      "At the base of a golden tree guarded by multiple trebuchets near the northern entrance to the Capital Outskirts. Start from the Windmill Village grace or backtrack from the Outer Wall Battleground grace. Altus Plateau.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'c5efe597-3022-4472-8ec9-8320b812bf7d',
    description: 'From the Rampartside Path Site of Grace (just west of the vertical center of the rampart wall surrounding Capital Outskirts), follow the road north until you come to a building. As soon as you go through the door, look over your left shoulder to see a noble cowering in the corner. Kill him. Altus Plateau. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167594" target="_blank">Location</a>',
    tags: [LARVAL_TEAR]
  },
  {
    id: 'edad12e7-a1c7-4b5b-bfdd-387df1a0c653',
    description: 'At the base of the statue in Stormcaller Church. Reached from Rampartside Path site of grace by following the road west towards the lightning strikes. Altus Plateau. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167659" target="_blank">Location</a>',
    tags: [SACRED_TEAR]
  },
  {
    id: '0424036f-7a94-41f0-9144-ee960ec59493',
    description: 'Talk to Boggart at the outer moat located under the Capital Rampart grace (from Outer Wall Battleground grace, same path to the Draconic Tree Sentinel but hugging the right side down the moat). If all you care is to buy Boiled Crab, you can stop Boggart\'s questline here.',
    tags: [BOGGART_QUESTLINE]
  },
  {
    id: 'd65e33d5-3f25-4ded-b5cb-a2fa41928539',
    description: '2 in Auriza Side Tomb, just North-East of Leyndell: In a room with a giant Living Jar. To reach Auriza Side Tomb go down the moat and then north',
    tags: [RITUAL_POT]
  },
  {
    id: 'c399c03e-adbf-4d14-b993-d207677089a8',
    description: 'Beat Draconic Tree Sentinel to access Leyndell. He is strong vs slash, fire, lightning, bleed and frost, and weak vs standard, strike and pierce',
    tags: [NGPLUS]
  },
  // LEYNDELL 90-110 +15-20
  {
    id: '554ccd9a-9b26-40d9-b6b9-d2d12bf7ac2c',
    description: 'Talk to Dung Eater in Roundtable Hold (after reaching Leyndell)',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '7a68718f-b0e7-4006-b8b9-16d40e64d39e',
    description: 'Sanctified Whetblade (Lightning and Sacred). Fortified Manor, Leyndell From the West Capital Rampart site of grace, head to the south-west side of the manor and enter from the roof near the Erdtree root. Once inside, it can found on a corpse laying next to an anvil',
    tags: [WHETBLADES]
  },
  {
    id: '0542d506-1888-4aaa-a2a5-5d890913ad6f',
    description: "Get one Seedbed Curse from Leyndell Royal Capital: After you exit the room with East Capital Rampart grace, continue south past the Oracle Envoys and into the building. Inside, head down the stairs and face west to take the elevator. After the elevator continue west into the next building. Climb up the ladder to your right and go up the stairs. On the highest floor you will find the Seedbed Curse on a corpse sitting in a chair",
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: "58dad865-0f98-4d19-8f8a-3800e4442dc7",
    description:
      "Dropped by Ulcerated Tree Spirit in the lower part of Leyndell, the Royal Capital. Altus Plateau",
    tags: [GOLDEN_SEED],
  },
  {
    id: '465c8c07-c1dc-4ca1-ab9f-b4ce1254bb9c',
    description: 'Talk to Dung Eater with one Seedbed Curse in your inventory, to get the Sewer-Gaol Key',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '2f7c8f64-dd73-4414-8c00-31b88c7335e7',
    description: 'Reach the Underground Roadside grace in Leyndell underground sewer',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: 'f1446309-6a7c-4f93-b9e7-346d9f509dbc',
    description: 'From the Underground Roadside grace, find Dung Eater: take a left from the grace, jump down the open grate, run northwest past the rats and the giant poison plants, go up the ladder and use the key on the locked door (be wary of the giant hand)',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: 'dcae831e-4f7a-4d02-95d1-4df23f50b7c7',
    description: 'Talk to Dung Eater in the sewers and tell him to leave his cell',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '71dfa82a-f8fe-4df1-a428-5a65cdd9937b',
    description: 'In the Leyndell Sewers at the end of the maze of tunnels, just before the elevator to the Forsaken Depths Grace',
    tags: [RITUAL_POT]
  },
  {
    id: '359c9388-35ab-4e4e-8e92-edb62955b055',
    description: 'Talk to Boggart at the outer moat located under the Capital Rampart grace.',
    tags: [BOGGART_QUESTLINE]
  },
  {
    id: '8fa43f43-bd91-4ec3-a106-e9f4f40904b0',
    description: 'Find a message in place of Dung Eater in Roundtable Hold',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '66517971-be5c-44ae-b9a8-cc98257bbf2c',
    description: 'Talk to the dying Boggart at the outer moat located under the Capital Rampart grace. Note that after this, Boggart will die and you won\'t be able to buy more items from him.',
    tags: [BOGGART_QUESTLINE]
  },
  {
    id: 'ac59b169-2f2e-44c4-97b5-aefe39638a50',
    description: 'Go to the outer moat (from Outer Wall Battleground grace, same path to the Draconic Tree Sentinel but hugging the right side down the moat) and defeat Dung Eater to get the Sword of Milos',
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '5f55ac6e-6810-4799-a1cf-298b9b973a0b',
    description: 'Talk to Dung Eater in Roundtable Hold',
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: '49478ab3-ba86-45ff-b333-94de240f8c6c',
    description: "Give potion to (A) Nepheli if you want to get Dolores's spirit ashes (it will lock you out of Nepheli's quest), (B) to Dung Eater if you want to get Dung Eater's spirit ashes (will lock you out of Dung Eater quest), (C) or to Gideon (will not lock you out of any quest). You need to do this step to progress Seluvis questline",
    tags: [SELUVIS_QUESTLINE],
    items: [
      {
        id: '67fbbbc8-2742-4732-a6f5-bf6440de7840',
        description: "If you choose to give the potion to Dung Eater, go to Dung Eater's cell in Leydell sewers and give him Seluvis' Potion (this will lock you out of the rest of Dung Eater's questline). If you do this, wait for a few seconds, and then kill Dung Eater without leaving the area or reloading the game, you will get the Omen Set. Note that for this you have to have progressed Dung Eater's questline until after you beat him in the outer moat",
        tags: [SELUVIS_QUESTLINE]
      },
    ]
  },
  {
    id: '1da2c590-e82e-48c7-934a-0b8cc6f158f1',
    description: "Visit Seluvis's lab behind an illusory floor in between Ranni's Rise and Renna's Rise to find the body of Nepheli or Dung Eater, depending on who you gave Seluvis's Potion to, and interact with the message within (if you killed Dung Eater after giving him the potion, you will not find his puppet, but you can progress with Seluvis' questline regardless)",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: 'db09772b-34cf-45a2-9876-75d25ac402e1',
    description: 'Talk to Seluvis and ask him about his chambers to receive a free Spirit Ashes from him (you might need to reload the area and talk to Seluvis several times). It is recommended you get Jarwight Puppet, because it will cost 3 Starlgiht Shards later and so if you get the other puppet you will need to find one additional Starlight Shard later',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '28f992d1-d515-4fb8-aea2-f53bf23117f5',
    description: 'Get one Starlight Shard at a stone astrolabe near a cliff in Weeping Peninsula, directly east from Castle Morne Rampart grace',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '809bd867-bc55-4470-ab0f-b2f7ac3cd5f1',
    description: "Get one Starlight Shard from a stone astrolabe southeast of the Map Fragment in Limgrave. Head southeast from the Agheel Lake South Site of Grace toward the top of a cliff and you'll see the astrolabe",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '6f95d2bd-eb10-4c3c-b9c7-8ff38dfc5538',
    description: 'Get one Starllght Sard in Stormhill, south from the Stormhill Shack grace, next to a cliff above the beach',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: 'fe4de4f6-dddf-41d4-8af0-2aeda317966f',
    description: "Buy one spirit ashes from Seluvis. If you can't, talk to Seluvis after reloading the area multiple times until you can",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '31f833b1-3be1-4829-a710-626a34d4a2ca',
    description: 'Get Amber Starlight from Altus Plateau: Directly east from the Altus Highway Junction Site of Grace, the road will break off north into an open cave, in the cave the Amber Starlight will be sitting below a statue surrounded by several Land Octopuses',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '36c3c4cd-6ba4-4b6f-8345-52df9451c3a8',
    description: 'Give Amber Starlight to Seluvis to get the Magic Scorpion Charm',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: 'b1c27e5c-e4c4-430d-85e0-9f0cd778f094',
    description: 'Get Amber Draught from Seluvis (you might need to reload the area)',
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '9af7685b-205d-47d1-a21e-48e2d170f660',
    description: "Choose the option Amber Draught with Ranni. Ranni will kill you and Seluvis. Ranni will disappear from the area. Note that you can absolve yourself with Celestial Dew at the Church of Vows and continue Ranni's questline without consequence",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '9f455ff1-7b16-4d9b-96b1-3914c26eb439',
    description: "You can get Pidia's Bell Bearing and a puppet from dropping from a ledge from the Three Sisters into Caria Manor",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: '6792f457-fabc-4ea0-b4d5-aaa4dcaac3e0',
    description: 'Loot Fingerslayer Blade from Nokron (along with a Great Ghost Glovewort)',
    tags: [RANNI_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: '05b86aba-43ef-4b34-947c-961d488e5d62',
    description: "From the Night's Sacred Ground Site of Grace at the end of Nokron, head up the stairs on the right into the building, and kill the large ball.",
    tags: [LARVAL_TEAR]
  },
  {
    id: '588cc80e-1d8e-4853-85bf-7ade0c31fdff',
    description: 'Talk to Ranni again and give her the Fingerslayer Blade to receive Carian Inverted Statue. Giving the Fingerslayer Blade to Ranni will turn Seluvis into a puppet, so if you want to do Seluvis quest, you must do it before this point.',
    tags: [RANNI_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: 'b74b0892-6ec4-42f7-86a5-9abb664deb48',
    description: 'Talk to Iji',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '8419e6fc-6209-42cd-ad18-d5f972d7a9f5',
    description: "Go through Renna's Rise waygate and get Ranni's doll",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '6f0f64d0-961a-4fd6-b4f9-dbfc2aecc30c',
    description: 'Progress through Ainsel and Nokstella to get the Discarded Palace Key from the Baleful Shadow.',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: 'aeefc242-efe0-4de6-a527-9d7435c246a9',
    description: 'From the Nokstella, Eternal City Site of Grace, follow up the stairs and progress through the area until you should see a large ball rolling down a far staircase toward you in the distance. Kill it. Nokstella is reachable by progressing Ranni\'s questline or from the coffin in Deeproot Depths',
    tags: [LARVAL_TEAR]
  },

  {
    id: 'b9be1195-7d21-4768-8881-de1cb921334f',
    description: 'In Nokstella upper buildings, inside a building next to a staircase with a rolling ball and with a chest in the back. Kill the ball inside. Nokstella is reachable by progressing Ranni\'s questline or from the coffin in Deeproot Depths',
    tags: [LARVAL_TEAR]
  },
  {
    id: '2a396ffd-78b7-479c-9313-12ccd4626814',
    description: 'In Nokstella upper buildings, inside a building with many silver tears and a rolling ball, by killing the ball. You can let the ball and the tears aggro and kill each other. Nokstella is reachable by progressing Ranni\'s questline or from the coffin in Deeproot Depths',
    tags: [LARVAL_TEAR]
  },
  {
    id: '6e7c104d-cce8-49c5-ae43-1b70a8d11094',
    description: `Moon of Nokstella. In the highest room of Nokstella, Eternal City, guarded by two Silver Tears and a Nox warrior. Nokstella is reachable by progressing Ranni\'s questline or from the coffin in Deeproot Depths`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: "d9201005-91e1-4dec-bb62-2435f52443ef",
    description:
      "Found by progressing Ranni's questline or from the coffin in Deeproot Depths. Access from the north part of Nokstella. Found along the upper river through the city near a lift to the Lake of Rot. Ainsel River",
    tags: [GOLDEN_SEED],
  },
  {
    id: '3ccc2aba-7d0a-486e-ba62-8cbeae20f7cf',
    description: 'Found by progressing Ranni\'s questline or from the coffin in Deeproot Depths. In a chest guarded by several Silver Tears with shields in the corner of a small room near the Nokstella, Eternal City grace',
    tags: [GHOST_GLOVEWORT_BELL]
  },
  {
    id: '053b4389-4d66-4ae6-b78e-92f7d2946b60',
    description: "Get the Dark Moon Ring from Rennala's room",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '72415649-ec6d-4fd5-845c-950088a6403b',
    description: 'Go through the Lake of Rot (Flame, Cleanse Me incantation, lots of HP flasks, Immunizing Horn Charm talisman and Immunizing Cured Meat help)',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: "ad9db21d-3fc5-4de0-bf5d-d011d2ab3783",
    description:
      "Drops from Ulcerated Tree Spirit found in the Lake of Rot's temple, down from the Grand Cloister grace.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '76b7e4a0-77f3-4f48-a55e-ba59bce9cb2d',
    description: 'Defeat Astel, Naturalborn of the Void. It is strong vs magic, fire, lightning, holy and frost, and weak vs standard, slash, strike and pierce',
    tags: [RANNI_QUESTLINE, ALL_REMEMBERANCES]
  },
  {
    id: '12e9a4f4-a78c-482c-aa68-c3656058b92c',
    description: "Reach the Moonlight Altar (this place is end-game level but you don't need to kill anything to progress Ranni's quest.",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '3e04c2f6-9d9c-4508-ad27-442a2b144222',
    description: 'Reach the Cathedral of Manus Celes and activate the grace inside',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: 'a423d64a-9e3b-4d16-8cad-7e683eaeaf5a',
    description: "If you have access to the Cathedral of Manus Celes, grab the 10 Starlight Shards lying around and purchase the remaining Spirit Ashes from Seluvis or his corpse (even if you can't access Manus Celes, there are a total of 11 shards in other parts of the map, near stone astrolabes)",
    tags: [SELUVIS_QUESTLINE]
  },
  {
    id: 'e294f45d-34ec-4f01-a121-4a26cd8b7b11',
    description: 'Place the Dark Moon Ring on Ranni\'s doll finger and Get the Dark Moon Greatsword',
    tags: [RANNI_QUESTLINE, LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '7ea26fc2-df66-4228-af59-91972c4bb601',
    description: `Ranni's Dark Moon: Found in a chest at the top of the tower at Chelona's Rise, at the Moonlight Altar. One must solve the tower's puzzle to enter. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168058" target="_blank">Spell location</a>, <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170236" target="_blank">First Wise Beast</a>, <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170217" target="_blank">Second Wise Beast</a>, <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=170235" target="_blank">Third Wise Beast</a>`,
    tags: [LEGENDARY_SPELLS]
  },
  {
    id: '18b31232-e67e-4b88-896f-8a0c78865c2a',
    description: 'Black Knife Tiche: Dropped by Alecto, Black Knife Ringleader upon defeat at the Ringleader\'s Evergaol, in Moonlight Altar, Liurnia. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=171212" target="_blank">Location</a>',
    tags: [LEGENDARY_ASHES_ACH]
  },
  {
    id: '8a776cf3-1d98-41c8-bf25-629fd277e248',
    description: "Get Seedbed Curse (until you get 5) from Leyndell Royal Capital: On the body of Boggart at the end of his questline, in the outer moat near the Capital Ramparts grace, where the Dung Eater invades. If you did not do Blackguard's quest before Dung Eater's invasion, you will not be able to receive this particular Curse and you will need to provide the other five to Dung Eater instead",
    tags: [DUNG_EATER_QUESTLINE, BOGGART_QUESTLINE]
  },
  {
    id: '36a9fd33-72e1-4091-9158-c1aa01d442cf',
    description: "Get Seedbed Curse (until you get 5) from Leyndell Royal Capital: In the alternate version of Roundtable Hold located near the Fortified Manor grace, inside the equivalent of the Dung Eater's room. You will find it on a body that is strapped to a chair (if you follow this guide, you already got this one)",
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: "0cef779d-c8ab-47ab-9a6d-d43ffab309eb",
    description:
      "At the Gargoyle Boss location under the tree along the ramparts of Leyndell, the Royal Capital, near the West Capital Rampart grace. Altus Plateau",
    tags: [GOLDEN_SEED],
  },
  {
    id: '86a63cbf-5afa-4d60-bad0-6879f8cebb94',
    description: "Find Corhyn and Goldmask in Leyndell. From the West Capital Ramparts Site of Grace, head south. Follow the path upwards to the colosseum and then head left. Exhaust Corhyn's dialogue",
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '5824fd47-d0bb-43ec-b552-dfe59fc62bc0',
    description: 'By this point your weapon can be +15-20 (6-7)',
    tags: []
  },
  {
    id: 'ca3d9a16-b81b-4be1-bb69-b7a3a704e862',
    description: 'Beat Godfrey, First Elden Lord (Golden Shade). He is strong vs holy, and weak vs pierce and lightning',
    tags: [NGPLUS]
  },
  {
    id: '12f3e12c-f659-4f07-a2b3-7d6da3b0e17a',
    description: 'Bolt of Gransax: Embedded into a fragment of Ancient Dragon Gransax\'s spear in Leyndell, Royal Capital. From the Erdtree Sanctuary grace, walk out the western door, take the elevator down, go down the staircase to the walkway, jump down onto the giant spear lodged into the building, and then walk up it',
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '6d61ad64-1a91-4e38-b316-ce48cc131368',
    description: 'Get the Golden Order Principia, directly above the Erdtree Sanctuary grace, up the tree branches',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '88f59a3c-a8e1-4f10-88f0-54872de1e0bc',
    description: 'Give the Golden Order Principia to Corhyn in Leyndell or to Miriel in the Church of Vows, Liurnia, and buy the Law of Regression incantation (37 INT)',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'd81cc2d4-3dd6-4be5-a2e5-1f2625d11798',
    description: "To be able to use Law of Regression you need 37 INT, if you don't have it, you have two options ",
    tags: [CORHYN_QUESTLINE],
    items: [
      {
        id: '450356c1-614e-42b7-9046-7d58d97eadaf',
        description: 'A) Use two larval tears to respec to a high INT build and then respec back to your build (need to have defeated Rennala)',
        tags: [CORHYN_QUESTLINE]
      },
      {
        id: '517f2a48-9607-4636-9dfe-d231b5d76c60',
        description: 'B) Use items that raise INT: Marika\'s soreseal (+5), Godrick\'s Great Rune (+5), Grafted Blade Greatsword (+5), Intelligence-knot Crystal Tear (+10), Stargazer Heirloom (+5), Twinsage Glintstone Crown (+6), etc, see more in <a href="https://eldenring.wiki.fextralife.com/Intelligence" target="_blank">Fextralife</a>',
        tags: [CORHYN_QUESTLINE]
      },
    ]
  },
  {
    id: '343d86e7-1b46-4fb3-b548-f7b5c9b4e75c',
    description: 'Use the Law of Regression next to a message that says "regression", facing the statue, west of the Erdtree Sanctuary grace, down the elevator',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '36970664-f1ad-456a-9e97-154b32765c5c',
    description: 'Talk to Goldmask and Corhyn in Leyndell',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'aed334cf-8397-453c-87d5-16922af7c955',
    description: 'Defeat Morgott, The Omen King, the interact with with the Erdtree to activate the Grace. Morgott is strong vs holy and sleep, and weak vs slash and lightning',
    tags: [NGPLUS]
  },
  {
    id: '7690a174-fa2b-42a3-a85d-844c90e55116',
    description: 'Talk to Melina in Elden Throne grace to get the Rold medallion',
    tags: [NGPLUS]
  },
  {
    id: 'b9a44d4b-7a7e-47b8-9dd9-3e76b4f7f71f',
    description: 'After defeating Morgott (but before killing Gideon), find Nepheli, Kenneth, and Gostoc in the Stormveil Castle throne room near the Godrick the Grafted site of grace (you might have to spawn from the Godrick the Grafted site of grace and rest at the Secluded Cell site of grace). If they are still not there, you might have to talk to Kenneth atop Fort Haight',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: 'acf9e786-ce5a-47b6-addd-510ecc7a2ea1',
    description: 'Get an Ancient Dragon Smithing Stone from Nepheli',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: '508d9a63-1bfe-4883-b774-2a0e9052a1c4',
    description: 'Buy and Ancient Dragon Smithing Stone from Gostoc',
    tags: [NEPHELI_QUESTLINE]
  },
  // FORBIDDEN LANDS 110-120 +20-24
  {
    id: '7437d4a6-25da-4ac3-9c68-cc1e489bba68',
    description: 'From the Avenue Balcony grace reach the Rold lift',
    tags: [NGPLUS]
  },
  {
    id: '5c50d5ff-4ee2-4b1f-8e59-132e44ce59c9',
    description: 'Run all the way through the Forbidden lands to Mountaintops of the Giants',
    tags: [NGPLUS]
  },
  {
    id: "f196e61f-22bb-4290-bf12-ab23f12d0b7f",
    description:
      "At the foot of a Golden Tree in Forbidden Lands, on the path through to the Mountaintops of the Giants, just past a Black Blade Kindred. Mountaintops of the Giants",
    tags: [GOLDEN_SEED],
  },
  // MOUNTAINTOPS OF THE GIANTS 110-120 +20-24
  {
    id: '57791558-3866-42c0-8701-432350a3ecc7',
    description: "Talk to Yura (Shabriri) in the Zamor Ruins Grace in Mountaintops of the Giants, and kill him to get the Ronin's Set or alternatively progress Hyetta's questline and accept the frenzied flame from the Three Fingers to find the set in Yura's location",
    tags: [YURA_QUESTLINE]
  },
  {
    id: '8a60d188-2029-4e20-a80e-ebbb3b50d7e0',
    description: 'In Zamor Ruins, near the Zamor Ruins grace in the Mountaintop of the Giants area, at the bottom of the stairs in a chest',
    tags: [SMITHING_STONE_BELL]
  },
  {
    id: '30c309f9-57f5-49fb-8286-c01d2c338ae7',
    description: "Giants' Mountaintop Catacombs. Follow the path North from Zamor Ruins and when you reach the fire enemies, turn around to the right to enter. In a room with a giant Living Jar.",
    tags: [RITUAL_POT]
  },
  {
    id: '188a8fc3-17f2-42ab-adc9-bf67d97241c9',
    description: "Dropped by Ulcerated Tree Spirit in Giants' Mountaintop Catacombs, near the fire monks at the start of Mountaintops of the Giants. <a href='https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167665' target='_blank'>Location</a>",
    tags: [GLOVEWORT_BELL, GOLDEN_SEED]
  },
  {
    id: '72213235-afbe-47cc-8159-23e4aae3a775',
    description: "Talk to Millicent in the Ancient Snow Valley Ruins site of grace in Mountaintops of the Giants. If Millicent does not appear at the site of grace, try returning to the Windmill Heights again and see if she's there, and if so, exhaust her dialogue there.",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: "73f1ba00-ed51-4392-8721-580fb10c43a1",
    description:
      "Under a golden tree - guarded by a giant Golem by a frozen river in the Mountaintops of the Giants. <a href='https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168605' target='_blank'>Location</a>",
    tags: [GOLDEN_SEED],
  },
  {
    id: '96d6b2fa-aebd-4c07-b608-486102d7afeb',
    description: "Talk to Corhyn in the bridge south of Stargazers' Ruins right above the Ancient Snow Valley Ruins grace, in Mountaintops of the Giants. If you have the Tonic of Forgetfulness you can optionally offer it to him, but you don't need to",
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'ddd0e4db-d34d-4bff-9f4d-72ec271636cd',
    description: `Founding Rain of Stars: Found in a chest within Heretical Rise, in Mountaintops of the Giants. One must navigate an invisible bridge to get inside. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168642" target="_blank">Location</a>`,
    tags: [LEGENDARY_SPELLS]
  },
  {
    id: '223a264a-6e74-4942-9c6f-f4c0d9229ac8',
    description: 'Found on a body outside the First Church of Marika in Mountaintops of the Giants, from the Freezing Lake site of grace, cross the frozen lake to the south',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: '4f82a3dc-b165-4e21-afea-d3c3197ca6e0',
    description: 'First Church of Marika in Mountaintops of the Giants, south of the large freezing lake.',
    tags: [SACRED_TEAR]
  },
  {
    id: '30bf91af-7114-4564-a226-6acb5e9f08ea',
    description: 'By this point your weapon can be +24 (9)',
    tags: []
  },
  {
    id: '21e3ee7a-9c14-4de5-84d7-a5a8c1f46288',
    description: 'Church of Repose in Mountaintops of the Giants. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165748" target="_blank">Location</a>',
    tags: [SACRED_TEAR]
  },
  {
    id: '7c510998-cb9f-4a89-a3f4-1be7189a672e',
    description: 'you can get an Ancient Dragon Smithing Stone from a corpse inside the mouth of a big skull south-east of Church of Repose',
    tags: [NGPLUS]
  },
  {
    id: '9363b337-a53f-4f44-9c24-2a18a52c7673',
    description: 'By this point your regular weapon can be fully upgraded +25',
    tags: []
  },
  {
    id: "8fe6d280-9880-4dca-9c81-08456d345fc5",
    description:
      "Base of a Golden Tree across the large chain leading to the southeast portion of the Mountaintops of the Giants, among large frozen corpses. From the Foot of the Forge grace go north east.",
    tags: [GOLDEN_SEED],
  },
  {
    id: '51111493-cf2d-4ec7-b540-e212e670aa00',
    description: 'Pick up the Red Letter from the room nearby Tanith',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '5c1982d8-ef09-4295-850e-8b6e54e61fe8',
    description: 'Defeat Juno using the summon sign east of the Shack of the Lofty, going west from Freezing Lake grace (Mountain Tops of the Giants)',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '1276d548-365e-40d6-8b6c-e044336b64ff',
    description: "Report back to Tanith for the Talisman Taker's Cameo",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '56be7e1e-a5cc-4b95-9ba6-fc5b49aa64aa',
    description: 'Tanith will now offer to take you to the lord of the manor. Ensure all other Volcano Manor quests are done before continuing. Accept Tanith\'s offer to reach Rykard (or alternatively reach the end of the Volcano Manor dungeon)',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'a701452c-e039-4068-af9d-d848ec71d858',
    description: "Get Seedbed Curse (until you get 5) from Volcano Manor: From Temple of Eiglay, proceed until you reach the teleporter to Rykard, Lord of Blasphemy, then go back into the building and up the stairs to find a fog door that requires a Stonesword Key. Carefully drop down in the dark room using the hanging cages. The item will be on a body that is sitting on a chair guarded by enemies. To the opposite side of the room there's a path leading back to the door in the Volcano Manor lobby that can now be opened",
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: '48a216e3-249c-4720-928a-e8faa7e34806',
    description: 'Defeat Rykard, Lord of Blasphemy. He is very strong vs fire, and weak to standard, slash, pierce and frost',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES, VOLCANO_MANOR_ASSASSINATION, PATCHES_QUESTLINE, RYA_QUESTLINE]
  },
  {
    id: 'ce4f0777-e5a5-4b25-a260-49b06e941ee3',
    description: 'Speak to Tanith one more time.',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '20afac13-e621-42ec-87ca-34440757c768',
    description: "Talk to Patches in front of the boss room in Shaded Castle to get the Dancer's Castanets",
    tags: [VOLCANO_MANOR_ASSASSINATION, PATCHES_QUESTLINE]
  },
  {
    id: '66cae8a8-8e92-49eb-b4a8-b07428eee16b',
    description: 'Return to Rykard, Lord of Blasphemy Site of Grace.',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '41c642d3-b6d5-4a39-92ee-1ce9f2612554',
    description: "(Optional) Offer the Dancer's Castanets to Tanith. She'll refuse.",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'a0175a65-8678-476a-b3a3-cc47d78a13d7',
    description: "Kill Tanith and loot the Consort's Set.",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'b51482f0-d82f-4ed4-ad03-7ef3e6b0a3a8',
    description: "Tanith's Knight will invade. Kill and loot the Knight for Aspect of the Crucible: Breath.",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: "a8337720-4336-4219-88a7-9903e7178dad",
    description:
      "After defeating Rykard, talk to Rya in her previous location and reset the area to get Daedicar's Woe and Zorayas' Letter. If you gave Rya the Tonic of Forgetfulness, find her back in the Manor, exhaust her dialogue and reload the area to get Daedicar's Woe",
    tags: [RYA_QUESTLINE],
  },
  {
    id: '522eac3f-53ae-4a00-b02d-e8166592baa6',
    description: 'Meet Patches again at Murkwater Cave as a boss, and accept his surrender (in Limgrave. halfway through the Murkwater River). If Patches does not show up, try: Reload the area. Make sure he has left the Shaded Castle. Move to the Rykard, Lord of Blasphemy grace.',
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: 'd78bacf7-b06c-4603-80e8-56ed3272f973',
    description: "Reload the game to reopen Patches's shop",
    tags: [PATCHES_QUESTLINE]
  },
  {
    id: 'a7a70a4b-9f8b-4a6a-bda0-83d9b21a0235',
    description: "Alexander can be summoned for the fight against Fire Giant (you don't need to summon him to complete his questline)",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '1c79f7d4-5078-4503-8587-0c8190959121',
    description: 'Defeat Fire Giant. He is strong vs fire and frost, and weak vs slash. Because of his huge health bar, percentage based damage is recommended: bleed, poison, scarlet rot and weapons like the Black Knife. You can summon Torrent for this fight',
    tags: [NGPLUS]
  },
  // BEFORE BURNING ERDTREE
  {
    id: 'cf171be4-c5f4-4149-b71f-a4c6c6d9efef',
    description: 'Defeat Mohg, the Omen down the Leyndell Sewers, then attack the alter behind the chest to reveal a secret area. He is very strong vs fire, strong vs status effects, and weak vs standard, slash, strike, and pierce',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: 'd8938df1-e27e-4a6b-b342-18319ca5e7a0',
    description: '<span>Reach all the way to the bottom of Leyndell Sewers by jumping down the platforms until reaching the Frenzied Flame Proscription grace, get naked and enter the door with the Three Fingers. This is the easiest way to parkour to the bottom: <a href="https://www.youtube.com/watch?v=3nH0aqlYX10" target="_blank">https://www.youtube.com/watch?v=3nH0aqlYX10</a></span>',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '886ca92c-0bb6-44de-b7d2-49827c9fd4ac',
    description: 'Talk to Hyetta at Frenzied Flame Proscription and get the Frenzied Flame Seal and five Frenzyflame Stones',
    tags: [HYETTA_QUESTLINE]
  },
  // BURN ERDTREE
  {
    id: 'a8262bb7-aa69-4e4c-b6ff-db98f03943ea',
    description: 'Activate cutscene to Burn the Erdtree and access Farum Azula by talking to Melina in Forge of Giants grace',
    tags: [NGPLUS]
  },
  {
    id: 'ecb37b68-e9ab-4d8f-bbe0-1dd4b13c8e7e',
    description: "Fia will relocate to Deeproot depths even if you didn't follow her questline. Defeat Fia's Champions in Deeproot Depths if you didn't do so yet",
    tags: [FIA_QUESTLINE, ALL_REMEMBERANCES, D_QUESTLINE]
  },
  {
    id: 'fb30b568-2ff8-420f-9a35-811313963cc0',
    description: "Get the Cursemark of Death from the top of the Divine Tower of Liurnia. You will need to use the Carian Inverted Statue at the entrance of the tower to access the top",
    tags: [FIA_QUESTLINE, ALL_REMEMBERANCES]
  },
  {
    id: 'ef17d1ef-2023-427d-88fb-d05e37615dda',
    description: "Bring the Cursemark of Death to Fia in Deeproot Depths, exhaust her dialog and rest in a grace, then interact with Fia to enter her dream and defeat Lichdragon Fortissax. It is strong vs lightning and holy, and weak vs pierce",
    tags: [FIA_QUESTLINE, ALL_REMEMBERANCES]
  },
  {
    id: '4bdcc467-2358-4860-bcb1-c56ec5f893e0',
    description: "Get the Mending Rune of the Death-Prince from Fia",
    tags: [FIA_QUESTLINE]
  },
  {
    id: 'eb64e086-a405-4cd7-83e4-928fbfc4e0a8',
    description: "Find D's twin brother in Nokron, right before the Valiant Gargoyle boss, to get the Inner Order gesture. Optionally, give him the unaltered Twinned Set. If you do so and reload the area, you can summon him for the Valiant Gargoyles fight",
    tags: [D_QUESTLINE, FIA_QUESTLINE]
  },
  {
    id: '36188817-c445-4b52-ac31-947a9bbe9436',
    description: "Get Fia's Set from Fia's corpse in Deeproot Depths. Reload the area, and find the Twinned Set and the Inseparable Sword from D's brother",
    tags: [FIA_QUESTLINE, D_QUESTLINE]
  },
  // MOHGWYN PALACE 110-140 +20-24
  {
    id: "76a75f82-738d-4c1e-91ce-cbab5f32122f",
    description:
      "Next to the huge birds in the middle of the red lake, reachable from Palace Approach Ledge-Road or from Dynasty Mausoleum Entrance graces. Mohgwyn Palace. Note: if you grab this seed and rest in a grace, you cannot collect the other seed in this area.",
    tags: [GOLDEN_SEED],
  },
  {
    id: "b7a53140-c96f-4250-b4bd-44e19c37734a",
    description:
      "Behind the structure with the Somber Ancient Dragon Smithing Stone inside a chest, drop below on some rocks. A corpse is hanging on one of them. Note: the Golden Seed doesn't appear if the other one in the middle of the blood lake has already been collected and the area has been reset, but can be claimed if the area has not been reloaded. Mohgwyn Palace.",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'd34d72c6-0545-4010-bca7-73d8280ede4c',
    description: 'Use invasion sign near the Mausoleum Dynasty Midpoint Site of Grace and defeat Varré',
    tags: [VARRE_QUESTLINE]
  },
  {
    id: 'a44dea7f-3186-41df-98af-02907dc45f81',
    description: "Go back to the corridor where you found Varré invasion sign and talk to him to get 6 Festering Bloody Fingers and Varré's Bouquet",
    tags: [VARRE_QUESTLINE]
  },
  {
    id: '54afa6b4-3e73-468a-ba7a-42a984f96cb0',
    description: 'Eclipse Shotel: Left as an offering to the sun in the Church of The Eclipse, Castle Sol, in Mountaintops of the Giants',
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: 'd01f819f-3b97-4551-9b08-1e6282f76552',
    description: 'Get Haligtree Secret Medallion (Right) from Castle Sol in Mountaintops of the Giants. To reach it, you will have to defeat Commander Niall. He is strong vs slash and weak to pierce',
    tags: [OPTIONAL, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  // CONSECRATED SNOWFIELD 100-120 +20-24
  {
    id: '57379897-ef76-4246-af6b-b1db1c957349',
    description: 'With both halves of Haligtree medallion, access Consecrated Snowfield through the Lift of Rold',
    tags: [OPTIONAL, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: "fdaf0398-fd5e-469b-9bb4-8fb547c7b80d",
    description:
      "In the secret Consecrated Snowfield region, Though hard to see due to the snow, ride north from the dungeon that exits into the snowfield to find a large tree with the seed at the base. Mountaintops of the Giants. <a href='https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168092' target='_blank'>Location</a>",
    tags: [GOLDEN_SEED],
  },
  {
    id: '343e6c7d-7b37-4c27-943d-a40511f311ba',
    description: 'From the Inner Consecrated Snowfield Site of Grace, head southeast to shortly find three Wandering Pilgrims stranded in the snow. One of them is stuck, buried almost up to his armpits. Kill him. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167120">Location</a>',
    tags: [LARVAL_TEAR]
  },
  {
    id: '3a4721ff-f4cf-4906-9c5b-8b7e8aef0775',
    description: "Golden Order Greatsword: Taken by the Misbegotten Crusader to the Cave of the Forlorn. <a href='https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167161' target='_blank'>Location</a>",
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: "f88a55b3-907a-4940-911e-0f568d1dd4f5",
    description:
      "At the foot of a Golden Tree by a frozen river to the west of Ordina, the Liturgical Town leading to Miquella's Haligtree. Mountaintops of the Giants",
    tags: [GOLDEN_SEED],
  },
  {
    id: '6081caa3-6d2b-4b95-b20c-88daae796559',
    description: 'Reach the Apostate Derelict grace, in the northermost part of Consecrated Snowfield, and interact with the giant Albinauric woman. Latenna will reward you with a Somber Ancient Dragon Smithing Stone',
    tags: [LATENNA_QUESTLINE]
  },
  {
    id: '26a53cd6-7fbb-41be-b39c-98a863f88d78',
    description: 'Yelough Anix Tunnel, in the west of the Consecrated Snowfield, near the Yelough Anix Ruins. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=4491&lat=-77.59375&lng=133.02805&code=mapA" target="_blank">Location</a>',
    tags: [TUNNELS]
  },
  {
    id: '52bfb466-e488-4a1b-8eab-7a84dc19ab14',
    description: "beat Ordina's puzzle in Consecrated Snowfield to access Miquella's Haligtree. You can make the assassins visible holding Sentry's Torch in your off hand. You can knock off the snipers from the roofs with a greatbow, the Jar Cannon or long range spells",
    tags: [OPTIONAL, MILLICENT_QUESTLINE, ALL_REMEMBERANCES]
  },
  {
    id: 'a38284d6-48d6-46f8-a9b3-5ddc7394ec72',
    description: "Reach Mohgwyn Palace either from Varre's quest or from Consecrated Snowfield and beat Mohg, Lord of Blood. Beforehand, it would be useful to get the Purifying Crystal Tear first from killing Eleonora, Violet Bloody Finger at the Second Church of Marika in Altus Plateau. If Eleonora does not invade, follow Yura's questline. Mohg is very strong vs fire, and weak vs standard, slash, strike, pierce and bleed",
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // MIQUELLA'S HALIGTREE 120-150 +25
  {
    id: "2554253d-5e49-4380-9f56-83ba0e134b66",
    description: "Progress through Miquella's Haligtree and defeat Loretta, Knight of the Haligtree. She is strong vs magic, fire, bleed and frost, and weak vs lightning",
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '29f2ae6e-60d2-43f3-8b6c-c003f63c6bd9',
    description: `Marika's Soreseal: Found on an altar in a room requiring a Stonesword Key in Elphael, Brace of the Haligtree. From the Prayer Room Site of Grace, move through the door to the north, and cross over to the walkway that has the Erdtree Avatar. Head to the southern end of the walkway, then jump down the western side, jumping down once again to reach the sealed door. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169301" target="_blank">Location</a>`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: '9ec84570-d38d-44ad-8225-0d918c24835f',
    description: 'Cleanrot Knight Finlay: Found in a chest protected by a knight in Elphael, Brace of the Haligtree. Start at the Prayer Room site of grace, go north to the next grace and roughly half way, there is the chest. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167679" target="_blank">Location</a>',
    tags: [LEGENDARY_ASHES_ACH]
  },
  {
    id: '37fd75e6-f278-457b-8f48-7983d33d39d2',
    description: 'Get Seedbed Curse (until you get 5) from Elphael, Brace of the Haligtree: From the Prayer Room Grace, head forwards until the end of stairs with two crossbowman above you. Jump on to the arch to the right and hop on to the platform to the left with the Crimson Teardrop Scarab. To the left should be a room with a Cleanrot Knight and a chest containing Cleanrot Knight Finlay Ashes. Hop onto the arch to the north-west and follow it up to a balcony. Follow the balcony to its end and the item will be found on a body sitting in a chair above the ballistae and the Putrid Avatar',
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: '924f09a5-c8eb-4eb5-a96a-1f8e8c8f4419',
    description: 'Get Seedbed Curse (until you get 5) from Elphael, Brace of the Haligtree: From the Prayer Room grace, keep heading forwards, going down every staircase you come across. Drop down and head towards the room with two Cleanrot Knights inside but instead of entering, jump over the railing to the right and drop down one level. Turn around, enter the dark room right under the railing and you will find it on a body that is sitting in a chair',
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: 'a23fc98b-86a6-476b-8437-f27cd7cfcc1c',
    description: 'Give all 5 Seedbed Curses to Dung Eater and get the Mending Rune of the Fell Curse, then reload the area to find the Omen Set',
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: 'fe060cba-bcbd-4b3d-bcaf-81e9a0ad07d8',
    description: 'In a graveyard in Elphael, Brace of the Haligtree. From the Haligtree Roots Grace, go back up the elevator, go straight to exit the church and then take a left down the slope filled with Lesser Kindred of Rot. The item will be next to a grave surrounded by more enemies',
    tags: [GHOST_GLOVEWORT_BELL]
  },
  {
    id: '92cba555-80a2-4c16-9a68-57f3d45edf71',
    description: 'Defeat the Lesser Ulcerated Tree Spirit in Elphael. To reach the mini-boss, go to the Drainage Channel site of grace, go west through the doorway, climb up the ladder at the end of the corridor, and go out the doorway on your right at the top. The mini-boss is at the landmass across the gap to the left. To reach it, go up the slope on the right and walk across the tree branch, heading southwest across the gap. You can cheese the mini-boss with ranged attacks from the top of the nearby trunk',
    tags: [MILLICENT_QUESTLINE, GOLDEN_SEED]
  },
  {
    id: '3804c9ae-0a46-4c21-858c-7da2bfcbb9c7',
    description: 'Find the two summon signs near where the Lesser Ulcerated Tree Spirit was, one to help Millicent and the other to fight her',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '73c3f472-74b8-4768-9f5e-855580326d49',
    description: "Choose one: A) Help Millicent to get the Rotten Winged Sword Insignia, B) Fight Millicent to get the Millicent's Prosthesis. If you fight Millicent, you get locked out of a Somber Ancient Dragon Smithing Stone and the Unalloyed Gold Needle",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'b8381c1f-d842-46e7-9fbc-5dfe104a2176',
    description: 'If you helped Millicent, find her near where her summoning sign was, exhaust her dialogue and reload the area. Grab the Unalloyed Gold Needle',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '0d3d7ba1-a092-40fd-80dd-980bca710bdf',
    description: "Return to Gowry in Gowry's Shack. If he is alive, talk to him and kill him to get the Flock's Canvas Talisman and Gowry's Bell Bearing (might need to defeat Malenia before, I'm not sure)",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'eac54d1d-5cee-4cf3-b6c8-f759d7301519',
    description: `Dragoncrest Greatshield Talisman: Found in a chest near the Drainage Channel Site of Grace. To reach it, start from the Drainage Channel grace, go over the tree branches, reach the rooftop and jump down to the platform with the chest, guarded by some pests.`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: '81fc1668-21af-4a10-acfb-34ed93c8a115',
    description: "Defeat Malenia, Blade of Miquella. She is strong vs holy, poison and scarlet rot, and weak vs fire, bleed and frost. To avoid Waterfowl Dance, stay at a distance. When she goes into the air, throw a frost pot at her to disrupt the attack. Otherwise, run away, after the second slash, stop running and roll toward her. There are other ways to avoid this attack (particularly if you're close to her) like Bloodhound Step ash of war or Vow of the Indomitable. To avoid Scarlet Aeonia, if she is not very far, the easiest way is to lock off, run toward her and past her, and then run to one side so she does not have enough time to turn around and misses you. For Phantom Spirits, roll backwards twice, then roll forward twice, then roll to the left twice, following the timing of the attacks.",
    tags: [OPTIONAL, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: 'af05491b-d9d0-4fcc-a72b-b34b054e8f47',
    description: "If you have the Unalloyed Gold Needle, it can be used at the flower in Malenia's arena, after defeating her, in order to receive Miquella's Needle, as well as a Somber Ancient Dragon Smithing Stone",
    tags: [MILLICENT_QUESTLINE]
  },
  // FARUM AZULA 120-150 +25
  {
    id: 'fe1b4d05-4399-4a9f-9790-af424afba182',
    description: 'Kill dragon in curved platform at the beginning of Farum Azula to get an Ancient Dragon Smithing Stone',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '6f0b9178-98ff-4ba2-bfd5-fe706e97fd7f',
    description: 'Found on corpse next to Tempest-Facing Balcony Site of Grace located in Crumbling Farum Azula',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: 'b351dd0f-b22f-421d-9642-76b83cdea1c7',
    description: 'In the middle of a lake in Crumbling Farum Azula. From the Crumbling Beast Grave Depths Grace, go the big church to the northwest and exit outside to the southwest. Take the elevator going down and you should see a lake in the distance to your left. The Item is in a gazebo in front of the lake',
    tags: [GLOVEWORT_BELL]
  },
  {
    id: '24a9bc62-996a-4efe-9cfd-f37760e1e658',
    description: 'Beat Godskin Duo. Summoning Knight Bernahl, if available, makes this fight relatively easy. Otherwise, Sleep Pots are extremely effective. They are strong vs strike, fire and holy, and weak to slash, sleep and bleed.',
    tags: [NGPLUS]
  },
  {
    id: 'ba96e3f5-654c-4467-b259-1af9c7667be6',
    description: 'Obtained from defeating The Godskin Duo in Crumbling Farum Azula',
    tags: [SMITHING_STONE_BELL]
  },
  {
    id: "53abd97f-5270-4c16-8bc7-d66a1ef0c495",
    description:
      "Under the Golden Tree on a roof near the Dragon Temple grace, accessed by an Imp Seal barrier. The tree is guarded by several skeletal beastmen. Crumbling Farum Azula",
    tags: [GOLDEN_SEED],
  },
  {
    id: 'b6a6c4ba-a0b7-4e7f-b0fe-9b0c93c765b1',
    description: "Find Alexander in Farum Azula and beat him in a duel. He will reward you with with Alexander's Innards and Shard of Alexander. To reach him: from the Dragon Temple Lift grace (can be accessed by using two Stonesword Keys), go past the plaza full of undead up the flight of stairs, turn right and you'll see two square bracket shaped archways. Jump on the archway on the left (closest to the sleeping dragon) to get over to the other side. Alexander can be found directly on the flat arena after crossing the crumbling tower",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: 'f6d85cdf-3cb9-49d3-9912-5116e4ecf771',
    description: 'From Dragon Temple Altar grace, exit to the left looking at the nearest wall. Progress down the debris to a narrow path laden with dragon statues. At the end of the path there is a spiral staircase on the right. Head up these stairs and then find a floating pillar adjoining the aforementioned floating platform. Use the pillar to get up to the platform and collect an Ancient Dragon Smithing Stone. <a href="https://youtu.be/SM11swgGzw0?t=1921" target="_blank">Video location</a>',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '6b0328ea-74c9-4042-ae2a-4b6531053420',
    description: 'From Godskin Duo grace go through the left gate (looking at the closest wall, in the left side) and progress until reaching an area where you have to parkour down some floating platforms. Go straight through the path. In the area with the Crucible Knight, stick to the right side and jump to the grace.',
    tags: [NGPLUS]
  },
  {
    id: "84362bd2-0996-43ee-b90a-670cdd25cc9a",
    description:
      "Golden Seed found after defeating a Farum dragon guarding the entrance to the greatbridge. It is located in some nearby ruins where Stormhawks have gathered. Reachable from the Dragon Temple Rooftop grace. Crumbling Farum Azula",
    tags: [GOLDEN_SEED],
  },
  {
    id: '01a2faf5-a555-4d89-8ddb-cb4e89463367',
    description: 'Get Somber Ancient Dragon Smithing Stone from a gazebo behind the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace',
    tags: [NGPLUS]
  },
  {
    id: '9cde9e8c-7a17-480b-8278-7e7feb1304fd',
    description: 'By this point your somber weapon can be fully upgraded',
    tags: []
  },
  {
    id: 'df4104e5-dc8d-4a41-bcb0-41f9706fc83e',
    description: 'Found on a body in the abandoned temple on the North side of Crumbling Farum Azula. Next to an alter at the bottom of the elevator next to Beside the Great Bridge Site of Grace',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: '9d441ec1-1981-4333-8433-8f0391e3873c',
    description: "Beat Dragonlord Placidusax. It is weak to pierce and strong vs everything else. Since it is large, spells such as Pest Threads, Ancient Dragons' Lightning Strike and Shard Spiral, and skills such as Black Flame Tornade, are very effective.",
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '2a519808-24ee-41e7-9db9-c04ee98dfa2d',
    description: 'Expore Leyndell Royal Capital and grab any missing items you might need for your current or NG+ build BEFORE defeating Maliketh, as you will lose access to that area',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '3ecc4f11-04c3-4484-a541-88be26e8030a',
    description: "Devourer's Scepter: Held by Recusant Bernahl. Defeat him in Farum Azula. You have to kill Rykard first for this invasion to happen. To reach him start from the Beside the Great Bridge grace, go up the bridge and head north",
    tags: [LEGENDARY_WEAPONS_ACH]
  },
  {
    id: '416eae3a-a907-4cd9-9817-7555fbc2ee62',
    description: `Old Lord's Talisman: Found in a chest in Crumbling Farum Azula. Start from the Beside the Great Bridge grace, go up the bridge and head north. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=169443" target="_blank">Location</a>`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: '4b29d14f-ec7a-4729-a457-5af706963d61',
    description: 'Defeat Maliketh, The Black Blade. He is strong vs holy and sleep, and weak vs standard, slash, strike and pierce. The item Blasphemous Claw  lets you do a special kind of parry on Maliketh, on two of his attacks: Black Blade attack (indicated by white aura around sword) and vertical double-spin attack. Blasphemous Claw is dropped by Recusant Bernahl upon defeat at Crumbling Farum Azula',
    tags: [NGPLUS]
  },
  {
    id: 'e8009e5d-0964-416b-bf30-f2f9a6b0ba38',
    description: "Talk to Goldmask near the base of the giant spiral spear, in Leyndell, Ashen Capital, to get the Mending Rune of Perfect Order. Reload the game to find the Goldmask's Set ",
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '58bb2ab4-ea8f-45f6-9422-3d3052a32dc3',
    description: "Talk to Corhyn near the base of the giant spiral spear, exhaust his dialogue and reload the area to get a Flail, Corhyn's Bell Bearing, and Corhyn's Robe. If Corhyn is not there, he might be in his previous location in Mountaintops of the Giants",
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: 'd08950f3-2199-484d-8272-a30804e38ee9',
    description: 'Explore the Subterranean Shunning-grounds optional area under Leyndell, if you didn\'t do it yet',
    tags: [OPTIONAL, NGPLUS]
  },
  // LEYNDELL, CAPITAL OF ASH 120-180 +25
  {
    id: '1c22320a-2e83-422d-bf81-50dfdacf9867',
    description: `Erdtree's Favor +2: Found on a dead tree surrounded by Ulcerated Tree Spirits in Leyndell, Ashen Capital. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=168184" target="_blank">Location</a>`,
    tags: [LEGENDARY_TALISMANS]
  },
  {
    id: '065851a5-2baf-4466-8c3c-1125d38d09f4',
    description: 'Beat Sir Gideon Ofnir, The All-Knowing. He is strong vs magic and weak vs strike, pierce, lightning, sleep and madness',
    tags: [NGPLUS]
  },
  {
    id: '48d7b453-e4da-4266-a59c-44836c771598',
    description: 'Beat Godfrey, First Elden Lord and Hoarah Loux, Warrior. He is strong vs holy and sleep, and weak vs pierce and lightning (phase 1) and slash (phase 2)',
    tags: [NGPLUS]
  },
  {
    id: '80046f4a-f025-428e-9381-b08df9088402',
    description: 'Beat Radagon of the Golden Order and Elden Beast. Radagon is strong vs holy, immune to bleed, and weak vs strike and fire. Elden Beast is strong vs holy, immune to status effects, and weak to physical damage. You can summon Torrent for the fight against Elden Beast',
    tags: [NGPLUS]
  },
  {
    id: "073f039e-4bf9-4ec5-8cbb-029c1978a72b",
    description: "Touch Marika's corpse to get the Age of Fracture ending",
    tags: [NGPLUS]
  },
  {
    id: "f2cfa6be-dde8-467e-a7cf-f86814b8f6d7",
    description: "Interact with the blue summon sign near Marika's remains for the \"Age of the Stars\" ending",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: 'd6ae84b7-734b-4f9d-9d12-fba3a1a2b2fd',
    description: 'Use the Mending Rune of Perfect Order to get the Age of Order ending',
    tags: [CORHYN_QUESTLINE]
  },
  {
    id: '68cafc87-0e90-4f00-a806-9643a6254da5',
    description: 'Use the Mending Rune of the Fell Curse to get the Blessing of Despair Ending',
    tags: [DUNG_EATER_QUESTLINE]
  },
  {
    id: '5c6c6f71-1f5d-40be-9349-6c7494847ebd',
    description: "Use the Mending Rune of the Death-Prince to get the Age of the Duskborn ending",
    tags: [FIA_QUESTLINE]
  },
  {
    id: '7c524889-f8a9-40bd-83ed-cec150a09764',
    description: 'Interact with Marika\'s corpse to become the Lord of Frenzied Flame.',
    tags: [HYETTA_QUESTLINE]
  },
  // BEFORE NG+
  {
    id: '0999f583-8d54-4696-87cf-792249b6177a',
    description: "Before NG+, grab any remaining Ancient Dragon Smithing Stones that you might have missed",
    tags: [OPTIONAL, NGPLUS],
    items: [
      {
        id: 'acf9e786-ce5a-47b6-addd-510ecc7a2ea1',
        description: "Obtained as a reward for completing Nepheli Loux's questline in Godrick's Throneroom",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '508d9a63-1bfe-4883-b774-2a0e9052a1c4',
        description: "One can be purchased for 20,000 Runes from Gatekeeper Gostoc if he is alive as a merchant in Godrick's Throneroom after Nepheli's questline",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '8849e0e2-9c77-4bc8-804d-eebcde630aa5',
        description: 'Obtained as a reward for siding with Witch-Hunter Jerren during the Sorceress Sellen questline.',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '7486d68c-dc53-4bd5-a208-7dd8c7f97652',
        description: 'Given by Gurranq, Beast Clergyman after feeding him 9 Deathroot. (Alternatively, you can kill Gurranq to get the Ancient Dragon Smithing Stone without the 9 Deathroot.)',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '7c510998-cb9f-4a89-a3f4-1be7189a672e',
        description: 'Found in Mountaintops of the Giants. On a corpse inside the mouth of a big skull south-east of Church of Repose. Once you spawn in, turn to the south-east and you will see a large skull.',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '30325d33-b5d4-48bf-8faf-76fd764108cb',
        description: "Dropped along with the Night's Cavalry Set, by killing the two mini-boss Night's Cavalry guarding a caravan at night, in Consecrated Snowfield, nearby Inner Consecrated Snowfield grace",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '2acc2df0-4d5c-46e7-a1b5-b7e1f565fe2c',
        description: 'Looted from within Yelough Anix Tunnel, in the west of the Consecrated Snowfield, near the Yelough Anix Ruins. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=4491&lat=-77.59375&lng=133.02805&code=mapA" target="_blank">Location</a>',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '5878151d-9afb-4464-b519-713400eb211d',
        description: 'On a corpse in the frozen waterfall just above Great Wyrm Theodorix. From Cave of the Forlorn site of grace, go outside, turn left and hug the right side then jump up the ledges to get to the other side (from Inner Consecrated Snowfield grace follow the frozen river east)',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'fe1b4d05-4399-4a9f-9790-af424afba182',
        description: 'Dropped by the Farum Azula Dragon that swoops in to attack as you make your way along the curved platform directly after the Crumbling Beast Grave grace',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '658a2bdc-310b-4fd1-a250-1954ddea947f',
        description: 'From Dragon Temple Altar grace, exit to the left looking at the nearest wall. Progress down the debris to a narrow path laden with dragon statues. At the end of the path there is a spiral staircase on the right. Head up these stairs and then find a floating pillar adjoining the aforementioned floating platform. Use the pillar to get up to the platform and collect an Ancient Dragon Smithing Stone. <a href="https://youtu.be/SM11swgGzw0?t=1921" target="_blank">Video location</a>',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'eaf93063-9f0f-4b3d-b2ea-c38e272d14c4',
        description: 'Dropped by the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace. The dragon is constantly raining red lightning around the area',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'd64739ab-d1af-4f9a-a5e5-d83c55064ef4',
        description: "Can be looted on a corpse below a hugging statue in Miquella's Haligtree, in a round platform with two Misbegottens and one Leonine Misbegotten, right before reaching Haligtree Town Plaza grace",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '559ca9da-af44-4b10-9a1b-600e2bcad198',
        description: "After Loretta's grace, going down the stairs and then to the top of the round staircase, inside a chest",
        tags: [OPTIONAL, NGPLUS]
      }
    ]
  },
  {
    id: '7a92c920-3d9d-4b72-a98d-dea9e8b191db',
    description: "Before NG+, grab any remaining Somber Ancient Dragon Smithing Stones that you might have missed",
    tags: [OPTIONAL, NGPLUS],
    items: [
      {
        id: '6081caa3-6d2b-4b95-b20c-88daae796559',
        description: "Consecrated Snowfield: Received from completing Latenna's questline upon delivering her to Apostate Derelict",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '7a41fc78-27bb-4474-b3f3-755ab0dd38d2',
        description: 'Consecrated Snowfield: Dropped by Anastasia, Tarnished-Eater after her third invasion, on the frozen river southwest of Ordina, Liturgical Town',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '082303ca-0c35-430a-ba02-87bfd6c6b772',
        description: 'Mohgwyn Palace: Found in a chest at the feet of the massive statue by the Dynasty Mausoleum Midpoint',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'f8eec561-b286-4873-94dc-2cd6f42efc49',
        description: 'Elphael, Brace of the Haligtree: Found in a chest hidden between columns near a roof with a corpse carrying an item, after the Prayer Room site of grace in the Haligtree. To reach it, go to the end of the first walkway and jump down to the gazebo with the red scarab, then run up the diagonal support on the other side.  The chest is in a small room',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'f2a0d3a8-7d42-49e3-9953-c2abc01f5ad5',
        description: 'Elphael, Brace of the Haligtree: Found on a corpse in the southern end of the ring walkway in the east, near the patrolling Putrid Avatar. To reach this walkway, head out of the Prayer Room site of grace and jump onto the second concrete beam connecting to a tower. Jump from the tower down to the Putrid Avatar and proceed south to the end of the walkway',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'af05491b-d9d0-4fcc-a72b-b34b054e8f47',
        description: "After completing the Millicent questline and defeating Malenia, it can be obtained by inserting the gold needle into Malenia's scarlet flower that appears in Malenia's boss room",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'e1dee2c7-6ae2-4d67-897a-fc48a0a57d9d',
        description: "From the main Leyndell, Ashen Capital site of grace (reachable after defeating Maliketh), go west, along and up the dragon. Enter the building past it (the same one that you needed to enter to get up to the Erdtree before it was burnt) and climb the ladder. Over the railing to the right is a gargoyle next to a corpse with the stone. (Note: This will only be available once you've progressed far enough that the city is filled with ash)",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '01a2faf5-a555-4d89-8ddb-cb4e89463367',
        description: 'Farum Azula: Found in a gazebo behind the stationary dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace',
        tags: [OPTIONAL, NGPLUS]
      }
    ]
  },
  {
    id: '2ef7bb61-b131-4ff5-8603-75feb70077ca',
    description: "Before NG+, grab any remaining Great Grave Gloveworts that you might have missed",
    tags: [OPTIONAL, NGPLUS],
    items: [
      {
        id: 'fd49412b-0c2b-4245-ac80-c6a0f4d450af',
        description: 'Consecrated Snowfield: Two (2) dropped by the boss of Consecrated Snowfield Catacombs, Putrid Grave Warden Duelist (from Inner Consecrated Snowfield grace, go east until reaching the wall and then hug the wall south until finding the entrance)',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '7bed6eb7-480a-462c-8068-c56abb535ebc',
        description: "Mountaintops of the Giants: One found in the Giant-Conquering Hero's Grave: In the large hall with the Troll, drop down from either side of the platform into a room with a Fire Prelate. Defeat it and check the very back of the room for the glovewort. Alternatively, you can reach this room by descending the lift and sending it back up. Pull the lever in the alcove to the right and then enter the small space in the raised lift to descend further down. In the next hall, sprint past the Lesser Burial Watchdog and turn left. Climb the ladder at the end of this path. Giant-Conquering Hero's Grave is right north of the Zamor ruins but you need to traverse Mountaintops of the Giants until almost its end. From the Church of Repose grace, go north west and jump the gap to reach the platform with the entrance to the grave.",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '0118db70-2baa-4a66-ba65-c47ea399fe53',
        description: 'Farum Azula: Found in a recess in the northeastern-most wall of the upper level of the large building next to the Crumbling Beast Grave Depths site of grace. To reach this upper area, head out of the balcony of the room next to the site of grace and jump up onto the red roof right next to it',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '663d2430-d0f0-42fe-b9c6-c523f8edf982',
        description: 'Farum Azula: In the heavily-ruined section in the northwest leading to the Dragon Temple site of grace, there is a pit you can drop down into to reach a narrow hallway below. From here, head into the first archway on the left and up the stairs heading northwest to a ruined balcony where you can navigate across a series of floating debris to reach a second balcony with a ladder. Head up the ladder to reach a hidden tomb with the glovewort sitting on the main sarcophagus in the back',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '40b248a3-a0e0-48d6-9f55-c3dada723295',
        description: 'Elphael, Brace of the Haligtree: Found in the center of the second lake of rot, past a second set of branches within the inner walls. Beware the Ulcerated Tree Spirit lurking beneath',
        tags: [OPTIONAL, NGPLUS]
      }
    ]
  },
  {
    id: '6475aced-655e-4f48-a56e-a2b4df45a5c5',
    description: "Before NG+, grab any remaining Great Ghost Gloveworts that you might have missed",
    tags: [OPTIONAL, NGPLUS],
    items: [
      {
        id: 'fc400bd0-00f0-4e1b-873e-eac45d4528b2',
        description: 'Can be obtained from a chest in a room underneath the massive skeleton and throne at Ainsel River, near the Dragonkin Soldier of Nokstella site of grace. This area is reachable by taking the lift down, located north of the Divine Tower of Liurnia. Dragonkin Soldier of Nokstella is strong vs lightning and frost, and weak to slash',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '6792f457-fabc-4ea0-b4d5-aaa4dcaac3e0',
        description: "Found in a chest under the massive skeleton statue in Night's Sacred Ground, Nokron, after reaching the bottom level of Nokron. You receive this alongside the Fingerslayer Blade. To reach this area you need to defeat Radahn and then go through the crater in Limgrave.",
        tags: [OPTIONAL, NGPLUS]
      },

      {
        id: '91ac06fa-115b-4b67-8084-6e00efaa3dc7',
        description: 'Found in a chest at the back of a narrow room in Nokstella, Eternal City. Starting from Nokstella, Eternal City grace, progress up the stairs to the city, and get inside the building after the first bridge. Beware the Silver Tear disguised as a large iron ball hanging off of the ceiling waiting to ambush you. Nokstella is reachable by progressing Ranni\'s questline or from the coffin in Deeproot Depths',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '5d63cfe4-b671-4d91-9b00-825b03dccd48',
        description: 'Mohgwyn Dynasty Mausoleum: In the cave-like section in between the Dynasty Mausoleum Entrance grace and the Dynasty Mausoleum Midpoint grace, in a lower area guarded by many Rotten Ghouls',
        tags: [OPTIONAL, NGPLUS]
      },
    ]
  },
  {
    id: "48e9bfbf-7187-4fdd-9608-a43db1879fe3",
    description: "If you plan to use a different build into NG+, respec with Rennala and make sure you have the equipment you need before going to New Game +",
    tags: [OPTIONAL, NGPLUS]
  }
]