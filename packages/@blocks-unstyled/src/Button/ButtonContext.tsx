import { createContext } from 'react';

import type { ButtonContextProps } from './Button.types';

export const ButtonContext = createContext<ButtonContextProps>(null as any);

ButtonContext.displayName = 'BlockButton.Context';
