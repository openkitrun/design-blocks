import amber from './amber';
import blue from './blue';
import common from './common';
import cyan from './cyan';
import emerald from './emerald';
import fuchsia from './fuchsia';
import gray from './gray';
import green from './green';
import indigo from './indigo';
import lime from './lime';
import neutral from './neutral';
import orange from './orange';
import pink from './pink';
import purple from './purple';
import red from './red';
import rose from './rose';
import sky from './sky';
import slate from './slate';
import stone from './stone';
import teal from './teal';
import violet from './violet';
import yellow from './yellow';
import zinc from './zinc';

import type { Leaves } from '@design-blocks/types';

export const colors = {
  amber,
  blue,
  common,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  neutral,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc,
};

export type IColors = Leaves<typeof colors>;
export type Colors = typeof colors;

export default colors;
