/* eslint-disable @typescript-eslint/ban-ts-comment */
export const weakMemoize = function <Arg, Return>(func: (arg0: Arg) => Return): (arg0: Arg) => Return {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  //@ts-ignore
  const cache: WeakMap<Arg, Return> = new WeakMap();
  //@ts-ignore
  return (arg) => {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    const ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
