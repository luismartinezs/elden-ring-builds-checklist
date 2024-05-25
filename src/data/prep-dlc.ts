import { EXTRA_TAGS, TAGS } from '~/features/tags';

const { OPTIONAL, GOLDEN_SEED, SACRED_TEAR, LARVAL_TEAR, RITUAL_POT, SMITHING_STONE_BELL, SOMBER_STONE_BELL, GLOVEWORT_BELL, GHOST_GLOVEWORT_BELL, NEPHELI_QUESTLINE, SELLEN_QUESTLINE, LATENNA_QUESTLINE, MILLICENT_QUESTLINE, BOGGART_QUESTLINE, ALEXANDER_QUESTLINE, VARRE_QUESTLINE, WHETBLADES, PATCHES_QUESTLINE } = TAGS
const { ALWAYS_SHOW } = EXTRA_TAGS

const list = {
  id: "0ead2b98-4393-4091-9745-82af2ef1cb0a",
  slug: "prep-dlc",
  title: "Prepare for DLC (Vaati guide)",
  tags: ['new'],
  notes: [
    `Build based on this excellent guide by Vaatividya: <a href='https://www.youtube.com/watch?v=0E7R0spaeQw' target='_blank'>How to Fully Prepare for Elden Ring's DLC</a>.`,
    `<b>I highly recommend you create a new profile for this run and make sure to toggle off all the filters so everything is displayed</b>`,
    `These steps will get you all the items mentioned in the guide, including all sacred tears, all golden seeds, all larval tears, all miner's and picker's bell bearings, all ritual pots and all ancient dragon stones.`,
    `Whetblades also included although not mentioned in Vaati's guide.`,
  ],
  items: [
    {
      id: 'adad4f5d-3373-484e-bcb3-8d3a13555a61',
      description: 'Start a new character (optionally, simply use a NG+ character)',
      tags: []
    },
    {
      id: 'd6fd2ef4-8d93-46f9-bd7d-2d9400670dcb',
      description: 'Aim to reach around level 100-150',
      tags: []
    },
    {
      id: 'b0223f0f-a26b-4698-ad9e-8d0ec8cf703c',
      description: 'Aim to get around 40 VGR (soft cap), although this is heavily dependent on your build',
      tags: []
    },
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
      id: '80837f28-ee38-4523-a3e3-44d81c1ea35b',
      description: "If you don't have a bow and arrows, buy them from the merchant on the beach west from the The First Step grace (Limgrave)",
      tags: []
    },
    {
      id: '02be4a2b-6666-4e94-a71e-addfae6b7163',
      description: 'Go north from the location of the merchant in Limgrave beach to grab Gold-Pickled Fowl Foot, useful for rune farming',
      tags: [OPTIONAL]
    },
    {
      id: "ae6663f5-a9a3-4f29-80eb-9d6fc348227f",
      description:
        "By the golden tree in West Limgrave beside the path from the Storm Gate to the Stormhill Shack.",
      tags: [GOLDEN_SEED],
    },
    { // SSK +1
      id: "21565225-1584-4978-95ed-31073a644f89", /// HERE
      description:
        "Pick the Stonesword Key next to the Stormhill Shack grace.",
      tags: [],
    },
    {
      id: '2ffa52b8-8b74-4111-a975-4da2c97d3c4c',
      description: 'Let Magrit kill you to access Roundtable Hold',
      tags: []
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
      id: 'd9792932-bdf7-4d3f-8011-d2c2c45acbc9',
      description: 'Get the Dectus Medallion (Left) from Fort Haight in Limgrave (east Limgrave, south of Mistwood)',
      tags: [],
    },
    {
      id: '1a279fba-f36b-4524-98f9-b4957e7bbbaa',
      description: 'Dectus Medallion (Right) from Fort Faroth in Dragonbarrow (Caelid). Easiest way to reach there is from waygate portal behind Third Church of Marika and going south from Bestial Sanctum, or you can just ride all the way there from Limgrave. To get the item you can just run through all the enemies up the stairs, you don\'t need to fight anything. You can also grab Radagon\'s Soreseal going down the third hole in the roof.',
      tags: []
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
      id: '384fc0f5-c356-4d8a-a31e-351494896d8a',
      description: 'Find Alexander in Northern Stormhill, West to the river and North of the Agheel Lake North Site of Grace. Him a few times on the back with any weapon until you free him. He will reward you with some items',
      tags: [ALEXANDER_QUESTLINE]
    },
    {
      "id": "528441a6-c525-40d5-8cc8-546ec9e8d304",
      "description": "Golden Vow Ash of War, dropped by a mounted Godrick Knight on the cliff southwest above the Deathtouched Catacombs when defeated (Stormhill, in the cliffs east of the colosseum)",
      tags: []
    },
    {
      id: '2fa6873f-d44c-4b9c-adda-596b6e7fa74b',
      description: 'Talk to Sellen at the Waypoint Ruins Cellar grace and select the "I want to learn sorcery" dialogue option. Located Western Limgrave, right east to Agheel Lake, downstairs Waypoint Ruins.',
      tags: [SELLEN_QUESTLINE]
    },
    {
      id: 'c2b353c2-e317-4414-b978-ae17257c33a0',
      description: 'Just east of the Agheel Lake South Site of Grace is a raised ledge. On the ledge are a few Wandering Nobles digging in the grass at the base of large tombstones, and to the left is one noble standing by himself. Kill him. Limgrave.',
      tags: [LARVAL_TEAR]
    },
    // WEEPING PENINSULA L20-30 +3
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
      id: "fee1c271-cca1-4de5-bff5-76c58614c0b6",
      description:
        "At the foot of the golden tree on the ledge overlooking Castle Morne in the Weeping Peninsula. Limgrave",
      tags: [GOLDEN_SEED],
    },
    {
      id: '2ed87793-1dc6-4f14-8929-1491a7bbd29a',
      description: 'Get Crimsonburst Crystal Tear from Weeping Peninsula beneath the Minor Erdtree: Dropped by the Erdtree Avatar boss upon defeat',
      tags: []
    },
    {
      id: '3f7cc832-d965-4dd2-91bc-8288e505c113',
      description: 'Meet Patches at Murkwater Cave as a boss, and accept his surrender (in Limgrave. halfway through the Murkwater River)',
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

    // STORMVEIL CASTLE L30-40 +3-4
    {
      id: '7aba047b-6da2-46ab-9f3a-0c5acf36e752',
      description: 'Defeat Magrit',
      tags: []
    },

    // Get additional stonesword key

    {
      id: 'd8af39dd-4f24-4cfb-863d-cadb55a57cf0',
      description: 'Iron Whetblade (Heavy, Keen, and Quality). Stormveil Castle Can be looted off a corpse found in the armory room, through the north-western door in the hall with the Grafted Scion. You will need to use one Stonesword Key on the imp statue to dispel fog gate blocking the doorway',
      tags: [WHETBLADES]
    }, // SSK -1
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
        "Dropped by Ulcerated Tree Spirit under Stormveil Castle. Limgrave",
      tags: [GOLDEN_SEED],
    },
    {
      id: 'b9690395-5806-49d1-85fb-89411478266b',
      description: 'Beat Godrick in Stormhill Castle',
      tags: []
    },
    {
      id: '9f2e43fc-e06f-4c47-ab9b-a1ec32abcac3',
      description: 'Get the Lake-Facing Cliffs grace near Godrick\'s throne, in Liurnia',
      tags: []
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
      id: '062f0984-ff7b-4da1-ba5f-b05e12ac7eae',
      description: 'After defeating Godrick and resting at his grace, talk to Nepheli in Roundtable Hold (you might need talk first to Gideon and rest in a grace for Nepheli to appear)',
      tags: [NEPHELI_QUESTLINE]
    },
    {
      id: 'a316a47a-313e-4e83-81cc-23bfaca40eec',
      description: "Obtain Godrick's Great Rune, start from Stormveil Main Gate grace, head inside the castle and hug the right side through the corridor and the bridge to reach the Divine Tower", // REVIEW
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
      description: 'If you don\'t have a lantern, buy one from Nomadic Merchant in Liurnia of the Lakes in Liurnia Lake Shore grace',
      tags: []
    },
    {
      id: '37e42814-4ccc-4113-9104-48f2c3d92be2',
      description: 'Reach the Laskyar Ruins right north from the Liurnia Lake Shore grace and travel through the waygate portal to reach the South Raya Lucaria Gate grace.',
      tags: []
    },
    {
      id: 'ac63dd7a-986c-41dc-923c-99afb13ae417',
      description: 'Laskyar Ruins, North-West of Liurnia Lake Shore Grace: near columns on the northern side',
      tags: [RITUAL_POT]
    }, {
      id: 'e5a95bc9-4780-48f0-93f0-aa8c5a626d7f',
      description: 'Optionally, talk to Patches at Scenic Isle grace, north west of the Laskyar Ruins, in Liurnia',
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: '66b31c30-f5ac-4d8e-b8dd-9f8cdad31ae6',
      description: 'Meet Rya in Liurnia of the Lakes under the under the pavilion next to the Birdseye Telescope north of Laskyar ruins',
      tags: [BOGGART_QUESTLINE]
    },
    {
      id: '6fe533c0-09e4-4fa8-8a30-d000b927fc44',
      description: 'Head north west from the pavilion where Rya is located to reach the Boilprawn Shack, speak to Boggart and buy the necklace from him for 1000 runes (or kill him, if you don\'t care about his questline)',
      tags: [BOGGART_QUESTLINE]
    },
    {
      id: '93cb87ca-1cae-4436-9117-56490613b6a4',
      description: 'Buy prawns from Boggart and talk to him. If you plan to follow Dung Eater\'s questline, but you want Boggart to survive, you can postpone this step until you have completed Dung Eater\'s questline, to prevent Boggart from moving to Altus. Note that this will prevent you from getting one Seedbed Curse',
      tags: [BOGGART_QUESTLINE]
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
      id: '5d177901-90f6-449b-b13f-f8df8eef3ee4',
      description: 'Get Academy Glintstone Key from Liurnia of the Lakes, south from Crystalline Woods site of grace, behind Glintstone Dragon Smarag',
      tags: []
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
      tags: [LATENNA_QUESTLINE, MILLICENT_QUESTLINE]
    },
    {
      id: "82983c08-5a06-4d1e-a6a8-dfea29452f1b",
      description: "From Liurnia Lake Shore grace, looking north hug the left wall until finding the entrance to Lakeside Crystal Cave. Progress through the dungeon to find Latenna at the end and grab the grace",
      tags: [LATENNA_QUESTLINE]
    },
    {
      id: '96aee82b-8231-4a5a-bf58-476cffc8cb53',
      description: 'Get Spear talisman from a chest inside Lakeside Crystal Cave, near a demi-human campfire (southern region of Liurnia of the Lakes, directly south from the Scenic Isle Site of Grace)',
      tags: []
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
      id: 'e9dcf98e-e9d9-4693-8ce0-1badcf768222',
      description: 'Use the Academy Glintstone Key to cross the magic door next to South Raya Lucaria Gate grace, in Liurnia',
      tags: []
    },

    {
      id: '070738c7-82cd-4dbb-9406-bd01b3a1b7a2',
      description: 'Traverse the magic gate next to the Main Academy Gate grace to reach the East Raya Lucaria Gate grace (Liurnia)',
      tags: []
    },

    // ACCESS ALTUS


    {
      id: '3f9fbaf5-42fb-4182-a9aa-5b4fd08237c5',
      description: 'Use the Great Lift of Dectus to reach the Altus Plateau. From the East Raya Lucaria Gate grace in Liurnia simply follow the path forward.',
      tags: []
    },
    {
      id: 'bd19aee2-3a7b-419e-9950-c5d2462483d8',
      description: 'Rest in any site of grace in Altus',
      tags: []
    },




    {
      id: '90857748-9645-4423-8937-1c5bd67158c7',
      description: 'Use the invasion sign to invade Magnus the Beast Claw, it can be found in one of the ruined buildings in Writheblood Ruins, in the path from north Altus toward Mt. Gelmir. Altus. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165882" target="_blank">Location</a>',
      tags: [VARRE_QUESTLINE]
    },
    {
      id: '98f9ae6e-2b36-42c0-94eb-17c92aecbd29',
      description: "Talk to Varré in Rose Church, accept the dialog and get Lord of Blood's Favor",
      tags: [VARRE_QUESTLINE]
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
      description: "Soak Lord of Blood's Favor in the corpse at Chapel of Anticipation",
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
      id: 'fd79018f-6b30-4164-a48b-323a5d9b5d73',
      description: 'Reach the Palace Approach Ledge-Road grace in Mohgwyn Palace. From the Dynasty Mausoleum Entrance go north and then east to the red lake and hug the left wall',
      tags: []
    },
    {
      id: 'a6e8da52-988e-48a5-986c-1d6c87691bde',
      description: 'Grab Golden Scarab Talisman for rune farming, from the Abandoned Cave in Caelid. You will have to defeat the two Cleanrot Knights. https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167686',
      tags: [OPTIONAL]
    },
    {
      id: '9393b540-cea9-4496-83de-cf1916b7588c',
      description: 'In Palace Approach Ledge-Road grace in Mohgwyn Palace, farm as many runes as you want from killing Albinaurics or from aggroing the giant bird in the lower level by shooting an arrow to it. To gain more rules, you can equip the Golden Scarab Talisman and use Gold-Pickled Fowl Foot',
      tags: []
    },


    {
      id: "6a9eef7f-4afd-4cdf-aa59-0ccde4fbf010",
      description:
        "At the foot of a golden tree, at the end of the broken bridge just outside the lift up to the Academy of Raya Lucaria.",
      tags: [GOLDEN_SEED],
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
      description: 'Beat Ref Wolf of Radagon in Raya Lucaria',
      tags: []
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
      id: 'cbcd93c6-4334-4301-ace4-be411f02f3ab',
      description: 'Go through the waygate after the stairs with the giant rolling balls after wolf of Radagon to reach Church of Vows, and get Flame, Cleanse Me incantation (12 FAI) at the fire monk camp southeast of Church of Vows',
      tags: [OPTIONAL]
    },
    {
      id: 'd7a3f9a6-f5d8-4c2e-85fc-102a3bdeb792',
      description: "Defeat Rennala in Raya Lucaria",
      tags: [ALWAYS_SHOW, SELLEN_QUESTLINE]
    },
    // LIURNIA EAST 50-60 +4-6
    {
      id: '958046df-4b2e-41dd-9692-d6e74f5d4d1b',
      description: 'Dropped by the Crystalian Boss at the end of Raya Lucaria Crystal Tunnel (northeastern Liurnia, east from the walking mausoleum in the lake)',
      tags: [SMITHING_STONE_BELL]
    },
    // AINSEL RIVER L50-60 +4-6
    {
      id: 'fc400bd0-00f0-4e1b-873e-eac45d4528b2',
      description: 'Great Ghost Glovewort. Can be obtained from a chest in a room underneath the massive skeleton and throne at Ainsel River, near the Dragonkin Soldier of Nokstella site of grace. This area is reachable by taking the lift down, located north of the Divine Tower of Liurnia',
      tags: [OPTIONAL,]
    },
    // LIURNIA WEST, CARIA MANOR L50-60 +4-6
    {
      id: "0ba1c797-4998-4834-a990-758e6f6a5768",
      description:
        "Near a golden tree after going down the steps from the Caria Manor Upper Level Site of Grace. Liurnia",
      tags: [GOLDEN_SEED],
    },
    {
      id: 'e41ac24c-5c7b-4340-839c-b0c0b048b0e1',
      description: "Get Glintstone Craftsman's Cookbook [6] in Caria Manor in a small room southeast of the gardens. From the Main Caria Manor Gate Grace, enter the gardens and immediately turn right. The room will be straight ahead",
      tags: []
    },
    {
      id: 'ebb627a5-1cb1-496f-8339-6da8d51587b6',
      description: 'Beat Loretta in Caria Manor',
      tags: [SELLEN_QUESTLINE]
    },
    {
      id: '90813e2a-75de-4167-8603-af4bab0bd2ca',
      description: 'Among the rewards of the Resurrection painting. The painting is in the Artist\'s Shack in North-East Liurnia of The Lakes, heading north in the path up from the Liurnia Highway North. To find the painting rewards, start at the Behind Caria Manor Site of Grace (<a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165492" target="_blank">Location</a>) and head slightly southeast until you arrive at a graveyard, behind a big rock you should see the spirit of the artist sitting in a chair',
      tags: [LARVAL_TEAR]
    },
    {
      id: '983e4f51-15f7-4b5a-a927-5eee5c12f5c1',
      description: 'Talk to Ranni, then her servants, then Ranni again. If you don\'t find Ranni, it\'s possible that you have started the Radahn festival, so you will have to kill Radahn before progressing',
      tags: []
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
    // TODO next two steps can be moved to the end or later to be more OP
    // TODO move this to later because other SSK are cheaper
    // {
    //   id: '7c69b91c-8643-4e31-ba29-2cbb1615bbab',
    //   description: 'Buy the three Stonesword Keys from the Twin Maidens in Roundtable Hold, if you don\'t have them (4000 each)',
    //   tags: []
    // }, // SSK +3

    // SIOFRA 50-60 +8-12
    {
      id: '2206a500-5f7b-402f-827a-05be84b944f9',
      description: 'Reach Siofra River by going down the elevator in Mistwood, Limgrave',
      tags: []
    },
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
      id: '6849c507-eec2-4881-8b1e-30b16c9696c2',
      description: "Great-Jar's Arsenal. Reward for defeating the Knights of the Great Jar in Caelid, near the colosseum in Caelid. Accessible from the elevator in Siofra River",
      tags: []
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
      id: "36fc0ad2-a169-43da-9845-cc36de22133b",
      description:
        "At the foot of a Golden Tree deep in the northern ravine of Liurnia, surrounded by giant Land Squirts",
      tags: [GOLDEN_SEED],
    },

    {
      id: "80944ed0-683f-4044-b440-aa051bc7f65a",
      description:
        "At the foot of a Golden Tree on the western side of the Altus Plateau, leading toward the Abandoned Coffins and exit to the Ruin-Strewn Precipice dungeon that connects Altus and Liurnia. Altus Plateau",
      tags: [GOLDEN_SEED],
    },


    {
      id: 'be83ba65-f7f1-4aa5-bf25-116dbbed9c9d',
      description: 'Dropped by Erdtree Burial Watchdog in Wyndham Catacombs, in Altus Plateau. At the top of the Wyndham Ruins, reachable north of Erdtree-Gazing Hill grace',
      tags: [GLOVEWORT_BELL]
    },

    {
      id: '512e18ec-0cf4-444c-a8fc-e1a522041ec1',
      description: "Kindred of Rot's Exultation. Dropped by the Kindred of Rot in Seethewater Cave, found in Mt. Gelmir. Reach it by heading north through the ravine west of Wyndham Ruins",
      tags: []
    },

    {
      id: "6fee411a-b7a6-416c-867f-cbb6b8874f66",
      description:
        "At the base of a golden tree in the foggy woods where a Minor Erdtree is located, east of a broken great bridge. Altus Plateau",
      tags: [GOLDEN_SEED],
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
      id: "ebb20350-a610-4f97-b30a-6aecde04779b",
      description:
        "Up the stairs, at the golden tree near the large door in Sellia. Caelid",
      tags: [GOLDEN_SEED],
    },
    {
      id: '9fb036e4-b79d-49fd-9328-49628885793e',
      description: 'Get Greenburst Crystal Tear by defeating the Putrid Avatar found at the Minor Erdtree in north west Caelid, east of Smoldering Church',
      tags: []
    },
    {
      id: 'ee715878-7bf1-4165-a0b0-9dc024d63d68',
      description: "Isolated Merchant's Shack in North Caelid. Sold by the Isolated Merchant for 3000 runes. Go north and then west from the Dragonbarrow West grace",
      tags: [RITUAL_POT]
    },

    {
      id: '64c35e10-0644-4208-bb4f-de808b0a0bfb',
      description: 'In the southwestern corner of Caelid, south of the Caelid Highway South Site of Grace, is a crowd of Wandering Nobles milling about amongst sarcophagi. Kill the noble in the back.',
      tags: [LARVAL_TEAR]
    },
    {
      id: 'fbca363b-8c3c-4c24-812f-60b2700116a6',
      description: 'Dropped by the Fallingstar Beast in Sellia Crystal Tunnel (Caelid). Reachable by opening the chest in Dragon-Burnt Ruins in Limgrave',
      tags: [SOMBER_STONE_BELL]
    },
    {
      id: '7d7b528c-0a6f-4397-ac9a-c32777d48353',
      description: 'Flame, Grant Me Strength (FAI 15). Found behind Fort Gael, on a body between two Flame Chariots. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166238" target="_blank">Location</a>',
      tags: []
    },
    {
      id: 'cf37795e-81dc-407c-8186-cf7fce297c06',
      description: "Speak with Gowry in Gowry's Shack within Caelid. The Gowry's Shack is found in eastern Caelid, just before Sellia, Town of Sorcery. Players can reach this location by following the Caelid Highway to the east and the north. Or from Sellia Under-Stair grace going south. You can skip this step, but it will enable you to summon Polyanna for O'Neil's fight",
      tags: [MILLICENT_QUESTLINE]
    },
    {
      id: 'be885107-017a-44a5-a6c0-3c911e0c15de',
      description: "Defeat Commander O'Neil, located in the Swamp of Aeonia (central Caelid). He will drop the Unalloyed Gold Needle. You can cheese O'Neil by sneaking behind him and repeatedly casting Posion Mist (FAI 12)",
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
    { // SSK +3
      id: '102eb904-424c-4e82-9889-ed4ed50c5527',
      description: "Purchase 3 Stonesword Keys from the Isolated Merchant. He can be found in his shack at the very west of the Weeping Peninsula south west from  the Fourth Church of Marika",
      tags: []
    },
    { // SSK -1
      id: 'f8538272-5e16-401d-802d-1241e9a2a5b0',
      description: 'Get Crepus\'s black-key Crossbow (STR 14, DEX 16) and 20 Black-Key Bolts from Roundtable Hold, behind a door that opens with a Stonesword Key',
      tags: [OPTIONAL]
    },
    {
      id: '7d2912a9-f6d1-45a1-bdb6-36ba9a63f0c6',
      description: 'Radahn Festival should be active now, and you can beat Radahn. You can cheese him by staying away and keep on summoning warriors, while you inflict rot with the Crepus\'s black-key Crossbow (if you have it)',
      tags: [ALEXANDER_QUESTLINE, SELLEN_QUESTLINE]
    },
    {
      id: '214e0b27-c6c2-41a8-8acf-cba7f5ab0b6b',
      description: 'Find Alexander next to the Radahn grace and talk to him',
      tags: [ALEXANDER_QUESTLINE]
    },
    {
      id: "56421d70-5f43-43ef-9484-a8e26c78f9f2",
      description:
        "Dropped by Putrid Tree Spirit in the War Dead Catacombs. From Starscourge Radahn grace, head directly north and hug the cliff until you find the entrance. Caelid. You need to defeat Radahn first.",
      tags: [GOLDEN_SEED],
    },
    {
      id: '7cd58afb-f4de-402c-a6f3-0387a0ac1de3',
      description: "Restore Radahn\'s Great Rune by visiting the Divine Tower of Caelid, and climbing to the top through platforming",
      tags: []
    },
    {
      id: '609c347c-c2b5-488b-80e5-1db0d9417a41',
      description: 'Reach Nokron, Eternal City, through the large hole in the ground south of Mistwood in Limgrave',
      tags: []
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
    { // SSK -1
      id: "40a23af2-c9a0-405b-bbf2-3ffbd67bda6f",
      description: "get the Mimic Tear spirit summon from Nokron, behind a Stonesword Key",
      tags: []
    },
    {
      id: 'c5b0dfbf-2e28-450c-b87b-6a30a5ec5a17',
      description: "Black Whetblade (Poison, Blood, and Occult). Nokron, Eternal City Found on a corpse slumped in front of an altar in Night's Sacred Ground grace",
      tags: [WHETBLADES]
    },
    {
      id: '6792f457-fabc-4ea0-b4d5-aaa4dcaac3e0',
      description: 'Loot Fingerslayer Blade from Nokron along with a Great Ghost Glovewort',
      tags: []
    },
    {
      id: '05b86aba-43ef-4b34-947c-961d488e5d62',
      description: "From the Night's Sacred Ground Site of Grace at the end of Nokron, head up the stairs on the right into the building, and kill the large ball.",
      tags: [LARVAL_TEAR]
    },
    {
      id: '588cc80e-1d8e-4853-85bf-7ade0c31fdff',
      description: 'Talk to Ranni again and give her the Fingerslayer Blade to receive Carian Inverted Statue.',
      tags: []
    },

    {
      id: 'b74b0892-6ec4-42f7-86a5-9abb664deb48',
      description: 'Talk to Iji',
      tags: []
    },
    {
      id: '8419e6fc-6209-42cd-ad18-d5f972d7a9f5',
      description: "Go through Renna's Rise waygate, get Ranni's doll and activate the grace. In the grace you can then talk to Ranni's doll repeatedly",
      tags: []
    },

    {
      id: '6f0f64d0-961a-4fd6-b4f9-dbfc2aecc30c',
      description: 'Progress through Ainsel and Nokstella to get the Discarded Palace Key from the Baleful Shadow.',
      tags: []
    },
    {
      id: "d9201005-91e1-4dec-bb62-2435f52443ef",
      description:
        "Access from the north part of Nokstella. Found along the upper river through the city near a lift to the Lake of Rot. Ainsel River",
      tags: [GOLDEN_SEED],
    },
    {
      id: 'aeefc242-efe0-4de6-a527-9d7435c246a9',
      description: 'From the Nokstella, Eternal City Site of Grace, follow up the stairs and progress through the area until you should see a large ball rolling down a far staircase toward you in the distance. Kill it',
      tags: [LARVAL_TEAR]
    },

    {
      id: 'b9be1195-7d21-4768-8881-de1cb921334f',
      description: 'In Nokstella upper buildings, inside a building next to a staircase with a rolling ball and with a chest in the back. Kill the ball inside.',
      tags: [LARVAL_TEAR]
    },
    {
      id: '91ac06fa-115b-4b67-8084-6e00efaa3dc7',
      description: 'Great Ghost Glovewort. Found in a chest at the back of a narrow room in Nokstella, Eternal City. Starting from Nokstella, Eternal City grace, progress up the stairs to the city, and get inside the building after the first bridge. Beware the Silver Tear disguised as a large iron ball hanging off of the ceiling waiting to ambush you.',
      tags: []
    },

    {
      id: '2a396ffd-78b7-479c-9313-12ccd4626814',
      description: 'In Nokstella upper buildings, inside a building with many silver tears and a rolling ball, by killing the ball. You can let the ball and the tears aggro and kill each other.',
      tags: [LARVAL_TEAR]
    },
    {
      id: '3ccc2aba-7d0a-486e-ba62-8cbeae20f7cf',
      description: 'In a chest guarded by several Silver Tears with shields in the corner of a small room near the Nokstella, Eternal City grace',
      tags: [GHOST_GLOVEWORT_BELL]
    },
    {
      id: '72415649-ec6d-4fd5-845c-950088a6403b',
      description: 'Go through the Lake of Rot (Flame, Cleanse Me incantation, lots of HP flasks, Immunizing Horn Charm talisman and Immunizing Cured Meat help)',
      tags: []
    },
    {
      id: "ad9db21d-3fc5-4de0-bf5d-d011d2ab3783",
      description:
        "Drops from Ulcerated Tree Spirit found in the Lake of Rot's temple, down from the Grand Cloister grace.",
      tags: [GOLDEN_SEED],
    },

    // DEEPROOT DEPTHS 80-90 +15-20
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
      tags: [SELLEN_QUESTLINE]
    },
    {
      id: '5ff38f33-2edd-43d5-bf3c-db0bbf61215d',
      description: 'Talk to Sellen at the Waypoint Ruins Cellar grace and select the "Let us journey together" dialogue option. You will receive the Sellian Sealbreaker key.',
      tags: [SELLEN_QUESTLINE]
    },
    {
      id: 'cb018c4a-8717-4bf2-908a-f6ef4067dca0',
      description: "Find Lusat in the Sellia Hideaway and get the Stars of Ruin spell. He is behind a secret cave behind an illusory wall. To reach the entrance, start at the Church of the Plague site of grace and head north up the hill and straight under the wooden arch. Look to the North-East for a small graveyard with a single sorcerer enemy wielding a staff and a club. Behind the main headstone, along the cliffside, there's a secret door you can reveal by rolling or attacking it",
      tags: [SELLEN_QUESTLINE]
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
      description: 'Challenge Sellen near the Raya Lucaria Grand Library grace, you will get the Witch\'s Glintstone Crown and Sellen\'s Bell Bearing',
      tags: [SELLEN_QUESTLINE]
    },

    {
      id: '8849e0e2-9c77-4bc8-804d-eebcde630aa5',
      description: 'Speak to Jerren just outside the entrance to the Grand Library to get an Ancient Dragon Smithing Stone. If then you kill him, you can get the Eccentric Set',
      tags: [SELLEN_QUESTLINE]
    },
    {
      id: '35ea6a80-fe78-419d-b817-002882705950',
      description: 'You can reach Mt. Gelmir and Volcano Manor by going north east from Altus Plateau site of grace until Forest-Spanning Greatbridge grace, crossing the bridge with the magic portal, then heading south west through the only path available',
      tags: [OPTIONAL]
    },
    {
      id: '28024d6d-b406-4451-9069-780042759eca',
      description: 'Get Golden Vow (FAI 25) from Corpse-Stench Shack, in Mt Gelmir. Reach this location by riding northwest from the Bridge of Iniquity site of grace past the wooden barricades (the first grace you find when you enter Mt Gelmir through north Altus)',
      tags: []
    },
    {
      id: 'a4a5a59d-380d-44a5-82c5-382cea68aec3',
      description: 'From the Road of Iniquity Site of Grace, face east and head to the burning fire you can see. Right in front of it is a flaming enemy. Kill it. Altus',
      tags: [LARVAL_TEAR]
    },
    {
      id: '176d4a46-ea03-436a-9a57-54d6473396c9',
      description: 'Talk to Patches in the entrance of Volcano Manor',
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: '2eef1716-8768-475d-ab54-e45eea352c8e',
      description: "Defeat Old Knight Istvan using the summon sign north from the Warmaster's Shack (Limgrave). There's a red sign on your map.",
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: '778461c2-d725-4a4b-9598-cfd4406928fa',
      description: 'Report back to Tanith and receive Magma Shot Sorcery',
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: '0b51b4b9-6134-434a-8f85-3fbc1b583fb9',
      description: "Receive Letter to Patches from Patches in Volcano Manor (if Patches is not in Volcano Manor, it's possible that you have to meet him first at Murkwater Cave for him to show up at Volcano Manor, the wiki is not clear about that) ",
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: 'cfb5a585-6c9e-4c2b-8919-28e2c42aafa1',
      description: 'Go through the Ruin-Strewn Precipice, accessible going north past the Bellum church, north of the path toward the Dectus Lift, until defeating Magma Wyrm Makar',
      tags: [PATCHES_QUESTLINE]
    },
    {
      id: '77738365-a822-4500-85e2-14af16746280',
      description: "Invade and defeat Great Horned Tragoth at Ruin-Strewn Precipice Overlook inside Magma Wyrm Makar's boss room after resting at the grace inside the boss room. You will get the Bull-Goat Set",
      tags: [PATCHES_QUESTLINE]
    },

    {
      id: "e47e9dad-f9b7-4e44-9360-192bfc7d9436",
      description:
        "At the foot of a Golden Tree in the far north of the mountain past a summit with a Fallingstar Beast, on the road down towards the Volcano Manor. Mt. Gelmir",
      tags: [GOLDEN_SEED],
    },

    {
      id: '2beaab01-b227-4b7a-abf7-1ff6861ea4b0',
      description: "Get Sentry's torch from merchant in Hermit Merchant's Shack, northeast of the Outer Wall Battleground site of grace (Altus), useful if you want to reach Malenia",
      tags: []
    },
    {
      id: '5a1218cb-be40-4a53-be45-b30a7232fc5b',
      description: "Switch to night time in the Hermit Merchant's Shack grace and defeat the Bell Bearing Hunter to get the Medicine Peddler's Bell Bearing. If you give it to the Twin Maides in Roundtable Hold, you can buy additional boluses, amongst them Stimulating Boluses which alleviates Sleep buildup",
      tags: []
    },
    // ALTUS 60-80 +10-14
    {
      id: "01d30b40-f04b-4df2-a7dc-46a0c4c95a95",
      description:
        'At the base of the golden tree on the side of the road when headed North from "Altus Highway Junction" Site of Grace. Altus Plateau',
      tags: [GOLDEN_SEED],
    },
    {
      id: '10ef297a-b41d-4e2b-8b2d-edd29480ed95',
      description: 'Ritual Sword Talisman. Located in Lux Ruins, in a chest after defeating the boss, Demi-Human Queen Gilika. North-west from the Altus Plateau Site of Grace',
      tags: []
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
      description: 'Talk to Boggart at the outer moat located under the Capital Rampart grace (from Outer Wall Battleground grace, same path to the Draconic Tree Sentinel but hugging the right side down the moat). Buy as many Boiled Crabs as you want from him. Be careful not to progress Dung Eater\'s questline if you want Boggart to stay alive',
      tags: [BOGGART_QUESTLINE]
    },
    {
      id: 'd65e33d5-3f25-4ded-b5cb-a2fa41928539',
      description: '2 in Auriza Side Tomb, just North-East of Leyndell: In a room with a giant Living Jar. To reach Auriza Side Tomb go down the moat and then north',
      tags: [RITUAL_POT]
    },
    {
      id: 'c399c03e-adbf-4d14-b993-d207677089a8',
      description: 'Beat Draconic Tree Sentinel to access Leyndell',
      tags: []
    },
    // LEYNDELL 90-110 +15-20

    {
      id: '7a68718f-b0e7-4006-b8b9-16d40e64d39e',
      description: 'Sanctified Whetblade (Lightning and Sacred). Fortified Manor, Leyndell From the West Capital Rampart site of grace, head to the south-west side of the manor and enter from the roof near the Erdtree root. Once inside, it can found on a corpse laying next to an anvil',
      tags: [WHETBLADES]
    },
    {
      id: 'b851d1fb-c816-4cb8-97e1-1d812af984ea',
      description: "Get Lionel's Armor. Found on the bed in the building with the Lower Capital Church grace in Leyndell",
      tags: []
    },
    {
      id: "58dad865-0f98-4d19-8f8a-3800e4442dc7",
      description:
        "Dropped by Ulcerated Tree Spirit in the lower part of Leyndell, the Royal Capital. Altus Plateau",
      tags: [GOLDEN_SEED],
    },

    {
      id: '71dfa82a-f8fe-4df1-a428-5a65cdd9937b',
      description: 'In the Leyndell Sewers at the end of the maze of tunnels, just before the elevator to the Forsaken Depths Grace',
      tags: [RITUAL_POT]
    },



    {
      id: 'e9113b1d-7804-4fb1-a85b-c1fb78d1c4de',
      description: "Get Mohg's Shackle all the way down in Subterranean Shunning-Grounds, guarded by 2 Giant Crayfish. <a href='https://youtu.be/Sybo65yiImo?t=520' target='_blank'>Video Location</a>. This item will make fighting Mohg easier",
      tags: [OPTIONAL]
    },

    {
      id: '9044fbe8-aaa6-490b-b793-dd3c4a4e2532',
      description: "Lord of Blood's Exultation. Drops from Esgar, Priest of Blood in Leyndell Catacombs. Accessed via the Subterranean Shunning-Grounds",
      tags: []
    },


    {
      id: "0cef779d-c8ab-47ab-9a6d-d43ffab309eb",
      description:
        "At the Gargoyle Boss location under the tree along the ramparts of Leyndell, the Royal Capital, near the West Capital Rampart grace. Altus Plateau",
      tags: [GOLDEN_SEED],
    },

    {
      id: 'ca3d9a16-b81b-4be1-bb69-b7a3a704e862',
      description: 'Defeat Godfrey, First Elden Lord (Golden Shade) in Leyndell',
      tags: []
    },

    {
      id: 'aed334cf-8397-453c-87d5-16922af7c955',
      description: 'Defeat Morgott, The Omen King',
      tags: []
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
      description: 'Buy and Ancient Dragon Smithing Stone from Gostoc (20000 runes)',
      tags: [NEPHELI_QUESTLINE]
    },
    // FORBIDDEN LANDS 110-120 +20-24
    {
      id: '7690a174-fa2b-42a3-a85d-844c90e55116',
      description: 'Talk to Melina in Elden Throne grace to get the Rold medallion',
      tags: []
    },
    {
      id: '7437d4a6-25da-4ac3-9c68-cc1e489bba68',
      description: 'From the Avenue Balcony grace reach the Rold lift and reach the Forbidden lands',
      tags: []
    },
    {
      id: 'e280134c-dba9-4046-b836-4b82265424df',
      description: "Restore Morgott's Great Rune by the Divine Tower of East Altus, reachable through the path next to the elevator to the Forbidden Lands",
      tags: []
    },
    {
      id: "f196e61f-22bb-4290-bf12-ab23f12d0b7f",
      description:
        "At the foot of a Golden Tree in Forbidden Lands, on the path through to the Mountaintops of the Giants, just past a Black Blade Kindred. Mountaintops of the Giants",
      tags: [GOLDEN_SEED],
    },
    // MOUNTAINTOPS OF THE GIANTS 110-120 +20-24
    {
      id: '531ce3ec-4912-4674-8a66-a06e6b1ce596',
      description: 'Run through Forbidden lands and reach Mountaintops of the Giants',
      tags: []
    },
    {
      id: '57791558-3866-42c0-8701-432350a3ecc7',
      description: "Talk to Yura (Shabriri) in the Zamor Ruins Grace in Mountaintops of the Giants, if you want, kill him to get the Ronin's Set",
      tags: []
    },
    {
      id: '6f7dcb3a-0fb3-440f-aa04-40e60a4fe921',
      description: "Defeat the invader Eleonora, Violet Bloody Finger in the Second Church of Marika to get the Purifying Crystal Tear and Eleonora's Poleblade",
      tags: []
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
      id: '21e3ee7a-9c14-4de5-84d7-a5a8c1f46288',
      description: 'Church of Repose in Mountaintops of the Giants. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165748" target="_blank">Location</a>',
      tags: [SACRED_TEAR]
    },
    {
      id: '7c510998-cb9f-4a89-a3f4-1be7189a672e',
      description: 'Found in Mountaintops of the Giants. On a corpse inside the mouth of a big skull south-east of Church of Repose. Once you spawn in, turn to the south-east and you will see a large skull.',
      tags: []
    },
    {
      id: "8fe6d280-9880-4dca-9c81-08456d345fc5",
      description:
        "Base of a Golden Tree across the large chain leading to the southeast portion of the Mountaintops of the Giants, among large frozen corpses. From the Foot of the Forge grace go north east.",
      tags: [GOLDEN_SEED],
    },
    {
      id: '7bed6eb7-480a-462c-8068-c56abb535ebc',
      description: "Great Grave Glovewort. Mountaintops of the Giants: One found in the Giant-Conquering Hero's Grave: In the large hall with the Troll, drop down from either side of the platform into a room with a Fire Prelate. Defeat it and check the very back of the room for the glovewort. Alternatively, you can reach this room by descending the lift and sending it back up. Pull the lever in the alcove to the right and then enter the small space in the raised lift to descend further down. In the next hall, sprint past the Lesser Burial Watchdog and turn left. Climb the ladder at the end of this path. Giant-Conquering Hero's Grave is right north of the Zamor ruins but you need to traverse Mountaintops of the Giants until almost its end. From the Church of Repose grace, go north west and jump the gap to reach the platform with the entrance to the grave.",
      tags: []
    },

    {
      id: 'a7a70a4b-9f8b-4a6a-bda0-83d9b21a0235',
      description: "Alexander can be summoned for the fight against Fire Giant (you don't need to summon him to complete his questline)",
      tags: [ALEXANDER_QUESTLINE]
    },
    {
      id: '1c79f7d4-5078-4503-8587-0c8190959121',
      description: 'Defeat Fire Giant',
      tags: []
    },
    // BEFORE BURNING ERDTREE


    // BURN ERDTREE
    {
      id: 'a8262bb7-aa69-4e4c-b6ff-db98f03943ea',
      description: 'Activate cutscene to Burn the Erdtree and access Farum Azula by talking to Melina in Forge of Giants grace',
      tags: []
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
      id: '082303ca-0c35-430a-ba02-87bfd6c6b772',
      description: 'Somber Ancient Dragon Smithing Stone. Mohgwyn Dynasty Mausoleum: Found in a chest at the feet of the massive statue by the Dynasty Mausoleum Midpoint',
      tags: []
    },
    {
      id: '5d63cfe4-b671-4d91-9b00-825b03dccd48',
      description: 'Great Ghost Glovewort. Mohgwyn Dynasty Mausoleum: In the cave-like section in between the Dynasty Mausoleum Entrance grace and the Dynasty Mausoleum Midpoint grace, in a lower area guarded by many Rotten Ghouls',
      tags: []
    },

    {
      id: '3f9fd46f-e3de-484e-9660-4bcc3a6b394d',
      description: 'Defeat Commander Niall at Castle Sol Rooftop to get the Veteran\'s Set',
      tags: []
    },

    {
      id: 'd01f819f-3b97-4551-9b08-1e6282f76552',
      description: 'Get Haligtree Secret Medallion (Right) from Castle Sol in Mountaintops of the Giants',
      tags: [LATENNA_QUESTLINE, MILLICENT_QUESTLINE]
    },
    // CONSECRATED SNOWFIELD 100-120 +20-24
    {
      id: '57379897-ef76-4246-af6b-b1db1c957349',
      description: 'With both halves of Haligtree medallion, access Consecrated Snowfield through the Lift of Rold',
      tags: [LATENNA_QUESTLINE, MILLICENT_QUESTLINE]
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
      id: 'fd49412b-0c2b-4245-ac80-c6a0f4d450af',
      description: '2 Great Grave Glovewort. Consecrated Snowfield: Two (2) dropped by the boss of Consecrated Snowfield Catacombs, Putrid Grave Warden Duelist (from Inner Consecrated Snowfield grace, go east until reaching the wall and then hug the wall south until finding the entrance)',
      tags: []
    },
    {
      id: '0f4deb10-4b46-4ab1-952d-bf6c9e8905a3',
      description: 'Graven-Mass Talisman. Found in a chest atop Albinauric Rise, in the east of the Consecrated Snowfield. <a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167121" target="_blank">Location</a>',
      tags: []
    },
    {
      id: '30325d33-b5d4-48bf-8faf-76fd764108cb',
      description: "Ancient Dragon Smithing Stone dropped along with the Night's Cavalry Set, by killing the two mini-boss Night's Cavalry guarding a caravan at night, in Consecrated Snowfield, nearby Inner Consecrated Snowfield grace",
      tags: []
    },
    {
      id: '2acc2df0-4d5c-46e7-a1b5-b7e1f565fe2c',
      description: 'Ancient Dragon Smithing Stone in Yelough Anix Tunnel, in the west of the Consecrated Snowfield, near the Yelough Anix Ruins. <a href="https://eldenring.wiki.fextralife.com/Interactive+Map?id=4491&lat=-77.59375&lng=133.02805&code=mapA" target="_blank">Location</a>',
      tags: []
    },
    {
      id: '7a41fc78-27bb-4474-b3f3-755ab0dd38d2',
      description: 'Consecrated Snowfield: Dropped by Anastasia, Tarnished-Eater after her third invasion, on the frozen river southwest of Ordina, Liturgical Town',
      tags: []
    },
    {
      id: "f88a55b3-907a-4940-911e-0f568d1dd4f5",
      description:
        "At the foot of a Golden Tree by a frozen river to the west of Ordina, the Liturgical Town leading to Miquella's Haligtree. Mountaintops of the Giants",
      tags: [GOLDEN_SEED],
    },
    {
      id: '5878151d-9afb-4464-b519-713400eb211d',
      description: 'Ancient Dragon Smithing Stone on a corpse in the frozen waterfall just above Great Wyrm Theodorix. From Cave of the Forlorn site of grace, go outside, turn left and hug the right side then jump up the ledges to get to the other side (from Inner Consecrated Snowfield grace follow the frozen river east)',
      tags: []
    },
    {
      id: '6081caa3-6d2b-4b95-b20c-88daae796559',
      description: 'Reach the Apostate Derelict grace, in the northermost part of Consecrated Snowfield, and interact with the giant Albinauric woman. Latenna will reward you with a Somber Ancient Dragon Smithing Stone',
      tags: [LATENNA_QUESTLINE]
    },

    {
      id: '0255042c-d9a2-4f93-8417-01af7b57877a',
      description: "Farm Rimed Crystal Buds from the trees west of Ordina and use them to craft Freezing Pots",
      tags: []
    },
    {
      id: '52bfb466-e488-4a1b-8eab-7a84dc19ab14',
      description: "beat Ordina's puzzle in Consecrated Snowfield to access Miquella's Haligtree. You can make the assassins visible holding Sentry's Torch in your off hand. You can knock off the snipers from the roofs with a greatbow, the Jar Cannon or long range spells",
      tags: [MILLICENT_QUESTLINE]
    },

    {
      id: '0e23b822-b75d-4dbf-bbd4-d79abd91e44c',
      description: "Get Swarm of Flies incantation (FAI 11, ARC 16) on a corpse along the east wall (in a shallow cave) of the Mohgwyn Palace blood marsh, directly north from the Palace Approach Ledge-Road Site of Grace",
      tags: [OPTIONAL]
    },

    {
      id: 'a38284d6-48d6-46f8-a9b3-5ddc7394ec72',
      description: "Defeat Mohg, Lord of Blood, in Mohgwyn Dynasty Mausoleum. You can make the fight easier by using Purifying Crystal Tear, Mohg's Shackle and weapons or effects that inflict bleed, for example Rivers of Blood, Swarm of Flies, Reduvia, Cross Naginata, Eleonora's Poleblade, Gargoyle's Twinblade, etc, depending on your build",
      tags: []
    },
    // MIQUELLA'S HALIGTREE 120-150 +25
    {
      id: 'd64739ab-d1af-4f9a-a5e5-d83c55064ef4',
      description: "Ancient Dragon Smithing Stone. Can be looted on a corpse below a hugging statue in Miquella's Haligtree, in a round platform with two Misbegottens and one Leonine Misbegotten, right before reaching Haligtree Town Plaza grace",
      tags: []
    },
    {
      id: '559ca9da-af44-4b10-9a1b-600e2bcad198',
      description: "Ancient Dragon Smithing Stone. After Loretta's grace, going down the stairs and then to the top of the round staircase, inside a chest, in the Haligtree.",
      tags: []
    },

    {
      id: 'f8eec561-b286-4873-94dc-2cd6f42efc49',
      description: 'Somber Ancient Dragon Smithing Stone. Elphael, Brace of the Haligtree: Found in a chest hidden between columns near a roof with a corpse carrying an item, after the Prayer Room site of grace in the Haligtree. To reach it, go to the end of the first walkway and jump down to the gazebo with the red scarab, then run up the diagonal support on the other side.  The chest is in a small room',
      tags: []
    },

    {
      id: 'f2a0d3a8-7d42-49e3-9953-c2abc01f5ad5',
      description: 'Somber Ancient Dragon Smithing Stone. Elphael, Brace of the Haligtree: Found on a corpse in the southern end of the ring walkway in the east, near the patrolling Putrid Avatar. To reach this walkway, head out of the Prayer Room site of grace and jump onto the second concrete beam connecting to a tower. Jump from the tower down to the Putrid Avatar and proceed south to the end of the walkway',
      tags: []
    },


    {
      id: '92cba555-80a2-4c16-9a68-57f3d45edf71',
      description: 'Defeat the Lesser Ulcerated Tree Spirit in Elphael. To reach the mini-boss, go to the Drainage Channel site of grace, go west through the doorway, climb up the ladder at the end of the corridor, and go out the doorway on your right at the top. The mini-boss is at the landmass across the gap to the left. To reach it, go up the slope on the right and walk across the tree branch, heading southwest across the gap. You can cheese the mini-boss with ranged attacks from the top of the nearby trunk',
      tags: [MILLICENT_QUESTLINE, GOLDEN_SEED]
    },
    {
      id: '40b248a3-a0e0-48d6-9f55-c3dada723295',
      description: 'Great Grave Glovewort. Elphael, Brace of the Haligtree: Found in the center of the second lake of rot with the Lesser Ulcerated Tree Spirit, past a second set of branches within the inner walls.',
      tags: []
    },
    {
      id: '3804c9ae-0a46-4c21-858c-7da2bfcbb9c7',
      description: 'Find the two summon signs near where the Lesser Ulcerated Tree Spirit was, one to help Millicent and the other to fight her, choose the one to help her',
      tags: [MILLICENT_QUESTLINE]
    },
    {
      id: 'b8381c1f-d842-46e7-9fbc-5dfe104a2176',
      description: 'IFind Millicent near where her summoning sign was, exhaust her dialogue and reload the area. Grab the Unalloyed Gold Needle',
      tags: [MILLICENT_QUESTLINE]
    },
    {
      id: '0d3d7ba1-a092-40fd-80dd-980bca710bdf',
      description: "Return to Gowry in Gowry's Shack. If he is alive, talk to him and kill him to get the Flock's Canvas Talisman and Gowry's Bell Bearing (might need to do defeat Malenia before, I'm not sure)",
      tags: [MILLICENT_QUESTLINE]
    },
    {
      id: 'db8de2c3-7ea1-4f24-bfdc-fbd04ed59f5a',
      description: 'Dragoncrest Greatshield Talisman. Found in a treasure chest on an elevated platform inside the large building in the northeast of Elphael, Brace of the Haligtree. Located inside the building down the branches after the Drainage Channel grace',
      tags: []
    },
    {
      id: 'fe060cba-bcbd-4b3d-bcaf-81e9a0ad07d8',
      description: 'In a graveyard in Elphael, Brace of the Haligtree. From the Haligtree Roots Grace, go back up the elevator, go straight to exit the church and then take a left down the slope filled with Lesser Kindred of Rot. The item will be next to a grave surrounded by more enemies',
      tags: [GHOST_GLOVEWORT_BELL]
    },
    {
      id: '81fc1668-21af-4a10-acfb-34ed93c8a115',
      description: 'Defeat Malenia, Blade of Miquella',
      tags: [MILLICENT_QUESTLINE]
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
      tags: []
    },
    {
      id: '0118db70-2baa-4a66-ba65-c47ea399fe53',
      description: 'Great Grave Glovewort. Farum Azula: Found in a recess in the northeastern-most wall of the upper level of the large building next to the Crumbling Beast Grave Depths site of grace. To reach this upper area, head out of the balcony of the room next to the site of grace and jump up onto the red roof right next to it',
      tags: []
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
      description: 'Defeat Godskin Duo',
      tags: []
    },
    {
      id: 'ba96e3f5-654c-4467-b259-1af9c7667be6',
      description: 'Obtained from defeating The Godskin Duo in Crumbling Farum Azula',
      tags: [SMITHING_STONE_BELL]
    },
    { // SSK +1
      id: "eeb27ac7-8f51-411f-83ed-7dbc909264df",
      description: "Buy a Stonesword Key from the Nomadic Merchant at the eastern side of Weeping Peninsula, next to the Castle Morne Rampart grace",
      tags: []
    },
    { // SSK -2
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
      tags: []
    },
    {
      id: '663d2430-d0f0-42fe-b9c6-c523f8edf982',
      description: 'Great Grave Glovewort. Farum Azula: In the heavily-ruined section in the northwest leading to the Dragon Temple site of grace, there is a pit you can drop down into to reach a narrow hallway below. From here, head into the first archway on the left and up the stairs heading northwest to a ruined balcony where you can navigate across a series of floating debris to reach a second balcony with a ladder. Head up the ladder to reach a hidden tomb with the glovewort sitting on the main sarcophagus in the back',
      tags: []
    },
    {
      id: '6b0328ea-74c9-4042-ae2a-4b6531053420',
      description: 'From Godskin Duo grace go through the left gate (looking at the closest wall, in the left side) and progress until reaching an area where you have to parkour down some floating platforms. Go straight through the path. In the area with the Crucible Knight, stick to the right side and jump to the grace.',
      tags: []
    },
    {
      id: 'eaf93063-9f0f-4b3d-b2ea-c38e272d14c4',
      description: 'Ancient Dragon Smithing Stone. Dropped by the stationary Farum Azula Dragon sitting at the back of the plaza southeast of the Dragon Temple Rooftop site of grace. The dragon is constantly raining red lightning around the area',
      tags: []
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
      tags: []
    },

    {
      id: 'df4104e5-dc8d-4a41-bcb0-41f9706fc83e',
      description: 'Found on a body in the abandoned temple on the North side of Crumbling Farum Azula. Next to an alter at the bottom of the elevator next to Beside the Great Bridge Site of Grace',
      tags: [SOMBER_STONE_BELL]
    },
    {
      id: '2a519808-24ee-41e7-9db9-c04ee98dfa2d',
      description: 'Make sure you collect all items that you need from Leyndell before progressing',
      tags: []
    },
    {
      id: '4b29d14f-ec7a-4729-a457-5af706963d61',
      description: 'Defeat Maliketh, The Black Blade',
      tags: []
    },
    {
      id: '7486d68c-dc53-4bd5-a208-7dd8c7f97652',
      description: 'Ancient Dragon Smithing Stone given by Gurranq, Beast Clergyman after feeding him 9 Deathroot. (or if you don\'t care about his other rewards you can kill him to get the stone without the 9 Deathroot.)',
      tags: []
    },

    // high level Limgrave
    {
      id: '7c69b91c-8643-4e31-ba29-2cbb1615bbab',
      description: 'Buy 2 Stonesword Keys from the Twin Maidens in Roundtable Hold, if you don\'t have them (4000 each)',
      tags: []
    }, // SSK +2
    {
      id: "e80a68b7-f557-434f-a969-ab03b206215a",
      description:
        "Dropped by the Ulcerated Tree Spirit in Fringerfolk Hero's Grave next to Stranded Graveyard grace. You will need 2 stonesword keys to access this area. Limgrave",
      tags: [GOLDEN_SEED],
    }, // SSK -2

    // LEYNDELL, CAPITAL OF ASH 120-180 +25
    {
      id: 'c6f2c251-e6e4-4b5d-8287-fbb416c7625d',
      description: 'Crimson Amber Medallion +2. Found in Leyndell, Capital of Ash, just before entering the Subterranean Shunning-Grounds',
      tags: []
    },

    {
      id: 'e1dee2c7-6ae2-4d67-897a-fc48a0a57d9d',
      description: "Somber Ancient Dragon Smithing Stone. From the main Leyndell, Ashen Capital site of grace (reachable after defeating Maliketh), go west, along and up the dragon. Enter the building past it (the same one that you needed to enter to get up to the Erdtree before it was burnt) and climb the ladder. Over the railing to the right is a gargoyle next to a corpse with the stone. (Note: This will only be available once you've progressed far enough that the city is filled with ash)",
      tags: []
    },

    {
      id: '72698686-712c-4b64-9068-883efd39ff00',
      description: 'Get Rune Arcs by purchasing from merchants and doing coop or pvp. These merchants sell Rune Arcs:',
      tags: [],
      items: [
        {
          id: '68ec53d1-6914-4474-99e2-10f2dc49de3d',
          description: "3 are sold by the Nomadic Merchant in northern Liurnia of the Lakes, near Bellum Church.",
          tags: []
        },
        {
          id: 'bd9ccbde-7fdf-4732-b21d-0f36efae81c8',
          description: "5 are sold by the Twin Maiden Husks at the Roundtable Hold",
          tags: []
        },
        {
          id: '37131092-a19e-42dd-a9ea-65d6580503d9',
          description: "3 are sold by the Hermit Merchant located in eastern Mountaintops of the Giants",
          tags: []
        },
        {
          id: 'c7035a03-0184-4f26-b560-13a90f9cf303',
          description: "3 are sold by the Hermit Merchant at Hermit Merchant's Shack outside Leyndell",
          tags: []
        },
        {
          id: '63bb1888-4532-48c3-9f66-588ca64b5002',
          description: "3 are sold by the Imprisoned Merchant inside the Mohgwyn Dynasty Mausoleum",
          tags: []
        },
      ]
    },

    {
      id: '7dd0a3d6-a653-4855-bc22-1c6dfbd12c32',
      description: 'You\'re done! Feel free to wait for the DLC to drop on June 21st :)'
    },

    {
      id: '065851a5-2baf-4466-8c3c-1125d38d09f4',
      description: 'Beat Gideon',
      tags: [OPTIONAL]
    },
    {
      id: '48d7b453-e4da-4266-a59c-44836c771598',
      description: 'Beat Godfrey',
      tags: [OPTIONAL]
    },
    {
      id: '80046f4a-f025-428e-9381-b08df9088402',
      description: 'Beat Radagon and Elden Beast',
      tags: [OPTIONAL]
    },
    {
      id: "073f039e-4bf9-4ec5-8cbb-029c1978a72b",
      description: "Touch Marika's corpse to get the game ending",
      tags: [OPTIONAL]
    },


  ]
}

export default list