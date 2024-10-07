import { v4 as uuidv4 } from "uuid";
function uniqueKeyGenerator(): string {
  return uuidv4();
}

export default uniqueKeyGenerator;
