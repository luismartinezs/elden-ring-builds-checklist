const rawText = ``; // Replace this with your actual raw text data
const lines = rawText.split('\n');
const splitLines = lines.map(line => line.split('\t'));

const checklistItems = splitLines.map(([id, description, tagString]) => {
  let tags = [];

  if (tagString) {
    tags = tagString.split(',').map(tag => tag.trim());
  }

  // if (description && description.startsWith('[OPTIONAL]')) {
  //   tags = ['OPTIONAL'];
  //   description = description.replace('[OPTIONAL]', '').trim();
  // }

  if (!description || !id) {
    return null
  }

  return {
    id,
    description,
    tags
  };
}).filter(Boolean);

console.log(checklistItems);
