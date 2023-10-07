/* eslint-disable @typescript-eslint/no-explicit-any */
import { compact } from './compact';
import { isNullOrUndefined } from './isNullOrUndefined';
import { isUndefined } from './isUndefined';

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function get(obj: any = {}, path: any, defaultValue?: any) {
  const resultFinal = compact(path?.split(/[,[\].]+?/))?.reduce(
    (result, key) => (isNullOrUndefined(result) ? result : result[key]),
    obj,
  );

  return isUndefined(resultFinal) || resultFinal === obj
    ? isUndefined(obj[path])
      ? defaultValue
      : obj[path]
    : resultFinal;
}
