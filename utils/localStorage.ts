type LocalStorageValue = string | null;

export const getLocalStorageValue = (key: string): LocalStorageValue => {
  try {
    if (!key) {
      return null;
    }

    return window.localStorage.getItem(key);
  } catch (err) {
    console.error('Error getting item from localStorage');
    return null;
  }
};

export const getLocalStorageListValues = (...args: string[]): LocalStorageValue | LocalStorageValue[] => {
  try {
    if (!args?.length) {
      return null;
    }

    const values = args
      .flat()
      .map((key) => window.localStorage.getItem(key));

    if (args.length === 1) {
      return values[0];
    }

    return values;
  } catch (err) {
    console.error('Error getting items from localStorage');
    return null;
  }
};

export const setLocalStorageValue = (data: Record<string, string>): void => {
  try {
    Object.entries(data)
      .forEach(([key, value]) => {
        window.localStorage.setItem(key, value);
      });
  } catch (err) {
    console.error('Error setting items to localStorage');
  }
};

export const removeLocalStorageValue = (...args: string[]): void => {
  try {
    if (!args?.length) return;

    args
      .flat()
      .forEach((key) => window.localStorage.removeItem(key));
  } catch (err) {
    console.error('Error removing items from localStorage');
  }
};
