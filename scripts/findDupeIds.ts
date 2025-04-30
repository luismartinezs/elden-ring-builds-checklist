// items is an array of objects with id
// use bun run to run this file
import { items as nestedItems } from '../src/data/simple-game-progress/items';

interface Item {
  id: string;
  items?: Item[];
  [key: string]: any; // Allow other properties
}

// UUIDs to exclude from the duplicate check
const excludedIds = new Set<string>([
  "acf9e786-ce5a-47b6-addd-510ecc7a2ea1",
  "508d9a63-1bfe-4883-b774-2a0e9052a1c4",
  "8849e0e2-9c77-4bc8-804d-eebcde630aa5",
  "7c510998-cb9f-4a89-a3f4-1be7189a672e",
  "fe1b4d05-4399-4a9f-9790-af424afba182",
  "6081caa3-6d2b-4b95-b20c-88daae796559",
  "af05491b-d9d0-4fcc-a72b-b34b054e8f47",
  "01a2faf5-a555-4d89-8ddb-cb4e89463367",
  "6792f457-fabc-4ea0-b4d5-aaa4dcaac3e0"
]);

function findDuplicateIds(items: Item[]): Set<string> {
  const ids = new Set<string>();
  const duplicates = new Set<string>();
  items.forEach((item) => {
    if (!item || typeof item.id !== 'string') {
      console.warn('Skipping invalid item:', item);
      return;
    }
    if (ids.has(item.id)) {
      // Only add to duplicates if not in the exclusion list
      if (!excludedIds.has(item.id)) {
        duplicates.add(item.id);
      }
    } else {
      ids.add(item.id);
    }
  });
  return duplicates;
}

function flattenItems(items: Item[]): Item[] {
  const flatList: Item[] = [];
  items.forEach(item => {
    if (item && item.id) {
      flatList.push(item);
    }
    if (item && Array.isArray(item.items)) {
      flatList.push(...flattenItems(item.items));
    }
  });
  return flatList;
}

const allItems = flattenItems(nestedItems);
const duplicateIds = findDuplicateIds(allItems);

if (duplicateIds.size > 0) {
  console.log("Duplicate IDs found (excluding manually verified):");
  console.log(Array.from(duplicateIds));
} else {
  console.log("No unexpected duplicate IDs found.");
}