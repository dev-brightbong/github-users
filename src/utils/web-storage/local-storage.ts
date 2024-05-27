
/**
 * @description 로컬스토리지 클래스 입니다. 스토리지 생성 시 key값을 넣어 확장해 사용할 수 있습니다.
 */
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
