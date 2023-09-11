import { TAGS, EXTRA_TAGS } from '~/features/tags';

const { ALL_REMEMBERANCES, NEPHELI_QUESTLINE, OPTIONAL, RANNI_QUESTLINE, VARRE_QUESTLINE, SMITHING_STONE_BELL, SOMBER_STONE_BELL, GLOVEWORT_BELL, GHOST_GLOVEWORT_BELL, SELUVIS_QUESTLINE, WHETBLADES, LATENNA_QUESTLINE, ALEXANDER_QUESTLINE, MILLICENT_QUESTLINE, VOLCANO_MANOR_ASSASSINATION, HYETTA_QUESTLINE, DUNG_EATER_QUESTILINE } = TAGS
const { NGPLUS } = EXTRA_TAGS

/**
 * NGPLUS tag is only to indicate what items are shown both in ng and ng+
 * use it when the tags are empty or the only tag is OPTIONAL, if there is any other tag, by default that one will be shown always but only when that filter tag is active
 * The reason this is like that is that all NG+ are already repeated in NG and in the same order so we can reuse both lists
 */

export const items = [
  // WEST LIMGRAVE L1-15 +0-1
  {
    id: '684b6a6d-5025-4839-9615-aea8c9b64b36',
    description: 'Buy crafting kit from Kale',
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
    id: '2ffa52b8-8b74-4111-a975-4da2c97d3c4c',
    description: 'Let Magrit kill you to access Roundtable Hold',
    tags: []
  },
  // EAST LIMGRAVE & MISTWOOD L10-20 +2
  {
    id: 'cd0ca78a-4fb2-4147-9167-f7a56520017e',
    description: 'Get Flask of Wondrous Physick and Sacred Tear from the Third Church of Marika',
    tags: []
  },
  {
    id: "0a31a7cb-b53f-4bc7-9387-d298da1d9bf8",
    description: "Decide how you want to reach Altus Plateau later in the game: A) With the two halves of the Dectus medallion, B) Through the Ruin-Strewn Precipice, accessible going north past the Bellum church, north of the path toward the Dectus Lift, C) By letting the Abductor Virgin at the bottom of Raya Lucaria telport you to Volcano Manor, and defeating the Abductor Virgin duo. (option A is the easiest one, option C is possibly the fastest one)",
    tags: [NGPLUS]
  },
  {
    id: 'd9792932-bdf7-4d3f-8011-d2c2c45acbc9',
    description: 'Get the Dectus Medallion (Left) from Fort Haight (recommended to kill Godrick Knight at the top level to get Bloody slash ash of war)',
    tags: [NGPLUS],
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
    id: '384fc0f5-c356-4d8a-a31e-351494896d8a',
    description: 'Find Alexander in Northern Stormhill, West to the river and North of the Agheel Lake North Site of Grace. Him a few times on the back with any weapon until you free him. He will reward you with some items',
    tags: [ALEXANDER_QUESTLINE]
  },
  // WEEPING PENINSULA L20-30 +3
  {
    id: '0b151bb2-2176-4a5a-a68d-effc8018e4cc',
    description: 'Talk to Irina south of the Bridge of Sacrifice grace (Weeping Peninsula)',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '63ce03c8-ce26-4dcb-a37e-07ab46bd08f4',
    description: 'In Weeping peninsula, get the Sacred tears from all 3 churches (Callu Baptismal Church, Church of Pilgrimage, Fourth Church of Marika)',
    tags: [OPTIONAL]
  },
  {
    id: '2a0af444-beab-45a0-9400-560c9114a9bc',
    description: "If you don't plan to get Mimic Tear, you can get Lhutel the Headless spirit summon from Tombsward Catacombs south of Weeping Peninsula Erdtree avatar (requires 104 FP)",
    tags: [OPTIONAL]
  },
  {
    id: '8a19443f-919d-4ba9-891f-b88ad22ae163',
    description: "Give Irina's letter to Edgar in Castle Morne (Weeping Peninsula)",
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '1e158447-b964-481d-a85f-ced438fb45a5',
    description: 'Defeat Leonine Misbegotten, the boss of Castle Morne (Weeping Peninsula)',
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
  // CAELID EARLY
  {
    id: '1a279fba-f36b-4524-98f9-b4957e7bbbaa',
    description: 'Dectus Medallion (Right) from Fort Faroth in Dragonbarrow (Caelid). Easiest way to reach there is from waygate portal behind Third Church of Marika and going south from Bestial Sanctum, or you can just ride all the way there from Limgrave',
    tags: [NGPLUS]
  },
  {
    id: '3ebfbeb9-f5f8-42fc-957b-2a83ecf15d88',
    description: 'Get 50,000 runes from killing the sleeping dragon Greyoll in Dragonbarrow with bleed (Reduvia, Uchigatana or Bloody slash ash of war)',
    tags: [OPTIONAL]
  },
  {
    id: 'c2032110-34a5-4c0d-b8b7-74ab6de2f77d',
    description: 'By this point, your weapon can be upgraded to +3-4 (1-2)',
    tags: []
  },

  // STORMVEIL CASTLE L30-40 +3-4
  {
    id: '7aba047b-6da2-46ab-9f3a-0c5acf36e752',
    description: 'Beat Magrit',
    tags: [NGPLUS]
  },
  {
    id: 'd8af39dd-4f24-4cfb-863d-cadb55a57cf0',
    description: 'Iron Whetblade (Heavy, Keen, and Quality). Stormveil Castle Can be looted off a corpse found in the armory room, through the north-western door in the hall with the Grafted Scion. You will need to use the Stonesword Key on the imp statue to dispel fog gate blocking the doorway',
    tags: [WHETBLADES]
  },
  {
    id: '44674406-7a68-4cd5-af01-d2b7713d363b',
    description: 'Talk to Nepheli in the north room of Stormveil Castle courtyard',
    tags: [NEPHELI_QUESTLINE]
  },
  {
    id: 'b9690395-5806-49d1-85fb-89411478266b',
    description: 'Beat Godrick in Stormhill Castle',
    tags: [NGPLUS]
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
  // LIURNIA SOUTH L40-50 +3-4
  {
    id: 'a8b99a0d-6dab-4328-8ef6-9aa1f0c85b8c',
    description: 'Buy lantern from Nomadic Merchant in Liurnia of the Lakes in Liurnia Lake Shore grace',
    tags: []
  },
  {
    id: '37e42814-4ccc-4113-9104-48f2c3d92be2',
    description: 'Get the South Raya Lucaria Gate site of grace in south side of Raya Lucaria',
    tags: [NGPLUS]
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
    description: 'Find Hyetta north of the Gate Town Bridge, easter Liurnia of the Lakes (in front of the southern broken bridge in the east side of the lake, above the cliffs) and give her a Shabriri Grape. Exhaust her dialogue. Reload the area, and exhaust her dialogue again',
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
    description: 'Defeat the Grafted Scion',
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
  // RAYA LUCARIA L50-60 +4-6
  {
    id: '054a08f7-70ba-4ede-a188-b3a286808cb5',
    description: 'Enter Raya Lucaria and beat Wolf of Radagon',
    tags: [NGPLUS]
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
    description: "Beat Rennala (or if you beat Radahn or Rykard you don't need to beat Rennala)",
    tags: [NGPLUS]
  },
  // LIURNIA EAST 50-60 +4-6
  {
    id: '958046df-4b2e-41dd-9692-d6e74f5d4d1b',
    description: 'Dropped by the Crystalian Boss at the end of Raya Lucaria Crystal Tunnel (northeastern Liurnia, east from the walking mausoleum in the lake)',
    tags: [SMITHING_STONE_BELL]
  },
  // AINSEL RIVER L50-60 +4-6
  // LIURNIA WEST, CARIA MANOR L50-60 +4-6
  {
    id: 'ebb627a5-1cb1-496f-8339-6da8d51587b6',
    description: 'Beat Loretta in Caria Manor',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '983e4f51-15f7-4b5a-a927-5eee5c12f5c1',
    description: 'Talk to Ranni, then her servants, then Ranni again. If you don\'t find Ranni, it\'s possible that you have started the Radahn festival, so you will have to kill Radahn before progressing',
    tags: [RANNI_QUESTLINE]
  },
  {
    id: 'b7931f96-7e09-40bb-87dc-468c1c01ccbb',
    description: "Talk to Seluvis in Seluvis's Rise to get Seluvis's Potion (beware that giving this item to certain NPCs can lock you out of their quests)",
    tags: [SELUVIS_QUESTLINE]
  },
  // SIOFRA 50-60 +8-12
  {
    id: '2d87bde3-61d2-4991-896f-d53d17123d86',
    description: 'Beat Ancestor Spirit in Siofra river, which you can access through the Siofra Well in Mistwood',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '8d9fb6dd-c390-42ff-ae5e-24df91cdda04',
    description: 'Red-Hot Whetblade (Fire and Flame Art). Redmane Castle (south Caelid) From the Chamber Outside The Plaza site of grace, head out the south-side door, west past the flamethrower enemies, and then to the door past the Abductor Virgin and hanging bodies. Note: if you reach Altus before this step, you will need to defeat Radahn to access the rest of Redmane Castle',
    tags: [WHETBLADES]
  },
  {
    id: '7353be03-4279-4710-a59a-bfc3290b1b80',
    description: 'Kill Festering Fingerprint Vyke near the Church of Inhibition (the pathway south from Dectus Lift in the Liurnia side) as he drops a Fingerprint Grape',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '143197cd-8e4b-4934-ba17-4e35eb28214d',
    description: 'Find Hyetta in Bellum Church in Liurnia of the Lakes (the path toward the Dectus Lift from the East Raya Lucaria Gate grace, hugging the left side) and give her the Fingerprint Grape',
    tags: [HYETTA_QUESTLINE]
  },
  // ACCESS ALTUS
  {
    id: '124edfc5-0bb8-49fd-b3ba-030bd037a279',
    description: 'Reach Altus Plateau in one of 3 ways: A) From the Main Academy Gate site of grace, cross the sealed gate to reach the other side of the bridge, then head straight to the Grand Lift of Dectus and use the Dectus Medallion to reach Altus Plateau, B) Through the Ruin-Strewn Precipice, accessible going north past the Bellum church, north of the path toward the Dectus Lift, C) By letting the Abductor Virgin at the bottom of Raya Lucaria telport you to Volcano Manor',
    tags: [NGPLUS]
  },
  {
    id: 'bd19aee2-3a7b-419e-9950-c5d2462483d8',
    description: 'Rest in any site of grace in Altus',
    tags: [NGPLUS]
  },

  {
    id: 'f1e13540-ebde-451c-928a-252aac611f41',
    description: "It should be possible to progress Fia's quest now, but Fia's quest can be also skipped as she will be in Deeproot Depths regardless after you burn the Erdtree later",
    tags: [OPTIONAL, NGPLUS]
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
    id: '28473d9d-19f7-468f-b25f-5739ec5511ec',
    description: 'Defeat Crystalian Spear and Ringblade boss in Altus Tunnel, directly south from the Minor Erdtree in Altus Plateau',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: '0852f8c6-a18d-418c-a4ce-76fa413d7194',
    description: 'In a chest at the first secret area inside the Sealed Tunnel (Down at south of the lake right next to the west gate to Leyndell Royal Capital from the outside, Altus Plateau)',
    tags: [SMITHING_STONE_BELL]
  },
  // CAELID, RADAHN 60-70 +10-14
  {
    id: 'ee0a544b-eeca-4add-b94f-59fbd9505236',
    description: "Alexander's next location is in Gael Tunnel, found from the rear entrance that borders Limgrave and Caelid. You can skip this step as it is not necessary",
    tags: [ALEXANDER_QUESTLINE]
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
    description: "Defeat Commander O'Neil, located in the Swamp of Aeonia (central Caelid). He will drop the Unalloyed Gold Needle. You can cheese O'Neil by sneaking behind him and repeatedly casting Posion Mist",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '57743956-81fa-4eaa-b062-9577779f31ce',
    description: 'Give the Unalloyed Gold Needle to Gowry, reload the game and get the repaired needle from him',
    tags: [MILLICENT_QUESTLINE]
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
    description: 'Radahn Festival should be active now, and you can beat Radahn',
    tags: [OPTIONAL, RANNI_QUESTLINE, ALEXANDER_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '214e0b27-c6c2-41a8-8acf-cba7f5ab0b6b',
    description: 'Find Alexander next to the Radahn grace and talk to him',
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '710569d9-691d-4a88-8e02-63fc3c559370',
    description: "Follow the path south from the Artist's Shack Site of Grace. Alexander will call out for help. Use an Oil Pot or Roped Oil Pot to free him (this step can be skipped by going to Mt. Gelmir after the Radahn festival)",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '609c347c-c2b5-488b-80e5-1db0d9417a41',
    description: 'If you beat Radahn, you can now access Nokron',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // NOKRON CITY AND AQUEDUCT 70-80 +10-14
  {
    id: '4630abf5-f6ce-4f48-a82a-091c04117844',
    description: 'On a corpse lying at the base of a gazebo near the Nokron, Eternal City grace',
    tags: [GHOST_GLOVEWORT_BELL]
  },
  {
    id: "40a23af2-c9a0-405b-bbf2-3ffbd67bda6f",
    description: "get the Mimic Tear spirit summon from Nokron",
    tags: [OPTIONAL]
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
    description: 'Beat Regal Ancestor Spirit in Siofra river, the part reachable after beating Mimic Tear (Nokron)',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '03c2239f-0006-40d2-ac76-4fa27340b5a7',
    description: 'Beat Valiant Gargoyles in Siofra Aqueduct, and access Deeproot Depths through the coffin in their arena',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // DEEPROOT DEPTHS 80-90 +15-20
  // LAKE OF ROT 80-100 +15-20

  // MT GELMIR 80-100 +15-20
  {
    id: 'b9da8bb8-6125-41bc-bb4c-6143ffdd2a59',
    description: 'Talk to Alexander near the Seethewater Terminus Site of Grace at a lava lake behind a Magma Wyrm, south of Fort Laiedd in Mt. Gelmir. To reach Seethewater Terminus Grace, head north through the ravine west of Wyndham Ruins',
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '35ea6a80-fe78-419d-b817-002882705950',
    description: 'You can reach Mt. Gelmir and Volcano Manor by going north east from Altus Plateau site of grace until FOREST-SPANNING GREATBRIDGE grace, crossing the bridge with the magic portal, then heading south west through the only path available',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '4eebbb14-632b-4c83-9251-65998c861e3f',
    description: "Speak with Tanith in the manor's lobby and get the Drawing-Room Key",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'eb8f700c-f37c-48f3-abcc-6956c50d3ce1',
    description: 'Upstairs from Tanith, Defeat Inquisitor Ghiza',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'b049db63-dee0-4a43-8c28-f116b0134880',
    description: 'Collect the Recusant Finger and Letter from Volcano Manor from the nearby room with Rya and Bernahl',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '2eef1716-8768-475d-ab54-e45eea352c8e',
    description: "Defeat Old Knight Istvan using the summon sign north from the Warmaster's Shack (Limgrave). There's a red sign on your map.",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '778461c2-d725-4a4b-9598-cfd4406928fa',
    description: 'Report back to Tanith and receive Magma Shot Sorcery',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'a10d43ab-da7b-4898-9b11-509d3fd02ea9',
    description: "Speak with NPC Patches at the entrance of Volcano Manor (it's possible that you have to meet him first at Murkwater Cave for him to show up at Volcano Manor, the wiki is not clear about that)",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '77738365-a822-4500-85e2-14af16746280',
    description: "Invade and defeat Great Horned Tragoth at Ruin-Strewn Precipice Overlook inside Magma Wyrm Makar's boss room after resting at the grace inside the boss room",
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '3a21455b-efd1-4b48-8bc9-3c435ddd4dff',
    description: 'Collect the next Letter from the room nearby Tanith',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '95d2715c-35c8-4468-b939-925ad6c8416b',
    description: 'Defeat Rileigh using the summon sign midway through the path south of Shaded Castle (Altus)',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'b30a881e-6c3b-4c28-84c6-88f942f4686d',
    description: 'Report back to Tanith for the Serpentbone Blade reward',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '2beaab01-b227-4b7a-abf7-1ff6861ea4b0',
    description: "Get Sentry's torch from merchant in Hermit Merchant's Shack, northeast of the Outer Wall Battleground site of grace (Altus), useful if you want to reach Malenia (buy it from the merchant before killing him)",
    tags: [OPTIONAL, ALL_REMEMBERANCES]
  },
  // ALTUS 60-80 +10-14
  {
    id: '3e908ded-2825-48c2-b96b-93068276438d',
    description: 'Reach the Shaded Castle, heading north through the valley between the Mt. Gelmir and Altus Plateau regions, heading north from the Altus Tunnel to find your way to the Castle',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '622dccd0-0982-401e-9ab3-58122db1e93a',
    description: "Retrieve the Valkyrie's Prosthesis from the Shaded Castle, in a chest in a room guarded by a single Cleanrot Knight, on the northwestern edge of the castle",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '1e9eeb4a-6634-4a97-988c-08338bd47e4a',
    description: "Find Millicent just north-northeast of the Erdtree-Gazing Hill site of grace in Altus Plateau and give her the Valkyrie's Prosthesis",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '5e0dd977-dfcc-4a9f-8604-b6d7b303a6b2',
    description: 'Go to Dominula, Windmill Village (East of the "Road of Iniquity Side Path" Site of Grace. Follow the main path southeast, then bend east), and defeat the Godskin Apostle. You can summon Millicent for this battle',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '85ae981b-9770-4262-848d-abc3ab1caa3b',
    description: 'Rest at the Windmill Heights site of grace, and find Millicent and exhaust her dialoge',
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'c399c03e-adbf-4d14-b993-d207677089a8',
    description: 'Beat Draconic Tree Sentinel to access Leyndell',
    tags: [NGPLUS]
  },
  // LEYNDELL 90-110 +15-20
  {
    id: '554ccd9a-9b26-40d9-b6b9-d2d12bf7ac2c',
    description: 'Talk to Dung Eater in Roundtable Hold (after reaching Leyndell)',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '7a68718f-b0e7-4006-b8b9-16d40e64d39e',
    description: 'Sanctified Whetblade (Lightning and Sacred). Fortified Manor, Leyndell From the West Capital Rampart site of grace, head to the south-west side of the manor and enter from the roof near the Erdtree root. Once inside, it can found on a corpse laying next to an anvil',
    tags: [WHETBLADES]
  },
  {
    id: '0542d506-1888-4aaa-a2a5-5d890913ad6f',
    description: "Get one Seedbed Curse from Leyndell Royal Capital: After you exit the room with East Capital Rampart grace, continue south past the Oracle Envoys and into the building. Inside, head down the stairs and face west to take the elevator. After the elevator continue west into the next building. Climb up the ladder to your right and go up the stairs. On the highest floor you will find the Seedbed Curse on a corpse sitting in a chair",
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '465c8c07-c1dc-4ca1-ab9f-b4ce1254bb9c',
    description: 'Talk to Dung Eater with one Seedbed Curse in your inventory, to get the Sewer-Gaol Key',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '2f7c8f64-dd73-4414-8c00-31b88c7335e7',
    description: 'Reach the Underground Roadside grace in Leyndell underground sewer',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: 'f1446309-6a7c-4f93-b9e7-346d9f509dbc',
    description: 'From the Underground Roadside grace, find Dung Eater: take a left from the grace, jump down the open grate, run northwest past the rats and the giant poison plants, go up the ladder and use the key on the locked door (be wary of the giant hand)',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: 'dcae831e-4f7a-4d02-95d1-4df23f50b7c7',
    description: 'Talk to Dung Eater in the sewer and tell him to leave his cell',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '8fa43f43-bd91-4ec3-a106-e9f4f40904b0',
    description: 'Find a message in place of Dung Eater in Roundtable Hold',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: 'ac59b169-2f2e-44c4-97b5-aefe39638a50',
    description: 'Go to the outer moat (from Outer Wall Battleground grace, same path to the Draconic Tree Sentinel but hugging the right side down the moat) and defeat Dung Eater to get the Sword of Milos',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '5f55ac6e-6810-4799-a1cf-298b9b973a0b',
    description: 'Talk to Dung Eater in Roundtable Hold',
    tags: [DUNG_EATER_QUESTILINE]
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
    description: 'Talk to Seluvis and ask him about his chambers to receive a free Spirit Ashes from him (you might need to reload the area and talk to Seluvis several times)',
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
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '588cc80e-1d8e-4853-85bf-7ade0c31fdff',
    description: 'Talk to Ranni again and give her the Fingerslayer Blade to receive Carian Inverted Statue. Gving the Fingerslayer Blade to Ranni will turn Seluvis into a puppet, so if you want to do Seluvis quest, you must do it before this point.',
    tags: [RANNI_QUESTLINE]
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
    id: '3ccc2aba-7d0a-486e-ba62-8cbeae20f7cf',
    description: 'In a chest guarded by several Silver Tears with shields in the corner of a small room near the Nokstella, Eternal City grace',
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
    id: '76b7e4a0-77f3-4f48-a55e-ba59bce9cb2d',
    description: 'Defeat Astel, Naturalborn of the Void',
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
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '8a776cf3-1d98-41c8-bf25-629fd277e248',
    description: "Get Seedbed Curse (until you get 5) from Leyndell Royal Capital: On the body of the Blackguard at the end of his questline, in the outer moat near the Capital Ramparts grace, where the Dung Eater invades. If you did not do Blackguard's quest before Dung Eater's invasion, you will not be able to receive this particular Curse and you will need to provide the other five to Dung Eater instead",
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '36a9fd33-72e1-4091-9158-c1aa01d442cf',
    description: "Get Seedbed Curse (until you get 5) from Leyndell Royal Capital: In the alternate version of Roundtable Hold located near the Fortified Manor grace, inside the equivalent of the Dung Eater's room. You will find it on a body that is strapped to a chair (if you follow this guide, you already got this one)",
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '5824fd47-d0bb-43ec-b552-dfe59fc62bc0',
    description: 'By this point your weapon can be +15-20 (6-7)',
    tags: []
  },
  {
    id: 'ca3d9a16-b81b-4be1-bb69-b7a3a704e862',
    description: 'Beat Godfrey shade',
    tags: [NGPLUS]
  },
  {
    id: 'aed334cf-8397-453c-87d5-16922af7c955',
    description: 'Beat Morgott',
    tags: [NGPLUS]
  },
  {
    id: 'b9a44d4b-7a7e-47b8-9dd9-3e76b4f7f71f',
    description: 'After defeating Morgott (but before killing Gideon), find Nepheli, Kenneth, and Gostoc in the Stormveil Castle throne room near the Godrick the Grafted site of grace (you might have to spawn from the Godrick the Grafted site of grace and rest at the Secluded Cell site of grace)',
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
  // MOUNTAIN TOPS OF GIANTS 110-120 +20-24
  {
    id: '7690a174-fa2b-42a3-a85d-844c90e55116',
    description: 'Talk to Melina in Elden Throne grace to get the Rold medallion',
    tags: [NGPLUS]
  },
  {
    id: '7437d4a6-25da-4ac3-9c68-cc1e489bba68',
    description: 'From the AVENUE BALCONY grace reach the Rold lift',
    tags: [NGPLUS]
  },
  {
    id: '5c50d5ff-4ee2-4b1f-8e59-132e44ce59c9',
    description: 'Run all the way through the Forbidden lands to Mountaintops of the Giants',
    tags: [NGPLUS]
  },
  {
    id: '8a60d188-2029-4e20-a80e-ebbb3b50d7e0',
    description: 'In Zamor Ruins, near the Zamor Ruins grace in the Mountaintop of the Giants area, at the bottom of the stairs in a chest',
    tags: [SMITHING_STONE_BELL]
  },
  {
    id: '188a8fc3-17f2-42ab-adc9-bf67d97241c9',
    description: "Dropped by Ulcerated Tree Spirit in Giants' Mountaintop Catacombs, near the fire monks at the start of Mountaintops of the Giants",
    tags: [GLOVEWORT_BELL]
  },
  {
    id: '72213235-afbe-47cc-8159-23e4aae3a775',
    description: "Talk to Millicent in the Ancient Snow Valley Ruins site of grace in Mountaintops of the Giants. If Millicent does not appear at the site of grace, try returning to the Windmill Heights again and see if she's there, and if so, exhaust her dialogue there",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: 'c4d24087-e65d-4376-bdbd-c9356a062610',
    description: 'Run through to Mountaintops of the Giants until right before Fire Giant',
    tags: [NGPLUS]
  },
  {
    id: '223a264a-6e74-4942-9c6f-f4c0d9229ac8',
    description: 'Found on a body outside the First Church of Marika in Mountaintops of the Giants, from the Freezing Lake site of grace, cross the frozen lake to the south',
    tags: [SOMBER_STONE_BELL]
  },
  {
    id: '30bf91af-7114-4564-a226-6acb5e9f08ea',
    description: 'By this point your weapon can be +24 (9)',
    tags: []
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
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '48a216e3-249c-4720-928a-e8faa7e34806',
    description: 'Defeat Rykard, Lord of Blasphemy',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES, VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: 'ce4f0777-e5a5-4b25-a260-49b06e941ee3',
    description: 'Speak to Tanith one more time.',
    tags: [VOLCANO_MANOR_ASSASSINATION]
  },
  {
    id: '20afac13-e621-42ec-87ca-34440757c768',
    description: "(Optional) Progress Patches quest line and receive the Dancer's Castanets.",
    tags: [VOLCANO_MANOR_ASSASSINATION]
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
    id: 'a7a70a4b-9f8b-4a6a-bda0-83d9b21a0235',
    description: "Alexander can be summoned for the fight against Fire Giant (you don't need to summon him to complete his questline)",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: '1c79f7d4-5078-4503-8587-0c8190959121',
    description: 'Beat Fire Giant',
    tags: [NGPLUS]
  },
  // BURN ERDTREE
  {
    id: 'a8262bb7-aa69-4e4c-b6ff-db98f03943ea',
    description: 'Activate cutscene to Burn the Erdtree and access Farum Azula by talking to Melina in Forge of Giants grace',
    tags: [NGPLUS]
  },
  {
    id: 'ecb37b68-e9ab-4d8f-bbe0-1dd4b13c8e7e',
    description: "Fia will relocate to Deeproot depths even if you didn't complete her questline so you can beat Fia's champions",
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: 'b7edec68-9875-4eb4-b4cc-e967333caebd',
    description: "To fight Fortissax, progress Ranni's quest until receiving the Carian Inverted Statue. Use the statue in the Divine Tower of Liurnia, reach the top, get the Cursemark of Death and give it to Fia. Reload the area and inspect her dream",
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  // CONSECRATED SNOWFIELD 100-120 +20-24
  // MOHGWYN PALACE 110-140 +20-24
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
  // MIQUELLA'S HALIGTREE 120-150 +25
  {
    id: 'd01f819f-3b97-4551-9b08-1e6282f76552',
    description: 'Get Haligtree Secret Medallion (Right) from Castle Sol in Mountaintops of the Giants',
    tags: [OPTIONAL, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '57379897-ef76-4246-af6b-b1db1c957349',
    description: 'With both halves of Haligtree medallion, access Consecrated Snowfield through the Lift of Rold',
    tags: [OPTIONAL, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '6081caa3-6d2b-4b95-b20c-88daae796559',
    description: 'Reach the Apostate Derelict grace, in the northermost part of Consecrated Snowfield, and interact with the giant Albinauric woman. Latenna will reward you with a Somber Ancient Dragon Smithing Stone',
    tags: [LATENNA_QUESTLINE]
  },
  {
    id: '52bfb466-e488-4a1b-8eab-7a84dc19ab14',
    description: "beat Ordina's puzzle in Consecrated Snowfield to access Miquella's Haligtree. You can make the assassins visible holding Sentry's Torch in your off hand. You can knock off the snipers from the roofs with a greatbow, the Jar Cannon or long range spells",
    tags: [OPTIONAL, MILLICENT_QUESTLINE, ALL_REMEMBERANCES]
  },
  {
    id: 'a38284d6-48d6-46f8-a9b3-5ddc7394ec72',
    description: "Reach Mohgwyn Palace either from Varre's quest or from Consecrated Snowfield and beat Mohg. Beforehand, it would be useful to get the Purifying Crystal Tear first from killing Eleonora, Violet Bloody Finger at the Second Church of Marika in Altus Plateau",
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '37fd75e6-f278-457b-8f48-7983d33d39d2',
    description: 'Get Seedbed Curse (until you get 5) from Elphael, Brace of the Haligtree: From the Prayer Room Grace, head forwards until the end of stairs with two crossbowman above you. Jump on to the arch to the right and hop on to the platform to the left with the Crimson Teardrop Scarab. To the left should be a room with a Cleanrot Knight and a chest containing Cleanrot Knight Finlay Ashes. Hop onto the arch to the north-west and follow it up to a balcony. Follow the balcony to its end and the item will be found on a body sitting in a chair above the ballistae and the Putrid Avatar',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '924f09a5-c8eb-4eb5-a96a-1f8e8c8f4419',
    description: 'Get Seedbed Curse (until you get 5) from Elphael, Brace of the Haligtree: From the Prayer Room grace, keep heading forwards, going down every staircase you come across. Drop down and head towards the room with two Cleanrot Knights inside but instead of entering, jump over the railing to the right and drop down one level. Turn around, enter the dark room right under the railing and you will find it on a body that is sitting in a chair',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: 'a23fc98b-86a6-476b-8437-f27cd7cfcc1c',
    description: 'Give all 5 Seedbed Curses to Dung Eater and get the Mending Rune of the Fell Curse, then reload the area to find the Omen Set',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: 'fe060cba-bcbd-4b3d-bcaf-81e9a0ad07d8',
    description: 'In a graveyard in Elphael, Brace of the Haligtree. From the Haligtree Roots Grace, go back up the elevator, go straight to exit the church and then take a left down the slope filled with Lesser Kindred of Rot. The item will be next to a grave surrounded by more enemies',
    tags: [GHOST_GLOVEWORT_BELL]
  },
  {
    id: '92cba555-80a2-4c16-9a68-57f3d45edf71',
    description: 'Defeat the Lesser Ulcerated Tree Spirit in Elphael. To reach the mini-boss, go to the Drainage Channel site of grace, go west through the doorway, climb up the ladder at the end of the corridor, and go out the doorway on your right at the top. The mini-boss is at the landmass across the gap to the left. To reach it, go up the slope on the right and walk across the tree branch, heading southwest across the gap. You can cheese the mini-boss with ranged attacks from the top of the nearby trunk',
    tags: [MILLICENT_QUESTLINE]
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
    description: "Return to Gowry in Gowry's Shack. If he is alive, talk to him and kill him to get the Flock's Canvas Talisman and Gowry's Bell Bearing (might need to do defeat Malenia before, I'm not sure)",
    tags: [MILLICENT_QUESTLINE]
  },
  {
    id: '81fc1668-21af-4a10-acfb-34ed93c8a115',
    description: 'Beat Malenia',
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
    description: 'Beat Godskin Duo',
    tags: [NGPLUS]
  },
  {
    id: 'ba96e3f5-654c-4467-b259-1af9c7667be6',
    description: 'Obtained from defeating The Godskin Duo in Crumbling Farum Azula',
    tags: [SMITHING_STONE_BELL]
  },
  {
    id: 'b6a6c4ba-a0b7-4e7f-b0fe-9b0c93c765b1',
    description: "Find Alexander in Farum Azula and beat him in a duel. He will reward you with with Alexander's Innards and Shard of Alexander. To reach him: from the Dragon Temple Lift grace (can be accessed by using two Stonesword Keys), go past the plaza full of undead up the flight of stairs, turn right and you'll see two square bracket shaped archways. Jump on the archway on the left (closest to the sleeping dragon) to get over to the other side. Alexander can be found directly on the flat arena after crossing the crumbling tower",
    tags: [ALEXANDER_QUESTLINE]
  },
  {
    id: 'f6d85cdf-3cb9-49d3-9912-5116e4ecf771',
    description: 'From Dragon Temple Altar grace, exit to the left looking at the nearest wall. Progress down the debris to a narrow path laden with dragon statues. At the end of the path there is a spiral staircase on the right. Head up these stairs and then find a floating pillar adjoining the aforementioned floating platform. Use the pillar to get up to the platform and collect the stone',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '6b0328ea-74c9-4042-ae2a-4b6531053420',
    description: 'From Godskin Duo grace go through the left gate (looking at the closest wall, in the left side) and progress until reaching an area where you have to parkour down some floating platforms. Go straight through the path. In the area with the Crucible Knight, stick to the right side and jump to the grace.',
    tags: [NGPLUS]
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
    description: 'Beat Placidusax',
    tags: [OPTIONAL, NGPLUS, ALL_REMEMBERANCES]
  },
  {
    id: '2a519808-24ee-41e7-9db9-c04ee98dfa2d',
    description: 'Expore Leyndell Royal Capital and grab any missing items you might need for your current or NG+ build BEFORE defeating Maliketh, as you will lose access to that area',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: '4b29d14f-ec7a-4729-a457-5af706963d61',
    description: 'Beat Maliketh',
    tags: [NGPLUS]
  },
  {
    id: 'd08950f3-2199-484d-8272-a30804e38ee9',
    description: 'Explore the Subterranean Shunning-grounds optional area under Leyndell',
    tags: [OPTIONAL, NGPLUS]
  },
  {
    id: 'cf171be4-c5f4-4149-b71f-a4c6c6d9efef',
    description: 'Defeat Mohg, the Omen down the Leyndell Sewers and attack the alter behind the chest to reveal a secret area',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: 'd8938df1-e27e-4a6b-b342-18319ca5e7a0',
    description: 'Reach the bottom of Leyndell Sewers, get naked and enter the door with the Three Fingers',
    tags: [HYETTA_QUESTLINE]
  },
  {
    id: '886ca92c-0bb6-44de-b7d2-49827c9fd4ac',
    description: 'Talk to Hyetta at Frenzied Flame Proscription and get the Frenzied Flame Seal and five Frenzyflame Stones',
    tags: [HYETTA_QUESTLINE]
  },
  // LEYNDELL, CAPITAL OF ASH 120-180 +25
  {
    id: '065851a5-2baf-4466-8c3c-1125d38d09f4',
    description: 'Beat Gideon',
    tags: [NGPLUS]
  },
  {
    id: '48d7b453-e4da-4266-a59c-44836c771598',
    description: 'Beat Godfrey',
    tags: [NGPLUS]
  },
  {
    id: '80046f4a-f025-428e-9381-b08df9088402',
    description: 'Beat Radagon and Elden Beast',
    tags: [NGPLUS]
  },
  {
    id: "f2cfa6be-dde8-467e-a7cf-f86814b8f6d7",
    description: "Interact with the blue summon sign near Marika's remains for the \"Age of the Stars\" ending",
    tags: [RANNI_QUESTLINE]
  },
  {
    id: '68cafc87-0e90-4f00-a806-9643a6254da5',
    description: 'Use the Mending Rune of the Fell Curse to get the Blessing of Despair Ending',
    tags: [DUNG_EATER_QUESTILINE]
  },
  {
    id: '7c524889-f8a9-40bd-83ed-cec150a09764',
    description: 'Become the Lord of Frenzied Flame.',
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
        description: 'Found in Mountaintops of the Giants. On a corpse inside the mouth of a big skull south-east of Church of Repose. Once you spawn in, turn to the south-east and you will see a large skull. [Map Link]',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '30325d33-b5d4-48bf-8faf-76fd764108cb',
        description: "Dropped along with the Night's Cavalry Set, by killing the two mini-boss Night's Cavalry guarding a caravan at night, in Consecrated Snowfield, nearby Inner Consecrated Snowfield grace",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'e46c2798-4e50-40f7-81b7-26340a06a603',
        description: 'Looted from within the Yelough Anix Tunnel located in Consecrated Snowfield. Head south west from Inner Consecrated Snowfield grace',
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
        description: 'From Dragon Temple Altar grace, exit to the left looking at the nearest wall. Progress down the debris to a narrow path laden with dragon statues. At the end of the path there is a spiral staircase on the right. Head up these stairs and then find a floating pillar adjoining the aforementioned floating platform. Use the pillar to get up to the platform and collect the stone',
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
        description: "Received from completing Latenna's quest line upon delivering her to Apostate Derelict",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '7a41fc78-27bb-4474-b3f3-755ab0dd38d2',
        description: 'Dropped by Anastasia, Tarnished-Eater after her third invasion, on the frozen river southwest of Ordina, Liturgical Town',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '082303ca-0c35-430a-ba02-87bfd6c6b772',
        description: 'Found in a chest at the feet of the massive statue by the Dynasty Mausoleum Midpoint',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'f8eec561-b286-4873-94dc-2cd6f42efc49',
        description: 'Found in a chest hidden between columns near a roof with a corpse carrying an item, after the Prayer Room site of grace in the Haligtree. To reach it, go to the end of the first walkway and jump down to the gazebo with the red scarab, then run up the diagonal support on the other side.  The chest is in a small room',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'f2a0d3a8-7d42-49e3-9953-c2abc01f5ad5',
        description: 'Found on a corpse in the southern end of the ring walkway in the east, near the patrolling Putrid Avatar. To reach this walkway, head out of the Prayer Room site of grace and jump onto the second concrete beam connecting to a tower. Jump from the tower down to the Putrid Avatar and proceed south to the end of the walkway',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'af05491b-d9d0-4fcc-a72b-b34b054e8f47',
        description: "After completing the Millicent questline and defeating Malenia, it can be obtained by inserting the gold needle into Malenia's scarlet flower to receive Miquella's Needle",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: 'e1dee2c7-6ae2-4d67-897a-fc48a0a57d9d',
        description: "From the main Leyndell, Ashen Capital site of grace, go west, along and up the dragon. Enter the building past it (the same one that you needed to enter to get up to the Erdtree before it was burnt) and climb the ladder. Over the railing to the right is a gargoyle next to a corpse with the stone. (Note: This will only be available once you've progressed far enough that the city is filled with ash)",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '01a2faf5-a555-4d89-8ddb-cb4e89463367',
        description: 'Found in a gazebo behind the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace',
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
        description: 'Can be obtained from a chest in a room underneath the massive skeleton and throne at Ainsel River, near the Dragonkin Soldier of Nokstella site of grace',
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '6792f457-fabc-4ea0-b4d5-aaa4dcaac3e0',
        description: "Found in a chest under the massive skeleton statue in Night's Sacred Ground, after reaching the bottom level of Nokron. You receive this alongside the Fingerslayer Blade",
        tags: [OPTIONAL, NGPLUS]
      },
      {
        id: '91ac06fa-115b-4b67-8084-6e00efaa3dc7',
        description: 'Found in a chest at the back of a narrow room in Nokstella, Eternal City. Starting from Nokstella, Eternal City grace, progress up the stairs to teh city, and get inside the building after the first bridge. Beware the Silver Tear disguised as a large iron ball hanging off of the ceiling waiting to ambush you',
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