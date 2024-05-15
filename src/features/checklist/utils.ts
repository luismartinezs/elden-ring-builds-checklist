export function checkId(id: string, list: string[], allowDupes = false) {
  if (!allowDupes && list.includes(id)) {
    return list
  }
  return [...list, id]
}

export function uncheckId(id: string, list: string[]) {
  return list.filter((itemId) => itemId !== id)
}

export function toggleId(id: string, list: string[]): string[] {
  if (list.includes(id)) {
    return checkId(id, list, true)
  } else {
    return uncheckId(id, list)
  }
}