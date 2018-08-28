export interface EventTarget<T> {
  name: string;
  value: T;
}

export interface InputProps<T> {
  value: T;
  name: string;
  className?: string;
  onChange: (event: React.ChangeEvent<EventTarget<T>>) => any;
}
