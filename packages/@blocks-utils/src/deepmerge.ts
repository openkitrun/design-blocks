import { isObject } from './isObject';

export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const output: T = { ...target };

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const targetValue = target[key];

        if (isObject(sourceValue)) {
          if (!(key in target)) {
            Object.assign(output, { [key]: sourceValue });
          } else {
            output[key as keyof T] = deepMerge(
              targetValue as Record<string, unknown>,
              sourceValue as Record<string, unknown>,
            ) as T[keyof T];
          }
        } else {
          Object.assign(output, { [key]: sourceValue });
        }
      }
    }
  }

  return output;
}
