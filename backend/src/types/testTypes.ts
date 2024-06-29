export interface TestInterface {
  equal: (arg0: any, arg1: number, arg2: string) => void;
  same: (arg0: any, arg1: { message: string } | { data: any }, arg2: string) => void;
  end: () => void;
}