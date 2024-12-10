const data = [
  {
    id: "long-call",
    name: "Long Call",
    image: "",
    description:
      "A long call is a straightforward strategy used by traders who expect a stock or any other underlying asset to increase in price. It involves buying call options to capitalize on potential upward moves in asset prices.",
  },
  {
    id: "long-strangle",
    name: "Long Strangle",
    image: "",
    description:
      "The Long Strangle is a straightforward options trading strategy designed to profit from significant movements in the underlying asset's price, regardless of the direction. This strategy involves buying a call option and a put option with the same expiration date but different strike prices, typically with the put having a lower strike and the call having a higher strike.",
  },
  {
    id: "short-guts",
    name: "Short Guts",
    image: "../KnowledgeHub Images/short-guts.jpg",
    description:
      "The Short Guts strategy is a less common but intriguing options trading approach employed when an investor anticipates minimal movement in the underlying asset’s price. It’s essentially the opposite of the Long Guts strategy, involving the sale of in-the-money (ITM) options, both a call and a put. This setup allows the trader to collect a higher initial premium compared to out-of-the-money strategies like the Short Strangle, but also carries a higher risk due to the in-the-money nature of the options sold.",
  },
  {
    id: "short-call-naked-call-uncovered-call",
    name: "Short Call",
    image: "",
    description:
      "A short call, also known as a naked call or uncovered call, is a high-risk option strategy used by traders who expect a stock or other underlying asset to either decline or stay below the strike price of the option sold. This strategy involves selling a call option without owning the underlying asset.",
  },
  {
    id: "short-strangle",
    name: "Short Strangle",
    image: "",
    description:
      "The Short Strangle is an advanced options trading strategy utilized to profit when the underlying asset's price remains within a specific range. This strategy involves selling a call option and a put option, both with the same expiration date but different strike prices. The call has a higher strike than the current stock price, and the put has a lower strike.",
  },
  {
    id: "collar",
    name: "Collar",
    image: "https://cdn.sensamarket.com/collar.jpg",
    description:
      "The Collar strategy is a risk management tool used in options trading that involves holding shares of the underlying stock while simultaneously using a protective put option and a covered call option. This approach is designed to limit potential losses while also capping gains, making it a favored strategy for investors looking to protect their investment against downturns without foregoing all upside potential.",
  },
  {
    id: "long-put",
    name: "Long Put",
    image: "",
    description:
      "Along put is an options trading strategy used by investors who anticipate a decline in the price of an underlying asset. It involves purchasing put options to profit from expected downward price movements.",
  },
  {
    id: "covered-short-strangle",
    name: "Covered Short Strangle",
    image: "https://cdn.sensamarket.com/covered_short_strangle.jpg",
    description:
      "The Covered Short Strangle is a variation of the basic short strangle, designed to limit risk by owning the underlying asset while simultaneously selling a call and a put option. This strategy is employed when a trader expects minimal price movement in the underlying asset but seeks to enhance returns through premium collection, with a buffer against losses provided by ownership of the stock.",
  },
  {
    id: "long-combo",
    name: "Long Combo",
    image: "https://cdn.sensamarket.com/long_combo.jpg",
    description:
      "The Long Combo strategy, also known as a synthetic long stock, is an options trading strategy used to simulate the payoff of owning a stock, but often at a lower cost. It involves buying a call option and selling a put option with the same expiration date and typically the same strike price. This strategy is designed to mimic the performance of a long stock position, giving the investor both the potential for unlimited gains and losses similar to owning the actual stock.",
  },
  {
    id: "short-put-naked-put-uncovered-put",
    name: "Short Put",
    image: "",
    description:
      "A strategy of selling a put option without securing the required cash, profiting if the price remains above the strike price.",
  },
  {
    id: "long-call-butterfly",
    name: "Long Call Butterfly",
    image: "https://cdn.sensamarket.com/long_call_butterfly.jpg",
    description:
      "The short put, or naked put, is an options trading strategy where an investor sells put options without holding a position in the underlying asset. This strategy is used by traders who expect the underlying asset to remain stable or increase in price, allowing them to profit from the premium received from selling the puts.",
  },
  {
    id: "short-combo",
    name: "Short Combo",
    image: "https://cdn.sensamarket.com/short_combo.jpg",
    description:
      "Combines selling a call and buying a put to profit from neutral or slightly bearish market conditions.",
  },
  {
    id: "covered-call",
    name: "Covered Call",
    image: "",
    description:
      "Involves selling a call option while owning the underlying stock, generating income in a flat or mildly bullish market.",
  },
  {
    id: "long-put-butterfly",
    name: "Long Put Butterfly",
    image: "https://cdn.sensamarket.com/long_put_butterfly.jpg",
    description:
      "Similar to a call butterfly, but designed for bearish price action near a central strike.",
  },
  {
    id: "long-box",
    name: "Long Box",
    image: "https://cdn.sensamarket.com/long_box.jpg",
    description:
      "A risk-free arbitrage strategy combining a bull call spread and a bear put spread.",
  },
  {
    id: "protective-put-cash-secured-put",
    name: "Protective Put",
    image: "https://cdn.sensamarket.com/protective_put.jpg",
    description:
      "Used to protect against downside risk in a stock by purchasing a put option.",
  },
  {
    id: "iron-butterfly",
    name: "Iron Butterfly",
    image: "https://cdn.sensamarket.com/iron_butterfly.jpg",
    description:
      "A limited-risk, limited-reward strategy that profits from low volatility near a specific strike price.",
  },
  {
    id: "short-box-spread",
    name: "Short Box Spread",
    image: "https://cdn.sensamarket.com/short_box_spread.jpg",
    description:
      "A credit arbitrage strategy aiming to capture premiums by selling a box spread.",
  },
  {
    id: "bull-call-spread-long-call-spread",
    name: "Bull Call Spread",
    image: "",
    description:
      "Involves buying a call and selling another call at a higher strike, benefiting from moderate price increases.",
  },
  {
    id: "short-call-butterfly",
    name: "Short Call Butterfly",
    image: "https://cdn.sensamarket.com/short_call_butterfly.jpg",
    description:
      "A neutral strategy benefiting from significant price movement in either direction.",
  },
  {
    id: "call-vertical-spread",
    name: "Call Vertical Spread",
    image: "https://cdn.sensamarket.com/call_vertical_spread.jpg",
    description:
      "Combines buying and selling call options with different strike prices for limited risk and reward.",
  },
  {
    id: "bear-put-spreadlong-put-spread",
    name: "Bear Put Spread",
    image: "https://cdn.sensamarket.com/bear_put_spread.jpg",
    description:
      "A bearish strategy involving buying a put and selling another at a lower strike.",
  },
  {
    id: "short-put-butterfly",
    name: "Short Put Butterfly",
    image: "https://cdn.sensamarket.com/short_put_butterfly.jpg",
    description:
      "A strategy profiting from high volatility away from a central strike price.",
  },
  {
    id: "put-vertical-spread",
    name: "Put Vertical Spread",
    image: "https://cdn.sensamarket.com/put_vertical_spread.jpg",
    description:
      "Combines buying and selling put options with different strike prices for controlled risk and profit.",
  },
  {
    id: "bear-call-spread-short-call-spread",
    name: "Bear Call Spread",
    image: "",
    description:
      "A bearish strategy combining selling a call and buying another at a higher strike to profit from falling prices.",
  },
  {
    id: "reverse-iron-butterfly",
    name: "Reverse Iron",
    image: "https://cdn.sensamarket.com/reverse_iron_butterfly.jpg",
    description:
      "An advanced strategy that profits from high volatility, with a risk-reward structure opposite to the iron butterfly.",
  },
  {
    id: "calendar-call-spread",
    name: "Calender Call Spread",
    image: "https://cdn.sensamarket.com/calendar_call_spread.jpg",
    description:
      "Combines long and short calls with the same strike but different expiration dates to profit from time decay.",
  },
  {
    id: "bull-put-spread-short-put-spread",
    name: "Bull Put Spread",
    image: "",
    description:
      "A bullish strategy involving selling a put and buying another at a lower strike to cap risk.",
  },
  {
    id: "bull-call-ladder",
    name: "Bull Call Ladder",
    image: "https://cdn.sensamarket.com/bull_call_ladder.jpg",
    description:
      "An advanced bullish strategy that combines buying and selling calls at multiple strike prices.",
  },
  {
    id: "calendar-put-spread",
    name: "Calender Put Spread",
    image: "https://cdn.sensamarket.com/calendar_put_spread.jpg",
    description:
      "Combines long and short puts with the same strike but different expirations to profit from time decay.",
  },
  {
    id: "ratio-call-spread-front-spread-with-calls",
    name: "Ratio Call Spread",
    image:
      "https://cdn.sensamarket.com/ratio-call-spread-front-spread-with-calls",
    description:
      "Involves buying fewer calls and selling more calls to profit from modest price increases.",
  },
  {
    id: "ratio-put-spread-front-spread-with-puts",
    name: "Ratio Put Spread",
    image: "https://cdn.sensamarket.com/ratio_put_spread.jpg",
    description:
      "Involves buying fewer puts and selling more puts, benefiting from a modest decline in price.",
  },
  {
    id: "long-call-condor",
    name: "Long Call Condor",
    image: "https://cdn.sensamarket.com/long_call_condor.jpg",
    description:
      "A low-risk, low-reward strategy that profits from stability near a central range using calls.",
  },
  {
    id: "long-put-condor",
    name: "Long Put Condor",
    image: "https://cdn.sensamarket.com/long_put_condor.jpg",
    description:
      "A variation of the condor using puts to profit from stable prices within a range.",
  },
  {
    id: "iron-condor",
    name: "Iron Condor",
    image: "https://cdn.sensamarket.com/iron_condor.jpg",
    description:
      "Combines call and put spreads to profit from low volatility near a central range.",
  },
  {
    id: "short-call-condor",
    name: "Short Call Condor",
    image: "https://cdn.sensamarket.com/short_call_condor.jpg",
    description:
      "A strategy benefiting from significant price movement using call options.",
  },
  {
    id: "short-put-condor",
    name: "Short Put Condor",
    image: "https://cdn.sensamarket.com/short_put_condor.jpg",
    description:
      "Similar to the short-call condor but using put options, profiting from volatility.",
  },
  {
    id: "reverse-iron-condor",
    name: "Reverse Iron Condor",
    image: "https://cdn.sensamarket.com/reverse_iron_condor.jpg",
    description:
      "An advanced strategy benefiting from high volatility, opposite in structure to the iron condor.",
  },
  {
    id: "long-straddle",
    name: "Long Straddle",
    image: "",
    description:
      "Involves buying a call and a put with the same strike, profiting from high volatility in either direction.",
  },
  {
    id: "short-straddle",
    name: "Short Straddle",
    image: "https://cdn.sensamarket.com/short_straddle.jpg",
    description:
      "Selling both a call and put with the same strike to profit from low volatility.",
  },
  {
    id: "covered-short-straddle",
    name: "Covered Short Straddle",
    image: "https://cdn.sensamarket.com/covered_short_straddle.jpg",
    description:
      "A short straddle with ownership of the underlying asset to limit risk.",
  },
  {
    id: "bull-put-ladder",
    name: "Bull Put Ladder",
    image: "https://cdn.sensamarket.com/bull_put_ladder.jpg",
    description:
      "Combines selling and buying multiple puts to profit from bullish movement.",
  },
  {
    id: "bear-call-ladder-credit",
    name: "Bear Call Ladder Credit",
    image: "https://cdn.sensamarket.com/bear_call_ladder.jpg",
    description: "A bearish ladder strategy using credit spreads with calls.",
  },
  {
    id: "bear-call-ladder-debit",
    name: "Bear Call Ladder Debit",
    image: "https://cdn.sensamarket.com/bear_call_ladder.jpg",
    description: "A bearish ladder strategy using debit spreads with calls.",
  },
  {
    id: "bear-put-ladder",
    name: "Bear Put Ladder ",
    image: "https://cdn.sensamarket.com/bear_put_ladder.jpg",
    description:
      "A bearish ladder strategy involving multiple puts to profit from declining prices.",
  },
  {
    id: "long-call-ladder-bull-call-ladder",
    name: "Long Call Ladder",
    image: "https://cdn.sensamarket.com/long_call_ladder.jpg",
    description:
      "An advanced bullish strategy using multiple call options to profit from significant upward movement.",
  },
  {
    id: "long-call-spread-bull-call-spread",
    name: "Long Call Spread",
    image: "https://cdn.sensamarket.com/long_call_spread.jpg",
    description:
      "Combines buying and selling calls to cap risk while benefiting from bullish movement.",
  },
  {
    id: "long-put-ladder-bear-put-ladder",
    name: "Long Put Ladder",
    image: "",
    description:
      "A bearish ladder strategy using multiple put options to profit from declining prices.",
  },
  {
    id: "long-put-spread-bear-put-spread",
    name: "Long Put Spread",
    image: "https://cdn.sensamarket.com/long_put_spread.jpg",
    description:
      "Combines buying and selling puts to limit risk while profiting from bearish movement.",
  },
  {
    id: "strip",
    name: "Strip",
    image: "",
    description:
      "A strategy using two puts and one call at the same strike to profit from downward volatility.",
  },
  {
    id: "strap",
    name: "Strap",
    image: "https://cdn.sensamarket.com/strap.jpg",
    description: "Uses two calls and one put to profit from upward volatility.",
  },
  {
    id: "long-guts-guts",
    name: "Long Guts",
    image: "https://cdn.sensamarket.com/long_guts.jpg",
    description:
      "Involves buying deep in-the-money calls and puts to profit from significant price movement.",
  },
  {
    id: "diagonal-call-spread",
    name: "Diagonal Call Spread",
    image: "https://cdn.sensamarket.com/diagonal_call_spreads.jpg",
    description:
      "Combines long and short calls with different strikes and expirations to profit from time decay and price movement.",
  },
  {
    id: "diagonal-put-spread",
    name: "Diagonal Put Spread",
    image: "https://cdn.sensamarket.com/diagonal_put_spreads.jpg",
    description:
      "Combines long and short puts with different strikes and expirations to profit from time decay and price movement.",
  },
];

export default data;
