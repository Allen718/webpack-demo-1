console.log('hi')
import x from './main.js'
import png from './assets/github.png'
console.log(png)
console.log(x)
const div = document.querySelectorAll('#app1')[0]
console.log(div)
div.innerHTML = `<img src='${png}'>`
const button = document.createElement('button')
button.innerText = "懒加载"
div.appendChild(button)
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()

    },
        () => { })
}