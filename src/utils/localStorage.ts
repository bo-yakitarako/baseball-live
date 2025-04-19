type StorageProps = {
  isDelete: boolean;
};

type StorageKey = keyof StorageProps;

const defaultProps: StorageProps = {
  isDelete: false,
};

const props = Object.fromEntries(
  (Object.keys(defaultProps) as StorageKey[]).map((key) => [key, get(key)]),
) as StorageProps;

export const storage = {
  ...props,
  set<T extends StorageKey>(key: T, value: StorageProps[T]) {
    const storageValue = typeof value === 'string' ? value : JSON.stringify(value);
    storage[key] = value;
    localStorage.setItem(key, storageValue);
  },
} as const;

function get<T extends StorageKey>(key: T): StorageProps[T] {
  const value = localStorage.getItem(key);
  if (value === null) {
    return defaultProps[key];
  }
  try {
    return JSON.parse(value);
  } catch {
    return value as never as StorageProps[T];
  }
}
