/*
    Bill Rocha - https://billrocha.com
*/
function SlideShow() {
    let index = 0,
        total,
        stop = false,
        theater,
        slide,
        dots,
        speed = 3000,
        cpath = '.SlideShow'

    const init = () => {
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

    const __ = e => document.querySelector(e)
    const _a = e => document.querySelectorAll(e)

    init()
}

window.onload = () => SlideShow()