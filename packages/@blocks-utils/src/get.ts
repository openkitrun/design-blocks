import { compact } from './compact';
import { isNullOrUndefined } from './isNullOrUndefined';
import { isUndefined } from './isUndefined';

/**
 * function to get value from object
 *
 * @param obj
 * @param path
 * @param defaultValue
 * @returns
 */
// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export function get(obj: any = {}, path: any, defaultValue?: any) {
  if (obj == null) {
    return defaultValue;
  }

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

export default get;
