import { TAGS } from '~/features/tags'

const { LEDA, FREYJA, MOORE, THIOLLIER, HORNSENT, ANSBACH, QUEELIGN, IGON, DANE, FORAGER, YMIR, JOLAN, DRAGON_PRIESTESS, OPTIONAL } = TAGS

const list = {
  id: "f45240fe-9d8c-4200-8e56-3861ebf0b9ab",
  slug: "shadow-of-the-erdtree",
  title: "Shadow of the Erdtree (WIP)",
  tags: ['new'],
  notes: [
    `THIS IS WORK IN PROGRESS`,
    `Recommended for second playthroughs.`,
    `This list will be progressively updated and improved, I just wanted to release something quickly. Expect small daily updates. Please report mistakes using the feedback button.`,
    `Thanks to this reddit post: <a href="https://www.reddit.com/r/Eldenring/comments/1dnw7dr/all_npc_interactions_in_shadow_of_the_erdtree/" target="_blank">All NPC Interactions in Shadow of the Erdtree</a>`,
    'You might need to toggle on/off new filters for them to work'
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
    // GRAVESITE PLAIN (CENTRAL)
    {
      id: 'cba6b945-f280-48bb-be9d-cd4f79384947',
      description: 'Speak to Freyja and Hornsent at the Three-Path Cross Grace',
      tags: [FREYJA, HORNSENT]
    },
    {
      id: '7fa1ea8c-3218-4e56-8472-c64070e97691',
      description: 'At Main Gate Cross Grace, purchase something from Moore. Then speak to Moore and Ansbach',
      tags: [MOORE, ANSBACH]
    },
    {
      id: 'dcfdc773-d6a4-4b4c-8f95-8adbbf753b65',
      description: "Head south to find a Forager Brood for an item, located SE of the Cliffside Terminus grace. These NPCs look like the Kindred of Rot enemy, but they are unaggressive, and killing them will result in Moore invading you and then permanently dying. If Moore dies for any reason, the forager brood will disappear",
      tags: [MOORE, FORAGER]
    },
    // GRAVESITE PLAIN (WESTERN)
    // BELURAT
    {
      id: '59b21622-00aa-4f5f-8b10-e882be11006e',
      description: 'Defeat the invading Fire Knight Queelign, just past the Small Private Altar Grace in Belurat',
      tags: [QUEELIGN]
    },
    {
      id: 'c70c3255-5bb4-4795-9346-8095e7e7e8f0',
      description: 'After finding the cross in Belurat, speak to Ansbach at the Main Gate Cross. Location: starting at Small Private Altar, continue until you reach a path going left and right. Head left, then climb over the broken walls to the right of the path.',
      tags: [ANSBACH]
    },
    {
      id: 'c40568c2-7a0c-4f0b-ba1a-82a1e9191acb',
      description: "Speak to Hornsent Grandam in the Belurat Storage Room, veering left after the Small Private Altar Grace. You'll first need to pick up the key, which is on the main path between this Grace and the next.",
      tags: [HORNSENT]
    },
    {
      id: 'a325b983-a545-430d-8897-222bc6cb0b6f',
      description: '(Optional) Summon Freyja to fight the Dancing Lion. Then, speak to her at the Three-Path Cross Grace',
      tags: [FREYJA]
    },
    {
      id: '46db7e3d-9e04-4e4f-9f9b-7b420b0a9ede',
      description: 'Return to speak to Hornsent Grandam wearing the Divine Beast Head. Then speak to Hornsent and give him the soup.',
      tags: [HORNSENT]
    },
    {
      id: '6fff135f-b11f-40cb-a58d-02d002d9a2e6',
      description: 'Speak to Thiollier at the Pillar Path Cross Grace. Then, speak to Moore at the Main Gate Cross Grace. Then return to Thiollier.',
      tags: [THIOLLIER, MOORE]
    },
    {
      id: '64674ade-ccd9-4ed0-b3e4-0a3a43beb752',
      description: 'Speak to Igon near the Pillar Path Waypoint Grace. Leave and come back to speak to him again.',
      tags: [IGON]
    },
    {
      id: 'e16f6de8-4ebc-4773-a37c-2973c270071c',
      description: "Go through the Dragon Pit and head south to speak to the Dragon Communion Priestess at the Grand Altar of Dragon Communion. Choose whether to give her the potion from Thiollier (must be given at night). At the end of her questline, if you don't give her the potion, you receive a consumable and a weapon; if you do, you'll receive an incantation and spirit ashes.",
      tags: [DRAGON_PRIESTESS]
    },
    {
      id: '0a683160-a101-4810-b197-ec074f2b29d1',
      description: 'After finding the Cerulean Coast Cross, speak to Ansbach at the Main Gate Cross. Location: To get to the Cerulean Coast, you can either jump down some Ruins from the Dragon Altar or you can head South West from the Castle Front and follow the Elac river. The cross is on a hill to the South West )',
      tags: [ANSBACH]
    },
    {
      id: '64efd205-e7a6-4143-a484-e2e506f0d8a1',
      description: '(Optional) Summon Leda and Dryleaf Dane to fight Rellana',
      tags: [LEDA, DANE]
    },
    // SCADU ALTUS / CHURCH DISTRICT
    {
      id: '52a13da4-4a43-42d0-9a4d-93fea13a8484',
      description: 'Talk to Leda and Hornsent at the Highcross Road Grace. Then speak to Freyja at Three-Path Cross Grace',
      tags: [LEDA, HORNSENT, FREYJA]
    },
    {
      id: 'a2700708-5631-4eec-bf4e-b81ce5d5d6a4',
      description: 'Defeat the invading Fire Knight Queelign at the Church of the Crusade',
      tags: [QUEELIGN]
    },
    {
      id: 'ef7f61c1-0c0b-43c2-98c9-77cff1f0f053',
      description: 'Find an injured Forager Brood, located North of the Church of the Crusade . Heal it. Then, reload the area and return to that location.',
      tags: [DANE, LEDA, FORAGER]
    },
    {
      id: '1f6548bf-abf0-404d-abba-bd9b5fad6b1b',
      description: 'Talk to Dryleaf Dane at the Moorth Ruins Grace. Then, talk to Leda at the Highcross Road Grace. Return to Dane and do the “May the Best Win” gesture to trigger a duel.',
      tags: [DANE, LEDA]
    },
    {
      id: '5fff0e9f-825a-412f-85f1-c8366ccd9d3f',
      description: 'Find a Forager Brood for an item, located NW of the Ruined Forge of Starfall Past.',
      tags: [FORAGER]
    },
    {
      id: 'd2b90bbc-5e4b-43c0-aff8-e02fe59ae10d',
      description: 'Find a Forager Brood for an item by heading North from the Moorth Highway through a tunnel at the North end of the lake, on the way to Rauh Base. Note: There are no NPC interactions in Rauh Base, but now is a good time to explore that location.',
      tags: [FORAGER]
    },
    {
      id: 'ae6a1c22-7bad-4975-a0dc-41286bf4ac89',
      description: 'After finding the Scaduview Cross, speak to Ansbach. Location: From Moorth Highway, South Grace, head out toward the encampment and follow the Eastern cliffside around. Pass the closed Spiritspring, you will find rocks to break to open the Spiritspring. Take that up to this cross.',
      tags: [ANSBACH]
    },
    {
      id: 'db106066-8077-4543-adc9-57446b16e59a',
      description: 'Head through Bonny Gaol in the South East to get to Bonny Village. Pick up the “O Mother” gesture from a body North East of Bonny Village (needed for Ymir’s questline)',
      tags: [YMIR]
    },
    {
      id: '1c99dfec-159e-43af-84ae-0e866b459b3d',
      description: "Once you receive the “Somewhere a Great Rune Has Broken” message, return and exhaust the dialogue with all NPC's (Leda, Hornsent, Thiollier, Freyja, Ansbach, and Moore). Make any choice with Leda - it does not change the outcome. For the consequences of Moore’s choice, see the Enir Ilim section at the bottom.",
      tags: [LEDA, MOORE, HORNSENT, THIOLLIER, FREYJA, ANSBACH]
    },
    // CERULEAN COAST / FINGER RUINS
    {
      id: '2da2234e-1d10-4e71-8a71-2df90e5de41c',
      description: 'Find a Forager Brood for an item, located just outside the Church District Entrance.',
      tags: [FORAGER]
    },
    {
      id: 'be03242d-046e-47ae-ba0a-d1b7e23225cf',
      description: 'Use the Prayer Room Key on a locked door in the Church District (North East of Bonny Village) to speak to Queelign. You can choose to give him an Iris of Grace, resulting in him turning into spirit ashes or an Iris of Occultation, resulting in him dying and dropping his weapon',
      tags: [QUEELIGN]
    },
    {
      id: 'cdea3ceb-81c7-45fd-a6bb-6a5d0ad6832e',
      description: 'Speak to Ymir at the Cathedral of Manus Metyr. Reload the area and Jolan will appear by a Pillar. Exhaust her dialogue, then ask Ymir about her.',
      tags: [YMIR, JOLAN]
    },
    {
      id: 'b2e273f6-dacb-4edb-9ab2-eb2d03415637',
      description: 'Find a Forager Brood for an item, located NE of the Cerulean Coast Grace',
      tags: [FORAGER]
    },
    {
      id: 'a780b01d-45b6-4d21-a2a4-a95401f36e6b',
      description: 'Head all the way South to reach the Fissure. (Optional) Summon Thiollier to fight the Putrescent Knight',
      tags: [THIOLLIER]
    },
    {
      id: '32f7f51b-5a51-4fe3-8859-77b43740730d',
      description: 'Speak to Thiollier after defeating the Putrescent Knight. Imbibe the nectar from St. Trina four times. Then speak to Thiollier and exhaust his dialogue. Imbibe the nectar again. This time Thiollier will invade. Defeat him. Then imbibe the nectar again and speak to Thiollier again. St. Trina should repeat herself if you continue imbibing.',
      tags: [THIOLLIER]
    },
    {
      id: '0350ec9c-5b1a-4da5-8082-5fbdd4b841a9',
      description: 'Follow the Eastern coast to the Finger Ruins of Rhia. Use the Hanging Bell. Then, return to speak to Ymir and Jolan at Manus Metyr',
      tags: [YMIR, JOLAN]
    },
    {
      id: 'deed85a0-d283-4ed8-85af-df9ef3e2b6e3',
      description: 'Access the Hinterlands by using the O Mother gesture on the statue of Marika near the Shadow Keep, Back Gate . Follow down to the Finger Ruins of Dheo and use the Hanging Bell. Then, return to speak to Ymir and Jolan at Manus Metyr.',
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
      description: 'If you did not help Hornsent in the fight against Leda, return to the First Floor Storeroom where Ansbach was to find a pair of summon signs for a fight between Leda and Ansbach. Choosing Ansbach will give you a unique weapon . Choosing Leda gives you a unique talisman . You can also skip this fight. See Enir Ilim section for end game consequences.',
      tags: [ANSBACH, LEDA]
    },
    {
      id: 'f2cfe6ce-7af4-4705-9476-28296bd65629',
      description: 'If alive, Hornsent will invade in the Church of the Bud, on the way to the Romina fight',
      tags: [HORNSENT]
    },
    // ENIR ILIM
    {
      id: '260b7f4b-9385-4877-ab05-3f074875e2f1',
      description: 'In Enir Ilim, some of the NPC’s will attack you and some will help you. This can change slightly, depending on your choices, as outlined below:',
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