
import { COLORS, Keyword } from './constants';

export type Color = typeof COLORS[keyof typeof COLORS];

export interface ColorScheme {
  keywords: Record<Keyword, Color>;
  stringLiteral: Color;
  numberLiteral: Color;
}

export type Token = {
  type: 'keyword' | 'identifier' | 'operator' | 'parenthesis' | 'comma' | 'dot' | 'other';
  value: string;
};
