const myForm = event => {
    event.preventDefault()
    const formState = []
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let nombre = document.getElementById ('nombre')
    let apellido = document.getElementById('apellido')
    let edad = document.getElementById('edad')
    let email = document.getElementById('email')

    !nombre.value ? nombre.classList.add ('error') :
    formState.push ({ element: 'nombre', value: nombre.value }) && nombre.classList.remove('error')

    !apellido.value ? apellido.classList.add ('error') :
    formState.push ({ element: 'apellido', value: apellido.value }) && apellido.classList.remove('error')

    !edad.value ? edad.classList.add ('error') :
    formState.push ({ element: 'edad', value: edad.value }) && edad.classList.remove('error')

    !email.value || !email.value.match (mailformat) ? email.classList.add ('error') :
    formState.push ({ element: 'email', value: email.value }) && email.classList.remove('error')


    const dato = document.getElementById ('formValues')
    formState.length === 4 && (dato.innerHTML = JSON.stringify(formState))
}
