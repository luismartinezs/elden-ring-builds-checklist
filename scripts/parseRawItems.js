const rawText = ``; // Replace this with your actual raw text data
const lines = rawText.split('\n');
const splitLines = lines.map(line => line.split('\t'));

const checklistItems = splitLines.map(([id, description, tagString]) => {
  let tags = [];

  if (tagString) {
    tags = tagString.split(',').map(tag => tag.trim());
  }

  if (!description || !id) {
    return null
  }

  return {
    id,
    description,
    tags
  };
}).filter(Boolean);

// Custom replacer function for JSON.stringify
function replacer(key, value) {
  if (key === 'description') {
    return `\`${value}\``; // Wrap description in backticks without quotes
  }
  return value;
}

// Stringify the checklistItems with custom formatting
const output = JSON.stringify(checklistItems, replacer, 2)
  .replace(/"(`.*?`)"/g, '$1') // Remove quotes around backticked descriptions
  // .replace(/^\[/, '') // Remove opening bracket
  // .replace(/\]$/, '') // Remove closing bracket
  .trim(); // Remove any leading/trailing whitespace

console.log(output);