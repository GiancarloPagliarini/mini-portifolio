const abas = document.querySelectorAll('.aba')


abas.forEach(aba => {
    aba.addEventListener('click', function () {

        if (aba.classList.contains('selecionado')) { //guard clause -> evitar que um códido que não precisa rodar, rode.
            return
        }

        selecionarAba(aba)
                                //refatoração 
        mostrarInfoDaAba(aba)
    })
})

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector('.aba.selecionado')
    abaSelecionada.classList.remove('selecionado')

    aba.classList.add('selecionado')
}

function mostrarInfoDaAba(aba) {
    const informacaoSelecionada = document.querySelector('.informacao.selecionado')
    informacaoSelecionada.classList.remove('selecionado')

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)

    informacaoMostrada.classList.add('selecionado')
}

