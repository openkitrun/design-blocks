import type { ISpacings } from '@design-blocks/theme';
import type { SpacingBaseExcluded, SxStyledFlex } from './StyleFunction';

type GapValues = Exclude<ISpacings | number | undefined, SpacingBaseExcluded>;

export interface FlexGapBlock {
  /**
   * Defines the space between the immediate children of the `<Stack>` component.
   *
   * When `gap` is set, it determines the spacing between each child component inside the `<Stack>`.
   *
   * @example
   * ```tsx
   * <Stack gap={3}>
   *   <ComponentOne />
   *   <ComponentTwo />
   * </Stack>
   * ```
   *
   * @type "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | number | undefined
   * @default 0
   */
  gap?: GapValues;
  /**
   * Defines the vertical space between rows for components arranged in a grid or flex layout.
   *
   * Specifies the size of the gap between the rows. This is useful when you have multiple components
   * stacked or aligned in rows, and you want to manage the spacing between these rows.
   *
   * @example
   * ```tsx
   * <Stack rowGap={3}>
   *   <RowOneComponent />
   *   <RowTwoComponent />
   * </Stack>
   * ```
   *
   * @type GapValues
   */
  rowGap?: GapValues;
  /**
   * Defines the horizontal space between columns for components arranged in a grid or flex layout.
   *
   * Specifies the size of the gap between the columns. This is useful when you have multiple components
   * side by side in columns, and you want to manage the spacing between these columns.
   *
   * @example
   * ```tsx
   * <Stack columnGap={3}>
   *   <ColumnOneComponent />
   *   <ColumnTwoComponent />
   * </Stack>
   * ```
   *
   * @type GapValues
   */
  columnGap?: GapValues;
}

export interface StylesObjectProps extends SxStyledFlex {}

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T] : '';
