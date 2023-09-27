import type { ISpacings } from '@design-blocks/theme';
import type { SxStyledFlex } from './StyleFunction';

export type OmitFlexBase = 'gap' | 'rowGap' | 'columnGap';
type Excluded = 'full' | 'spacing' | 'baseSpacing';

export interface BaseFlexGap {
  /**
   * Defines the space between immediate children.
   *
   * @Type "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | number
   *
   * @Default 0
   *
   * @example
   * ```tsx
   * <Stack gap={3}>
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   * @see { @sx https://github.com/wootsbot/design-blocks/tree/main/packages/blocks-primitives/src/Stack }
   */
  gap?: Exclude<ISpacings | number | undefined, Excluded>;
  rowGap?: Exclude<ISpacings | number | undefined, Excluded>;
  columnGap?: Exclude<ISpacings | number | undefined, Excluded>;
}

export interface StylesObjectProps extends Omit<SxStyledFlex, OmitFlexBase>, BaseFlexGap {}

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T] : '';
