// return true if every element of subarr is present in arr
export function isSubArray(arr: string[], subarr: string[]) {
  const result = subarr.every((v) => {
    const includes = arr.includes(v);
    return includes;
  });
  return result;
}