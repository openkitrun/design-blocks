export const spacingsKeys = {
  m: 'margin',
  margin: 'margin',
  mr: 'marginRight',
  marginRight: 'marginRight',
  ml: 'marginLeft',
  marginLeft: 'marginLeft',
  mt: 'marginTop',
  marginTop: 'marginTop',
  mb: 'marginBottom',
  marginBottom: 'marginBottom',
  mv: 'marginVertical',
  marginVertical: 'marginVertical',
  mh: 'marginHorizontal',
  marginHorizontal: 'marginHorizontal',

  p: 'padding',
  padding: 'padding',
  pr: 'paddingRight',
  paddingRight: 'paddingRight',
  pl: 'paddingLeft',
  paddingLeft: 'paddingLeft',
  pt: 'paddingTop',
  paddingTop: 'paddingTop',
  pb: 'paddingBottom',
  paddingBottom: 'paddingBottom',
  pv: 'paddingVertical',
  paddingVertical: 'paddingVertical',
  ph: 'paddingHorizontal',
  paddingHorizontal: 'paddingHorizontal',

  gap: 'gap',
  rowGap: 'rowGap',
  columnGap: 'columnGap',
} as const;

export type ISpacesKeys = keyof typeof spacingsKeys;
export type SpacesKeys = typeof spacingsKeys;
