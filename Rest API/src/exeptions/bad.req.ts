import { codeError, exceptionst } from "./root";

export class badRequest extends exceptionst {
  constructor(message: string, codeError: codeError) {
    super(message, codeError, 400, null);
  }
}
