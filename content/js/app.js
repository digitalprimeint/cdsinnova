function CentroInnovacion () {
    this.init = function () {
        template.lazy = true;
        template.windowBlocked = true; 
        
        this.setColors();
        this.createWindows();
        this.createNavigation();

        load(function () {
            $("#setting").hide();
            $("#collapse").hide();

            app.setLayout();
        });
    }

    this.createNavigation = function () {
        global.navigation = [
            {
                title: "Información",
                target: "Bienvenidos"
            },
            {
                title: "Ciudad del Saber",
                target: "Ciudad del Saber"
            },
            {
                title: "Ver Directorio",
                target: "Directorio de Miembros"
            }
        ]
    }

    this.createWindows = function () {
        plugdo.window({
            name: "Bienvenidos",
            path: "https://ciudaddelsaber.org/ser-miembro/centro-de-innovacion/",
            open: false
        });

        plugdo.window({
            name: "Ciudad del Saber",
            path: "https://ciudaddelsaber.org/",
            open: false
        });

        plugdo.window({
            name: "Directorio de Miembros",
            path: "/directorio/index",
            open: true
        });
    }

    this.setLayout = function () {
        var layoutSettings = {
            splitLeft: false,
            splitRight: false,
            showNavbar: true,
            showMenuLeft: false,
            showMenuRight: false,
            showMenuContentLeft: false,
            showMenuContentRight: false,
            tabContentMarging: false,
            showTab: false
        }

        template.applySettings(layoutSettings);
    }

    this.setColors = function () {
        var colorOptions = {
            bgNight: "#2E5B9E",
            bgDay: "#FFF",
            bgNavbarBorder: "#2E5B9E",
            bgNavbarOver: "#353535",
            bgMenuTitle: "#5E6D06",
            bgTabOver: "#202020",
            bgSplitter: "#2E5B9E",
            fontLogo: "#FFF",
            font: "#D7D7D7",
            fontDay: "#FFFFFF",
            fontOver: "#FFF",
            fontInactive: "#989898",
            fontMenuGroupRight: "#C6ECBC",
            fontMenuGroupLeft: "#D7D7D7",
            iconOver: "#C9E84D",
            fontSizeNavbar: "1em",
            fontSizeMenu: "14px",
            fontSizeMenuGroup: "13px",
            fontSizeMenuItem: "12px",
            fontSizeTab: "12px",
            fontSizeTabSelected: "14px",
            navigationHeight: "50px"
        };

        template.setColorOptions(colorOptions);
    }
}

var app = new CentroInnovacion();