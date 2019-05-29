function DirectorioCentroInnovacion () {
    this.init = function () {
        view.load();

        $(document).ready(function () {

            $('#searchText').on('input',function(e){
                var searchText = $(this).val();
                appDir.searchByText(searchText);
            });

            $(".btn").click(function (e) {
                e.preventDefault();
                
                var searchText = $(this).text();
                appDir.searchByFirstLetter(searchText);
            });

        });
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
    ];

    this.searchByText = function (searchText) {
        var data = view.getData("miembros");

        if(globalData == "") {
            globalData = JSON.stringify(data);
        }
        else {
            data = JSON.parse(globalData);
        }

        if(searchText !== "Todos") {
            var result = select("*")
                            .from(data.miembros)
                            .where(function (item) {
                                searchText = searchText.toLowerCase();
                                if(item.name.toLowerCase().search(searchText) != -1
                                    || item.description.toLowerCase().search(searchText) != -1
                                    || item.phone.search(searchText) != -1
                                    || item.email.toLowerCase().search(searchText) != -1
                                    || item.web.toLowerCase().search(searchText) != -1
                                    || item.address.toLowerCase().search(searchText) != -1) {
                                    return true;
                                }

                                return false;
                            })
                            .return();

            data.miembros = result;
        }

        view.setData("miembros", data);

        view.components.handler.sleep(100);
        $("#template-perfil").addClass("row footer-division");
    }

    this.searchByFirstLetter = function (searchText) {
        var data = view.getData("miembros");

        if(globalData == "") {
            globalData = JSON.stringify(data);
        }
        else {
            data = JSON.parse(globalData);
        }

        if(searchText !== "Todos") {
            var result = select("*")
                            .from(data.miembros)
                            .where(function (item) {
                                return item.name.substring(0, 1).toLowerCase() === searchText.toLowerCase();
                            })
                            .return();

            data.miembros = result;
        }

        view.setData("miembros", data);

        view.components.handler.sleep(100);
        $("#template-perfil").addClass("row footer-division");
    }
}

var appDir = new DirectorioCentroInnovacion();