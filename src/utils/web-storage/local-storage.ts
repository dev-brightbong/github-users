export class WebLocalStorage<Data> {
  data: Data | null = null;
  storage: Storage | null = typeof window === "undefined" ? null : localStorage;
  constructor(public key: string) {
    this.key = key;
    this.data = this.get();
  }

  get = (): Data | null => {
    if (this.data !== null) return this.data;
    if (this.storage) {
      const item = this.storage.getItem(this.key);
      if (item === null) return null;
      return JSON.parse(item);
    }
    return null;
  };

  set = (data: Data | null): void => {
    this.data = data;
    if (this.storage) this.storage.setItem(this.key, JSON.stringify(data));
  };

  remove = (): void => {
    this.data = null;
    if (this.storage) this.storage.removeItem(this.key);
  };
}
