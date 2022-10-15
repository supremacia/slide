/*
    Bill Rocha - https://billrocha.com
*/
function SlideShow(cfg) {
    let index = 0,
        total,
        stop = false,
        theater,
        slides,
        slide,
        dots,
        badge,
        speed = 3000,
        cpath = '.SlideShow'

    const init = () => {
        badge = __(cpath + ' .sld-badge')
        slides = __(cpath + ' .sld-slides')

        mount(cfg)

        slide = _a(cpath + ' .sld-slide')
        dots = _a(cpath + ' .sld-badge span')
        dots.forEach((d, i) => d.onclick = () => show(i))
        __('.sld-prev').onclick = () => show(index - 1)
        __('.sld-next').onclick = () => show(index + 1)

        total = slide.length
        theater = __(cpath + ' .sld-theater')
        theater.onmouseenter = () => stop = true
        theater.onmouseleave = () => stop = false

        show(index)
        setInterval(() => show(index + 1, true), speed)
    }

    const show = (n, s) => {
        if (stop && s === true) return false

        var final = total - 1
        if (n > final) n = 0
        if (n < 0) n = final

        index = n

        for (var i = 0; i < total; i++) {
            slide[i].classList.remove('on')
            dots[i].classList.remove('on')
        }

        slide[n].classList.add('on')
        dots[n].classList.add('on')
    }

    const mount = (cfg) => {
        var s = '', b = ''

        cfg.map(a => {
            s += `<div class="sld-slide"><div class="sld-content"><img src="${a.img}"><div class="sld-caption">${a.cap}</div></div></div>`
            b += '<span></span>'
        })
        badge.innerHTML = b
        slides.innerHTML = s
    }

    const __ = e => document.querySelector(e)
    const _a = e => document.querySelectorAll(e)

    init()
}

window.onload = () => SlideShow(CFG)

/* Configuration data
    ✔ This data can be loaded, for example, from a JSON file or via AJAX, from the server.
*/
const CFG = [
    {
        img: '../assets/img/background-start-calltoaction-01-min.png',
        cap: 'Você ganha dinheiro e multiplica conhecimento, oportunidades e contatos, “COLABOCRATIZANDO” com empreendedores, consumidores, investidores e solidários que possuem os mesmos valores que os seus.<a href="https://freedomee.com">Freedomee.com</a>'
    }, {
        img: '../assets/img/background-start-calltoaction-02-min.png',
        cap: 'VOCÊ MULTIPLICA AS SUAS VENDAS e RENDAS ECONOMICAS, mediante as campanhas de marketing comunitárias em GRUPOS, com embaixadores de marca, empreendedores, profissionais de marketing e vendas, influenciadores, consumidores e solidários.<a href="https://freedomee.com">Freedomee.com</a>'
    }, {
        img: '../assets/img/background-start-calltoaction-03-min.png',
        cap: 'VOCÊ INVESTE quando consome, em empreendedores e solidários que compatilham os mesmos valores que os seus. Na FreedomeE você pode AUMENTAR O TEU PODER DE COMPRA se tornando mais que um “FreedomeEuser”.<a href="https://freedomee.com">Freedomee.com</a>'
    }, {
        img: '../assets/img/background-start-calltoaction-04-min.png',
        cap: 'Você pode investir na tecnologia FreedomeE e se tornar DONO do seu banco e da sua rede de comunicação e comércio e ter qualidade de vida.<a href="https://freedomee.com">Freedomee.com</a>'
    },
]