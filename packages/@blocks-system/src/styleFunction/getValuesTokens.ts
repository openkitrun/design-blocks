import type { Theme } from '@design-blocks/theme';
import { get, isString, isUndefined } from '@design-blocks/utils';

export const getValuesTokens = (values: Theme, fieldNames: string | string[]) => {
  const fieldNamesMap = fieldNames as string[];

  return isUndefined(fieldNames)
    ? values
    : isString(fieldNames)
    ? get(values, fieldNames)
    : fieldNamesMap?.map((name: string) => get(values, name));
};
