
// items is an array of objects with id
function findDuplicateIds(items) {
  const ids = new Set()
  const duplicates = new Set()
  items.forEach((item) => {
    if (ids.has(item.id)) {
      duplicates.add(item.id)
    } else {
      ids.add(item.id)
    }
  })
  return duplicates
}

