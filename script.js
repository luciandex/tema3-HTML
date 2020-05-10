// cerinta 1*************************************
function square(a) {
    if (typeof(a) !== 'number') {
        console.log('NaN');
        return;
    }
    return Math.pow(a, 2);
}

console.log(square(15));
document.getElementById('j1').innerHTML = 'Square = ' + square(15);


//cerinta 2*************************************
function half(a) {
    if (typeof(a) !== 'number') {
        console.log('NaN');
        return;
    }
    return a / 2;
}

console.log(half(43));
document.getElementById('j2').innerHTML = '<br>Half = ' + half(43);


//cerinta 3*************************************
function percent(a, b) {
    if (typeof(a) !== 'number') {
        console.log('NaN');
        return;
    }
    return (b * 100) / a;
}

console.log(percent(100, 12) + ' %');
document.getElementById('j3').innerHTML = '<br>Percent = ' + percent(100, 12) + ' %';


//cerinta 4*************************************
function area(a) {
    if (typeof(a) !== 'number') {
        console.log('NaN');
        return;
    }
    return (Math.PI * Math.pow(a, 2)).toFixed(2);
}

console.log(area(10) + ' mp');
document.getElementById('j4').innerHTML = '<br>Area = ' + area(10) + ' mp';

//cerinta 5*************************************
function special(a) {
    if (typeof(a) !== 'number') {
        console.log('NaN');
        document.getElementById('j5').innerHTML = '<br>Special = NaN';
        return;
    }
    result = half(a);
    resultSquare = square(result);
    resultArea = area(resultSquare);
    return percent(resultSquare, resultArea);
}

console.log(special(0.8) + ' %');
document.getElementById('j5').innerHTML = '<br>Special = ' + special(0.8).toFixed(0) + ' %';


// Formular****************************************

document.getElementById('formular').innerHTML = '<form onsubmit="send()"><p id="p1">Nume: <input required type="text" size="50" placeholder=" Introduceți numele" maxlength="40" minlength="3"></p><p id="p2">Adresă email: <input required type="email" size="50" placeholder=" Introduceți o adresă de email validă" maxlength="40" minlength="3"></p><p id="p3">Mesaj: </p><textarea required spellcheck="true" minlength="20" placeholder=" Introduceți mesajul dumneavoastră aici" name="message"></textarea><p><input id="sbt" type="submit" value="Trimite mesajul!"></p></form>';
document.getElementById('p1').style.color = 'red';
document.getElementById('p2').style.color = 'green';
document.getElementById('p3').style.color = 'blue';

function send() {
    alert('Esti sigur ca vrei sa trimiti acest mesaj?')
}