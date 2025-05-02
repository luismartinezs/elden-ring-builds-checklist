// take any "case" and convert it to a standard format for other conversions
// str can be anything
function normalizeCase(str: string): string {
  return str
    // 1. Split camelCase or PascalCase: “fooBar” → “foo Bar”
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    // 2. Split acronyms from normal words: “XMLHttp” → “XML Http”
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1 $2")
    // 3. Replace underscores or hyphens with spaces
    .replace(/[_\-]+/g, " ")
    // 4. Collapse multiple spaces & trim
    .replace(/\s+/g, " ")
    .trim()
    // 5. Lowercase everything
    .toLowerCase();
}

export function toSentenceCase(str: string) {
  const normalized = normalizeCase(str);
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

export function toTitleCase(str: string) {
  const normalized = normalizeCase(str);
  return normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toCamelCase(str: string) {
  const normalized = normalizeCase(str);
  return normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}


