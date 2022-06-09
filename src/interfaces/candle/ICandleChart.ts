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
