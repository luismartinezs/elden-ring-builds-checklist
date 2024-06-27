import { TAGS } from '~/features/tags'

const { LEDA, FREYJA, MOORE, THIOLLIER, HORNSENT, ANSBACH, QUEELIGN, IGON, DANE } = TAGS

const list = {
  id: "f45240fe-9d8c-4200-8e56-3861ebf0b9ab",
  slug: "shadow-of-the-erdtree",
  title: "Shadow of the Erdtree",
  tags: ['new'],
  notes: [
    `THIS IS WORK IN PROGRESS`,
    `Recommended for second playthroughs.`,
    `This list will be progressively updated and improved, I just wanted to release something quickly. Expect small daily updates. Please report mistakes using the feedback button.`,
    `Thanks to this reddit post: <a href="https://www.reddit.com/r/Eldenring/comments/1dnw7dr/all_npc_interactions_in_shadow_of_the_erdtree/" target="_blank">All NPC Interactions in Shadow of the Erdtree</a>`,
    'You might need to toggle on/off new filters for them to work'
  ],
  items: [
    // GRAVESIDE PLAIN
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
    {
      id: 'cba6b945-f280-48bb-be9d-cd4f79384947',
      description: 'Speak to Freyja and Hornsent at the Three-Path Cross Grace',
      tags: [FREYJA]
    },
    {
      id: '7fa1ea8c-3218-4e56-8472-c64070e97691',
      description: 'At Main Gate Cross Grace, purchase something from Moore. Then speak to Moore and Ansbach',
      tags: [MOORE, ANSBACH]
    },
    {
      id: 'dcfdc773-d6a4-4b4c-8f95-8adbbf753b65',
      description: "Head south to find a Forager Brood for an item, located SE of the Cliffside Terminus grace. These NPC's look like the Kindred of Rot enemy, but they are unaggressive, and killing them will result in Moore invading you and then permanently dying. If Moore dies for any reason, the forager brood will disappear. .",
      tags: [MOORE]
    },
    {
      id: '59b21622-00aa-4f5f-8b10-e882be11006e',
      description: 'Defeat the invading Fire Knight Queelign, just past the Small Private Altar Grace in Belurat',
      tags: [QUEELIGN]
    },
    {
      id: 'c70c3255-5bb4-4795-9346-8095e7e7e8f0',
      description: 'After finding the cross in Belurat, speak to Ansbach at the Main Gate Cross. Location: starting at Small Private Altar, continue until you reach a path going left and right. Head left, then climb over the broken walls to the right of the path',
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
      description: "Go through the Dragon Pit and head South to speak to the Dragon Communion Priestess at the Grand Altar of Dragon Communion. Choose whether to give her the potion from Thiolier (must be given at night). At the end of her questline, if you don't give her the potion, you receive a consumable and a weapon and if you do, you'll receive an incantation and spirit ashes",
      tags: [THIOLLIER]
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
    // SCADU ALTUS
    // CERULEAN COAST
    // JAGGED PEAK
    // SHADOW CASTLE
    // ENIR ILIM
  ]
}

export default list