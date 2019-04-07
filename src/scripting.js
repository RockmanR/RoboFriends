

var posts = [
  {
    title : "title one",
    body : "body one"
  },
  {
    title : "title two",
    body : "body two",
  },
  {
    title : "title three",
    body : "body three"
  }
]

var posts2 =
  {
    title: "title extra",
    body: "body extra"
  }


function getPosts() {
  const promise = new Promise( (res, rej) => {
    setTimeout( () => {
      document.body.innerHTML = posts.map( (x) => `${x.title} ${x.body}<br>`);
      res();
    } , 1000);
  });
  return promise;
}

function clearPost() {
  document.body.innerHTML = `aaaaaaaaa`;
}

//    "start": "react-scripts start",

// function createPost(objPost, callback){
//   setTimeout(() => {
//     posts.push(objPost);
//     //getPost();
//     callback();
//   },2000);
// }

//createPost(posts2);
//getPost();
//createPost(posts2, getPost)

function createPostPormise(objPost){
   const promise = new Promise( (res, rej) => {
    setTimeout(() => {
      posts.push(objPost);
      res();
    },2000);
   }); //try to change resolve/reject names
   return promise;
}

function createPostPormise2(objPost){
   const promise2 = new Promise( (res, rej) => {
    setTimeout(() => {
      posts.push(objPost);
      rej("I've found an error");
    },2000);
   }); //try to change resolve/reject names
   return promise2;
}

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

createPostPormise(posts2)
.then( x => getPosts())
.then( x => createPostPormise2(posts2))
.then( x => getPosts())
.catch(err => console.log(err))

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users))

async function fetchingJson(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users)
}
