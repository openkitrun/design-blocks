/* eslint-disable @typescript-eslint/ban-ts-comment */
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

// @ts-ignore
export function systemMerge(styles, mergeStyles) {
  const output = deepmerge(styles, mergeStyles, {
    clone: false, // No need to clone deep
  });

  return output;
}
