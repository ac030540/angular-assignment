export const locationTransformer = (value: string): string => {
  return value
    .replace(/[^a-zA-Z]/g, '') 
    .toUpperCase()             
    .slice(0, 3);             
}