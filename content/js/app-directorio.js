function DirectorioCentroInnovacion () {
    this.init = function () {
        view.load();
    }

    this.data = [
        {
            "name": "ADELANTOS",
            "description": "Aplicación Mobile de préstamos personales",
            "phone": "+507 216 9090",
            "email": "simon@adelantos.com.pa",
            "web": "www.adelantos.com.pa",
            "address": "Innova 109, Ofic. A2"
        },
        {
            "name": "AIESEC",
            "description": `Plataforma global más grande del mundo que desarrolla 
                            liderazgo en jóvenes a través de intercambio y experiencias 
                            de equipo`,
            "phone": "+507 306 3130",
            "email": "panama@aiesec.net",
            "web": "www.aiesec.org.pa",
            "address": "Innova 104, Ofic. 15 y 16"
        },
        {
            "name": "APOLO LAB",
            "description": `Desarrollo de tecnologías móviles en el sector de la salud. Prescripción electrónica 
                            de medicamentos mediante un app`,
            "phone": "+507 6675 3077",
            "email": "hanz.ardon@apololab.com",
            "web": "www.es-apololab.strikingly.com",
            "address": "Innova 109, Ofic. A2"
        }
    ]
}

var appDir = new DirectorioCentroInnovacion();