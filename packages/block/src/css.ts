import transform from 'css-to-react-native';
import { interleave } from './utils';
// this is for handleInterpolation
// they're reset on every call to css
// this is done so we don't create a new
// handleInterpolation function on every css call
let styles: any;
const generated = {};
let buffer = '';
let lastType: any;

function handleInterpolation(interpolation: any, i: number, arr: Array<any>) {
  const type = typeof interpolation;

  if (type === 'string') {
    // strip comments
    // biome-ignore lint/style/noParameterAssign: <explanation>
    interpolation = interpolation.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
  }

  if (type === 'function') {
    //@ts-ignore
    if (this === undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          'Interpolating functions in css calls is not allowed.\n' +
            'If you want to have a css call based on props, create a function that returns a css call like this\n' +
            'let dynamicStyle = (props) => css`color: ${props.color}`\n' +
            'It can be called directly with props or interpolated in a block call like this\n' +
            'let SomeComponent = block.View`${dynamicStyle}`',
        );
      }
    } else {
      handleInterpolation.call(
        //@ts-ignore
        this,
        interpolation(
          //@ts-ignore
          this,
        ),
        i,
        arr,
      );
    }

    return;
  }

  const isIrrelevant = interpolation == null || type === 'boolean';
  const isRnStyle = (type === 'object' && !Array.isArray(interpolation)) || type === 'number';

  //@ts-ignore
  if (lastType === 'string' && (isRnStyle || isIrrelevant)) {
    const converted = convertStyles(buffer);

    if (converted !== undefined) {
      styles.push(converted);
    }

    buffer = '';
  }

  if (isIrrelevant) {
    return;
  }

  if (type === 'string') {
    buffer += interpolation;

    if (arr.length - 1 === i) {
      const converted = convertStyles(buffer);

      if (converted !== undefined) {
        styles.push(converted);
      }

      buffer = '';
    }
  }

  if (isRnStyle) {
    styles.push(interpolation);
  }

  if (Array.isArray(interpolation)) {
    //@ts-ignore
    interpolation.forEach(handleInterpolation, this);
  }

  lastType = type;
}

// Use platform specific StyleSheet method for creating the styles.
// This enables us to use the css``/css({}) in any environment (Native | Sketch | Web)
export function createCss(StyleSheet: Record<string, any>) {
  return function css(...args: any) {
    const prevBuffer = buffer;
    let vals;
    // these are declared earlier
    // this is done so we don't create a new
    // handleInterpolation function on every css call
    styles = [];
    buffer = '';
    lastType = undefined;

    if (args[0] == null || args[0].raw === undefined) {
      vals = args;
    } else {
      vals = interleave(args);
    }

    try {
      //@ts-ignore
      vals.forEach(handleInterpolation, this);
    } finally {
      buffer = prevBuffer;
    }

    //@ts-ignore
    const hash = JSON.stringify(styles);

    //@ts-ignore
    if (!generated[hash]) {
      const styleSheet = StyleSheet.create({
        //@ts-ignore
        generated: StyleSheet.flatten(styles),
      });
      //@ts-ignore
      generated[hash] = styleSheet.generated;
    }

    //@ts-ignore
    return generated[hash];
  };
}
const propertyValuePattern = /\s*([^\s]+)\s*:\s*(.+?)\s*$/;

//@ts-ignore
function convertPropertyValue(style) {
  // Get prop name and prop value
  const match = propertyValuePattern.exec(style);

  // match[2] will be " " in cases where there is no value
  // but there is whitespace, e.g. "color: "
  if (match !== null && match[2] !== ' ') {
    // the first value in the array will
    // be the whole string so we remove it
    match.shift();
    // yes i know this looks funny
    //@ts-ignore
    this.push(match);
  }
}

function convertStyles(str: string) {
  if (str.trim() === '') {
    return;
  }
  //@ts-ignore
  const stylePairs = [];
  const parsedString = str.split(';');
  //@ts-ignore
  parsedString.forEach(convertPropertyValue, stylePairs);

  try {
    //@ts-ignore
    return transform(stylePairs);
  } catch (error) {
    //@ts-ignore
    const msg = error.message;

    if (msg.includes('Failed to parse declaration')) {
      const values = msg.replace('Failed to parse declaration ', '').replace(/"/g, '').trim().split(':');
      const errorMsg = `'${values[0]}' shorthand property requires units for example - ${values[0]}: 20px or ${values[0]}: 10px 20px 40px 50px`;
      console.error(errorMsg);
    }
  }
}
