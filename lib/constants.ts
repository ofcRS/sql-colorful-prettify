export const COLORS = {
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m',
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
} as const;

export const KEYWORDS = [
  'SELECT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'ORDER BY',
  'LIMIT',
  'LEFT JOIN',
  'RIGHT JOIN',
  'INNER JOIN',
  'OUTER JOIN',
  'AND',
  'OR',
  'ON',
  'AS',
] as const;

export type Keyword = (typeof KEYWORDS)[number];

export const NEW_LINE_KEYWORDS: Keyword[] = [
  'SELECT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'ORDER BY',
  'LIMIT',
];

export const INDENTED_KEYWORDS: Keyword[] = ['AND', 'OR', 'ON'];
