function firstt(a='null',b='Null'){
    console.log(a,b)
};

// firstt('Hello hwo are you');
// console.log(typeof firstt)

var aa=''

aa+=typeof firstt;
// console.log(aa)


var y = 1;
if (function f() { console.log('y fun') } ) {
  y += typeof f;
console.log('print y inner ',y)
}
console.log(y);