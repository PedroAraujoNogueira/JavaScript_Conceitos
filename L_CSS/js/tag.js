const color = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase() // Aqui pegamos o nome da tag.

    box.style.borderColor = color.get(tagName) // Aqui colocamos uma cor na borda da tag, de acordo com a tag.

    if(!box.classList.contains('nolabel')){ // Só entrará nesse if caso a tag não tiver a classe nolabel.
        const label = document.createElement('label') // Vai manipular a DOM e criar uma tag Label em tempo de execução.
        label.style.backgroundColor = color.get(tagName) // Colocará uma cor de fundo na tag label.
        label.innerHTML = tagName // Preencherá a tag label com o nome da tag pego na primeira linha dessa função.
        box.insertBefore(label, box.childNodes[0]) // Vai inserir a tag Label dentro de outra tag. A tag Label será a primera coisa dentro dessa outra tag, pois deve ser inserida antes(insert before) do primeiro filho(box.childNodes[0]) que essa tag, porventura, venha a ter.
    }
})