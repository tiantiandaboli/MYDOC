function tickets(peo){
  var arr1 = new Array();
  var num = 0;
  if(peo[0]==50){
    return "NO";
  }
  if(peo[0]==100){
    return "NO";
  }
  if (peo[1]==100) {
    return "NO";
  }
  if (peo[2]==100) {
    return "NO";
  }
  for(i=0;i<peo.length;i++){
    if(peo[i]==25){
      arr1[i] = 25;
    }
    if(peo[i]==50){
      if (contains(arr1,25)==0){
        console.log("111111");
        return "NO";
      }
      for(j=0;j<i;j++){
        if(arr1[j]==25){
          arr1[j] = 0;
          arr1[i] =50;
          break;
        }
      }
    }
    if (peo[i]==100) {
      if (contains(arr1,25)==0) {
        console.log("1111111111");
        return "NO";
      }
      for(k=1;k<i-1;k++){
        var x = arr1[k] + arr1[k-1];
        var y = arr1[k] + arr1[k-1] + arr1[k+1];
        console.log(y);
        if (x==75) {
          arr1[k] = arr1[k-1] = 0;
          arr1[i] = 100;
          break;
        }
        if (y==75) {
          arr1[k] = arr1[k-1] = arr1[k+1] = 0;
          arr1[i] = 100;
          break;
        }
        if (contains(arr1,0)==0) {
          return "NO";
        }
      }
    }
  }
  console.log("++++++++++++++");
  console.log(arr1);
  return "YES";
}
function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return 1;  
        }  
    }  
    return 0;  
}  

function tickets1(peo){
  var n25 = n50 = n100 = 0;
  for(i=0;i<peo.length;i++){
    if (peo[i]==25) {
      n25+=1;
    }
    else if (peo[i]==50) {
      n25-=1;
      n50+=1;
    }
    else if (peo[i]==100&&n50>0) {
      n25-=1;
      n50-=1;
    }
    else if (peo[i]==100&&n50==0) {
      n25-=3;
    }
    if (n25<0||n50<0) {
      console.log("2222222222");
      return "NO";
    }
  }
  console.log("1111111111111");
  return "YES";
}


function duplicateCount(text){
  var x = text.toLowerCase().split('').sort().join('').match(/([^])+/g);
  console.log(x);
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//duplicateCount("aaabbcde")


/*************Math Issues******************/

Math.round = function(number) {
  var x = number%1;
  var y = number - x;
  if (x>=0.5) {
    x = 1;
  }
  else{
    x = 0;
  }
  console.log(x+y);
  return x+y; // TODO: fix this
};

//Math.round(0.5)

Math.ceil = function(number) {
  var x = number%1;
  var y = number - x;
  if (x==0) {
    x = 0;
  }
  else{
    x = 1;
  }
  console.log(x+y);
  return x+y; // TODO: fix this
};

//Math.ceil(1.55)

Math.floor = function(number) {
  var x = number%1;
  var y = number - x;
  console.log(y);
  return y; // TODO: fix this
};

//Math.floor(1.4)

/***********who likes it***********/
function likes(names) {
  if (names==[]) {
    console.log("no one likes this");
    return "no one likes this";
  }
  if (names.length==1) {
    return names[0]+" likes this";
  }
  if (names.length==2) {
    return names[0]+" and "+names[1]+" like this";
  }
  if (names.length==3) {
    return names[0]+", "+names[1]+" and "+names[2]+" like this";
  }
  if (names.length>3) {
    var x = names.length-2;
    return names[0]+", "+names[1]+" and "+x+" others like this";
  }
  // TODO
}
//likes([])

/**************snail*******************/
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  console.log(result);
  return result;
}

array = [[1,2,3],
         [8,9,4],
         [7,6,5]];

snail(array);

/**************Sum string****************/
function sumStrings(a,b) { 
  var x = (a*1+b*1).toString();
  if (x.length>15) {
    var y = (a.slice(0,a.length-16))*1+(b.slice(0,b.length-16))*1;
    var z = (a.slice(a.length-16,a.length))*1+(b.slice(b.length-16,b.length))*1;
    if (z.toString().length>16) {
      z = z.toString().slice(1,z.length);
      y = y + 1;
    }
    x = y.toString()+z.toString();
  }
  return x;
}



//sumStrings('50095301248058391139327916261', '81055900096023504197206408605')

/************palindrome**************/
var x = 0;
var palindromeChainLength = function(n) {
  var arr1 = n.toString().split("");
  var arr2 = arr1.reverse().join("");
  if (n==arr2) {
    console.log(x);
    return x;
  }
  else{
    n = n + arr2*1;
    x++;
    palindromeChainLength(n);
  }
}
//palindromeChainLength(87)

var palindromeChainLength = function(n) {
  var chainTotal = 0;
  var num = n.toString().split('');
  
  while(n != n.toString().split("").reverse().join("")*1) {
    chainTotal++;
    n = n + n.toString().split("").reverse().join("")*1;
  }
  console.log(chainTotal);
  return chainTotal;
};
//palindromeChainLength()

/**************breadcrumb*****************/

function generateBC(url, separator) {
  //your code here
}

/***************pascal***************/

function pascalsTriangle(n) {
  var arr1 = new Array();
  for(i=0;i<n+1;i++){
    arr1[i] = new Array();
    for(j=0;j<i;j++){
      if (j==0||j==i-1){
        arr1[i][j] = 1;
      }
      else{
        arr1[i][j] = arr1[i-1][j-1] + arr1[i-1][j];
      } 
    }
  }
  var str1 = arr1.join(",").slice(1,arr1.join(",").length).split(",");
  console.log(str1);
  console.log(arr1);
}

//pascalsTriangle(6)

/*************Ipvalidation****************/

function isValidIP(str) {
  var arr1 = str.split(".");
  if(arr1.length!==4){
    console.log("000000000000");
    return false;
  }
  for(i=0;i<4;i++){
    if(arr1[i]*1>255){
      console.log("1111111111");
      return false;
    }
    if(arr1[i].length>1&&arr1[i][0]==0){
      console.log("22222222222");
      return false
    }
    if(isNaN(arr1[i])){
      return false;
    }
  }
  if(arr1[0]==0&&arr1[1]==0&&arr1[2]==0&&arr1[3]==0){
    return false;
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~");
  return true;
}

function isValidIP(str) {
 var numbers = str.split("."); 
 
 for (var i =0; i < numbers.length ; i++){
  if(parseInt(numbers[i]) > 255 || parseInt(numbers[i]) < 0){
  return false;
  }
  if(isNaN(numbers[i])){
  return false;
  }  
  if(numbers[i].indexOf(" ") != -1){
  return false;
  }
  }
  
  if(numbers.length != 4){
  return false;
  }
  return true;
}
//isValidIP("1.2.3.4")

/************fuction cache****************/

function cache(f){
  var cache={};
  return function(){
    var key=JSON.stringify(arguments);
    if(key in cache) {
      return cache[key];
    }
    else{
      return cache[key]=f.apply(this,arguments);
    }
  }
}
//cache();

/************msc****************/

function isMerge1(s, part1, part2) {
  var arr1 = part1.split("");
      arr2 = part2.split("");
      len = 0;
  var str1;
  if(arr1.length>arr2.length){
    len = arr2.length;
    str1 = part1.slice(len,arr1.length);
  }
  else{
    len = arr1.length;
    str1 = part2.slice(len,arr2.length);
  }
  for(i=0;i<len;i++) {
    arr1[i] = arr1[i] + arr2[i];
  }
  var str2 = arr1.join("")+str1;
  console.log(arr1);
  console.log(str2);
  if(s!==str2){
  return false;
  }
}


function isMerge(s, part1, part2) {
  var arr1 = part1.split("");
      arr2 = part2.split("");
      str1 = part1.concat(part2).split("").sort().join("");
      str2 = s.split("").sort().join("");
  var x = s;
      y = s;
  if(str1!==str2){
    return false;
  }
  else{
    for(i=0;i<arr1.length-1;i++){
      x = x.slice(x.indexOf(arr1[i]),x.length);
      if(x.indexOf(arr1[i])>x.indexOf(arr1[i+1])){
        return false;
      }
    }
    for(i=0;i<arr2.length-1;i++){
      y = y.slice(y.indexOf(arr2[i]),y.split("").length);
      if(y.indexOf(arr2[i])>y.indexOf(arr2[i+1])){
        return false;
      }
    }
  }
  return true;
}
//isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am')

/**************Pocfn********************/

function productFib(prod){
  var arr1 = new Array();
      arr1[0] = 0;
      arr1[1] = 1;
      i = 2;
  var arr2 = new Array();
  while(i<167){
    arr1[i] =arr1[i-1] + arr1[i-2];
    x = arr1[i]*arr1[i-1];
    if (x==prod) {
      arr2[0] = arr1[i-1];
      arr2[1] = arr1[i];
      arr2[2] = true;
      return arr2;
    }
    if(x>prod){
      arr2[0] = arr1[i-1];
      arr2[1] = arr1[i];
      arr2[2] = false;
      return arr2;
    }
    i++;
  }
}

//productFib(193864606)

/*************vch**************/

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    var y = new Array();
    key = key.concat(key).concat(key);
    for(i=0;i<str.length;i++){
      x = str.charCodeAt(i)+key.charCodeAt(i)-97;
      if(x<123){
        y[i] = String.fromCharCode(x);
      }
      else{
        y[i] = String.fromCharCode(x-26);
      }
    }
    var str1 = y.join("");
    console.log(str1);
    return str1;
  };
  this.decode = function (str) {
    var y = new Array();
    key = key.concat(key).concat(key);
    for(i=0;i<str.length;i++){
      x = str.charCodeAt(i)-key.charCodeAt(i)+97;
      if(x>96){
        y[i] = String.fromCharCode(x);
      }
      else{
        y[i] = String.fromCharCode(x+26);
      }
    }
    var str1 = y.join("");
    console.log(str1);   
    return str1; 
  };
}

//var abc, key;
//abc = "abcdefghijklmnopqrstuvwxyz";
//key = "password"
//c = new VigenèreCipher(key, abc);
//c.encode('codewars');
//c.decode('laxxhsj')

/**************CV*****************/

function isValidCoordinates(coordinates){
  var arr1 = coordinates.split(",");
  arr1[1] = arr1[1].slice(1,arr1[1].length);
  if(arr1.length!==2){
    return false;
  }
  if (Math.abs(arr1[0])>90) {
    return false;
  }
  if(Math.abs(arr1[1])>180){
    return false;
  }
  for(i=0;i<2;i++){
    console.log(/^[0-9\-][0-9]*\.?(\d)*$/.test(arr1[1]));
    if(!/^[0-9\-][0-9]*\.?(\d)*$/.test(arr1[i])){
      console.log("ssssssssss");
      return false;
    }
  }
  console.log("sddsdsdsdsd");
  return true; 
}

//isValidCoordinates("24.53525235, 23.45235")

/******************bmof3********************/

var multipleOf3Regex = /^1[01]*1$/;

/***************SE******************/

function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function(handler) {
  this.handlers.push(handler);
  console.log(this.handlers);
};

Event.prototype.unsubscribe = function(handler) {
  var index = this.handlers.indexOf(handler);
  console.log(index);
  
  if (-1 !== handler) {
    this.handlers.splice(index, 1);
    console.log(this.handlers);
  }
};

Event.prototype.emit = function () {
  var args = arguments;
  this.handlers.forEach(function(handler) {
    handler.apply(null, args);
  });
};

//var event = new Event();
function f() {
  console.log("fdfdf");
}
//event.subscribe(f);
//event.unsubscribe(f);

/**************Atts*****************/
function comp(array1, array2){
  var x;
  for(j=0;j<array2.length;j++){
    for(i=0;i<array1.length;i++){
      if(array2[j]==Math.pow(array1[i],2)){
        x++;
      }
    }
    if(x==0){
      console.log("2222222222");
      return false;
    }
    console.log(x);
    x = 0;
  }
  console.log("11111111111");
  return true;
}

//a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
//comp(a1, a2)

/********LF***********/
function factorials(n){
  if(n<0){
    return '0';
  }
  if(n==0||n==1){
    return '1';
  }
  var m = n;
  if(n>1&&n<22){
    while(n>1){
      m = m*(n-1);
      n--;
    }
    console.log(m.toString());
    return m.toString();
  }
  if(n>=22&&n<57){
    while(n>1){
      m = m*(n-1)/10;
      n--;
    }
  var x = new Array();
  for(i=0;i<n;i++){
    x[i] = 0;
  }
    console.log(m.toString());
    return m.toString();
  }
}



function factorial(n) {  
  var a = [1];  
  for (i=1;i<=n;i++) {  
    for (j=0,c=0;j<a.length||c!=0;j++) {  
      var m = (j<a.length)?(i*a[j]+c):c;  
      a[j] = m % 10;  
      c = (m - a[j]) / 10;  
    }  
  }  
  console.log(a);
  return a.reverse().join("");    
}  

//factorial(2)

/*************GPS******************/
// complete the function so that it returns the fastest route 
function navigate(numberOfIntersections, roads, start, finish) {
  var arr1 = new Array();
  for(i=0;i<(numberOfIntersections-1)*2;i++){
    arr1[i] = new Array();
    arr1[roads[i].from][roads[i].to] = roads[i].drivingTime;
  }
  console.log(arr1);
}
var roads = [
    {from: 0, to: 1, drivingTime: 5},
    {from: 0, to: 2, drivingTime: 10},
    {from: 1, to: 2, drivingTime: 10},
    {from: 1, to: 3, drivingTime: 2},
    {from: 2, to: 3, drivingTime: 2},
    {from: 2, to: 4, drivingTime: 5},
    {from: 3, to: 2, drivingTime: 2},
    {from: 3, to: 4, drivingTime: 10}
];
//navigate(5, roads, 0, 4);
