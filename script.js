function toggleMode() {
    const html = document.documentElement
    if(html.classList.contains('light-mode')) {
        html.classList.remove('light-mode')
    } else {
        html.classList.add('light-mode')
    }

    //pegar a tag img
    //substituir a imagem
    //se estiver em light-mode, adicionar a imagem light
    //se estiver sem light mode, manter a imagem normal
    const imagem = document.querySelector('img')
    if(html.classList.contains('light-mode')) {
        //se tiver light-mode, adicionar a imagem light
        imagem.setAttribute("src", "./assets/miakel-lightmode.jpg")
    } else {
        imagem.setAttribute("src", "./assets/miakel.jpg")
    }
}