export enum LocalStorageKeys {
  ACCESS_TOKEN = "access_token",
}

export const lsGet = (key: string) => localStorage.getItem(key);
export const lsSet = (key: string, value: string) =>
  localStorage.setItem(key, value);
