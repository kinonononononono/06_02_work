
function toArray(text){
  let lines = [];
  if (typeof text == "number") {
    console.log(text);
    var t = text.toString();
    console.log(t);
    lines = t.split('');
    console.log(lines);
  }else if (typeof text == "string") {
    lines = text.split('');
    console.log(lines);
  }else {
    console.log("bad");
  }
}

console.log(toArray("senshu"));
console.log(toArray(-1234));
