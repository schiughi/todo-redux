interface EventTarget<T> {
  name: string;
  value: T;
}

export interface InputProps<T> {
  value: T;
  onChange: (event: React.ChangeEvent<EventTarget<T>>) => any;
}
