window.onload = () => {
    document.querySelector('#projects-link').addEventListener('click', () => {
        document.querySelector('#projects').classList.add('blur-element')
    })
    document.querySelector('#projects-link-2').addEventListener('click', () => {
        document.querySelector('#projects').classList.add('blur-element')
    })

    document.querySelector('#aboutme').addEventListener('click', () => {
        document.querySelector('#projects').classList.remove('blur-element')
    })
}