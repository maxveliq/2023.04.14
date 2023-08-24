// //1
// for (let i = 2; i < 100; i += 2) {
//     console.log(i);
// }

//2
calculatee = document.querySelector('#calculatee');
function gwiazdki() {
    gwiazdki = document.querySelector('#gwiazdki').value;
    gwiazdkioutput = document.querySelector('#gwiazdki_output');
    gwiazdkioutput.textContent = ''
    for (let i =0; i < gwiazdki; i++) {
        gwiazdkioutput.textContent += '*';
    }
    
}

calculatee.addEventListener('click', gwiazdki);