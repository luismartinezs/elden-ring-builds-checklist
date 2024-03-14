import { TAGS } from '~/features/tags';

const { OPTIONAL } = TAGS

const list = {
  id: "30ac9362-be87-408d-8028-18b7e4f04535",
  slug: "afflictioner",
  title: "Status Effect Build",
  notes: [
    `This build is based mostly on the awesome <a href="https://www.youtube.com/watch?v=gX40WDCUqks">Elden Ring Best Status Effect Build! Patch 1.09</a>, with a few additions from <a href="https://www.reddit.com/r/Eldenring/comments/wgcsbr/help_with_a_status_effect_build/">Help with a status effect build reddit post</a>`,
    `This guide covers the two versions of this build`,
    `Both versions dual wield Antspur Rapiers, or one Antspur Rapier and one Estoc before NG+.`,
    `Variant 1: Mushroom Crown, Raptor's Black Feathers, Royal Remains gauntlets and legs. Talismans: Lord of Blood's Exultation, Rotten Winged Sword Insignia, Kindred of Rot's Exultation and Millicent's Prosthesis`,
    `Variant 2: Same as Variant 1 but with equipment Lionel's Armor and Bull Goat's Greaves, and for talismans Godskin Swaddling Cloth and Bull-Goat's Talisman instead of Lord of Blood's Exultation and Rotten Winged Sword Insignia, for extra poise and HP restoration`,
    `This build is somewhat involved as it requires two near complete NG cycles to get all the items needed. The second cycle is mainly to get a second Antspur Rapier and the Rotten Winged Sword Insignia. A slightly shorter alternative would be to get the Rotten Winged Sword Insignia in the first NG cycle and Millicent's Prosthesis in the second one, but at the expense of missing the 5 DEX from Millicent's Prosthesis for longer`,
  ],
  items: [
    {
      id: 'a9a6c888-4b34-479e-8f3d-db15f328da65',
      description: 'Prisoner as starter class, alternatively, Samurai',
      tags: []
    },
    {
      id: "4d1755d3-0f3e-4fc5-93ca-4768f362bc54",
      description: 'Aim to reach these stats (lvl 150)',
      items: [
        {
          id: '8a36128f-b235-4bdd-a231-d8f5b58b1cfa',
          description: "DEX 75 (with Millicent's Prosthesis, effectively 80)",
          tags: []
        },
        {
          id: 'eb34fab1-8284-46c1-b381-fe232c762082',
          description: 'END 42',
          tags: []
        },
        {
          id: '7cd4c95f-1b7b-4156-9ab8-10d57dae106f',
          description: 'VGR 60',
          tags: []
        },
        {
          id: '37a01837-9e34-41e4-b85a-d67ccd4bdaed',
          description: 'If you level past 150, allocate points to MND as needed, and level ARC or FAI'
        }
      ]
    },
    {
      id: '6a94edd8-b071-4bb7-8990-ca3b16d91014',
      description: 'Buy crafting kit from Kale',
      tags: []
    },
    {
      id: 'e76201ba-a417-41e2-97a0-3e2c31370a3d',
      description: 'Pick Whetstone Knife from Gatefront Ruins',
      tags: []
    },
    {
      id: '8d6cd9f1-44c8-4d07-98e7-8b6da3cead45',
      description: 'Get Flask of Wondrous Physick and Sacred Tear from the Third Church of Marika',
      tags: []
    },
    {
      id: '3482920c-7cf7-44cc-93ab-69d2db7e4bcb',
      description: 'If you started as Prisoner, you have the Estoc (STR 11, DEX 13), otherwise, purchase it from the nomafic merchant in the Liurnia Lakeshore grace.',
      tags: []
    },
    {
      id: '63bb4cbe-4b71-4128-b6e0-a0b8a6259dce',
      description: "Fevor's Cookbook [1], used to craft Sleep Pots. Found on a corpse (sitting upright) in the graveyard on a plateau southeast from Summonwater Village Outskirts Site of Grace in Limgrave. Use the horizontal gravestones directly south of Summonwater Village to descend",
      tags: [OPTIONAL]
    },
    {
      id: '226b5181-cc7b-4e36-93ce-f293548bdca3',
      description: 'Greenspill Crystal Tear. Found on an altar next to the Minor Erdtree in Mistwood',
      tags: []
    },
    {
      id: 'ebbd18a8-a1a8-4594-afdd-0619dbb3b579',
      description: 'Mushroom Crown. Found on a corpse hanging off the top of a column in the southeastern corner of the Lake of Rot. Climb the fallen pillar leading to a rocky outcropping, south of the ruin, to reach it',
      tags: []
    },
    {
      id: 'ddcaa108-e2af-4b38-ba5f-6d94894d1f81',
      description: 'Ash of War: Poisonous Mist. Dropped by a teardrop scarab at the southwest section of the Aeonia Swamp in Caelid',
      tags: []
    },
    {
      id: '27cd0da2-893c-449f-9843-2d06c9a43f58',
      description: 'Use Ash of War: Poisonous Mist on your main weapon',
      tags: []
    },
    {
      id: '57d9645b-4785-4870-9699-df08bdf7906f',
      description: 'Grab the two halves of the Dectus Medallion from Fort Haight (Limgrave) and Fort Faroth (Caelid)',
      tags: []
    },
    {
      id: '1ea33dc5-d356-4526-bb2d-52204eb4fc00',
      description: "Bull-Goat's Talisman (variant 2, replace Rotten Winged Sword Insignia). In the back of Dragonbarrow Cave. From the entrance, take a left into the Giant Bear's patrol route. Search that side of the cave to find the talisman at the end, on a corpse. The Dragonbarrow Cave is found in Dragonbarrow. Reach this location by following the northernmost road in Dragonbarrow towards the east and looking for the entrance along the cliff face underneath the Minor Erdtree",
      tags: []
    },
    {
      id: '63dcc59a-3660-4723-b529-682a3635a1fc',
      description: 'Sword of St Trina (STR 10, DEX 12, INT 14). In the Forsaken Ruins, near the Rotview Balcony Site of Grace, behind an Imp Seal requiring one Stonesword Key. Forsaken Ruins is found in Caelid below the cliff South East of the Rotview Balcony site of grace',
      tags: [OPTIONAL]
    },
    {
      id: '39f2512c-08de-426b-aa2d-45ae678c7110',
      description: 'Optionally, farm smithing stones in Limgrave / Liurnia / Caelid and level up the Estoc',
      tags: []
    },
    {
      id: 'e02555d5-b1a6-44c4-902d-b0f5e8371aa0',
      description: 'Defeat Godrick in Stormveil Castle',
      tags: []
    },
    {
      id: 'a4cec63d-e12e-4f6e-ac06-492f12cb5921',
      description: "Ash of War: Glintblade Phalanx. Get Rogier's Rapier from Rogier in Roundtable Hold",
      tags: []
    },
    {
      id: 'f3399a51-3475-4dce-a327-4436045fe6b8',
      description: "Unequip Ash of War: Glintblade Phalanx from Rogier's Rapier. Optionally equip it in the Estoc",
      tags: []
    },
    {
      id: '033ad05b-33a8-4bc1-9059-9cbd5f76fdaa',
      description: 'Get half of the Haligtree Secret Medallion from Albus the Albinauric near the Village of the Albinaurics Grace, west Liurnia of the Lakes',
      tags: []
    },
    {
      id: 'f6aa5b7e-3525-4cf3-ad7e-da803a6f1113',
      description: 'Go to Roundtable Hold and defeat Ensha',
      tags: []
    },
    {
      id: 'abbf3597-ab0c-420d-b306-518eebaa57d6',
      description: "Get Royal Remains Set from Roundtable Hold outside of Gideon Ofnir's room, and equip the gauntlets and the legs",
      tags: []
    },
    {
      id: 'd8c92ae5-dfa8-476a-8da6-840c9556d23f',
      description: 'Grab the Academy Glintstone Key from behind Glintstone Dragon Smarag and enter Raya Lucaria',
      tags: []
    },
    {
      id: '261a6851-cc1d-49a1-a557-bdec8344b4c9',
      description: 'Defeat Red Wolf of Radagon',
      tags: []
    },
    {
      id: '2f2ea4d1-df67-40af-9eae-e3695d7fc1bc',
      description: 'Glintstone Whetblade. Raya Lucaria Academy: Looted from a corpse hanging off the window ledge of an office balcony. From the Debate Parlor site of grace, head west of the courtyard fountain, up the collapsed stairs, past the kneeling Commoners, and into the room with the Twinsage Sorcerer',
      tags: []
    },
    {
      id: '8686994e-2792-481b-b69b-4fe0db8fcfb2',
      description: 'Infuse the Estoc with Cold',
      tags: []
    },
    {
      id: 'decdc5ea-9b2b-49bf-bd73-c28f94b013b9',
      description: 'Access Altus Plateau by using the Lift of Dectus (alternatively, use either of the other two methods to access Altus)',
      tags: []
    },
    {
      id: '28b1a5bc-8ea6-473b-b510-44e34ff60bfb',
      description: 'Get Antspur Rapier (STR 10, DEX 20) from Maleigh Marais, Shaded Castle Castellan, a hostile NPC found in the fields west of The Shaded Castle',
      tags: []
    },
    {
      id: '42701fe8-d290-4253-b85d-95991ddfdb5e',
      description: 'Upgrade Antspur Rapier and equip it with Ash of War: Poisonous Mist and Cold infusion. Equip the Estoc with Ash of War: Glintblade Phalanx Cold infused',
      tags: []
    },
    {
      id: 'a49ed6be-0cea-45a2-a49a-4c87cf5ac4fc',
      description: 'Powerstance Antspur Rapier with the Estoc in your off-hand',
      tags: []
    },
    {
      id: '0d6fb496-d613-4b0c-814e-1e477aa08ec0',
      description: "Raptor's Black Feathers (variant 1). Inside the Sage's Cave, in a chest behind an illusory wall. In Altus Plateau, west of Wyndham Ruins, under the cliffs",
      tags: []
    },
    {
      id: '512e18ec-0cf4-444c-a8fc-e1a522041ec1',
      description: "Kindred of Rot's Exultation. Dropped by the Kindred of Rot in Seethewater Cave, found in Mt. Gelmir. Reach it by heading north through the ravine west of Wyndham Ruins",
      tags: []
    },
    {
      id: 'ddde92ae-bda1-41b0-8974-1a0d02032e22',
      description: 'Go through Caria Manor and defeat Loretta',
      tags: []
    },
    {
      id: '89d0edd0-bdd4-4373-9875-36b1b08aec19',
      description: "Ash of War: Chilling Mist. Three Sisters: Dropped by a Teardrop Scarab in the ruins south of Renna's Rise",
      tags: []
    },
    {
      id: 'f5319955-d0be-4299-ad1b-a1628181c0c3',
      description: 'Equip Ash of War: Chilling Mist in the Estoc, Cold infused',
      tags: []
    },
    {
      id: '3bdf8370-d85b-48f9-aa3a-aa525ccea30c',
      description: 'Radahn Festival should be active now, and you can beat Radahn',
      tags: []
    },
    {
      id: 'ad3b0d38-7201-4a87-a48d-9412c994d230',
      description: "Black Whetblade. Nokron, Eternal City: Found on a corpse slumped in front of an altar in Night's Sacred Ground grace",
      tags: []
    },
    {
      id: '01561640-18df-4ddf-a813-44177ff16a05',
      description: 'Infuse Antspur Rapier with bleed',
      tags: []
    },
    {
      id: '207f55aa-3a98-41f6-8731-9cf867b3fc43',
      description: "Speak with Gowry in Gowry's Shack within Caelid. The Gowry's Shack is found in eastern Caelid, just before Sellia, Town of Sorcery. Players can reach this location by following the Caelid Highway to the east and the north. Or from Sellia Under-Stair grace going south. You can skip this step, but it will enable you to summon Polyanna for O'Neil's fight",
      tags: []
    },
    {
      id: '0c3a3593-83c6-4715-81a4-bafc84e08592',
      description: "Defeat Commander O'Neil, located in the Swamp of Aeonia (central Caelid). He will drop the Unalloyed Gold Needle. You can cheese O'Neil by sneaking behind him and repeatedly casting Posion Mist (FAI 12)",
      tags: []
    },
    {
      id: '1b7680cd-8440-4b9f-9b7f-5bf8d2e223b1',
      description: 'Give the Unalloyed Gold Needle to Gowry, reload the game and get the repaired needle from him',
      tags: []
    },
    {
      id: '28820f80-edba-46d4-a319-5dcd6417923d',
      description: "Reach the Church of the Plague and give the needle to Millicent. It's reached by heading southwest from the Fort Faroth grace site and taking the Spiritspring down or from the backstreets of Sellia, Town of Sorcery. Or, coming from Dragonbarrow, jump down a Spirit Spring to the north of the Church",
      tags: []
    },
    {
      id: '2751461a-1f0e-4e73-8f45-1d87800d40f1',
      description: 'Rest at a grace, then talk to Millicent again and exhaust her dialog. She will gift you the Prosthesis-Wearer Heirloom',
      tags: []
    },
    {
      id: 'e13af02f-41e7-40e6-9e29-f16b9ca9e279',
      description: "Find Millicent in Gowry's shack. Exhaust her dialogue. Reload the game and Millicent will be gone and you can purchase spells from Gowry",
      tags: []
    },
    {
      id: '25ddfb80-7680-4cec-be09-633b0346b8df',
      description: 'Reach the Shaded Castle, heading north through the valley between the Mt. Gelmir and Altus Plateau regions, heading north from the Altus Tunnel to find your way to the Castle',
      tags: []
    },
    {
      id: 'd0a884df-48a4-424d-95b8-3c763bab744e',
      description: "Retrieve the Valkyrie's Prosthesis from the Shaded Castle, in a chest in a room guarded by a single Cleanrot Knight, on the northwestern edge of the castle",
      tags: []
    },
    {
      id: 'f73039b7-e4e2-4e92-8e96-9d440ea8ffcd',
      description: "Find Millicent just north-northeast of the Erdtree-Gazing Hill site of grace in Altus Plateau and give her the Valkyrie's Prosthesis",
      tags: []
    },
    {
      id: '5891096b-2202-4bea-9bb4-3e973ac1bd97',
      description: 'Go to Dominula, Windmill Village (East of the "Road of Iniquity Side Path" Site of Grace. Follow the main path southeast, then bend east), and defeat the Godskin Apostle. You can summon Millicent for this battle',
      tags: []
    },
    {
      id: '3b2c0dce-67fc-4be8-830e-69f71b0eccbf',
      description: "Rest at the Windmill Heights site of grace, and find Millicent. Then, kill her to get Millicent's Prosthesis. Alternatively, follow Millicent's questline to the end and choose to side against her",
      tags: []
    },
    {
      id: 'b36df0c4-b404-4397-891f-5d493ad0dee2',
      description: 'Reach Mt. Gelmir and Volcano Manor by going north east from Altus Plateau site of grace until Forest-Spanning Greatbridge grace, crossing the bridge with the magic portal, then heading south west through the only path available',
      tags: []
    },
    {
      id: 'f7273293-56b9-4f12-966d-c9f02aa64fc2',
      description: "Speak with Tanith in the manor's lobby to join Volcano Manor and get the Drawing-Room Key",
      tags: []
    },
    {
      id: 'a7bcb03d-74db-4ee2-b1d7-2a5a6c7ec1cb',
      description: 'Collect the Recusant Finger and Letter from Volcano Manor from the nearby room with Rya and Bernahl',
      tags: []
    },
    {
      id: '851fb6c6-e48b-4bc4-ae93-5820d09f9e5c',
      description: "Talk to Patches in the entrance of Volcano Manor. If Patches is not in Volcano Manor, it's possible that you have to meet him first at Murkwater Cave for him to show up at Volcano Manor",
      tags: []
    },
    {
      id: '99d3327c-e62b-4d57-89a5-4c94ea3806cd',
      description: "Defeat Old Knight Istvan using the summon sign north from the Warmaster's Shack (Limgrave). There's a red sign on your map.",
      tags: []
    },
    {
      id: '192672a0-f31a-499b-a98d-854b148bce1a',
      description: 'Report back to Tanith and receive Magma Shot Sorcery',
      tags: []
    },
    {
      id: '158371be-a67b-4765-a7ad-0a8b71c3d963',
      description: 'Receive Letter to Patches from Patches in Volcano Manor',
      tags: []
    },
    {
      id: '217ea73b-df42-4fb4-b49e-ed589d3f0bdf',
      description: "Invade and defeat Great Horned Tragoth at Ruin-Strewn Precipice Overlook inside Magma Wyrm Makar's boss room after resting at the grace inside the boss room, to get the Bull Goat's Greaves (variant 2). Equip it as an alternative to Royal Remains Greaves",
      tags: []
    },
    {
      id: 'b303d6bd-1bdc-4db5-851e-655de5d34eef',
      description: 'Defeat Draconic Tree Sentinel and access Leyndell',
      tags: []
    },
    {
      id: 'b851d1fb-c816-4cb8-97e1-1d812af984ea',
      description: "Lionel's Armor (variant 2). Found on the bed in the building with the Lower Capital Church grace in Leyndell. Equip it as an alternative to Raptor's Black Feathers for great poise",
      tags: []
    },
    {
      id: '9044fbe8-aaa6-490b-b793-dd3c4a4e2532',
      description: "Lord of Blood's Exultation (variant 1). Drops from Esgar, Priest of Blood in Leyndell Catacombs. Accessed via the Subterranean Shunning-Grounds",
      tags: []
    },
    {
      id: '42a6c98d-0649-4bb1-94b1-1ba0f66b42aa',
      description: 'Defeat Morgott and access Mountaintops of the Giants',
      tags: []
    },
    {
      id: 'ec13543f-279c-4e3d-8830-543f7e304ada',
      description: "Godskin Swaddling Cloth (variant 2, replaces Lord of Blood's Exultation). Dropped by the Spirit-Caller Snail that summons the Godskin Apostle and Godskin Noble in a consecutive boss encounter, in Spiritcaller Cave, in  the Mountaintops of the Giants in the east, along the western bank of the Freezing Lake",
      tags: []
    },
    {
      id: '5b6ce963-d786-482e-a419-6a7cbb85846e',
      description: 'Grab the half of the Haligtree medallion from Castle Sol after defeating Commander Niall',
      tags: []
    },
    {
      id: '6199225e-9911-47d7-bc9f-7bf3ded5e21e',
      description: 'Use the Haligtree medallion to access Consecrated Snowfield',
      tags: []
    },
    {
      id: '8655ef32-d41f-4ccf-9ffc-f5d1f32a7e0e',
      description: 'Thorny Cracked Tear. Dropped by the Putrid Avatar at the Minor Erdtree in the Consecrated Snowfield, east of Ordina, Liturgical Town',
      tags: []
    },
    {
      id: '82535929-16d5-4a4d-8841-f9b2a881e71c',
      description: 'Beat the game and go to NG+',
      tags: []
    },
    {
      id: '9fb5bfbe-2fb2-44f6-9645-c8e737baa68a',
      description: 'Get a second Antspur Rapier from Maleigh Marais, Shaded Castle Castellan, a hostile NPC found in the fields west of The Shaded Castle',
      tags: []
    },
    {
      id: 'f672893d-bf23-4c85-9cb0-38633d5137bb',
      description: 'Dual wield two Antspur Rapiers, one with Bleed infusion and Poisonous Mist, the other with Cold infusion and Chilling Mist',
      tags: []
    },
    {
      id: '6929cf99-dd4e-4e90-bb58-346bf8e2a2bc',
      description: "Again follow Millicent's questline, following the same steps above until finding her in Dominula, Windmill Village, but don't kill her",
      tags: []
    },
    {
      id: 'e7745a27-f6e1-47c9-8a9e-3f77dbd558b7',
      description: 'Progress until reaching Mountaintops of the Giants',
      tags: []
    },
    {
      id: '197f9dc1-40af-4248-9f1b-14fc0a8cf683',
      description: "Talk to Millicent in the Ancient Snow Valley Ruins site of grace in Mountaintops of the Giants. If Millicent does not appear at the site of grace, try returning to the Windmill Heights again and see if she's there, and if so, exhaust her dialogue there",
      tags: []
    },
    {
      id: '69aa7120-e7ee-4908-803e-cf1b478f064f',
      description: 'Get Haligtree Secret Medallion (Right) from Castle Sol in Mountaintops of the Giants',
      tags: []
    },
    {
      id: '11ffa32a-262a-4354-bd20-7bcd70d4c894',
      description: 'With both halves of Haligtree medallion, access Consecrated Snowfield through the Lift of Rold',
      tags: []
    },
    {
      id: '9c6b2502-9a4d-473f-ba14-921a62292832',
      description: "beat Ordina's puzzle in Consecrated Snowfield to access Miquella's Haligtree. You can make the assassins visible holding Sentry's Torch in your off hand. You can knock off the snipers from the roofs with a greatbow, the Jar Cannon or long range spells",
      tags: []
    },
    {
      id: '84822e76-3a8e-42fd-a422-b2a128f50fad',
      description: 'Defeat the Lesser Ulcerated Tree Spirit in Elphael. To reach the mini-boss, go to the Drainage Channel site of grace, go west through the doorway, climb up the ladder at the end of the corridor, and go out the doorway on your right at the top. The mini-boss is at the landmass across the gap to the left. To reach it, go up the slope on the right and walk across the tree branch, heading southwest across the gap. You can cheese the mini-boss with ranged attacks from the top of the nearby trunk',
      tags: []
    },
    {
      id: '952334f6-2ee1-4eb4-9d60-199e8a847959',
      description: 'Find the two summon signs near where the Lesser Ulcerated Tree Spirit was, one to help Millicent and the other to fight her. Choose to help Millicent, to get the Rotten Winged Sword Insignia (variant 1)',
      tags: []
    }
  ]

}

export default list