window.onload = function() {
    let a = 18;
    let b = 19;
    let h = 55;
    let V;

    V = staciakampioGretasienoTuris(a, h, b);
    console.log(V);
}
function staciakampioGretasienoTuris(a, b, h){
    return a * b * h;
}