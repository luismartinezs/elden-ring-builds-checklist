import { TAGS } from '~/features/tags'

const { LEDA, FREYJA, MOORE, THIOLLIER, HORNSENT, ANSBACH, QUEELIGN, IGON, DANE, FORAGER, YMIR, JOLAN, DRAGON_PRIESTESS, OPTIONAL, MAP_FRAGMENT, ALL_REMEMBERANCES } = TAGS

const list = {
  id: "f45240fe-9d8c-4200-8e56-3861ebf0b9ab",
  slug: "shadow-of-the-erdtree",
  title: "Shadow of the Erdtree",
  tags: ['new'],
  notes: [
    `Update 12-7: Checklist complete. Please, provide feedback if you see mistakes`,
    `Recommended for second playthroughs.`,
    'You might need to toggle on/off new filters for them to work.'
  ],
  items: [
    {
      id: '160aace3-77ee-486c-b9dc-22560b2b5527',
      description: 'Speak to Leda at the Cocoon of the Empyrean Grace where you defeated Mohg',
      tags: [LEDA]
    },
    {
      id: '53b5bcbd-61de-48f5-9925-66f273169720',
      description: 'Interact with the cocoon in the Empyrean Grace to enter the Realm of Shadow',
      tags: []
    },
    // GRAVESITE PLAIN (CENTRAL) Recommended Scadutree Blessing Rank: 1-3~ Revered Spirit Ash Blessing: 1-3~
    {
      id: 'b14fe46a-2b0a-48aa-9f38-11ddaf1f8d94',
      description: 'Pick up Map Gravesite Plain nearby starting point',
      tags: [MAP_FRAGMENT]
    },
    {
      id: '4fbcb6a4-2af2-4a49-a1f7-4e3bfe209610',
      description: 'Reach the Three-Path Cross Site of Grace, straight north from the starting point',
      tags: []
    },
    {
      id: 'cba6b945-f280-48bb-be9d-cd4f79384947',
      description: 'Speak to Freyja and Hornsent at the Three-Path Cross Grace',
      tags: [FREYJA, HORNSENT]
    },
    // GRAVESITE PLAIN (WESTERN) Recommended Scadutree Blessing Rank: 1-3~ Revered Spirit Ash Blessing: 1-3~
    {
      id: 'f0b69cad-65fa-4aa4-8826-cf65f1d7731d',
      description: 'From the Three-Path Cross grace head west and activate the Main Gate Cross grace',
      tags: []
    },
    {
      id: '7fa1ea8c-3218-4e56-8472-c64070e97691',
      description: 'At Main Gate Cross Grace, purchase something from Moore. Then speak to Moore and Ansbach',
      tags: [MOORE, ANSBACH]
    },
    {
      id: "335fffcf-0cf4-454f-ac29-8d3637ebcffa",
      description: 'Forager Broods look like the Kindred of Rot enemy, but they are friendly, and killing them will result in Moore invading you and then permanently dying. If you kill any two Forager Broods, you will be invaded by Moore, and defeating him will kill him (locking you out of his questline, and potentially out of Thiollier\'s if you did not progress it) and reward you with his shield, his armor and his bell bearing (in his previous location). If Moore dies for any reason, all the Forager Brood will disappear',
      tags: [MOORE, FORAGER]
    },
    {
      id: '339f2473-288d-4071-820d-6e883f6f275b',
      description: 'From the Main Gate Cross grace go south around the cliffs and activate the Cliffroad Terminus grace',
      tags: [OPTIONAL]
    },
    {
      id: 'dcfdc773-d6a4-4b4c-8f95-8adbbf753b65',
      description: 'Head south to find a Forager Brood for Forager Brood Cookbook [2], located south east of the Cliffside Terminus grace. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381284" target="_blank">Location</a>',
      tags: [FORAGER]
    },
    // BELURAT TOWER SETTLEMENT
    // Recommended Scadutree Blessing Rank: 4~ Revered Spirit Ash Blessing: 4~
    {
      id: '59b21622-00aa-4f5f-8b10-e882be11006e',
      description: 'Defeat the invading Fire Knight Queelign, taking a left from the Small Private Altar Grace in Belurat',
      tags: [QUEELIGN]
    },
    {
      id: 'c70c3255-5bb4-4795-9346-8095e7e7e8f0',
      description: 'After finding the cross in Belurat, speak to Ansbach at the Main Gate Cross. Location: starting at Small Private Altar, continue until you reach a path going left and right. Head left until you find small Spider Scorpions, then climb over the broken walls to the right of the path.',
      tags: [ANSBACH]
    },
    {
      id: 'c40568c2-7a0c-4f0b-ba1a-82a1e9191acb',
      description: "Speak to Hornsent Grandam in the Belurat Storage Room, veering left after the Small Private Altar Grace. You'll first need to pick up the Storeroom Key, which is on the main path between this Grace and the next.",
      tags: [HORNSENT]
    },
    {
      id: 'a325b983-a545-430d-8897-222bc6cb0b6f',
      description: '(Optional) Summon Freyja to fight the Divine Beast Dancing Lion. Then, speak to her at the Three-Path Cross Grace',
      tags: [FREYJA]
    },
    {
      id: '71b352b1-8a47-4a46-8259-aa7d7e8b70a9',
      description: `Defeat the Divine Beast Dancing Lion in Belurat. It's weak to pierce, fire, bleed and scarlet rot, and strong vs magic, lightning, holy and frost.`,
      tags: []
    },
    {
      id: '46db7e3d-9e04-4e4f-9f9b-7b420b0a9ede',
      description: 'Return to speak to Hornsent Grandam wearing the Divine Beast Head. Then speak to Hornsent and give him the soup.',
      tags: [HORNSENT]
    },
    // "GRAVESITE PLAIN (EASTERN)
    // Recommended Scadutree Blessing Rank: 4~ Revered Spirit Ash Blessing: 4~"
    {
      id: '441c3860-dcb0-42f7-87e8-adf49680dc2c',
      description: 'From the Three-Path Cross grace, head north east across the Ellac Greatbridge and activate the Castle Front grace',
      tags: []
    },
    {
      id: '16d7fc13-f609-420d-8efe-e0049fa51f0d',
      description: 'From the Castle Front grace head south and take the easter-most path to reach the Pillar Path Cross grace',
      tags: [OPTIONAL]
    },
    {
      id: '6fff135f-b11f-40cb-a58d-02d002d9a2e6',
      description: 'Speak to Thiollier at the Pillar Path Cross Grace. Then, speak to Moore at the Main Gate Cross Grace to get the Black Syrup. Then return to Thiollier and give him the Black Syrup.',
      tags: [THIOLLIER, MOORE]
    },
    {
      id: '75780527-172a-49be-b870-08e094f53d03',
      description: 'From the Pillar Path Cross grace head north west and then immediately south to reach the Pillar Path Waypoint grace',
      tags: [OPTIONAL]
    },
    {
      id: '64674ade-ccd9-4ed0-b3e4-0a3a43beb752',
      description: 'Speak to Igon near the Pillar Path Waypoint Grace. Leave and come back to speak to him again.',
      tags: [IGON]
    },
    {
      id: '27efa65e-87b2-4724-8ce3-702b7d07d540',
      description: "Head south an down from the Pillar Path Waypoint grace to reach the Dragon's Pit grace",
      tags: [OPTIONAL]
    },
    // "CASTLE ENSIS
    // Recommended Scadutree Blessing Rank: 6~ Revered Spirit Ash Blessing: 6~"

    {
      id: 'e16f6de8-4ebc-4773-a37c-2973c270071c',
      description: "Go through the Dragon Pit and head south to speak to the Dragon Communion Priestess at the Grand Altar of Dragon Communion. Choose whether to give her the potion from Thiollier (must be given at night). At the end of her questline, if you don't give her the potion, you receive a consumable and a weapon; if you do, you'll receive an incantation and spirit ashes.",
      tags: [DRAGON_PRIESTESS]
    },
    {
      id: "a278cef5-e169-4243-8fb8-929e68072bf6",
      description: 'Reach the Cerulean Coast Grace. To get to the Cerulean Coast, you can either jump down some Ruins from the Dragon Altar or you can head down the cliff from the Pillar Path Cross adn follow the Ellac river through the Ellac River Cave. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382048" target="_blank">Location</a>',
      tags: [OPTIONAL, ANSBACH, FORAGER]
    },
    {
      id: '0a683160-a101-4810-b197-ec074f2b29d1',
      description: 'After finding the Cerulean Coast Cross, speak to Ansbach at the Main Gate Cross.',
      tags: [ANSBACH]
    },
    {
      id: "60e03341-dfba-459a-a715-cb3084b63608",
      description: `Pick up Map: Southern Shore. From the Cerulean Coast - Site of Grace, go directly north west`,
      tags: [MAP_FRAGMENT]
    },
    {
      id: 'b2e273f6-dacb-4edb-9ab2-eb2d03415637',
      description: 'Find a Forager Brood for Forager Brood Cookbook [3], located north northeast of the Cerulean Coast Grace. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382588" target="_blank">Location</a>',
      tags: [FORAGER]
    },
    {
      id: '64efd205-e7a6-4143-a484-e2e506f0d8a1',
      description: '(Optional) Summon Leda to fight Rellana in Castle Ensis',
      tags: [LEDA]
    },
    {
      id: 'b92aa5aa-ea41-4f69-a65e-f27936c95129',
      description: `Defeat Rellana, Twin Moon Knight in Castle Ensis. She's weak to pierce, lightning, poison, scarlet rot and sleep, and strong vs slash and magic`,
      tags: []
    },
    // "SCADU ALTUS
    // Recommended Scadutree Blessing Rank: 8~ Revered Spirit Ash Blessing: 5~"
    {
      id: '72c208ba-f543-427c-a79d-e07af119d7bc',
      description: "Reach Highroad Cross grace right after Rellana's boss room",
      tags: []
    },
    {
      id: '52a13da4-4a43-42d0-9a4d-93fea13a8484',
      description: 'Talk to Leda and Hornsent at the Highcross Road Grace. Then speak to Freyja at Three-Path Cross Grace',
      tags: [LEDA, HORNSENT, FREYJA]
    },
    {
      id: "715310d7-950b-4f40-9cb2-00b186bd70a8",
      description: 'Pick up the Monk\'s Missive next to the Highcross Road Grace to get the "May the Best Win" gesture',
      tags: [DANE]
    },
    {
      id: '9cb43083-9000-4217-a6b1-982aeb4285b5',
      description: 'Pick up Map: Scadu Altus north from Highroad Cross grace',
      tags: [MAP_FRAGMENT]
    },
    {
      id: 'a2700708-5631-4eec-bf4e-b81ce5d5d6a4',
      description: 'Defeat the invading Fire Knight Queelign at the Church of the Crusade',
      tags: [QUEELIGN]
    },
    {
      id: 'ef7f61c1-0c0b-43c2-98c9-77cff1f0f053',
      description: 'Find an injured Forager Brood, located North of the Church of the Crusade. Heal it with an item such as a Warming Stone, if successfully healed, it will stand up. Then, reload the area and return to that location to get Forager Brood Cookbook [4]. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382727" target="_blank">Location</a>',
      tags: [FORAGER, MOORE]
    },
    {
      id: '3100c1c5-5ded-4db0-a458-5c1b0df8d269',
      description: 'After receiving Forager Brood Cookbook [4], talk to Moore to receive Forager Brood Cookbook [7]',
      tags: [FORAGER, MOORE]
    },
    {
      id: 'aad4807d-9bb7-4ccf-90f9-f9e07e0c2c81',
      description: 'From where you picked the Scadu Altus map, head south east to reach Moorth Ruins',
      tags: [OPTIONAL, DANE]
    },
    {
      id: '1f6548bf-abf0-404d-abba-bd9b5fad6b1b',
      description: 'Talk to Dryleaf Dane at the Moorth Ruins Grace. Then, talk to Leda at the Highcross Road Grace. Return to Dane and do the "May the Best Win" gesture to trigger a duel.',
      tags: [DANE]
    },
    {
      id: '5fff0e9f-825a-412f-85f1-c8366ccd9d3f',
      description: 'Find a Forager Brood for Forager Brood Cookbook [1], located north west of the Ruined Forge of Starfall Past. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=380330" target="_blank">Location</a>',
      tags: [FORAGER]
    },
    // "RAUH BASE
    // Recommended Scadutree Blessing Rank: 9~ Revered Spirit Ash Blessing: 6~"
    {
      id: 'd2b90bbc-5e4b-43c0-aff8-e02fe59ae10d',
      description: 'Find a Forager Brood for Forager Brood Cookbook [5] by heading North from the Moorth Highway through a tunnel at the North end of the poison lake, on the way to Rauh Base. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382244" target="_blank">Location</a>',
      tags: [FORAGER]
    },
    {
      id: '4f573a65-9b2f-4f8b-8a8c-f2d8439cd91e',
      description: 'Reach Ancient Ruins Base grace: Travel north from Moorth Ruins until reaching a poison swamp, then go across a cave west of the swamp',
      tags: [OPTIONAL]
    },
    {
      id: '0c01e0e0-687f-4110-b858-64ac95af81fe',
      description: 'Obtain the Map: Rauh Ruins located south west from the Ancient Ruins Base grace',
      tags: [MAP_FRAGMENT]
    },
    {
      id: 'ae6a1c22-7bad-4975-a0dc-41286bf4ac89',
      description: 'After finding the Scaduview Cross, speak to Ansbach. Location: From Moorth Highway, South Grace, head out toward the encampment and follow the Eastern cliffside around. Pass the closed Spiritspring, you will find rocks to break to open the Spiritspring. Take that up to this cross.',
      tags: [ANSBACH]
    },
    {
      id: '7268f0a1-4ed6-4be5-a072-c4e95a60ad27',
      description: 'Head down the hole in Moorth Ruins and reach Bonny Village.',
      tags: [OPTIONAL, YMIR]
    },
    {
      id: 'db106066-8077-4543-adc9-57446b16e59a',
      description: 'Get "O, Mother" gesture north of Bonny Village, in front of a headless statue',
      tags: [OPTIONAL, YMIR]
    },
    {
      id: 'd5e78d2d-f56a-4f40-b499-e22d8dabc87a',
      description: 'Going south from Moorth ruins to reach Moorth Highway grace and Fort Reprimand',
      tags: [OPTIONAL, QUEELIGN, JOLAN]
    },
    {
      id: '0fc64672-1876-45d8-9fa7-f3dbef41de7b',
      description: `You need one or two Iris of Occultation and / or Iris of grace for Queelign and Jolan questlines, depending on the rewards you want, so in the following steps just get the ones you need. See the <a href="/npc-questline-rewards">NPC questline rewards</a> page for more information.`,
      tags: [QUEELIGN, JOLAN]
    },
    {
      id: "5546cdab-66e7-4365-a937-7fbba17ab8ac",
      description: "Get an Iris of Occultation: From the central hall in Fort Reprimand, drop down a hole and defeat the Horned Warrior.",
      tags: [QUEELIGN, JOLAN]
    },
    {
      id: '680b0170-fb0d-4af2-98f6-8ed7c3898545',
      description: 'From Bonny Village grace, head east across the bridges to reach Bridge Leading to Village grace.',
      tags: [OPTIONAL, YMIR]
    },
    {
      id: "a5e34a75-2d9f-4ac4-8761-1b99a8f1b24e",
      description: 'As you approach either the Shadow Keep front entrance, east Scadu Altus (from Bonny village), or Rauh Base from any direction, you will receive a message “Somewhere a Great Rune Has Broken” and "And so too has a powerful charm". At this point: 1/ You can progress through the Stone Coffin Fissure, 2/Many NPC questlines will progress (do not talk to the NPCs yet as some have important choices, see later steps).',
      tags: []
    },
    {
      id: '9fd2dd74-51a0-4705-9f35-253079e99cee',
      description: 'From Bridge Leading to Village grace, go north, then west, then south, to reach the Cathedral of Manus Metyr grace',
      tags: [OPTIONAL, YMIR]
    },
    {
      id: '2da2234e-1d10-4e71-8a71-2df90e5de41c',
      description: 'Find a Forager Brood for Forager Brood Cookbook [6], located just outside the Church District Entrance. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381262" target="_blank">Location</a>',
      tags: [FORAGER]
    },
    {
      id: "b835f08b-f4a9-4f48-9666-f5dd4f56c94c",
      description: `Talk to Moore and choose one of the options. "Put it Behind You": Moore will fight you in the end game, after which you can get his loot. "Remain Sad Forever": After you change location, he will move to the north of Church of the Crusade (<a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=382727" target="_blank">Location</a>) where you can get his loot, if you make this choice the Forager Broods will disappear. "I Don't Know": Moore will stay in his current location.`,
      tags: [MOORE]
    },
    {
      id: "a4cd48ce-ec9e-4792-9f79-6eaee5aac030",
      description: `Talk to Leda and make a choice: "Suggest Thiollier": Nothing will happen. "Suggest Hornsent" and "Make no suggestion": It will trigger an NPC fight later in Shadow Keep and a choice to either side with Leda or with Hornsent.`,
      tags: [LEDA, HORNSENT]
    },
    {
      id: '1c99dfec-159e-43af-84ae-0e866b459b3d',
      description: "Exhaust the dialogue with Hornsent, Thiollier, Freyja, and Ansbach.",
      tags: [HORNSENT, THIOLLIER, FREYJA, ANSBACH]
    },
    // "SHADOW KEEP
    //  (CHURCH DISTRICT AND SCADUTREE BASE)
    // Recommended Scadutree Blessing Rank: 9+ Revered Spirit Ash Blessing: 6+"
    {
      id: '130cdf49-2e71-44d1-a414-57afc58d6bd0',
      description: 'From Church District Highroad grace head west and enter Shadow Keep through the Church District Entrance',
      tags: [OPTIONAL]
    },
    {
      id: '2e5f319e-2f05-4f16-b90c-084dfc1b2861',
      description: 'Drain the water from the Church District using the lever: parkour through the roofs sticking to the right side, then drop down inside the church, then go left through the first archway with giant bats.',
      tags: [OPTIONAL]
    },
    {
      id: 'adcdd0cb-d347-4c5e-876d-8866a28746c4',
      description: `Get an Iris of Occultation: In the Church District, defeat the second Ulcerated Tree Spirit, the one that does not spawn hear the dead tree. <a href="https://mapgenie.io/elden-ring/maps/the-shadow-realm?locationIds=381818" target="_blank">Location</a>`,
      tags: [QUEELIGN, JOLAN]
    },
    {
      id: 'e6f3c2f6-aac0-448b-baf8-8214aaae162f',
      description: 'Reach Tree Worship Passage grace: from the Church District enter the church from the ground floor and stick to the right side until finding a passage and an elevator',
      tags: [OPTIONAL]
    },
    {
      id: "09da374c-4156-434f-a7ef-6be551a8dd18",
      description: `Get the Iris of Grace at the altar to Marika above Tree-Worship Sanctum`,
      tags: [QUEELIGN, JOLAN]
    },
    {
      id: '1c79db1e-8c01-4fae-b136-93dd0323e432',
      description: 'Reach the Storehouse, Back Section grace: from the second floor of the church in the Church District, go through the circular passage with the Fire Knights, then go through the second left and up the elevator.',
      tags: [OPTIONAL, QUEELIGN, JOLAN]
    },
    {
      id: 'a7dfc66d-e6c1-4829-92cf-59c66955b6c7',
      description: 'From the Storehouse, Back Section grace, jump down the platforms to reach the Storehouse, First Floor grace',
      tags: []
    },
    {
      id: "aa24efc9-6e8f-4723-8ed7-5ef7dec3a142",
      description: "From the Storehouse, First Floor grace, take the left (north-west west) lift down. Take the first exit to the right and continue forward until the end of the hallway, take the right path down and head west to reach the West Rampart grace",
      tags: []
    },
    {
      id: 'a7dfc66d-e6c1-4829-92cf-59c66955b6c7',
      description: 'Get the Iris of Grace in the Shadow Keep: the the opposite side of the hallway where the West Rampart grace is located',
      tags: [QUEELIGN, JOLAN]
    },
    {
      id: 'be03242d-046e-47ae-ba0a-d1b7e23225cf',
      description: 'Use the Prayer Room Key on a locked door in the Church District to speak to Queelign. You can choose to give him an Iris of Grace, resulting in him turning into spirit ashes or an Iris of Occultation, resulting in him dying and dropping his weapon. To reach this room, parkour through the roofs in the Church District until dropping down to the second floor of the church, then instead of going through the circular passage with the Fire Knights, go in the opposite direction.',
      tags: [QUEELIGN]
    },
    {
      id: '6d299771-9e9e-438b-bd33-198dbc34b6a4',
      description: `Defeat Scadutree Avatar. It's weak to strike, fire and frostbite, strong vs magic and holy and immune to bleed.`,
      tags: [OPTIONAL, ALL_REMEMBERANCES]
    },
    {
      id: '1718d53e-c09d-4946-af23-962af45d318d',
      description: "After defeating Scadutree Avatar obtain Miquella's Great Rune",
      tags: [OPTIONAL]
    },
    {
      id: 'd3d06756-f54a-49e3-a129-49a7d1e8d20a',
      description: 'Reach the Storehouse, Loft Site of Grace: from the Storehouse, Back Section grace go up the ladder, then up the staircase to the right. There will be a bookshelf immediately on the right side. Walk to the right of the bookshelf and go through the hole in the wall.',
      tags: [OPTIONAL]
    },
    {
      id: 'dfc583ff-b709-4c5c-9e65-14ef53ae4962',
      description: 'Reach the Shadow Keep, Back Gate Site of Grace: from the Storehouse, Loft Site of Grace go up the elevator, walk through the beams until reaching a cogwheel with an item and a Giant Bat. Drop down the cogwheel, then to the beam next to it and then down to the nearest platform. Go outside and take the elevator down.',
      tags: [OPTIONAL]
    },
    // "CERULEAN COAST (SOUTHERN SHORE)
    // Recommended Scadutree Blessing Rank: 10~ Revered Spirit Ash Blessing: 7~"
    {
      id: 'cdea3ceb-81c7-45fd-a6bb-6a5d0ad6832e',
      description: 'Speak to Ymir at the Cathedral of Manus Metyr to receive the Ruins Map and Hole-Laden Necklace. Reload the area and Jolan will appear by a Pillar. Exhaust her dialogue, then ask Ymir about her.',
      tags: [YMIR, JOLAN]
    },
    {
      id: "081b4202-2783-4916-93e6-a0cf94d12f99",
      description: "Reach the Stone Coffin Fissure: from the Cerulean Coast Cross go to the peninsule in the south west by bordering the coast. Then progress throught he area until reaching the Fissure Depths grace",
      tags: [OPTIONAL, THIOLLIER]
    },
    {
      id: "115fc199-5fa7-4f5b-b03f-1eedc60ac6ef",
      description: "(optional) Fall down into the Putrescent Knight arena, find Thiollier's summon sign in front and to the right, and summon him.",
      tags: [THIOLLIER]
    },
    {
      id: "691a3a3c-d7fd-4252-9111-0feeffacb2b3",
      description: "Defeat the Putrescent Knight. He's weak to Holy and Scarlet Rot, strong vs slash and pierce and immune to poison, bleed and frostbite. High magic defense is recommended for this fight, you can also jump to avoid his AoE magic attacks.",
      tags: [OPTIONAL, ALL_REMEMBERANCES]
    },
    {
      id: '32f7f51b-5a51-4fe3-8859-77b43740730d',
      description: 'Speak to Thiollier after defeating the Putrescent Knight. Imbibe the nectar from St. Trina four times (until St. Trina talks to you). Then speak to Thiollier and exhaust his dialogue. Imbibe the nectar again. This time Thiollier will invade. Defeat him. Then imbibe the nectar again and speak to Thiollier again. St. Trina should repeat herself if you continue imbibing.',
      tags: [THIOLLIER]
    },
    // "FINGER RUINS OF RHIA
    // Recommended Scadutree Blessing Rank: 11~ Revered Spirit Ash Blessing: 7~"
    {
      id: '23a5b912-f25f-4b17-873d-7a33ff54ca70',
      description: 'Make your way to the Finger Ruins of Rhia Grace from Cerulean Coast or from Great Altar of Dragon Communion going around the back side of the huge dragon',
      tags: [YMIR, JOLAN]
    },
    {
      id: '85c78add-ea30-419d-9cf8-e7fb65d4edc9',
      description: 'Use the Hole-Laden Necklace to interact with the hanging bell in the center of the Finger Ruins of Rhia',
      tags: [YMIR, JOLAN]
    },
    {
      id: '1435ccb7-4f03-4a16-86a5-99cfc8b5b862',
      description: `Speak with Ymir to get the Ruins Map (2nd) and Beloved Stardust. Then speak to Jolan. She should say something about placing her trust in you. At this point, if you do not care about summoning Jolan to aid against Messmer, you can now progress Ymir and Jolan's questline until the end. Note: you can choose one of two summons to aid against Messmer: Hornsent or Jolan, but not both.`,
      tags: [YMIR, JOLAN]
    },
    // "CHARO'S HIDDEN GRAVE
    // Recommended Scadutree Blessing Rank: 11~ Revered Spirit Ash Blessing: 7~"
    {
      "id": "7b052a9e-27ad-444d-917b-bc9364d12299",
      "description": `From the Grand Altar of Dragon Communion, go south west to reach Charo's Hidden Grave. If you progress the to the north west, you will reach Charo's Hidden Grave grace, from where you can explore the area`,
      "tags": [
        OPTIONAL
      ]
    },
    //     "SCADUVIEW
    // Recommended Scadutree Blessing Rank: 11~ Revered Spirit Ash Blessing: 8~"
    {
      "id": "aed10b05-823c-41de-87a8-d41e1a53ba89",
      "description": `From Shadow Keep, Back Gate - Site of Grace, defeat Commander Gaius. He's weak to holy and strong vs slash, bleed and frost`,
      "tags": [
        OPTIONAL,
        ALL_REMEMBERANCES
      ]
    },
    //  JAGGED PEAK
    // Recommended Scadutree Blessing Rank: 13~ Revered Spirit Ash Blessing: 6~
    {
      "id": "6bd7fc07-417b-4133-8f57-65cff477a3a9",
      "description": `From the Dragon's Pit Terminus grace, go east and defeat the Jagged Peak Drake (not sure if this is needed to complete Igon's questline)`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "59a24488-6c46-416d-9540-8b1ee8fe2a7a",
      "description": `From the Dragon's Pit Terminus - Site of Grace, take the way left after reaching the sleeping dragon and find the Foot of Jagged Peak - Site of Grace`,
      "tags": [
        OPTIONAL,
        IGON,
        DRAGON_PRIESTESS
      ]
    },
    {
      "id": "96792655-cb7c-4174-9ef2-36a1ac410cc0",
      "description": `From the Foot of Jagged Peak grace, defeat the two Jagged Peak Drakes fighting each other (not sure if this is needed to complete Igon's questline)`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "8a96c0d5-2b47-41d3-bba0-c29432a1d360",
      "description": `From the Foot of Jagged Peak grace, go past where the two dragons were fighting, find Igon and get Igon's Furled Finger`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "f3eb9595-c3a6-411d-8c43-2c96f95cf39a",
      "description": `Progress from the Jagged Peak grace up the mountain to reach the Jagged Peak Mountainside - Site of Grace (right after the Ancient Dragon Senessax)`,
      "tags": [
        OPTIONAL,
        IGON,
        DRAGON_PRIESTESS
      ]
    },
    {
      "id": "e683fc3d-3a29-401f-91e9-3777ec3f28ba",
      "description": `Defeat Ancient Dragon Senessax near the Jagged Peak Mountainside grace (not sure if this is needed to complete Igon's questline)`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "ad0605c6-b1f9-400b-96a8-265131d75cf9",
      "description": `From Jagged Peak Mountainside grace, reach Jagged Peak Summit grace`,
      "tags": [
        IGON,
        OPTIONAL,
        DRAGON_PRIESTESS
      ]
    },
    {
      "id": "8db06c83-0add-44c2-87d9-88902b9e4b44",
      "description": `Summon Igon to assist you in defeating Bayle the Dread. Igon's summon sign is found inside Bayle's arena, near the front of the entrance, in the right side`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "360be8a4-66be-4dff-91b3-7d2df692fb40",
      "description": `Defeat Bayle The Dread. He's weak to pierce and receives more damage to the head and the leg stump`,
      "tags": [
        OPTIONAL,
        ALL_REMEMBERANCES,
        DRAGON_PRIESTESS,
        IGON
      ]
    },
    {
      "id": "d2660a4c-2708-4507-b073-c9ab62288dd1",
      "description": `Find Igon near where the two Jagged Peak Drakes were fighting to get his weapon, armor and bell bearing`,
      "tags": [
        IGON
      ]
    },
    {
      "id": "dac4a7f2-1046-4bc5-bac7-b7ed9d610d20",
      "description": `Go to the Grand Altar of Dragon Communion and get the questline rewards, which will differ depending on whether you used Thiollier's Concoction on her or not`,
      "tags": [
        DRAGON_PRIESTESS
      ]
    },
    //     "SHADOW KEEP DEPTHS
    //  (MAIN GATE TO RECLUSE RIVER)
    // Recommended Scadutree Blessing Rank: 14~ Revered Spirit Ash Blessing: 7~"
    {
      "id": "a5825291-cf61-44c2-ad6c-a8b87a6acc3f",
      "description": `From the Highroad Cross head north to reach the Shadow Keep Main Gate grace`,
      "tags": []
    },
    {
      "id": "709fe7b8-00ab-4e80-975c-a504935a2ef4",
      "description": `Summon Redmane Freyja and Hornsent to assist in the fight against Golden Hippopotamus`,
      "tags": [
        FREYJA,
        HORNSENT
      ]
    },
    {
      "id": "d6958137-42ab-49c7-8ac9-4bb121a89241",
      "description": `Defeat Golden Hippopotamus. It's weak to fire and lightning and strong vs bleed and frost`,
      "tags": []
    },
    {
      id: 'e8b1e2ec-b449-49c9-9fac-eaa69f468568',
      description: "Past the Main Gate Plaza, you will reach an area with 6 burning boats and a ramp leading down. Go down the ramp to open a shortcut",
      tags: []
    },
    {
      id: '7a75af68-3002-4505-8af5-bc342b64e429',
      description: "In the area with 6 burning boats in Shadow Keep, near the ramp, there are a pair of summon signs for a fight between Leda and Hornsent. Choosing Leda will provide you with the Hornsent Set along with the curved sword Falx and the Lacerating Crossed-Tree Talisman (after you talk to Leda again). Choosing Hornsent will provide you with the Ash of War: Swift Slash and Leda's Rune. It will also lock you out of the Leda/Anbach storeroom fight. If you do not choose either, the fight doesn't happen.",
      tags: [LEDA, HORNSENT]
    },
    {
      id: "1278efee-3785-43f8-9be5-f25bc334f0ae",
      description: `If you chose to side with Leda against Hornsent, speak to Leda to receive the Lacerating Crossed-Tree Talisman. If you rest at a grace, Leda will say she's considering targetting Ansbach.`,
      tags: [LEDA]
    },
    //     "ABYSSAL WOODS
    // Recommended Scadutree Blessing Rank: 12~ Revered Spirit Ash Blessing: 8~"
    {
      "id": "ecc06af8-e60f-4e8f-996d-dd041cbf57eb",
      "description": `In Shadow Keep, in the southeastern part of the platform with the burning ships there is a ladder going down. Break a secret wall in a room with a painting. Rest in the coffin behind it and reach the Castle Watering Hole grace and the Ruins of Unte`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "17185f3f-b003-4668-b1cc-805994568125",
      "description": `From the Castle Watering Hole, go south and touch the Recluses' River Upstream grace`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "41021483-e401-47f6-a22a-8af999c4dc7a",
      "description": `From the Recluses' River Upstream grace progress down the mountainside path south until reaching the Recluses' River Downstream grace`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "c6a126d8-89f0-4e01-8d82-1403638074b9",
      "description": `From the Recluses' River Downstream grace go south to reach the Darklight Catacombs. Progress through the catacombs and defeat the boss to reach the Forsaken Graveyard grace`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "63a01154-68d6-46d7-ba0d-1ffb045dc96e",
      "description": `From the Forsaken Graveyard grace go into the Abyssal Woods and touch the Woodland Trail grace`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "c2217d2d-d6ea-4611-ace4-ba33ad7f3e66",
      "description": `From the Woodland Trail go south east, find the Church Ruins grace and pick the Map: Abyssal Woods`,
      "tags": [
        MAP_FRAGMENT
      ]
    },
    {
      "id": "c9acaf84-f9e9-4dcf-8aa9-db346d0b948b",
      "description": `From the Woodland Trail grace go west to touch Abyssal Woods grace, then progress through the area until reaching Midra's Manse and the Manse Hall grace`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "38450ce5-23ce-4964-85a5-5599805fd061",
      "description": `Defeat Midra, Lord of Frenzied Flame. He's weak to slash and strong vs fire, poison and scarlet rot. High resistance to fire and madness is recommended`,
      "tags": [
        OPTIONAL,
        ALL_REMEMBERANCES
      ]
    },
    //     "SHADOW KEEP (FROM MAIN PLAZA)
    // Recommended Scadutree Blessing Rank: 13-14 Revered Spirit Ash Blessing: 8~
    {
      "id": "e6725886-b315-4fc7-b334-832575fef820",
      "description": `From the First Floor Site of Grace, find Ansbach in a room in the same floor and exhaust his dialoge.`,
      "tags": [
        ANSBACH, LEDA
      ]
    },
    {
      "id": "fb65357c-4aa5-484a-8262-6ec228c6af7f",
      "description": `Explore further the Storehouse until finding the Storehouse, Fourth Floor grace`,
      "tags": []
    },
    {
      "id": "097f711e-fc88-4565-9c82-c4044af2e70f",
      "description": `Find the Secret Rite Scroll: From Shadow Keep, Fourth Floor: In the area where you find the opening that leads outside to get to the fifth floor, check all the bookcases, the one closer to the edge of the area, has this item`,
      "tags": [
        ANSBACH,
        FREYJA
      ]
    },
    {
      "id": "977cde66-6f83-4b57-aa76-b56172191500",
      "description": `Explore further the Storehouse until finding the Storehouse, Seventh Floor grace`,
      "tags": []
    },
    {
      "id": "5bbfd0e2-6325-4917-8f16-07c1b32a497e",
      "description": `Talk to Redmane Freyja next to the Storehouse, Seventh Floor grace`,
      "tags": [
        ANSBACH,
        FREYJA
      ]
    },
    {
      "id": "40ed6d9a-9119-488b-8792-878a3938a805",
      "description": `Find Ansbach in the first floor of the Storehouse and give him the Secret Rite Scroll and exhaust his dialogue to get the Letter to Freyja, then return to Freyja, give her the letter and exhaust her dialogue`,
      "tags": [
        ANSBACH,
        FREYJA
      ]
    },
    {
      "id": "97e6d05d-3827-46f8-8e08-3a058ed19248",
      "description": `From the Storehouse, Seventh Floor grace reach the sixth floor and pull the lever that causes the specimens to move, after which you can go up the platforms that just moved and up the specimens to reach a balcony that leads to the Dark Chamber Entrance grace`,
      "tags": []
    },
    // TODO
    {
      "id": "159441c0-bca6-4cf4-8cf0-bf9f1cf8447c",
      "description": `Optionally, you can summon either Hornsent or Jolan (if you progressed her questline to the point where he gives you some praise) to fight Messmer the Impaler, their summon signs are inside the arena, within the circular room, near the entrance: Hornsent's to the right and Jolan's to the left. If you use one summon sign, the other will disappear. Note that you cannot summon Jolan if you progress her and Ymir's questline further. If you do not summon Hornsent, he will not invade in the Ruins of Rauh and he will attack you in the NPC battle in Enir-Ilim.`,
      "tags": [
        HORNSENT,
        JOLAN
      ]
    },
    {
      "id": "1aedaff4-c0a4-4f03-ba7d-1cda76fac64c",
      "description": `Defeat Messmer the Impaler, he's weak to slash, holy and frost and strong vs fire.`,
      "tags": []
    },
    {
      id: "39d8f949-0ac4-4d32-9c6a-7ff006213683",
      description: "After defeating Messmer, you can find Hornsent in the arena and speak to him",
      tags: [HORNSENT]
    },
    {
      "id": "464be176-47a3-44e0-bd8c-4dd617d785d1",
      "description": `Travel to Hornsent Grandam in Belurat, Tower Settlement by teleporting near her site of grace. Speak with her (Divine Beast Head must be equipped) and you will receive a Gourmet Scorpion Stew`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      id: 'c867d42e-61b7-4ed5-96ca-fd5a6e3df9bd',
      description: 'If Leda is still at High Cross Road, exhaust her dialogue, reloading the area until she starts to repeat herself.',
      tags: [LEDA]
    },
    {
      id: '299a2945-0e91-4504-b2d5-665c2be48da4',
      description: `If you did not help Hornsent in the fight against Leda (you helped Leda or skipped the fight) and you summoned Hornsent against Messmer (don't know if that's required), return to the First Floor Storeroom where Ansbach was to find a pair of summon signs for a fight between Leda and Ansbach. If you help Leda, you will get Ansbach items and you will be locked out of his questline (not recommended). If you help Ansbach, you get Ansbach's Longbow and Leda's Rune`,
      tags: [ANSBACH, LEDA]
    },
       //     "HINTERLANDS
    // Recommended Scadutree Blessing Rank: 13~ Revered Spirit Ash Blessing: 6~"
    {
      "id": "9e10b874-f3cb-433e-b168-a75e1d0aa527",
      "description": `Access the Hinterlands by using "O, Mother" gesture in front of Marika's Altar next to Shadow Keep, Back Gate`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "8fc3af74-f88c-41c7-bf79-56f2709b9c12",
      "description": `From Hinterlands, explore Shaman Village to the east uphill, there is a Minor Erdtree incantation, a Marika's Rune and a Golden Braid talisman (can be useful vs the final boss)`,
      "tags": [
        OPTIONAL
      ]
    },
    {
      "id": "0df97475-f0bb-4b41-a496-de6f461ab6d0",
      "description": `Travel east from the Hinterlands and across the bridge, then south, to reach the Fingerstone Hill grace and Finger Ruins of Dheo`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "5af5ec67-5e08-44f7-8317-4ae496e43388",
      "description": `Reach the center of Finger Ruins of Dheo and interact with the bell and you will be granted the Cerulean Seed Talisman +1`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "32a84309-b296-4944-8779-08e2b7617c26",
      "description": `Speak to Ymir in the Cathedral of Manus Methyr to get the Ruins Map (3rd), then fast travel somewhere else, and return to the cathedral. Ymir should not be there. Examine the throne where he was seated to uncover a ladder. Take the ladder down to reach the Finger Ruins of Miyr`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "2bc05c3c-833a-4de6-adea-b8540c177b39",
      "description": `Defeat invader Swordhand of Night Anna in Finger Ruins of Miyr`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "55ef66ba-48bc-4d71-92eb-4597eb5297b4",
      "description": `Interact with the hanging bell in Finger Ruins of Miyr to be teleported to Metyr, Mother of Fingers arena`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "6738655f-2399-4629-803c-68eaafa930c4",
      "description": `Defeat Metyr, Mother of Fingers. She's weak to slash and strong vs magic, fire, lightning and holy. She takes more damage in the belly`,
      "tags": [
        YMIR,
        JOLAN,
        ALL_REMEMBERANCES
      ]
    },
    {
      "id": "bad3e43d-acd3-459e-9dd1-7a493ccfd18f",
      "description": `Interact with the throne in Cathedral of Manus Metyr, defeat the invader Swordhand of Night Jolan and then defeat Count Ymir, Mother of Fingers. You will receive his set, Ymir's bell bearing and the Maternal Staff`,
      "tags": [
        YMIR,
        JOLAN
      ]
    },
    {
      "id": "306956bf-57db-43cb-97b8-e48803b17b54",
      "description": `Rest at a grace and return to Jolan's initial spot. Give her the Iris of Grace to get Swordhand of Night Jolan spirit ash (and also allow you to progress her questline to get an upgraded spirit summon), or the Iris of Occultation to get the Sword of Night (and her her questline).`,
      "tags": [
        JOLAN
      ]
    },
    {
      "id": "f35dedbb-0748-4042-8bf9-51bfbf6eafa9",
      "description": `If you gave Jolan the Iris of Grace: From Shaman Village, drop down the cliffs in the south east until reaching the top of Rabbath's Rise. Here, find Puppet Anna, and you will be able to combine the spirits together getting the Jolan and Anna spirit summon. Note: If you gave Jolan the Iris of Occulation, even if you already have Swordhand of Night Jolan spirit ash from a previous game cycle, you will not be able to get the Jolan and Anna spirit summon in this game cycle.`,
      "tags": [
        JOLAN
      ]
    },
    //     ANCIENT RUINS OF RAUH
    // Recommended Scadutree Blessing Rank: 14~17 Revered Spirit Ash Blessing: 8~
    {
      "id": "2e055afc-d4de-4357-8ce5-a9909a6c91d9",
      "description": `From the West Rampart, travel west to reach the Viaduct Minor Tower grace and the Ancient Ruins of Rauh`,
      "tags": []
    },
    {
      "id": "aa0101ba-53e8-4231-b784-6e03a66ba860",
      "description": `Progress through the Ruins of Rauh until reaching Rauh Ancient Ruins, East grace`,
      "tags": []
    },
    {
      "id": "152518ca-346f-4f6d-bff9-96ff60e2c2b0",
      "description": `From Rauh Ancient Ruins, East grace go through the bridge with the Furnace Golem and take a left to reach the Rauh Ancient Ruins, West grace`,
      "tags": []
    },
    {
      "id": "cea4c1e0-162b-4784-b503-c6da4fc97ac1",
      "description": `From Rauh Ancient Ruins, West grace progress through the area until reaching Church of the Bud, Main Entrance grace. If / when Hornsent invades you, just run past him to touch the grace`,
      "tags": []
    },
    {
      "id": "eea6e106-67b3-4862-8a08-312062ccea4c",
      "description": `Near the Church of the Bud, Main Entrance grace, Hornsent will invade. Defeat him to get his weapon and armor`,
      "tags": [
        HORNSENT
      ]
    },
    {
      "id": "458baebe-5a48-499e-820c-97c7255d3529",
      "description": `Optionally summon Dryleaf Dane to aid in Romina boss fight`,
      "tags": [
        DANE
      ]
    },
    {
      "id": "75b199a4-2d10-437c-9c26-1226a9985443",
      "description": `Defeat Romina, Saint of the Bud. She is weak to fire and frost, strong vs slash, and immune to bleed and scarlet rot. A way to cure or resist scarlet rot is recommended`,
      "tags": []
    },
    {
      "id": "43ac55d5-fbd1-438f-a012-7c22fd6cf4ed",
      "description": `Access the Sealing Tree behind Romina's arena and burn it using Messmer's Kindling. You will be teleported to Enir-Ilim`,
      "tags": []
    },
    // ENIR-ILIM
    // Recommended Scadutree Blessing Rank: 17~20 Revered Spirit Ash Blessing: 8~10
    {
      "id": "456ca81a-3d39-45af-b369-6cb295ce1f7e",
      "description": `Progress through Enir-Ilim to get the graces Enir-Ilim: Outer Wall, First Rise, Spiral Rise and Cleansing Chamber Anteroom, in this order, then find Needle Knight Leda, who will challenge you`,
      "tags": []
    },
    {
      "id": "260b7f4b-9385-4877-ab05-3f074875e2f1",
      "description": `Win the NPC fight near the Cleansing Chamber Anteroom grace in Enir-Ilim`,
      "tags": [],
      items: [
        {
          "id": "ffa90e53-18bb-499c-ab65-6ee47f7db57f",
          "description": `Leda and Dane will attack you no matter what`,
          "tags": [LEDA, DANE]
        },
        {
          "id": "42cc9807-5104-41c2-9967-ca5242e54004",
          "description": `Freyja will attack you if you progressed her questline until the end, otherwise she will remain in her last location`,
          "tags": [FREYJA]
        },
        {
          "id": "1fe887f0-d0ab-4e30-a01c-34a99cd91a35",
          "description": `Hornsent will attack you if he's alive and you did not summon him against Messmer`,
          "tags": [HORNSENT]
        },
        {
          "id": "17b8131e-109c-475b-b8ac-1bacb49ec089",
          "description": `Moore will attack if you chose his dialogue option "Put it behind you"`,
          "tags": [MOORE]
        },
        {
          "id": "fbbc1f2d-a9d3-4243-b1c6-f51682960077",
          "description": `You can summon Thiollier if your progressed his questline until the end`,
          "tags": [THIOLLIER]
        },
        {
          "id": "ad165eca-fdff-419e-81a5-cdd120b2bc45",
          "description": `You can summon Ansbach as long as he was not killed and you gave him the Secret Rite Scroll`,
          "tags": [ANSBACH]
        },
      ]
    },
    {
      "id": "df043f4a-13ff-4902-99c1-216c7a2028d2",
      "description": `You can summon Ansbach and Thiollier to aid vs Radahn. You have to summon them at least once to progress their questlines (not confirmed)`,
      "tags": [
        THIOLLIER,
        ANSBACH
      ]
    },
    {
      "id": "0616a18d-877b-4df0-942e-8f3f8b5612b1",
      "description": `Defeat Promised Consort Radahn / Radahn, Consort of Miquella. The first phase is weak to pierce, frost, bleed and scarlet rot, and strong vs slash and holy. The second phase is weak vs scarlet rot, holy and pierce, and strong vs everything else. The achilles heel of this boss is tanky builds. For example, this <a href="https://eip.gg/elden-ring/build-planner/?buildId=clyicood8010kd4ow26f37260" target="_blank">tank build</a> breaks the boss. Hold the shield up. Poke with the weapon. Win.`,
      "tags": []
    },
    {
      "id": "0d370ad4-a7e8-4518-8ed4-877e479b8927",
      "description": `After you defeated Radahn, southeast of the grace you can get the equipment of Ansbach and Thiollier`,
      "tags": [
        THIOLLIER,
        ANSBACH
      ]
    },
    {
      "id": "c0b520a6-390a-45ca-8bc7-cb21d68d8cf2",
      "description": `In the middle of Radahn's arena you can get the "Let Us Go Together" gesture and Miquella's Memory to trigger a short cutscene `,
      "tags": []
    }
  ]
}

export default list