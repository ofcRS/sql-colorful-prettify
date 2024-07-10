import { COLORS, KEYWORDS } from './constants';
import { getColor } from './config';

function colorize(text: string, color: string): string {
  return `${COLORS.BRIGHT}${color}${text}${COLORS.RESET}`;
}

export function colorizeSQL(sql: string): string {
  let colorized = sql;

  // Colorize keywords
  KEYWORDS.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    colorized = colorized.replace(regex, (match) => colorize(match, getColor(keyword)));
  });

  // Colorize string literals
  colorized = colorized.replace(/'([^']*)'/g, (match) =>
    colorize(match, getColor('stringLiteral')),
  );

  // Colorize number literals
  colorized = colorized.replace(/\b(\d+(\.\d+)?)\b/g, (match) =>
    colorize(match, getColor('numberLiteral')),
  );

  return colorized;
}

export function formatSQL(sql: string): string {
  let formatted = sql.replace(/\s+/g, ' ').trim();
  let indentLevel = 0;

  KEYWORDS.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    formatted = formatted.replace(regex, (match) => {
      if (match.toUpperCase() === 'SELECT') indentLevel = 0;
      const indent = '  '.repeat(indentLevel);
      indentLevel += match.toUpperCase() === 'FROM' || match.toUpperCase() === 'JOIN' ? 1 : 0;
      return `\n${indent}${match}`;
    });
  });

  // Add proper indentation for closing parentheses
  formatted = formatted.replace(/\)/g, (match) => {
    indentLevel = Math.max(0, indentLevel - 1);
    const indent = '  '.repeat(indentLevel);
    return `\n${indent}${match}`;
  });

  return formatted.trim();
}

export function beautifyAndColorizeSQL(sql: string): string {
  const formattedSQL = formatSQL(sql);
  return colorizeSQL(formattedSQL);
}
