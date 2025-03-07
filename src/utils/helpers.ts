export const isHexColor = (color: string): boolean => {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
};

export const isObject = (
  value: unknown
): value is Record<string | number | symbol, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};
