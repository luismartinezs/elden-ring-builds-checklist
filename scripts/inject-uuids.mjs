#!/usr/bin/env node
/**
 * Replaces all "__UUID__" placeholders in a file with real crypto.randomUUID() values.
 * Usage: node scripts/inject-uuids.mjs <file-path>
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/inject-uuids.mjs <file-path>');
  process.exit(1);
}

const content = readFileSync(file, 'utf-8');
let count = 0;
const result = content.replace(/"__UUID__"/g, () => {
  count++;
  return `"${randomUUID()}"`;
});

writeFileSync(file, result, 'utf-8');
console.log(`Injected ${count} UUIDs into ${file}`);
