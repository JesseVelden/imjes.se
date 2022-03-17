export function openGraph({
  siteName,
  templateTitle,
  description,
}: {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
}): string {
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle ? encodeURIComponent(templateTitle.trim()) : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.thcl.dev/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}
