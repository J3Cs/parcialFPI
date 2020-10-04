function navigate(route) {
    event.preventDefault()
    window.location = `${route}.html`
}

function done() {
    event.preventDefault()
    swal({
        title: "Hecho!",
        text: "Accion realizada con éxito!",
        icon: "success",
        buttons: false,
        timer: 3000
    }).then(() => {
        window.location = 'index.html'
    })
}