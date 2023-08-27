const rawText = `47350604-1d3b-44f9-91ec-308bb46f59a8	Beat Godrick and acquire his Great Rune.
67896d0e-7fb5-4c8d-a368-4c65da98882b	Talk to Enia in Roundtable Hold.
0480105e-ee66-4786-88b3-d07bcafbe4d6	Locate Varre in Rose Church (south east of TEMPLE QUARTER grace, Liurnia).
e104923a-32ba-488b-bb94-4c20b32c263a	Obtain festering bloody finger from Varre.
fa2d45e0-ed58-4e1a-aa64-90e577ad386e	Invade players 3 times (quick exits are allowed).
4dc6eda1-baa7-4a38-b192-818e5199a3ed	Talk to Varre again to obtain Lord of Blood's Favor.
76493b9d-9bcf-45b9-aef1-c61a3661de06	Travel to the Four Belfries.
29f20517-d0d3-4120-956b-ef670e368ecf	Obtain the Imbued Sword Key from the top (fourth) belfry.
e569f1eb-bc95-4523-a168-f1dba784101a	Enter the waygate in the Second Belfry (look for the message "Precipice of Anticipation").
2c8b31a9-0f80-4118-b121-fc1c02dd692d	Defeat the Grafted Scion.
e68bea6a-e1c9-48d0-a212-05baf275c9e5	Reach the Chapel of Anticipation.
abfe6273-0a13-4842-8eef-93cec89de707	Soak Lord of Blood's Favor in the maiden inside the chapel.
765ebc6c-fd56-4d73-b4e4-7f1edf38989c	Return to Rose Church.
0bd8f8ed-f721-4650-84f4-4cb752b9a119	Talk to Varre twice.
fbb6c819-ecda-4180-98a1-880e6d342b55	Use the Pureblood Knight's Medal he provides.`; // Replace this with your actual raw text data
const lines = rawText.split('\n');
const splitLines = lines.map(line => line.split('\t'));

const checklistItems = splitLines.map(([id, description]) => {
  let tags = [];

  if (description.startsWith('[OPTIONAL]')) {
    tags = ['OPTIONAL'];
    description = description.replace('[OPTIONAL]', '').trim();
  }

  return {
    id,
    description,
    tags
  };
});

console.log(checklistItems);
