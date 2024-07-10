import { Keyword, KEYWORDS } from './constants';
import { Token } from './types';

export const isKeyword = (word: string): word is Keyword =>
  KEYWORDS.includes(word as Keyword);

export function tokenizeSQL(sql: string): Token[] {
  const regex = /(\s+)|(,)|(\(|\))|(\.)|([A-Za-z_]\w*)|([<>=!]+)|([^A-Za-z0-9_\s(),.<>=!]+)/g;
  const tokens: Token[] = [];
  let match;

  while ((match = regex.exec(sql)) !== null) {
    if (match[2]) tokens.push({ type: 'comma', value: ',' });
    else if (match[3]) tokens.push({ type: 'parenthesis', value: match[3] });
    else if (match[4]) tokens.push({ type: 'dot', value: '.' });
    else if (match[5]) {
      const value = match[5].toUpperCase();
      tokens.push({
        type: isKeyword(value) ? 'keyword' : 'identifier',
        value: match[5]
      });
    }
    else if (match[6]) tokens.push({ type: 'operator', value: match[6] });
    else if (match[7]) tokens.push({ type: 'other', value: match[7] });
  }

  return tokens.filter(token => token.type !== 'other' || token.value.trim() !== '');
}

