export function getPreferredOrder<T>(arrToOrder: T[], preferredOrderArr: readonly T[]) {
  return [...arrToOrder].sort((a, b) => {
    const indexA = preferredOrderArr.indexOf(a);
    const indexB = preferredOrderArr.indexOf(b);
    return indexA - indexB;
  });
}