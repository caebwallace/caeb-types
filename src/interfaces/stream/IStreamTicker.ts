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
