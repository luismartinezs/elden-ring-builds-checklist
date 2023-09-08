// src/types/index.ts
import type { TAGS } from './constants';

export type TTagKeys = typeof TAGS[keyof typeof TAGS];
