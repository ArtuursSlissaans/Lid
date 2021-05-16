const POP_UP = document.getElementById('popUp');
let taviceļojumi = [];

document.getElementById('pievienotCeļojumu').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('pievienotCeļojumus').addEventListener('click', () => {
    POP_UP.style.display = 'none';

        
    let tavsceļojums = {kurtuceļosi: kurtuceļosi.value, ciktasmaksās: ciktasmaksās.value};
    

    kurtuceļosi.value = "";
    ciktasmaksās.value = "";

    taviceļojumi.push(tavsceļojums);

    render();
})


function render( ) {
    let OperatīvāAtmiņa = document.getElementById('OperatīvāAtmiņa');
    OperatīvāAtmiņa.innerHTML = "";

    for(let i = 0; i < taviceļojumi.length; i++) {
        console.log(tavsceļojums[i]);
        let tavsceļojums = `
        <div class="tavsceļojums">
             <h3>KurTuCeļosi: ${tavsceļojums[i].kurtuceļosi}</h3>
             <h4>CikTasMaksās: ${tavsceļojums[i].ciktasmaksās}</h4>
    
    </div>`;
        OperatīvāAtmiņa.innerHTML += tavsceļojums;
    
    }
}
