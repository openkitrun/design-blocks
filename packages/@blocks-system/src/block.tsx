import styled from '@emotion/native';

import type { ComponentSelector, Interpolation } from '@emotion/serialize';

export { ArrayInterpolation, CSSObject, FunctionInterpolation } from '@emotion/serialize';

export { ComponentSelector, Interpolation };

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
