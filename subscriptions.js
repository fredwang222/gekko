// 
// Subscriptions glue plugins to events
// flowing through the Gekko.
// 

var subscriptions = [
  {
    emitter: 'market',
    event: 'candle',
    handler: 'processCandle'
  },
  {
    emitter: 'market',
    event: 'marketUpdate',
    handler: 'processMarketUpdate'
  },
  {
    emitter: 'market',
    event: 'marketStart',
    handler: 'processMarketStart'
  },
  {
    emitter: 'tradingAdvisor',
    event: 'stratWarmupCompleted',
    handler: 'processStratWarmupCompleted'
  },
  {
    emitter: 'tradingAdvisor',
    event: 'advice',
    handler: 'processAdvice'
  },
  {
    emitter: 'tradingAdvisor',
    event: 'stratUpdate',
    handler: 'processStratUpdate'
  },
  {
    emitter: ['trader', 'paperTrader'],
    event: 'tradeInitiated',
    handler: 'processTradeInitiated'
  },
  {
    emitter: ['trader', 'paperTrader'],
    event: 'tradeAborted',
    handler: 'processTradeAborted'
  },
  {
    emitter: ['trader', 'paperTrader'],
    event: 'tradeCompleted',
    handler: 'processTradeCompleted'
  },
  {
    emitter: ['trader', 'paperTrader'],
    event: 'portfolioChange',
    handler: 'processPortfolioChange'
  },
  {
    emitter: ['trader', 'paperTrader'],
    event: 'portfolioValueChange',
    handler: 'processPortfolioValueChange'
  },
  {
    emitter: ['performanceAnalyzer'],
    event: 'performanceReport',
    handler: 'processPerformanceReport'
  },
  {
    emitter: ['performanceAnalyzer'],
    event: 'roundtrip',
    handler: 'processRoundtrip'
  },
];

module.exports = subscriptions;