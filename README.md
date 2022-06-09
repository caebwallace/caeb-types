# caeb-types

## Usage

This dependency shares standard interfaces for all CAEB tools.

## Interfaces

### Stream

#### IStreamTicker

```
import { IStreamTickerCandle } from './IStreamTickerCandle';

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
