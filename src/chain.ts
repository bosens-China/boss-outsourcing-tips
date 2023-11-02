import { keyWords } from "./KeyWords";
import { blacklist } from "./blacklist";
import { Props } from "./notify";

export type _ReturnType = (Props & { text: string }) | boolean;

class Chain {
  chain!: undefined | Chain;

  constructor(public fn: () => _ReturnType) {}

  next(): _ReturnType {
    const result = this.fn();
    if (result && this.chain) {
      return this.chain.next.apply(this.chain);
    }
    return result;
  }

  setNext(chain: Chain): Chain {
    this.chain = chain;
    return chain;
  }
}

const chainKeyWords = new Chain(keyWords);
const chainBlacklist = new Chain(blacklist);

export const result = chainBlacklist.setNext(chainKeyWords).next();
