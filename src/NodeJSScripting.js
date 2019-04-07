const scripting2 = require('./scripting2.js');

const x = 1;
const y = 5;
const w = scripting2.aaa;

console.log(x+y);
console.log(w);


function waitingTime(string){
  const promise = new Promise ((res, rej) => {
    setTimeout(() => {
      console.log(string);
      res('waiting time is done');
    },2000);
  });
  return promise;
}

waitingTime('a')
.then( x => waitingTime('aaa'))
.then( x => waitingTime('bbbb'))
.then( x => { x + '1';throw Error;})
.then( x => x + '2')
.then( x => console.log(x))
.catch(() => console.log("err"))
