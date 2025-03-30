export const filterByTitle = <T extends { title: string }>(
  item: T,
  query: string
): boolean => {
  return item.title.toLowerCase().includes(query.trim().toLowerCase());
};
