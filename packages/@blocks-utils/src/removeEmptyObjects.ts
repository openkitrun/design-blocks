export const removeEmptyObjects = (stylesList: { [key: string]: any }[]) => {
  return stylesList.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });
};
