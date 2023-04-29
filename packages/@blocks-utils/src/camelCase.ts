export function camelCase(input: string): string {
  const result = input?.replace(/[_-\s]([a-z])/g, (_match, char) => char?.toUpperCase());
  return result.charAt(0).toLowerCase() + result.slice(1);
}
