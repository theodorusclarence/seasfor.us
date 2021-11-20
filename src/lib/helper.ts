type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://res.cloudinary.com/theodorusclarence/image/upload/v1637381990/seasforus/teamseas-logo_hr2qqq.png',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.thcl.dev/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

/**
 * Safely call localStorage
 * @param key localStorage key
 * @returns localStorage value
 */
export function getFromLocalStorage(key: string): string | null {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }

  return null;
}

/**
 * Can simulate error with default 0.2 seconds, or set a custom delay from localStorage with key `errorRate` from 0-1
 * @param ms waiting time in milliseconds
 */
export function simulateGet(ms: number): Promise<unknown> {
  const errorRate = getFromLocalStorage('errorRate') ?? 0.2;

  return new Promise((resolve, reject) =>
    setTimeout(
      Math.random() > +errorRate
        ? resolve
        : () =>
            reject({
              response: {
                data: {
                  msg: `Error simulation (${+errorRate * 100}% error rate)`,
                },
              },
            }),
      ms
    )
  );
}
