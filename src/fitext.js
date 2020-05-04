export default function fit(fittables, wideable) {
    [...fittables].forEach(box => {
        const WRAPPER_CLASSNAME = 'fitter'

        if (!RegExp(WRAPPER_CLASSNAME).test(box.firstElementChild.className)) {
            box.innerHTML = `<div class='${WRAPPER_CLASSNAME}'>${box.innerHTML}</div>`
        }

        const fitter = box.firstElementChild
        const children = [...box.getElementsByTagName('*')]

        fitter.style.display = 'inline-block'

        const core = () => {
            const overflowing = () => {
                const boxPaddingY = parseFloat(getComputedStyle(box).paddingTop) + parseFloat(getComputedStyle(box).paddingBottom)
                const boxHeight = box.offsetHeight - boxPaddingY

                return fitter.offsetHeight > boxHeight
            }

            const updateFontSize = (child, multiplier) => child.style.fontSize = `${parseFloat(getComputedStyle(child).fontSize) * multiplier}px`

            children.forEach(child => {
                if (!child.dataset.size) {
                    child.dataset.size = getComputedStyle(child).fontSize
                }
            })

            function check() {
                if (overflowing()) {
                    while (overflowing()) {
                        children.forEach(child => updateFontSize(child, .99))
                    }
                } else {
                    if (wideable) {
                        while (!overflowing()) {
                            children.forEach(child => updateFontSize(child, 1.01))
                        }
                    } else {
                        children.forEach(child => parseFloat(child.style.fontSize) * 1.01 < child.dataset.size
                            ? updateFontSize(child, 1.01)
                            : child.style.removeProperty('font-size'))
                    }
                }

                if (overflowing()) {
                    check()
                }
            }

            check()
        }

        core()

        fitter.style.removeProperty('display')
    })
}
