var answer = prompt('1 + 1 は？');
if (isNaN(answer)) {
  alert('数値を入力してください');
} else if(answer ==2){
  alert('正解');
} else {
  alert('不正解');
}



var answer = prompt('5 - 2 は？');
if (isNaN(answer)) {
  alert('数値を入力してください');
} else if(answer ==3){
  alert('正解');
} else {
  alert('不正解');
}


var animals = ['パンダ', 'ライオン', 'キリン',];

var i = 0;
var answer = prompt('好きな動物は？');

while (i < animals.length) {
  alert(animals[i]);
  if (answer == 'ライオン' && animals[i] == answer) {
    alert(i);
    break;
  }
  i++; // 「i += 1」と書いても同じ
}



var animals = [
  {'name': 'パンダ', 'weight': 80},  // 0番目のオブジェクト変数
  {'name': 'ライオン', 'weight': 200},  // 1番目のオブジェクト変数
  {'name': 'キリン', 'weight': 300}   // 2番目のオブジェクト変数
];
var answer = prompt('体重を知りたい動物名を入力してください');
var i = 0;

while (i < animals.length) {
  if (answer == animals[i].name) {
    alert(animals[i].weight + 'kg');
  }
  i++; // 「i += 1」と書いても同じ
}




var r = window.prompt("半径を入力してください", "") * 1;

var C = 2 * r * 3.14159;
var S = r * r * 3.14159;
var I = r * r * 2;
alert("円周="+ C + " 円の面積=" + S + " 内接する正方形の面積" + I);
