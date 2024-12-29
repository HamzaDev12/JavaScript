import { exceptionst } from "./root";

export class unprocess extends exceptionst {
  constructor(message: string, codeError: number, error: any) {
    super(message, codeError, 400, error);
  }
}
