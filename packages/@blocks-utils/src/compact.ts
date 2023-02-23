export function compact(value: string[]) {
  return value?.filter(Boolean);
}
