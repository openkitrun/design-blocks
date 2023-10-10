import React from 'react';

import { ButtonLabel } from './ButtonLabel';
import { ButtonLoading } from './ButtonLoading';
import { ButtonRoot } from './ButtonRoot';

function Button({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

Button.displayName = 'Button';

Button.Root = ButtonRoot;
Button.Label = ButtonLabel;
Button.Loading = ButtonLoading;

const Root = ButtonRoot;
const Label = ButtonLabel;
const Loading = ButtonLoading;

export { Root, Label, Loading, Button };
