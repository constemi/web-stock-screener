$(document).ready(() => {
  const socket = io();

  // Wait for element to exist.
  const onWaitFor = (selector, callback) => {
    if ($(selector).length) callback($(selector));
    else {
      setTimeout(() => {
        onWaitFor(selector, callback);
      }, 1000);
    }
  };

  // Subscribe to symbol
  // const subscribe = symbol => {
  //   socket.emit(
  //     "unsubscribe",
  //     { symbol: symbol, channel: symbol },
  //     unSubResp => {
  //       console.log(unSubResp);
  //       socket.emit("subscribe", { symbol: symbol, channel: symbol });
  //     }
  //   );
  // };

  // Connect handler
  socket.on("connect", () => {
    socket.emit("hello", { data: "connected" });
  });

  // Generic err handler
  // socket.on("error", error => {
  //   console.log(error);
  // });

  // Generic message handler
  socket.on("message", message => {
    console.log(message);
  });

  // const subscribe = symbol => {
  //   socket.emit("subscribe", { symbol: symbol, channel: symbol });
  // };
  //
  // // Market closed price display handler
  // socket.on("closed-price", ({ data }) => {
  //   const currentPrice = $("#ticker-price");
  //   const title = $("div.Select-value").attr("title");
  //   const tickerContainer = $("div.nine.columns.div-right-panel").first();
  //
  //   const tickerName = $("div.nine.columns.div-right-panel > h5");
  //   if (!tickerName.length) {
  //     tickerContainer.prepend(`<h5>${title || "Index"}</h5>`);
  //   } else {
  //     tickerName.replaceWith(`<h5>${title || "Index"}</h5>`);
  //   }
  //   currentPrice.text(data);
  // });
  //
  // // Market open price display handler
  // socket.on("current-price", ({ data, ticker, color }) => {
  //   const currentPrice = $("#ticker-price");
  //   currentPrice.text(`${ticker} ${data}`);
  // });
  //
  // // subscribe to further changes of the <select> value
  // onWaitFor("#react-select-2--value-item", elm => {
  //   const symbol = $(elm).text();
  //   subscribe(symbol);
  //
  //   $("body").on(
  //     "DOMSubtreeModified",
  //     "#react-select-2--value-item",
  //     function() {
  //       const symbol = $("#react-select-2--value-item").text();
  //       subscribe(symbol);
  //     }
  //   );
  // });
});
