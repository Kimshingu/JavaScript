const cook = {
  name: "Walt",
  redPhosphorus: 100, // dangerous
  water: 500, // safe
};

let count = 0;
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    console.log(++count);
    if (key === 'redPhosphorus') {
      if (target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("Too dangerous!");
    }
    // all other properties are safe
    target[key] = value;
  },
});
protectedCook.water = 550; // 550
protectedCook.redPhosphorus = 150; // Too dangerous!
protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150
