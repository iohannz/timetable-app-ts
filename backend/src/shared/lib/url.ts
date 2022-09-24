export const createSheetUrl = (
  sheetId: string,
  format: 'csv' = 'csv',
): string =>
  `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=${format}`;
