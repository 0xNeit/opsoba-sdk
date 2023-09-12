import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 204,
  TESTNET = 5611
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xfe7624cc5cDcDe84DD3bd4F82Ee4E9e05082C40A'

export const FACTORY_ADDRESS_MAINNET = '0x0c818aA2D4677e0CAb001c2C692c908f54F32D2F'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.MAINNET]: FACTORY_ADDRESS_MAINNET,
  [ChainId.TESTNET]: FACTORY_ADDRESS,
}

export const INIT_CODE_HASH = '0x08d8a333802d6a2a1d640eb248626d53f881715112fb72246bf394ee0d451c93'

export const INIT_CODE_HASH_MAINNET = '0xd185ebdcb4ea269c70df711e3b89f12849b3cb13cacb923ef14aa1d691e3e458'

export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.MAINNET]: INIT_CODE_HASH_MAINNET,
  [ChainId.TESTNET]: INIT_CODE_HASH,
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const WBNB = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.MAINNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'opBNB',
    decimals: 18,
  },
  [ChainId.TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tcBNB',
    decimals: 18,
  },
}
