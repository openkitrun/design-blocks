import React from 'react';

import { ButtonLabel } from './ButtonLabel';
import { ButtonLoading } from './ButtonLoading';
import { ButtonRoot } from './ButtonRoot';

export function Button({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

Button.displayName = 'Block.Button';

Button.Root = ButtonRoot;
Button.Label = ButtonLabel;
Button.Loading = ButtonLoading;

export default Button;
