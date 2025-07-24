import { createContext } from "react";

import type { ButtonContextProps } from "./Button.types";

export const ButtonContext = createContext<ButtonContextProps>({});

ButtonContext.displayName = "Block.ButtonContext";
