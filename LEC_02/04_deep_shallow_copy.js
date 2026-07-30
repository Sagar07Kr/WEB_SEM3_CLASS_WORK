let mirai={
    name:"vikash",
    dist:"mathura",
    pin:218054
}

let vikash2=mirai//deep copy , reference is passed not key and values
console.log(vikash2);

vikash2.name="vikash mathura das";

let nikhil={...mirai};
console.log(nikhil);

nikhil.name="NIkhil singh",

console.log(nikhil);
console.log(vikash2==mirai);
console.log(mirai==nikhil);
console.log(mirai);
console.log(vikash2);