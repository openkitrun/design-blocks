/* eslint-disable @typescript-eslint/no-explicit-any */
import { compact } from './compact';
import { isUndefined } from './isUndefined';
import { isNullOrUndefined } from './isNullOrUndefined';

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
