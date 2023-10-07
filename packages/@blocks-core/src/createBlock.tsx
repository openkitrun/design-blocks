import * as React from 'react';

import { ThemeContext } from '@design-blocks/theme';

import { createCss } from './css';
import { interleave } from './utils';

const testOmitPropsOnComponent = (prop: string): boolean => prop !== 'theme' && prop !== 'as';

export interface CreateBlockOptions {
  getShouldForwardProp?: (cmp: React.ElementType) => (prop: string) => boolean;
}

export interface StyledOptions {
  shouldForwardProp?: (prop: string) => boolean;
}

export function createBlock(
  StyleSheet: object,
  { getShouldForwardProp = () => testOmitPropsOnComponent }: CreateBlockOptions = {},
) {
  const css = createCss(StyleSheet);

  return function createStylesBlocks(component: React.ElementType, options?: StyledOptions) {
    const shouldForwardProp = options?.shouldForwardProp ? options.shouldForwardProp : undefined;
    const defaultShouldForwardProp = shouldForwardProp || getShouldForwardProp(component);
    const shouldUseAs = !defaultShouldForwardProp('as');

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return function createBlockComponent(...rawStyles: Array<any>) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      let styles: Array<any>;

      if (rawStyles[0] == null || rawStyles[0].raw === undefined) {
        styles = rawStyles;
      } else {
        styles = interleave(rawStyles);
      }

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const Block = React.forwardRef((props: any, ref: React.Ref<any>) => {
        const finalTag = (shouldUseAs && props.as) || component;

        let mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (const key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = React.useContext(ThemeContext);
        }

        const finalShouldForwardProp =
          shouldUseAs && shouldForwardProp === undefined ? getShouldForwardProp(finalTag) : defaultShouldForwardProp;

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const newProps: { [key: string]: any } = {};

        for (const key in props) {
          if (shouldUseAs && key === 'as') {
            continue;
          }

          if (finalShouldForwardProp(key)) {
            newProps[key] = props[key];
          }
        }

        newProps.style = [css.apply(mergedProps, styles), props.style];
        newProps.ref = ref;

        return React.createElement(finalTag, newProps);
      });

      // Need to assign type here because 'Styled' is of type ForwardRefExoticComponent
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      (Block as any).withComponent = (newComponent: React.ElementType) => createStylesBlocks(newComponent)(...styles);

      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      (Block as any).displayName = `emotion(${getDisplayName(component)})`;

      return Block;
    };
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const getDisplayName = (primitive: any) =>
  typeof primitive === 'string' ? primitive : primitive.displayName || primitive.name || 'Block';
