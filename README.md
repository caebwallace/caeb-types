# caeb-types

## Usage

This dependency shares standard interfaces for all CAEB tools.

## Interfaces

### Candle

#### ICandleChart

```ts
export interface ICandleChart {
    /**
     * Candle Open time.
     *
     * @type {Date}
     * @memberOf ICandleChart
     */
    openTime: Date;

    /**
     * Candle Open.
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    open: number;

    /**
     * Candle High.
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    high: number;

    /**
     * Candle Low.
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    low: number;

    /**
     * Candle Close.
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    close: number;

    /**
     * Candle Volume.
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    volume: number;

    /**
     * Candle Close Time.
     *
     * @type {Date}
     * @memberOf ICandleChart
     */
    closeTime: Date;

    /**
     * Candle Quote Volume (optional).
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    quoteVolume?: number;

    /**
     * Candle Trades (optional).
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    trades?: number;

    /**
     * Candle BaseAsset Volume (optional).
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    baseAssetVolume?: number;

    /**
     * Candle QuoteAsset Volume (optional).
     *
     * @type {number}
     * @memberOf ICandleChart
     */
    quoteAssetVolume?: number;
}
```

#### ICandleChartInterval

```ts
export enum ICandleChartIntervalKeys {
    ONE_MINUTE = 'ONE_MINUTE',
    FIVE_MINUTES = 'FIVE_MINUTES',
    FIFTEEN_MINUTES = 'FIFTEEN_MINUTES',
    ONE_HOUR = 'ONE_HOUR',
    FOUR_HOURS = 'FOUR_HOURS',
    ONE_DAY = 'ONE_DAY',
}

export enum ICandleChartIntervalInSeconds {
    ONE_MINUTE = 60,
    FIVE_MINUTES = 300,
    FIFTEEN_MINUTES = 900,
    ONE_HOUR = 3600,
    FOUR_HOURS = 14400,
    ONE_DAY = 86400,
}
```

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
