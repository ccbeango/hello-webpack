const greet = 'Hello world';

console.log(greet);

function sum(arg1, arg2) {
  return arguments[0] + arguments[1];
}

console.log(sum(10, 20));

function getAuthInfoFromCloud(reqOptions) {
  if (1 === 2) {
    return 'Dead Code'
  } 
  return fetch(reqOptions)
}

getAuthInfoFromCloud({ url: 'http://httpbin.org', method: 'get' });

const info = {
  nickname() {
    return 'ccbean';
  }
}

info.nickname();

class Person {
  constructor() {
    this.name = 'ccbean'
  }

  sayHi() {
    return 'hello'
  }
}

new Person()
