export const getUrlFavicon = (url?: string): string => {
  if (!url) return "";
  const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/
  const siteUrl = url.match(regex)?.[0]
  return `${siteUrl}/favicon.ico`;
}
