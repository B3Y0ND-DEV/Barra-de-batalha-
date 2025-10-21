function diminuirHP(elementid, barid, dano){
    const hptext = document.getElementById(elementid);
    const bar = document.getElementById(barid);


    let [atual, maximo] = hptext.textContent.split('/').map(x => parseInt(x));
    atual = Math.max(atual - dano, 0);


    hptext.textContent = `${atual} / `${maximo};
    const pocertagem = (atual / maximo) * 100;
    bar.style.width = ${pocertagem}%;

    if (pocertagem < 30) bar.style.backgroundColor = #e00000;
    else if (pocertagem < 60) bar.style.backgroundColor = #f8b000;
    else bar.style.backgroundColor = #00c000;

    
}