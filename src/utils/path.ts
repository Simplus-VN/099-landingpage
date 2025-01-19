export const getAssetPath = (path: string) => {
  const base = import.meta.env.PROD ? "/099-landingpage" : "";
  return `${base}${path}`;
};
