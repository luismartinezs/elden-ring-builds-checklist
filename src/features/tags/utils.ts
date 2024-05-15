import { TAGS } from "./constants";

export function isValidTag(tag: string): tag is keyof typeof TAGS {
  const tagList = Object.values(TAGS) as Array<keyof typeof TAGS>;

  if (tagList.includes(tag as keyof typeof TAGS)) {
    return true;
  } else {
    return false
  }
}
