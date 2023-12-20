import { get, isString, isUndefined } from '@design-blocks/utils';

import type { Theme } from '@design-blocks/theme';

export const getValuesTokens = (values: Theme, fieldNames: string | string[] | undefined) => {
  const fieldNamesMap = fieldNames as string[];

  return isUndefined(fieldNames)
    ? values
    : isString(fieldNames)
    ? get(values, fieldNames)
    : fieldNamesMap?.map((name: string) => get(values, name));
};
