function b() {
  console.log('called function b');
}
b();

function a(param1 = 10, param2 = 10){
  // 10+10;
  // b();
  console.log(param1 + param2);
}

console.log('this is the end')
a();
