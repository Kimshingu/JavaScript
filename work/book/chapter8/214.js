const cart = [ 
  { name: "Widget", price: 9.95 }, 
  { name: "Gadget", price: 22.95 }];

// 사상(map)
// 배열의 아이템을 꺼내서 함수에 전달하고 함수가 리턴하는 값으로 치환한다.
const names = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
const lcNames = names.map(x => x.toLowerCase()); // ["widget", "gadget"]
