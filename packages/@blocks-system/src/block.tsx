import styled from '@emotion/native';

export type { ComponentSelector, Interpolation } from '@emotion/serialize';
export type { ArrayInterpolation, CSSObject, FunctionInterpolation } from '@emotion/serialize';

// export interface StyledOptions {
//   label?: string;
//   shouldForwardProp?: (propName: string) => boolean;
//   target?: string;
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// export const styled = (component, options?: StyledOptions) => {
//   const stylesFactory = emStyled(component, options);
//   return stylesFactory;
// };

export const block = styled;
export type Block = typeof block;
