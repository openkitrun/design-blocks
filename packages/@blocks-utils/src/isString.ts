// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function isString(value: any) {
  return typeof value === 'string';
}
