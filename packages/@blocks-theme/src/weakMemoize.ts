// Thank you emotion for this code: https://github.com/emotion-js/emotion/blob/main/packages/weak-memoize/src/index.js
// @ts-nocheck
export const weakMemoize = function <Arg, Return>(func: (arg0: Arg) => Return): (arg0: Arg) => Return {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  const cache: WeakMap<Arg, Return> = new WeakMap();
  return (arg) => {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
