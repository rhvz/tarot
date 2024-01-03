const cartasDeTarot = [
    //
    { nome: '0 - O Louco', imagem: 'https://www.astrocentro.com.br/blog/wp-content/uploads/2020/05/o-louco-tarot.jpg', link: 'https://tarotfarm.com.br/o-louco-significado-no-tarot/' },
    { nome: 'I - O Mago', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Mago-.jpg', link: 'https://tarotfarm.com.br/o-mago-significado-no-tarot/' },
    { nome: 'II - A Sacerdotisa', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Sacerdotisa-.jpg', link: 'https://tarotfarm.com.br/a-sacerdotisa-significado-no-tarot/' },
    { nome: 'III - A Imperatriz', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Imperatriz-upright-1.jpg', link: 'https://tarotfarm.com.br/a-imperatriz-significado-no-tarot/' },
    { nome: 'IV - O Imperador', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Imperador-.jpg', link: 'https://tarotfarm.com.br/o-imperador-significado-no-tarot/' },
    { nome: 'V - O Hierofante', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Hierofante-upright.jpg', link: 'https://tarotfarm.com.br/o-hierofante-significado-no-tarot/' },
    { nome: 'VI - Os Enamorados', imagem: "https://tarotfarm.com.br/wp-content/uploads/2020/12/Os-Enamorados-.jpg", link: "https://tarotfarm.com.br/os-amantes-significado-no-tarot/" },
    { nome: 'VII - O Carro', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Carro-.jpg', link: 'https://tarotfarm.com.br/o-carro-significado-no-tarot/' },
    { nome: 'VIII - A Justiça', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Justica-.jpg', link: 'https://tarotfarm.com.br/a-justica-significado-no-tarot/' },
    { nome: 'IX - O Eremita', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Eremita-.jpg', link: 'https://tarotfarm.com.br/o-eremita-significado-no-tarot/' },
    { nome: 'X - Roda da Fortuna', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Roda-da-Fortuna-.jpg', link: 'https://tarotfarm.com.br/a-roda-da-fortuna-significado-no-tarot/' },
    { nome: 'XI - A Força', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Forca-.jpg', link: 'https://tarotfarm.com.br/a-forca-significado-no-tarot/' },
    { nome: 'XII - O Enforcado', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Dependurado-.jpg', link: 'https://tarotfarm.com.br/o-enforcado-significado-no-tarot/' },
    { nome: 'XIII - Morte', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Morte-.jpg', link: 'https://tarotfarm.com.br/a-morte-significado-no-tarot/' },
    { nome: 'XIV - A Temperança', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Temperaca-.jpg', link: 'https://tarotfarm.com.br/a-temperaca-significado-no-tarot/' }, 
    { nome: 'XV - O Diabo', imagem: "https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Diabo-.jpg", link: "https://tarotfarm.com.br/o-diabo-significado-no-tarot/" },
    { nome: 'XVI - A Torre', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Torre-.jpg', link: 'https://tarotfarm.com.br/a-torre-significado-no-tarot/' },
    { nome: 'XVII - A Estrela', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Estrela-.jpg', link: 'https://tarotfarm.com.br/a-estrela-significado-no-tarot/' },
    { nome: 'XVIII - A Lua', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Lua-.jpg', link: 'https://tarotfarm.com.br/a-lua-significado-no-tarot/' },
    { nome: 'XIX - O Sol', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Sol-.jpg', link: 'https://tarotfarm.com.br/o-sol-significado-no-tarot/' },
    { nome: 'XX - O Julgamento', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Jugamento-.jpg', link: 'https://tarotfarm.com.br/o-julgamento-significado-no-tarot/' },
    { nome: 'XXI - O Mundo', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Mundo-.jpg', link: 'https://tarotfarm.com.br/o-mundo-significado-no-tarot/' },
    //arcanos menores
    { nome: 'Ás de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-copas-.jpg', link: 'https://tarotfarm.com.br/as-de-copas-significado-no-tarot/'},
    { nome: '2 de Copas ', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-copas.jpg', link: 'https://tarotfarm.com.br/dois-de-copas-significado-no-tarot/'},
    { nome: '3 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-copas-.jpg', link: 'https://tarotfarm.com.br/tres-de-copas-significado-no-tarot/'},
    { nome: '4 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-copas-.jpg', link: 'https://tarotfarm.com.br/quatro-de-copas-significado-no-tarot/'},
    { nome: '5 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-copas-.jpg', link: 'https://tarotfarm.com.br/cinco-de-copas-significado-no-tarot/'},
    { nome: '6 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-copas-.jpg', link: 'https://tarotfarm.com.br/seis-de-copas-significado-no-tarot/'},
    { nome: '7 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/7-de-copas-.jpg', link: 'https://tarotfarm.com.br/sete-de-copas-significado-no-tarot/'},
    { nome: '8 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-copas-.jpg', link: 'https://tarotfarm.com.br/oito-de-copas-significado-no-tarot/'},
    { nome: '9 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-copas.jpg', link: 'https://tarotfarm.com.br/nove-de-copas-o-significado-no-tarot/'},
    { nome: '10 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-copas-.jpg', link: 'https://tarotfarm.com.br/dez-de-copas-significado-no-tarot/'},
    { nome: 'Valete de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-copas-.jpg', link: 'https://tarotfarm.com.br/valete-de-copas-significado-no-tarot/'},
    { nome: 'Cavaleiro de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-copas-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-copas-significado-no-tarot/'},
    { nome: 'Rainha de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-copas-.jpg', link: 'https://tarotfarm.com.br/rainha-de-copas-significado-no-tarot/'},
    { nome: 'Rei de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-copas-.jpg', link: 'https://tarotfarm.com.br/rei-de-copas-significado-no-tarot/'},
    { nome: 'Ás de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-ouros.jpg', link: 'https://tarotfarm.com.br/as-de-ouros-significado-no-tarot/'},
    { nome: '2 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-ouros-.jpg', link: 'https://tarotfarm.com.br/dois-de-ouros-significado-no-tarot/'},
    { nome: '3 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-ouros.jpg', link: 'https://tarotfarm.com.br/tres-de-ouros-significado-no-tarot/'},
    { nome: '4 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-ouros.jpg', link: 'https://tarotfarm.com.br/quatro-de-ouros-significado-no-tarot/'},
    { nome: '5 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-ouros-.jpg', link: 'https://tarotfarm.com.br/cinco-de-ouros-significado-no-tarot/'},
    { nome: '6 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-ouros-.jpg', link: 'https://tarotfarm.com.br/seis-de-ouros-significado-no-tarot/'},
    { nome: '7 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2021/02/Screenshot-2020-12-04-at-11.13.21.png', link: 'https://tarotfarm.com.br/sete-de-ouros-significado-no-tarot/'},
    { nome: '8 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-ouros-.jpg', link: 'https://tarotfarm.com.br/oito-de-ouros-o-significado-no-tarot/'},
    { nome: '9 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-ouros-.jpg', link: 'https://tarotfarm.com.br/nove-de-ouros-significado-no-tarot/'},
    { nome: '10 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-ouros-.jpg', link: 'https://tarotfarm.com.br/dez-de-ouros-o-significado-no-tarot/'},
    { nome: 'Valete de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-ouros-.jpg', link: 'https://tarotfarm.com.br/valete-de-ouros-significado-no-tarot/'},
    { nome: 'Cavaleiro de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-ouros-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-ouros-significado-no-tarot/'},
    { nome: 'Rainha de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-ouros-.jpg', link: 'https://tarotfarm.com.br/rainha-de-ouros-significado-no-tarot/'},
    { nome: 'Rei de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-ouros-.jpg', link: 'https://tarotfarm.com.br/rei-de-ouros-significado-no-tarot/'},
    { nome: 'Ás de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-espadas.jpg', link: 'https://tarotfarm.com.br/as-de-espadas-significado-no-tarot/'},
    { nome: '2 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-espadas-.jpg', link: 'https://tarotfarm.com.br/dois-de-espadas-significado-no-tarot/'},
    { nome: '3 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-espadas.jpg', link: 'https://tarotfarm.com.br/tres-de-espadas-significado-no-tarot/'},
    { nome: '4 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-espadas-.jpg', link: 'https://tarotfarm.com.br/quatro-de-espadas-significado-no-tarot/'},
    { nome: '5 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-espadas-.jpg', link: 'https://tarotfarm.com.br/cinco-de-espadas-significado-no-tarot/'},
    { nome: '6 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-espadas-.jpg', link: 'https://tarotfarm.com.br/seis-de-espadas-significado-no-tarot/'},
    { nome: '7 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/7-de-espadas-.jpg', link: 'https://tarotfarm.com.br/sete-de-espadas-significado-no-tarot/'},
    { nome: '8 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-espadas.jpg', link: 'https://tarotfarm.com.br/oito-de-espadas-significado-no-tarot/'},
    { nome: '9 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-espadas-.jpg', link: 'https://tarotfarm.com.br/nove-de-espadas-significado-no-tarot/'},
    { nome: '10 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-espadas.jpg', link: 'https://tarotfarm.com.br/dez-de-espadas-significado-no-tarot/'},
    { nome: 'Valete de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-espadas-.jpg', link: 'https://tarotfarm.com.br/valete-de-espadas-significado-no-tarot/'},
    { nome: 'Cavaleiro de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-espadas-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-espadas-significado-no-tarot/'},
    { nome: 'Rainha de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-espadas-.jpg', link: 'https://tarotfarm.com.br/rainha-de-espadas-significado-no-tarot/'},
    { nome: 'Rei de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-espadas.jpg', link: 'https://tarotfarm.com.br/rei-de-espadas-significado-no-tarot/'},
    { nome: 'Ás de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-paus-.jpg', link: 'https://tarotfarm.com.br/as-de-paus-significado-no-tarot/'},
    { nome: '2 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-paus-.jpg', link: 'https://tarotfarm.com.br/dois-de-paus-significado-no-tarot/'},
    { nome: '3 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-paus-.jpg', link: 'https://tarotfarm.com.br/tres-de-paus-significado-no-tarot/'},
    { nome: '4 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-paus.jpg', link: 'https://tarotfarm.com.br/quatro-de-paus-significado-no-tarot/'},
    { nome: '5 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-paus-.jpg', link: 'https://tarotfarm.com.br/cinco-de-paus-significado-no-tarot/'},
    { nome: '6 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-paus-.jpg', link: 'https://tarotfarm.com.br/seis-de-paus-significado-no-tarot/'},
    { nome: '7 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/7-de-paus-.jpg', link: 'https://tarotfarm.com.br/sete-de-paus-significado-no-tarot/'},
    { nome: '8 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-paus-.jpg', link: 'https://tarotfarm.com.br/oito-de-paus-significado-no-tarot/'},
    { nome: '9 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-paus-.jpg', link: 'https://tarotfarm.com.br/nove-de-paus-significado-no-tarot/'},
    { nome: '10 de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-paus-.jpg', link: 'https://tarotfarm.com.br/dez-de-paus-significado-no-tarot/'},
    { nome: 'Valete de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-paus-.jpg', link: 'https://tarotfarm.com.br/valete-de-paus-significado-no-tarot/'},
    { nome: 'Cavaleiro de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-paus-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-paus-significado-no-tarot/'},
    { nome: 'Rainha de paus', imagem: 'https://tarotfarm.com.br/rainha-de-paus-significado-no-tarot/', link: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-paus-.jpg'},
    { nome: 'Rei de paus', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-paus-.jpg', link: 'https://tarotfarm.com.br/rei-de-paus-significado-no-tarot/'},
]

function tirarCarta() {
    // Criar uma cópia do array original para evitar alterações indesejadas
    const cartasDisponiveis = [
        { nome: '0 - O Louco', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Louco-.jpg', link: 'https://tarotfarm.com.br/o-louco-significado-no-tarot/' },
        { nome: 'I - O Mago', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Mago-.jpg', link: 'https://tarotfarm.com.br/o-mago-significado-no-tarot/' },
        { nome: 'II - A Sacerdotisa', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Sacerdotisa-.jpg', link: 'https://tarotfarm.com.br/a-sacerdotisa-significado-no-tarot/' },
        { nome: 'III - A Imperatriz', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Imperatriz-upright-1.jpg', link: 'https://tarotfarm.com.br/a-imperatriz-significado-no-tarot/' },
        { nome: 'IV - O Imperador', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Imperador-.jpg', link: 'https://tarotfarm.com.br/o-imperador-significado-no-tarot/' },
        { nome: 'V - O Hierofante', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Hierofante-upright.jpg', link: 'https://tarotfarm.com.br/o-hierofante-significado-no-tarot/' },
        { nome: 'VI - Os Enamorados', imagem: "https://tarotfarm.com.br/wp-content/uploads/2020/12/Os-Enamorados-.jpg", link: "https://tarotfarm.com.br/os-amantes-significado-no-tarot/" },
        { nome: 'VII - O Carro', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Carro-.jpg', link: 'https://tarotfarm.com.br/o-carro-significado-no-tarot/' },
        { nome: 'VIII - A Justiça', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Justica-.jpg', link: 'https://tarotfarm.com.br/a-justica-significado-no-tarot/' },
        { nome: 'IX - O Eremita', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Eremita-.jpg', link: 'https://tarotfarm.com.br/o-eremita-significado-no-tarot/' },
        { nome: 'X - Roda da Fortuna', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Roda-da-Fortuna-.jpg', link: 'https://tarotfarm.com.br/a-roda-da-fortuna-significado-no-tarot/' },
        { nome: 'XI - A Força', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Forca-.jpg', link: 'https://tarotfarm.com.br/a-forca-significado-no-tarot/' },
        { nome: 'XII - O Enforcado', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Dependurado-.jpg', link: 'https://tarotfarm.com.br/o-enforcado-significado-no-tarot/' },
        { nome: 'XIII - Morte', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Morte-.jpg', link: 'https://tarotfarm.com.br/a-morte-significado-no-tarot/' },
        { nome: 'XIV - A Temperança', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Temperaca-.jpg', link: 'https://tarotfarm.com.br/a-temperaca-significado-no-tarot/' }, { nome: 'XV - O Diabo', imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RWS_Tarot_15_Devil.jpg/220px-RWS_Tarot_15_Devil.jpg", link: "https://tarotfarm.com.br/o-diabo-significado-no-tarot/" },
        { nome: 'XVI - A Torre', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Torre-.jpg', link: 'https://tarotfarm.com.br/a-torre-significado-no-tarot/' },
        { nome: 'XVII - A Estrela', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Estrela-.jpg', link: 'https://tarotfarm.com.br/a-estrela-significado-no-tarot/' },
        { nome: 'XVIII - A Lua', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/A-Lua-.jpg', link: 'https://tarotfarm.com.br/a-lua-significado-no-tarot/' },
        { nome: 'XIX - O Sol', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Sol-.jpg', link: 'https://tarotfarm.com.br/o-sol-significado-no-tarot/' },
        { nome: 'XX - O Julgamento', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Jugamento-.jpg', link: 'https://tarotfarm.com.br/o-julgamento-significado-no-tarot/' },
        { nome: 'XXI - O Mundo', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/O-Mundo-.jpg', link: 'https://tarotfarm.com.br/o-mundo-significado-no-tarot/' },
        { nome: 'Ás de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-copas-.jpg', link: 'https://tarotfarm.com.br/as-de-copas-significado-no-tarot/'},
    { nome: '2 de Copas ', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-copas.jpg', link: 'https://tarotfarm.com.br/dois-de-copas-significado-no-tarot/'},
    { nome: '3 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-copas-.jpg', link: 'https://tarotfarm.com.br/tres-de-copas-significado-no-tarot/'},
    { nome: '4 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-copas-.jpg', link: 'https://tarotfarm.com.br/quatro-de-copas-significado-no-tarot/'},
    { nome: '5 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-copas-.jpg', link: 'https://tarotfarm.com.br/cinco-de-copas-significado-no-tarot/'},
    { nome: '6 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-copas-.jpg', link: 'https://tarotfarm.com.br/seis-de-copas-significado-no-tarot/'},
    { nome: '7 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/7-de-copas-.jpg', link: 'https://tarotfarm.com.br/sete-de-copas-significado-no-tarot/'},
    { nome: '8 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-copas-.jpg', link: 'https://tarotfarm.com.br/oito-de-copas-significado-no-tarot/'},
    { nome: '9 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-copas.jpg', link: 'https://tarotfarm.com.br/nove-de-copas-o-significado-no-tarot/'},
    { nome: '10 de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-copas-.jpg', link: 'https://tarotfarm.com.br/dez-de-copas-significado-no-tarot/'},
    { nome: 'Valete de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-copas-.jpg', link: 'https://tarotfarm.com.br/valete-de-copas-significado-no-tarot/'},
    { nome: 'Cavaleiro de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-copas-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-copas-significado-no-tarot/'},
    { nome: 'Rainha de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-copas-.jpg', link: 'https://tarotfarm.com.br/rainha-de-copas-significado-no-tarot/'},
    { nome: 'Rei de Copas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-copas-.jpg', link: 'https://tarotfarm.com.br/rei-de-copas-significado-no-tarot/'},
    { nome: 'Ás de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-ouros.jpg', link: 'https://tarotfarm.com.br/as-de-ouros-significado-no-tarot/'},
    { nome: '2 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-ouros-.jpg', link: 'https://tarotfarm.com.br/dois-de-ouros-significado-no-tarot/'},
    { nome: '3 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-ouros.jpg', link: 'https://tarotfarm.com.br/tres-de-ouros-significado-no-tarot/'},
    { nome: '4 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-ouros.jpg', link: 'https://tarotfarm.com.br/quatro-de-ouros-significado-no-tarot/'},
    { nome: '5 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-ouros-.jpg', link: 'https://tarotfarm.com.br/cinco-de-ouros-significado-no-tarot/'},
    { nome: '6 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-ouros-.jpg', link: 'https://tarotfarm.com.br/seis-de-ouros-significado-no-tarot/'},
    { nome: '7 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2021/02/Screenshot-2020-12-04-at-11.13.21.png', link: 'https://tarotfarm.com.br/sete-de-ouros-significado-no-tarot/'},
    { nome: '8 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-ouros-.jpg', link: 'https://tarotfarm.com.br/oito-de-ouros-o-significado-no-tarot/'},
    { nome: '9 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-ouros-.jpg', link: 'https://tarotfarm.com.br/nove-de-ouros-significado-no-tarot/'},
    { nome: '10 de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-ouros-.jpg', link: 'https://tarotfarm.com.br/dez-de-ouros-o-significado-no-tarot/'},
    { nome: 'Valete de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-ouros-.jpg', link: 'https://tarotfarm.com.br/valete-de-ouros-significado-no-tarot/'},
    { nome: 'Cavaleiro de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-ouros-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-ouros-significado-no-tarot/'},
    { nome: 'Rainha de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-ouros-.jpg', link: 'https://tarotfarm.com.br/rainha-de-ouros-significado-no-tarot/'},
    { nome: 'Rei de Ouros', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-ouros-.jpg', link: 'https://tarotfarm.com.br/rei-de-ouros-significado-no-tarot/'},
    { nome: 'Ás de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/as-de-espadas.jpg', link: 'https://tarotfarm.com.br/as-de-espadas-significado-no-tarot/'},
    { nome: '2 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/2-de-espadas-.jpg', link: 'https://tarotfarm.com.br/dois-de-espadas-significado-no-tarot/'},
    { nome: '3 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/3-de-espadas.jpg', link: 'https://tarotfarm.com.br/tres-de-espadas-significado-no-tarot/'},
    { nome: '4 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/4-de-espadas-.jpg', link: 'https://tarotfarm.com.br/quatro-de-espadas-significado-no-tarot/'},
    { nome: '5 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/5-de-espadas-.jpg', link: 'https://tarotfarm.com.br/cinco-de-espadas-significado-no-tarot/'},
    { nome: '6 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/6-de-espadas-.jpg', link: 'https://tarotfarm.com.br/seis-de-espadas-significado-no-tarot/'},
    { nome: '7 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/7-de-espadas-.jpg', link: 'https://tarotfarm.com.br/sete-de-espadas-significado-no-tarot/'},
    { nome: '8 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/8-de-espadas.jpg', link: 'https://tarotfarm.com.br/oito-de-espadas-significado-no-tarot/'},
    { nome: '9 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/9-de-espadas-.jpg', link: 'https://tarotfarm.com.br/nove-de-espadas-significado-no-tarot/'},
    { nome: '10 de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/10-de-espadas.jpg', link: 'https://tarotfarm.com.br/dez-de-espadas-significado-no-tarot/'},
    { nome: 'Valete de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/valete-de-espadas-.jpg', link: 'https://tarotfarm.com.br/valete-de-espadas-significado-no-tarot/'},
    { nome: 'Cavaleiro de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/cavaleiro-de-espadas-.jpg', link: 'https://tarotfarm.com.br/cavaleiro-de-espadas-significado-no-tarot/'},
    { nome: 'Rainha de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rainha-de-espadas-.jpg', link: 'https://tarotfarm.com.br/rainha-de-espadas-significado-no-tarot/'},
    { nome: 'Rei de Espadas', imagem: 'https://tarotfarm.com.br/wp-content/uploads/2020/12/rei-de-espadas.jpg', link: 'https://tarotfarm.com.br/rei-de-espadas-significado-no-tarot/'},
   
    ];

    // Inicializar um array para armazenar as três cartas selecionadas
    const cartasSelecionadas = [];

    // Selecionar três cartas distintas
    for (let i = 0; i < 3; i++) {
        const indiceAleatorio = Math.floor(Math.random() * cartasDisponiveis.length);
        const cartaAleatoria = cartasDisponiveis.splice(indiceAleatorio, 1)[0];
        cartasSelecionadas.push(cartaAleatoria);
    }

    // Exibir as três cartas na página
    for (let i = 0; i < 3; i++) {
        const cartaImagem = document.getElementById(`cartaImagem${i + 1}`);
        cartaImagem.src = cartasSelecionadas[i].imagem;
        cartaImagem.alt = cartasSelecionadas[i].nome;
    }
}

function abrirLink(imagemClicada) {
    const cartaAleatoria = cartasDeTarot.find(carta => carta.imagem === imagemClicada.src);

    if (cartaAleatoria) {
        window.open(cartaAleatoria.link, '_blank');
    }
}