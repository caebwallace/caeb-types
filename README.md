# caeb-types

## Usage

This dependency shares standard interfaces for all CAEB tools.

## Interfaces

### Stream

#### IStreamTicker

```ts
export interface IStreamTicker {
    provider: string;
    baseAsset: string;
    quoteAsset: string;
    interval: number;
    lastUpdate: number;
    new: boolean;
    candle: IStreamTickerCandle;
}
```

#### IStreamTickerCandle

```ts
export interface IStreamTickerCandle {
    t: number;
    o: number;
    c: number;
    h: number;
    l: number;
    v?: number;
}
```
