// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeEmptyObjects = (stylesList: { [key: string]: any }[]) => {
  return stylesList.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });
};
