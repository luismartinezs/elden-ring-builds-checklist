import { TAGS } from '~/features/tags';

const { OPTIONAL } = TAGS

const list = {
  id: "a0cb83d7-e18b-4d11-be5e-0585357620e1",
  slug: "pure-faith-caster",
  title: "Pure Faith Caster",
  tags: ['fai'],
  notes: [`How would a broken pure faith caster build look like? I was asking that myself so I made this. This list is not an exhaustive "grab all incantations" checklist, but a simple game progression list that tries to make you broken quickly. It does not feel as broken as sorcerer + meteorite staff + rock sling, but it's close.`],
  items: [
    // === Starting setup ===
    {
      id: "083907c8-68de-403c-91ac-c3b1211faf09",
      description: 'Start as Prophet (gives Catch Flame and Finger Seal)',
      tags: []
    },
    // === Phase 1: Limgrave Essentials ===
    {
      id: "2a34e542-b606-4a68-8fee-1e812c681e48",
      description: 'Rest at the Gatefront Ruins grace to get <a href="https://eldenring.wiki.fextralife.com/Torrent" target="_blank">Torrent</a> from Melina',
      tags: []
    },
    {
      id: "fffd0440-d1f0-4148-a482-ac60692a98ef",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Whetstone+Knife" target="_blank">Whetstone Knife</a> from the cellar in Gatefront Ruins',
      tags: []
    },
    {
      id: "806263a7-7494-445a-a965-047f6adebb49",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Flask+of+Wondrous+Physick" target="_blank">Flask of Wondrous Physick</a> inside the Third Church of Marika (eastern Limgrave)',
      tags: []
    },
    {
      id: "1f072994-aace-4f1e-8706-457dba00d7a2",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Ash+of+War:+Sacred+Blade" target="_blank">Sacred Blade Ash of War</a> from Teardrop Scarab just north of the Third Church of Marika, in the water',
      tags: []
    },
    {
      id: "fa9a6f94-108b-454c-9a0e-adc90251cbd0",
      description: 'Get Spirit Calling Bell from Renna at the Church of Elleh at night',
      tags: []
    },
    {
      id: "3c8a88f9-293b-40c5-9467-f6a283be50f2",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Spirit+Jellyfish+Ashes" target="_blank">Spirit Jellyfish Ashes</a> from Roderika at Stormhill Shack (exhaust her dialogue)',
      tags: []
    },
    {
      id: "d22732aa-567a-47e3-a14c-9d009e0ea724",
      description: 'Defeat <a href="https://eldenring.wiki.fextralife.com/Tibia+Mariner" target="_blank">Tibia Mariner</a> at Summonwater Village (northeast Limgrave) to get <a href="https://eldenring.wiki.fextralife.com/Skeletal+Militiaman+Ashes" target="_blank">Skeletal Militiaman Ashes</a>. skeletons revive after being killed, great for holding boss aggro',
      tags: [OPTIONAL]
    },
    // === Phase 2: Weeping Peninsula ===
    {
      id: "0f9d337e-d782-4a1a-8f35-70afbcda5e2d",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Morning+Star" target="_blank">Morning Star</a> from the chest on the broken carriage along the main road of the Weeping Peninsula. Two-hand to meet STR 12 requirement',
      tags: []
    },
    {
      id: "4b0b5254-6bd8-41c3-ad4f-00619897bdd1",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Winged+Scythe" target="_blank">Winged Scythe</a> from the cellar of Tombsward Ruins in the Weeping Peninsula (STR 16, DEX 16, FAI 24)',
      tags: []
    },
    {
      id: "c12cc563-a6f1-4b14-a514-5d1f972cd93e",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/The+Flame+of+Frenzy" target="_blank">The Flame of Frenzy</a> (FAI 8) from a corpse inside the Callu Baptismal Church south of the Ailing Village. Charge it up for massive stagger and multi-hit damage',
      tags: []
    },
    {
      id: "cc49b3ab-3e8f-4064-9519-59745b721cc1",
      description: 'Get the <a href="https://eldenring.wiki.fextralife.com/Faith-Knot+Crystal+Tear" target="_blank">Faith-Knot Crystal Tear</a> from under a tree north of the Demi-Human Forest Ruins in the Weeping Peninsula (east of Church of Pilgrimage, guarded by poison flowers). +10 Faith for 3 minutes in your Flask of Wondrous Physick',
      tags: []
    },
    // === Phase 3: Caelid Heist ===
    {
      id: "d9c391b9-690f-45b1-a44f-9a8a11ebbcb5",
      description: 'Kill <a href="https://eldenring.wiki.fextralife.com/Elder+Dragon+Greyoll" target="_blank">Elder Dragon Greyoll</a> at Fort Faroth in Caelid. Two-hand the Morning Star and attack her tail until bleed procs kill her for 74,000 Runes and 5 Dragon Hearts',
      tags: []
    },
    {
      id: "c6868b08-a37d-4b0c-982f-68ac465cfb87",
      description: 'Spend runes to level up',
      tags: [],
      items: [
        {
          id: "5fccd80b-eff0-4ff6-bf11-566c6b3d9dca",
          description: 'FAI 24 (covers Rotten Breath and Winged Scythe requirements)',
          tags: []
        },
        {
          id: "2d167d60-0b28-4165-8a4c-b6aeece67755",
          description: 'ARC 12 (minimum for Rotten Breath)',
          tags: []
        },
        {
          id: "528f0be8-0f90-410c-b90d-b7beb8137c94",
          description: 'STR 16, DEX 16 (if you want to wield Winged Scythe)',
          tags: []
        },
        {
          id: "a48471b2-0412-4f19-8274-ef6ada8e231d",
          description: 'Dump the rest into VGR',
          tags: []
        }
      ]
    },
    {
      id: "cffbc0c3-b3a1-444a-97aa-bace07fbf150",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Ash+of+War:+Flaming+Strike" target="_blank">Flaming Strike Ash of War</a> from a Teardrop Scarab in the bat graveyard on the cliff path outside Redmane Castle (southern Caelid)',
      tags: [OPTIONAL]
    },
    {
      id: "c91da996-1fa8-4cef-b14a-5dab01c58208",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Rotten+Breath" target="_blank">Rotten Breath</a> (FAI 15, ARC 12) at the Cathedral of Dragon Communion in southwest Caelid. Trade 1 Dragon Heart. Inflicts Scarlet Rot, melts bosses while you run away',
      tags: []
    },
    // === Phase 4: Liurnia Skip & Roundtable ===
    {
      id: "48f8e549-1f79-4a8e-ac11-bf7aab0dfbee",
      description: 'Skip Stormveil Castle via the hidden cliffside path. Ride north from Stormhill Shack under the bridge, drop down to the right side and follow the cliff edge into Liurnia',
      tags: []
    },
    {
      id: "ddb45dd9-e689-468d-a0ed-e6acff5f1072",
      description: 'Kill the Leyndell Knight patrolling south of the Artist\'s Shack in Liurnia (blast with Rotten Breath from horseback) to get the <a href="https://eldenring.wiki.fextralife.com/Dragon+Cult+Prayerbook" target="_blank">Dragon Cult Prayerbook</a>',
      tags: []
    },
    {
      id: "c564e104-64ef-4702-847e-16084e2b730c",
      description: 'Give the Dragon Cult Prayerbook to <a href="https://eldenring.wiki.fextralife.com/Miriel+Pastor+of+Vows" target="_blank">Miriel, Pastor of Vows</a> at the Church of Vows in Liurnia and buy <a href="https://eldenring.wiki.fextralife.com/Lightning+Spear" target="_blank">Lightning Spear</a> (FAI 17). Fast, reliable ranged poke',
      tags: []
    },
    {
      id: "53c36e3e-b9a3-4be1-990f-9cbc0c1f4f9b",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Cipher+Pata" target="_blank">Cipher Pata</a> (FAI 30) at Roundtable Hold. Jump off the central balcony, run left through the doors, grab it off the bed before Mad Tongue Alberich kills you',
      tags: [OPTIONAL]
    },
    // === Phase 5: Stormveil Castle ===
    {
      id: "c062d009-40d4-4c3f-a4f4-624631eab9bb",
      description: 'Defeat <a href="https://eldenring.wiki.fextralife.com/Margit,+The+Fell+Omen" target="_blank">Margit, the Fell Omen</a>. Summon Jellyfish, cast Rotten Breath, run away',
      tags: []
    },
    {
      id: "533350c3-a0fe-404a-885a-716539dde727",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Godslayer\'s+Seal" target="_blank">Godslayer\'s Seal</a> and <a href="https://eldenring.wiki.fextralife.com/Black+Flame" target="_blank">Black Flame</a> (FAI 20) in Stormveil Castle. Behind a Stonesword Key fog wall near the Rampart Tower grace. Godslayer\'s Seal (FAI 27) boosts Godslayer Incantations by 10%',
      tags: []
    },
    // === Upgrade priorities ===
    {
      id: "3a2f1916-d756-4cf2-96fa-90dbf3292718",
      description: 'Upgrade priority: Godslayer\'s Seal with Regular Smithing Stones (boosts all incantation damage) and Winged Scythe with Somber Smithing Stones',
      tags: []
    },
    {
      id: "fa85bfe4-8205-450f-bea4-502ddf83908d",
      description: 'Target stats around level 50',
      tags: [],
      items: [
        {
          id: "65a3c73e-7c86-4bd2-9fd2-ae3139c41d68",
          description: 'VGR 25-30',
          tags: []
        },
        {
          id: "3af54a60-9908-4cc4-9254-de5feae8457e",
          description: 'MND 15-18',
          tags: []
        },
        {
          id: "2e8ad91b-4457-4f80-b20d-fe5d837080b4",
          description: 'FAI 30-35',
          tags: []
        }
      ]
    },
    // === Mid-game: Buffs ===
    {
      id: "3d243b01-7efd-4359-857f-e8887366ca61",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Flame+Grant+Me+Strength" target="_blank">Flame, Grant Me Strength</a> (FAI 15) behind the flame chariots at Fort Gael in western Caelid. +20% Physical and Fire damage for 30 seconds, stacks with Golden Vow',
      tags: []
    },
    {
      id: "5bf64c5f-fb5d-40b3-9140-ea5cc60877bc",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Golden+Vow" target="_blank">Golden Vow</a> incantation (FAI 25) from a corpse inside the Corpse-Stench Shack in Mt. Gelmir. +15% damage dealt, -10% damage taken for 80 seconds',
      tags: []
    },
    // === Mid-game: Whetblades & Crystal Tears ===
    {
      id: "058f74c6-c75e-4fe1-b9b2-d3da5888b332",
      description: 'Get the <a href="https://eldenring.wiki.fextralife.com/Red-Hot+Whetblade" target="_blank">Red-Hot Whetblade</a> from Redmane Castle in Caelid (only accessible when the Radahn Festival is inactive). Allows applying Fire and Flame Art affinities to weapons via Ashes of War',
      tags: []
    },
    {
      id: "afdaa897-5a8f-44b5-8f26-cbeab7f538ae",
      description: 'Defeat the <a href="https://eldenring.wiki.fextralife.com/Putrid+Avatar" target="_blank">Putrid Avatar</a> at the Minor Erdtree in Caelid, east of the <a href="https://eldenring.wiki.fextralife.com/Smoldering+Church" target="_blank">Smoldering Church</a>, to get the <a href="https://eldenring.wiki.fextralife.com/Flame-Shrouding+Cracked+Tear" target="_blank">Flame-Shrouding Cracked Tear</a>. +20% fire damage for 3 minutes',
      tags: []
    },
    {
      id: "407d8660-f214-495a-aa34-7a99a84d0548",
      description: 'Defeat the <a href="https://eldenring.wiki.fextralife.com/Erdtree+Avatar" target="_blank">Erdtree Avatar</a> at the <a href="https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Liurnia+Northeast)" target="_blank">Minor Erdtree in northeastern Liurnia</a> to get the <a href="https://eldenring.wiki.fextralife.com/Lightning-Shrouding+Cracked+Tear" target="_blank">Lightning-Shrouding Cracked Tear</a> and <a href="https://eldenring.wiki.fextralife.com/Holy-Shrouding+Cracked+Tear" target="_blank">Holy-Shrouding Cracked Tear</a>. +20% lightning/holy damage for 3 minutes each',
      tags: []
    },
    {
      id: "6a23d482-0bbb-494c-a31f-8615cb56eb37",
      description: 'Defeat the <a href="https://eldenring.wiki.fextralife.com/Ulcerated+Tree+Spirit" target="_blank">Ulcerated Tree Spirit</a> at the <a href="https://eldenring.wiki.fextralife.com/Minor+Erdtree+(Mt.+Gelmir)" target="_blank">Minor Erdtree in Mt. Gelmir</a> (east of Road of Iniquity grace) to get the <a href="https://eldenring.wiki.fextralife.com/Cerulean+Hidden+Tear" target="_blank">Cerulean Hidden Tear</a>. Eliminates all FP consumption for ~15 seconds, perfect for expensive casts like Ancient Dragons\' Lightning Strike',
      tags: []
    },
    {
      id: "1232b0c1-533c-416b-babf-71cf03690bed",
      description: 'Get the <a href="https://eldenring.wiki.fextralife.com/Sanctified+Whetblade" target="_blank">Sanctified Whetblade</a> from Fortified Manor in Leyndell, Royal Capital. Allows applying Lightning and Sacred affinities to weapons. WARNING: cannot be acquired after defeating Maliketh',
      tags: []
    },
    // === Mid-game: Talismans ===
    {
      id: "8c1cb5f2-59ca-4d97-ac70-f77024cdc193",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Radagon+Icon" target="_blank">Radagon Icon</a> talisman from Raya Lucaria Academy. From the Debate Parlor grace, go outside, hook right, over the railing, up the ladder. Shortens casting time',
      tags: []
    },
    {
      id: "dae43c8a-3ea4-4f1c-be04-bb27a75bd28d",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Faithful\'s+Canvas+Talisman" target="_blank">Faithful\'s Canvas Talisman</a> from Sellia Crystal Tunnel in Caelid. +4% incantation damage',
      tags: []
    },
    {
      id: "c0ecac8d-dffc-452e-8d42-bbc4167c7891",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Godfrey+Icon" target="_blank">Godfrey Icon</a> talisman from Golden Lineage Evergaol in Altus Plateau. Defeat Godefroy the Grafted. +15% to charged spells',
      tags: []
    },
    // === Mid-game: Weapons ===
    {
      id: "80de0b4d-3bdb-49e1-888a-f003753dbc39",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Coded+Sword" target="_blank">Coded Sword</a> from Leyndell, Royal Capital. Upper floor of the Fortified Manor (same building as Sanctified Whetblade). Pure holy damage, ignores shields, 0.0 weight',
      tags: [OPTIONAL]
    },
    {
      id: "3cf0aeef-1551-4cc2-9fbc-ef821cc70fc7",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Blasphemous+Blade" target="_blank">Blasphemous Blade</a> by defeating Rykard, Lord of Blasphemy at Volcano Manor. Gimmick boss fight with provided spear. Best PvE Faith weapon: massive fire damage, healing on hit, knocks enemies flat',
      tags: []
    },
    // === Mid-game: Spells ===
    {
      id: "71ba62e9-9b91-4d36-ba90-e57fcbc30f0b",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Pest+Threads" target="_blank">Pest Threads</a> (FAI 11) from <a href="https://eldenring.wiki.fextralife.com/Sage+Gowry" target="_blank">Sage Gowry</a> in Caelid for 7500 Runes (requires progressing Millicent\'s quest and giving her the Valkyrie\'s Prosthesis. Tip: turn on the Millicent filter in the simple game checklist to track this). Devastating against large bosses, threads hit dozens of times per cast',
      tags: []
    },
    // === Mid-game: Spirit Ashes ===
    {
      id: "79ee35fc-e244-4786-9b52-bc3b67ee4327",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Greatshield+Soldier+Ashes" target="_blank">Greatshield Soldier Ashes</a> from the graveyard area in Nokron, Eternal City. Five soldiers with tower shields physically trap bosses in place',
      tags: []
    },
    {
      id: "b00d5dd8-c6df-4160-8dfc-6ee363806d1d",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Dung+Eater+Puppet" target="_blank">Dung Eater Puppet</a> via Seluvis\'s questline. Give Seluvis\'s Potion to the Dung Eater in the Subterranean Shunning-Grounds. His attacks debuff boss damage negation',
      tags: [OPTIONAL]
    },
    {
      id: "c748fdac-10b5-427c-a20a-a510b7ab7ed6",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Black+Knife+Tiche" target="_blank">Black Knife Tiche</a> by defeating Alecto in the Ringleader\'s Evergaol (Moonlight Altar plateau, Ranni\'s questline). Dodges instead of blocking, spams Destined Death projectiles that burn 10% max HP',
      tags: [OPTIONAL]
    },
    // === Mid-game: Erdtree Seal ===
    {
      id: "2a99f68a-6b79-4aea-8f15-0364495259f4",
      description: 'Pick up <a href="https://eldenring.wiki.fextralife.com/Erdtree+Seal" target="_blank">Erdtree Seal</a> at Volcano Manor near Prison Town Church grace. Bank it for now. Equip once FAI reaches 69+ as it overtakes Godslayer\'s Seal. S scaling in Faith, highest incantation scaling in the game at 80 FAI',
      tags: []
    },
    {
      id: "299284bf-1ecf-442c-bb95-f86207fc144c",
      description: 'Target stats around level 80',
      tags: [],
      items: [
        {
          id: "4180c718-2df5-42df-8f96-3d5ee18c0789",
          description: 'VGR 35-40',
          tags: []
        },
        {
          id: "51b02252-ab98-4bb9-aaaa-7b24b181319b",
          description: 'MND 20-25',
          tags: []
        },
        {
          id: "9738d605-e27b-41d8-a28b-516bb00ddc1c",
          description: 'FAI 50-55',
          tags: []
        }
      ]
    },
    {
      id: "d11f6b04-3704-44a2-b907-a32cbc9675cb",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Giant\'s+Flame+Take+Thee" target="_blank">Giant\'s Flame Take Thee</a> (FAI 30) from the Mountaintops of the Giants. Defeat Chief Guardian Arghanthy at Guardians\' Garrison for the Giant\'s Prayerbook. Massive AoE fireball',
      tags: []
    },
    {
      id: "e2747f19-5550-4a8a-ab2d-f0fd06af34a3",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Ancient+Dragons\'+Lightning+Strike" target="_blank">Ancient Dragons\' Lightning Strike</a> (FAI 26) from Crumbling Farum Azula. Find the Ancient Dragon Prayerbook and give it to Miriel. Highest DPS spell in the game against large bosses',
      tags: []
    },
    {
      id: "21bd27e7-95fc-42ab-90f4-5f178825d004",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Flock\'s+Canvas+Talisman" target="_blank">Flock\'s Canvas Talisman</a>. kill Gowry after completing Millicent\'s questline. Replaces Faithful\'s Canvas, +8% incantation damage',
      tags: []
    },
    {
      id: "28a8dbe9-9e8b-4afb-a6e2-ee14287442bd",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Dragoncrest+Greatshield+Talisman" target="_blank">Dragoncrest Greatshield Talisman</a> from Elphael, Brace of the Haligtree. reduces physical damage taken by 20%',
      tags: []
    },
    {
      id: "c2b613ab-e165-46c0-900a-714bcf2e5970",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Lord\'s+Divine+Fortification" target="_blank">Lord\'s Divine Fortification</a> (FAI 27) from Gideon Ofnir at Roundtable Hold after defeating Malenia. Reduces Holy damage taken by 60%, trivializes final boss fights',
      tags: [OPTIONAL]
    },
    {
      id: "d2996e9c-50cd-4958-861a-541a8ace8721",
      description: 'Farm <a href="https://eldenring.wiki.fextralife.com/Envoy\'s+Long+Horn" target="_blank">Envoy\'s Long Horn</a> from Large Oracle Envoys in Leyndell or Haligtree. Bubble Shower ash of war shreds large bosses with tracking holy bubbles',
      tags: [OPTIONAL]
    },
    {
      id: "585d004a-23d8-4abb-8f71-306d55b5c8ce",
      description: 'Target these stats at level 150',
      tags: [],
      items: [
        {
          id: "dbb2e0e3-1141-43e6-b084-41a821ad84b4",
          description: 'VGR 50-60',
          tags: []
        },
        {
          id: "27066b8c-3d54-4f6e-9333-5288ae306f70",
          description: 'MND 25-30',
          tags: []
        },
        {
          id: "005a1cab-bf04-46a1-bf0b-f6fa41b85d16",
          description: 'FAI 70-80',
          tags: []
        },
        {
          id: "36ce571b-df76-4f13-9f09-15be88a2b6b7",
          description: 'ARC 12',
          tags: []
        }
      ]
    },
    // === DLC: Shadow of the Erdtree ===
    {
      id: "2c1bd748-6c71-4097-a5ef-19d73a26bee2",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Knight\'s+Lightning+Spear" target="_blank">Knight\'s Lightning Spear</a> from Scorpion River Catacombs. direct upgrade to Lightning Spear, throws a primary spear plus a delayed volley',
      tags: []
    },
    {
      id: "539d46be-8544-4a8a-98dc-66196832e39a",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Fire+Serpent" target="_blank">Fire Serpent</a> from Shadow Keep (Specimen Storehouse). Cheap, spammable flame ribbon that tracks enemies',
      tags: []
    },
    {
      id: "81e4f5d9-f900-4e5e-aa52-2ef8821a277f",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Pest-Thread+Spears" target="_blank">Pest-Thread Spears</a> from the Ancient Ruins of Rauh. Upgraded Pest Threads, two massive piercing stingers. Point-blank on large DLC bosses for maximum shred',
      tags: []
    },
    {
      id: "4d714f10-2f9e-433b-82b3-65123f743059",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Black+Steel+Greathammer" target="_blank">Black Steel Greathammer</a> dropped by the Black Knight at the Church of Consolation. Innate Holy damage, guard counters create explosive Holy AoE',
      tags: [OPTIONAL]
    },
    {
      id: "365ea21f-1f79-4346-b683-d8e0684009a7",
      description: 'Farm <a href="https://eldenring.wiki.fextralife.com/Fire+Knight\'s+Greatsword" target="_blank">Fire Knight\'s Greatsword</a> from Fire Knights in Shadow Keep. Apply Flame Art affinity for massive FAI scaling',
      tags: [OPTIONAL]
    },
    {
      id: "fb64e853-dfac-4fc0-bdc4-f33bdaf21d3a",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Heal+From+Afar" target="_blank">Heal From Afar</a> (FAI 22) from a cave path north of the <a href="https://eldenring.wiki.fextralife.com/Moorth+Ruins" target="_blank">Moorth Ruins</a> in Scadu Altus, at the foot of an underground golden tree. Shoots a healing projectile, aim at your own feet for quick self-heal during boss fights',
      tags: [OPTIONAL]
    },
    {
      id: "c9656171-71c0-405a-90f1-08588bd03830",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Taylew+the+Golem+Smith" target="_blank">Taylew the Golem Smith</a> spirit ash from Taylew\'s Ruined Forge (north of Ancient Ruins Base grace). Massive stone golem tank, heal him with Heal From Afar to keep him alive indefinitely',
      tags: []
    },
    {
      id: "b9d03196-800a-4971-ac31-eabb836c999f",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Sword+of+Light" target="_blank">Sword of Light</a>. Convert the Stone-Sheathed Sword at an altar (e.g. Ruins of Unte). Keep in off-hand, weapon art buffs +20% Holy damage for 60 seconds, stacks with Golden Vow',
      tags: [OPTIONAL]
    },
    {
      id: "88423de1-6bc9-41d0-ba87-855a9560826f",
      description: 'Get <a href="https://eldenring.wiki.fextralife.com/Euporia" target="_blank">Euporia</a> twinblade from Enir-Ilim (hidden jumping puzzle). Arguably highest DPS Faith weapon in the game, holy laser beam ash of war',
      tags: []
    },
  ]
}

export default list
