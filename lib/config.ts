import { COLORS, KEYWORDS, Keyword } from './constants';
import { Color, ColorScheme } from './types';

const DEFAULT_COLOR_SCHEME: ColorScheme = {
  keywords: KEYWORDS.reduce((acc, keyword, index) => {
    acc[keyword] = Object.values(COLORS)[index % (Object.keys(COLORS).length - 2)] as Color;
    return acc;
  }, {} as Record<Keyword, Color>),
  stringLiteral: COLORS.YELLOW,
  numberLiteral: COLORS.CYAN,
};

let currentColorScheme: ColorScheme = { ...DEFAULT_COLOR_SCHEME };

export function setColorScheme(newScheme: Partial<ColorScheme>): void {
  currentColorScheme = {
    ...currentColorScheme,
    ...newScheme,
    keywords: { ...currentColorScheme.keywords, ...newScheme.keywords },
  };
}

export function getColor(key: Keyword | 'stringLiteral' | 'numberLiteral'): Color {
  if (key === 'stringLiteral' || key === 'numberLiteral') {
    return currentColorScheme[key];
  }
  return currentColorScheme.keywords[key] || COLORS.RESET;
}

export function resetColorScheme(): void {
  currentColorScheme = { ...DEFAULT_COLOR_SCHEME };
}