import { TAGS } from '~/features/tags'

const { LEDA, FREYJA, MOORE, THIOLLIER, HORNSENT, ANSBACH, QUEELIGN, IGON, DANE, FORAGER, YMIR, JOLAN, DRAGON_PRIESTESS, OPTIONAL, MAP_FRAGMENT, ALL_REMEMBERANCES } = TAGS

const list = {
  id: "f45240fe-9d8c-4200-8e56-3861ebf0b9ab",
  slug: "shadow-of-the-erdtree",
  title: "Shadow of the Erdtree (WIP)",
  tags: ['new'],
  notes: [
    `THIS IS WORK IN PROGRESS. It will change quite a lot in the following days while I do a second playthrough and clean things up. Please report mistakes using the feedback button`,
    `Update 11-7: Improved Forager quest to avoid being locked out. Cleaned up steps until Putrescent Knight.`,
    `Recommended for second playthroughs.`,
    `Thanks to this reddit post: <a href="https://www.reddit.com/r/Eldenring/comments/1dnw7dr/all_npc_interactions_in_shadow_of_the_erdtree/" target="_blank">All NPC Interactions in Shadow of the Erdtree</a>`,
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
      description: 'Defeat the Divine Beast Dancing Lion in Belurat',
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
      description: 'Defeat Rellana, Twin Moon Knight in Castle Ensis',
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
      description: 'After receiving Forager Brood Cookbook [4], talk to Moore to receive Forager Brood Cookbook [7] (some guides say you need to find all the other forager cookbooks too, can someone confirm?)',
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
    //     "FINGER RUINS OF RHIA
    // Recommended Scadutree Blessing Rank: 11~ Revered Spirit Ash Blessing: 7~"
    // TODO
    {
      id: '0350ec9c-5b1a-4da5-8082-5fbdd4b841a9',
      description: 'Follow the Eastern coast to the Finger Ruins of Rhia. Use the Hanging Bell. Then, return to speak to Ymir and Jolan at Manus Metyr',
      tags: [YMIR, JOLAN]
    },
    // "CHARO'S HIDDEN GRAVE
    // Recommended Scadutree Blessing Rank: 11~ Revered Spirit Ash Blessing: 7~"
    {
      id: 'deed85a0-d283-4ed8-85af-df9ef3e2b6e3',
      description: 'Access the Hinterlands by using the "O Mother" gesture on the statue of Marika near the Shadow Keep, Back Gate . Follow down to the Finger Ruins of Dheo and use the Hanging Bell. Then, return to speak to Ymir and Jolan at Manus Metyr.',
      tags: [YMIR, JOLAN]
    },
    {
      id: '6db20904-a1c8-4438-9cf9-2a0d9fb81ab8',
      description: 'Access the Finger Ruins of Myr by exhausting Ymir’s dialogue and reloading the area until he leaves his throne. Then, examine the throne . After defeating Swordhand of Night Anna, return to speak to Jolan.',
      tags: [YMIR, JOLAN]
    },
    {
      id: '3ae3176c-dd51-418d-9ed6-d7a59d4f4630',
      description: 'Use the Hanging Bell and fight Metyr.. Then, return to examine Ymir’s throne..',
      tags: [YMIR]
    },
    {
      id: '2728ffca-271e-4e98-b681-a1507188442e',
      description: 'Reload Manus Metyr. Find an item in the cemetery to the West. Speak to Jolan. You can choose to give her an Iris of Grace, resulting in her turning into spirit ashes or an Iris of Occultation, resulting in her dying and dropping her weapon .',
      tags: [JOLAN]
    },
    {
      id: '81d736af-03a9-49ef-92b1-ef0d22f20eed',
      description: "If you gave Jolan Iris of Grace, return to the Shaman Village. At the Eastern corner, find a series of dropdowns to allow you to access a section Rabbath’s Rise, where you'll find Swordhand of Night Anna",
      tags: [JOLAN]
    },
    // JAGGED PEAK
    {
      id: 'd6874eff-5735-468e-8a02-90d749e03fcb',
      description: 'Speak to Igon after defeating the dragon near the Foot of the Jagged Peak Grace. Then return to the Grand Altar of Dragon Communion to speak to the Dragon Communion Priestess',
      tags: [IGON, DRAGON_PRIESTESS]
    },
    {
      id: '3659fe76-a1bc-4856-a858-a612d9b5f310',
      description: 'Summon Igon to fight Bayle (required for quest)',
      tags: [IGON]
    },
    {
      id: '76b56de6-c918-4584-8235-a0dedaafc086',
      description: 'Return to Igon',
      tags: [IGON]
    },
    {
      id: '1e94546a-b367-4bf5-a2ee-46675945fe98',
      description: 'Return to the Dragon Communion Priestess',
      tags: [DRAGON_PRIESTESS]
    },
    // SHADOW CASTLE / ANCIENT RUINS
    {
      id: '709fe7b8-00ab-4e80-975c-a504935a2ef4',
      description: '(Optional) Summon Freyja and Hornsent to fight the Golden Hippo',
      tags: [FREYJA, HORNSENT]
    },
    {
      id: '7a75af68-3002-4505-8af5-bc342b64e429',
      description: "Past the Main Gate Plaza, you will reach an area with 6 burning boats and a ramp leading down. To the left of the ramp, there are a pair of summon signs for a fight between Leda and Hornsent. Choosing Leda will provide you with a unique talisman . Choosing Hornsent will provide you with a unique Ash of war. It will also lock you out of the Leda/Anbach storeroom fight below . If you do not choose either, the fight doesn't happen. See Enir Ilim section below for endgame consequences.",
      tags: [LEDA, HORNSENT]
    },
    {
      id: 'c5296cbd-9b2b-441a-ae2d-456d099d4c50',
      description: "Head to the Abyssal woods to meet Midra. Here's how to get there: In the same area with 6 burning boats, find a ladder at the end on the left. Climb down and follow the path through a waterfall and an illusory wall until you find a coffin you can climb in. When you arrive, head South along the western wall and descend down the cliff face until you reach the Darklight Catacombs. Head through the Catacombs to reach the Abyssal Woods on the other side.",
      tags: [OPTIONAL]
    },
    {
      id: 'efd3f6f9-bd7f-4609-9906-a5b9958fc378',
      description: 'Speak to Ansbach in the first floor of the Specimen Storehouse',
      tags: [ANSBACH]
    },
    {
      id: '7c1533f9-cf21-4f4f-bde7-cf37902d8048',
      description: 'Speak to Freyja by the Storehouse, Seventh Floor Grace. Then speak to Ansbach on the first floor',
      tags: [FREYJA, ANSBACH]
    },
    {
      id: '32cca996-af5f-4178-9e20-e707f20db3b4',
      description: 'Give Ansbach the Secret Rite Scroll, found just past the Fourth Floor Storeroom Grace. Continue forward until you find stairs leading down . Reload the area and speak to him again. Choose whether to give Freya his message (see Enir Ilim section for end game consequences). If you do, speak to Ansbach again.',
      tags: [ANSBACH, FREYJA]
    },
    {
      id: '0204ad74-2403-4862-873e-fb7245652f3d',
      description: 'Summon Hornsent to fight Messmer and speak to him after the fight (Required for quest - See Enir Ilim for more end game consequences)',
      tags: [HORNSENT]
    },
    {
      id: 'd138276a-8d44-41c9-af0d-97d61b761899',
      description: 'Return to Belurat to speak to Hornsent Grandam',
      tags: [HORNSENT]
    },
    {
      id: 'c867d42e-61b7-4ed5-96ca-fd5a6e3df9bd',
      description: 'If Leda is still at High Cross Road, exhaust her dialogue, reloading the area until she starts to repeat herself.',
      tags: [LEDA]
    },
    {
      id: '299a2945-0e91-4504-b2d5-665c2be48da4',
      description: 'If you did not help Hornsent in the fight against Leda, return to the First Floor Storeroom where Ansbach was to find a pair of summon signs for a fight between Leda and Ansbach. Choosing Ansbach will give you a unique weapon. Choosing Leda gives you a unique talisman. You can also skip this fight. See Enir Ilim section for end game consequences.',
      tags: [ANSBACH, LEDA]
    },
    {
      id: 'f2cfe6ce-7af4-4705-9476-28296bd65629',
      description: 'If alive, Hornsent will invade in the Church of the Bud, on the way to the Romina fight',
      tags: [HORNSENT]
    },
    {
      id: "0883f874-1ed1-4a2b-9bf9-e48853c41127",
      description: "(optional) Summon Dryleaf Dane to fight Romina, Saint of the Bud",
      tags: [DANE]
    },
    // ENIR ILIM
    {
      id: '260b7f4b-9385-4877-ab05-3f074875e2f1',
      description: 'In Enir Ilim, some of the NPCs will attack you and some will help you. This can change slightly, depending on your choices, as outlined below:',
      tags: [
        LEDA,
        FREYJA,
        HORNSENT,
        MOORE,
        ANSBACH,
        THIOLLIER,
        DANE
      ]
    },
    {
      id: 'c25c6e75-9f95-4c47-9eed-14eec06b17b5',
      description: 'Leda will attack you no matter what.',
      tags: [LEDA]
    },
    {
      id: '31d872c0-44aa-4dab-9e13-71aa580fc4e2',
      description: 'Freyja will attack you if you gave her the letter from Ansbach. Otherwise, she stays in the Storehouse until later in the game, when she disappears and leaves an item behind.',
      tags: [FREYJA]
    },
    {
      id: '1b2cf3f6-689d-4757-900b-45428ea34720',
      description: "Hornsent will attack you if he is alive and you don't summon him for the Messmer fight",
      tags: [HORNSENT]
    },
    {
      id: 'a82d43f7-8d08-4702-bcc4-f8196ce680be',
      description: "Moore will attack you if you told him to put it behind him. If you tell him to remain sad forever, he dies and you can find his items North of the Church of the Crusade. If you say you don't know, he stays at the Main Gate Cross.",
      tags: [MOORE]
    },
    {
      id: 'b57ae31f-46a7-422a-a76b-79b6b45c3589',
      description: "Ansbach can be summoned to help you, if he's alive and you gave him the scroll",
      tags: [ANSBACH]
    },
    {
      id: '30773b77-d479-4384-b447-a75d4bfabc0f',
      description: 'Thiollier can be summoned to help you if you told him all that St. Trina said',
      tags: [THIOLLIER]
    },
    {
      id: '60fb2ee0-ad74-4f29-847a-45f39ffc315f',
      description: 'Dane will attack you, no matter what.',
      tags: [DANE]
    },
    {
      id: '5fcc6521-72b1-4999-aea4-36b6083f4c31',
      description: 'Speak to Ansbach at the top of the elevator after the fight.',
      tags: [ANSBACH]
    },
    {
      id: 'a2dbac0f-ba00-4758-aac1-00f4cc3c4801',
      description: 'Summon Ansbach and Thiollier for the final boss (Need to verify if this is required for Anbach questline)',
      tags: [ANSBACH, THIOLLIER]
    },
    {
      id: '3254032c-e71c-4750-b44c-36814d5ce133',
      description: 'After defeating Radahn and Miquella, rest in a grace or reload the area to find the bodies of Ansbach and Thiollier in the area',
      tags: [ANSBACH, THIOLLIER]
    }
  ]
}

export default list