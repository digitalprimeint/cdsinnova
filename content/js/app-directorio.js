function DirectorioCentroInnovacion () {
    this.init = function () {

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

            appDir.addDataToPlugdoMiembroElement();

            view.load();

        });
    }

    this.addDataToPlugdoMiembroElement = function () {
        var component = document.getElementsByTagName("plugdo-miembro")[0];
        var dataElement = document.createElement("data");

        var model = { "css": "row", "miembros": [] };
        model.miembros = this.data;
        dataElement.innerText = JSON.stringify(model);
        component.appendChild(dataElement);
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
        },
        {
            "name": "ASOCIACIÓN NACIONAL DE CONCIERTOS",
            "description": `Promoción y estudio de música clásica en Panamá, 
            brindamos talleres de apreciación musical y campamentos musicales`,
            "phone": "+507 306 3700 ext. 3563",
            "email": "conciertos@conciertospanama.org",
            "web": "www.conciertospanama.org",
            "address": "Innova 109, Ofic. 6"
        },
        {
            "name": "AYUDINGA",
            "description": `Plataforma de educación digital que busca explicarle a
            las personas materias física, química y matemáticas de una forma 
            totalmente diferente a la tradicional`,
            "phone": "+507 6920 4843",
            "email": "info@ayudinga.com",
            "web": "www.ayudinga.com",
            "address": "Casa Ayudinga, Edifico: 137-A"
        },
        {
            "name": "BALBOA DEVELOPERS",
            "description": `Web development, blockchain solutions, devops`,
            "phone": "+507 317 3132",
            "email": "jose.llamas@balboadevelopers.com",
            "web": "www.balboadevelopers.com",
            "address": "Innova 109, Ofic. 4"
        },
        {
            "name": "BLUETIDE WEB CONSULTING",
            "description": `Desarrollo y Diseño Web, Mantenimiento Wordpress, 
            SEO y SEM`,
            "phone": "+507 388 4371",
            "email": "contacto@bluetideconsulting.com",
            "web": "www.bluetideconsulting.com",
            "address": "Edificio 237, Piso 3, Local D"
        },
        {
            "name": "BLOCK FACTORY",
            "description": `Blockchain`,
            "phone": "+507 6936 6266",
            "email": "walter.alvarez@e-riskcorp.com",
            "web": "",
            "address": "Innova 109, No. 8"
        },
        {
            "name": "BRM",
            "description": `Asesoría Contable`,
            "phone": "+507 6674 2320",
            "email": "negocios@brm.com.pa",
            "web": "www.brm.com.pa",
            "address": "Innova 109, No. 6"
        },
        {
            "name": "OCM CORP",
            "description": `Asesoría Legal a Emprendedores`,
            "phone": "+507 6645 4443",
            "email": "info@ocmcorp.com",
            "web": "www.ocmcorp.com",
            "address": "Innova 109, No. 1"
        },
        {
            "name": "BOWMAN 507 - Tiro con Arco",
            "description": `Clases, entrenamiento o práctica libre de tiro 
            con arco y actividades grupales para arquería, venta y mantenimiento 
            de equipos`,
            "phone": "+507 6874 6364",
            "email": "bowmanpty507@gmail.com",
            "web": "www.bowman507.com",
            "address": "Edificio 234"
        },
        {
            "name": "CARLOS A. DONADO",
            "description": `Investigación y desarrollo de nuevas tecnologías 
            inalámbricas`,
            "phone": "+507 6948 4067",
            "email": "cdonado@gmail.com",
            "web": "",
            "address": "Innova 104, Ofic. 25"
        },
        {
            "name": "CAPATEC",
            "description": `Cámara Panameña de Tecnología de Información, 
            Innovación y Telecomunicaciones`,
            "phone": "+507 317 3132",
            "email": "info@capatec.org.pa",
            "web": "www.capatec.org.pa",
            "address": "Innova 104, Ofic. 27"
        },
        {
            "name": "CAMITYPE STUDIO",
            "description": `Diseño Industrial, Lettering y Muralismo`,
            "phone": "+507 6874 6364",
            "email": "camilaborreoa@gmail.com",
            "web": "www.camitype.tumblr.com",
            "address": "Innova 104"
        },
        {
            "name": "DARIEN TECHNOLOGY",
            "description": `Smart Apps, Ecosistemas Web y Móviles`,
            "phone": "+507 395 4122",
            "email": "contact@darient.com",
            "web": "www.darient.com",
            "address": "Innova 104, Ofic. 3B"
        },
        {
            "name": "DOÑA",
            "description": `App de Yoga @Dona.io`,
            "phone": "+507 6321 0465",
            "email": "steven@dona.io",
            "web": "www.clarkemaertin.com",
            "address": "Innova 109"
        },
        {
            "name": "EDUTEK",
            "description": `Soluciones en Tecnología Educativas, STEM y 
            Robótica`,
            "phone": "+507 236 9129",
            "email": "acarrizo@edutek.com.pa",
            "web": "www.edutek.com.pa",
            "address": "Innova 104, Ofic. 1"
        },
        {
            "name": "ENFINITY",
            "description": `Ciberseguridad, Consultoría y Programas de 
            Concientización`,
            "phone": "+507 6504 6789",
            "email": "hector@enfinity.io",
            "web": "www.enfinity.com.pa",
            "address": "Innova 109, No. 14"
        },
        {
            "name": "ENGLISH CLUB PANAMA",
            "description": `Fundación Arnold Walters, Programas en el aprendizaje 
            del idioma inglés`,
            "phone": "+507 391 8650 | 6703 8118",
            "email": "ybishop@englishclubpanama.com",
            "web": "www.englishclubpanama.com",
            "address": "Innova 109, No. 15"
        },
        {
            "name": "EXXUZ INNOVATION CORP",
            "description": `Telecomunicaciones, Entretenimiento, M-Learning y 
            Next Generation TV`,
            "phone": "+507 6703 8118",
            "email": "datencio@iddun.net",
            "web": "",
            "address": "Innova 109"
        },
        {
            "name": "FAB LAB ECOSTUDIO",
            "description": `Espacio educativo basado en la tecnología, pensamiento, 
            diseño y ciencias para estimular la cultura creativa mediante acceso a 
            herramientas de fabricación digital y manual`,
            "phone": "+507 6783 3433",
            "email": "matthewhotsko@gmail.com",
            "web": "www.ecostudio.ngo",
            "address": "Galera 245"
        },
        {
            "name": "FERNANDO CASSANI",
            "description": `Agencia de diseño digital, imagen corporativa, 
            diseño web, diseño gráfico y social marketing`,
            "phone": "+507 6244 7155",
            "email": "info@brandinnpty.com",
            "web": "www.brandinnpty.com",
            "address": "Innova 109, No. 3"
        },
        {
            "name": "FLAMINGO CAFÉ by Pan y Canela",
            "description": `Somos una cafetería de especialidad, ofrecemos 
            pastelería, catering, rodeados en un ambiente artístico creativo`,
            "phone": "+507 317 1122",
            "email": "panycanela@panycanela.com",
            "web": "www.panycanelacafe.com",
            "address": "Innova 104"
        },
        {
            "name": "FUPADESO",
            "description": `Fundación para la promoción del desarrollo 
            sostenible`,
            "phone": "+507 6321 0465",
            "email": "rsamaniego@fupadeso.com",
            "web": "",
            "address": "Innova 104, Ofic. 18"
        },
        {
            "name": "GRUPO FRACTAL",
            "description": `Importación y venta de maquinaria industrial`,
            "phone": "+507 6826 3150",
            "email": "josefina@grupo-fractal.com",
            "web": "www.grupo-fractal.com",
            "address": "Innova 109"
        },
        {
            "name": "HAUZD",
            "description": `Solución de ventas para proyectos de Bienes 
            Raices, mediante tecnología 3D interactiva`,
            "phone": "+507 6674 9863",
            "email": "info@hauzd.com",
            "web": "www.hauzd.com",
            "address": "Edificio 235"
        },
        {
            "name": "ICC - INTERNATIONAL CHAMBERS OF COMMERCE",
            "description": `Cámara de Comercio Internacional - Capítulo 
            de Panamá`,
            "phone": "+507 306 3133",
            "email": "kturner@panacamara.org",
            "web": "www.iccpanama.org",
            "address": "Innova 104, Ofic. 14"
        },
        {
            "name": "iGROW SUSTAINABLE INDUSTRIES",
            "description": `Servicios de asesoría ambiental, topografías, 
            hidrogeología, sostenibilidad, hidroponía, confección de 
            uniformes y ropa técnica outdoors`,
            "phone": "+507 6280 0643",
            "email": "contactenos@igrow-si.com",
            "web": "www.igrow-si.com",
            "address": "Innova 109, No 18"
        },
        {
            "name": "ITIS INTERNATIONAL",
            "description": `Desarrollamos herramientas de tecnología para 
            automatizar los procesos críticos de tu negocio`,
            "phone": "+507 6634 4634",
            "email": "jose.siso@itisla.com",
            "web": "www.itisla.com",
            "address": "Innova 109, No 16"
        },
        {
            "name": "ISSATEC",
            "description": `Ofrecemos plataformas tecnológicas para 
            diferentes sectores`,
            "phone": "+507 6398 1289",
            "email": "maria.escobar@issatec.com",
            "web": "www.issatec.com",
            "address": "Innova 109"
        },
        {
            "name": "IVO TALENTS",
            "description": `Plataforma que conecta el talento artístico 
            con la industria`,
            "phone": "+507 6134 4220",
            "email": "yunai@ivotalents.com",
            "web": "www.ivotalents.com",
            "address": "Innova 109, No. 9"
        },
        {
            "name": "JJ ESTRATEGIC COMMUNICATIONS",
            "description": `Ofrecemos servicios de interpretación y 
            divulgación en las comunicaciones científicas, relaciones 
            públicas, periodismo, marketing estratégico y digital`,
            "phone": "+507 6980 7399",
            "email": "jjestrategiccommunications@gmail.com",
            "web": "",
            "address": "Innova 109"
        },
        {
            "name": "KEYRA MARTÍNEZ DUNN",
            "description": `Edición, revisión y validación de contenido 
            médico como manuscritos, artículos, afiches y todo tipo de 
            divulgaciones científicas`,
            "phone": "+507 6675 5082",
            "email": "dr.kmartinez@gmail.com",
            "web": "",
            "address": "Innova 104, Ofic. 23"
        },
        {
            "name": "KINGNOVA",
            "description": `Desarrollo de soluciones tecnológicas, biometría 
            facial, cableado estructurado, servicios cloud entre otros`,
            "phone": "+507 6633 4676",
            "email": "reyes.aguirre@kingnova.com.pa",
            "web": "www.kingnova.com.pa",
            "address": "Innova 109"
        },
        {
            "name": "LAPGL",
            "description": `Plataforma ESPORT que permite al video jugador 
            competir desde la comodidad de su casa y ganar premios`,
            "phone": "+507 6406 3489",
            "email": "info@lapgl.com",
            "web": "www.lapgl.com",
            "address": "Innova 104, Ofic. 3A"
        },
        {
            "name": "LAURA BAKER STUDIO",
            "description": `Ilustradora, diseño de superficies, dibujo e 
            ilustración textil`,
            "phone": "+507 6982 2513",
            "email": "laura.baker.puentes@gmail.com",
            "web": "www.laurabakerstudio.com",
            "address": "Innova 109, No. 3"
        },
        {
            "name": "LEYGH - PHOTOGRAPHER",
            "description": `Fotógrafo creativo, marketing y diseñador`,
            "phone": "+507 6100 9968",
            "email": "hi@leygh.com",
            "web": "www.leygh.com",
            "address": "Innova 109"
        },
        {
            "name": "LIBELULA FRACTAL",
            "description": `Estudio de experimentación audiovisual, video 
            mapping, realidad virtual e instalación interactiva`,
            "phone": "+507 6224 8403",
            "email": "libelulafractal@gmail.com",
            "web": "www.libelulafractal.com",
            "address": "Innova 104, Ofic. 28"
        },
        {
            "name": "LUNA LLENA PRODUCTIONS",
            "description": `Productora de eventos, talleres, festivales 
            culturales y familiares`,
            "phone": "+507 6670 6973",
            "email": "lunallenadetambores@gmail.com",
            "web": "www.lunallenadetambores.com",
            "address": "El Lunario Galera No. 215"
        },
        {
            "name": "MICROPOS SOFTWARE",
            "description": `Servicios tecnológicos, especializados en 
            sistemas de puntos de ventas y desarrollo de software a la 
            medida`,
            "phone": "+507 306 3700 ext 3606",
            "email": "jmiur@micropossoft.com",
            "web": "www.micropossoft.com",
            "address": "Innova 109"
        },
        {
            "name": "MEDIA RANK",
            "description": `Inteligencia de Redes Sociales, Minería de 
            Datos, Análisis Estratégicos y Presentación de Data`,
            "phone": "+507 6981 2266",
            "email": "josh@mediarank.info",
            "web": "www.mediarank.info",
            "address": "Innova 109, No. 17"
        },
        {
            "name": "MULTITOOL STUDIO",
            "description": `Desarrollo de Video Juegos, Gamificación, 
            Tecnología VR y Mapeo 3D`,
            "phone": "+507 6757 2143",
            "email": "info@multitoolstudios.com",
            "web": "www.multitoolstudios.com",
            "address": "Innova 104, Ofic. 5"
        },
        {
            "name": "NECSIA SERVICES",
            "description": `Empresa de ciberseguridad, brindamos servicios 
            de auditoría, hacking ético, SOC/SIEM, Microsoft Office 365 
            Secure`,
            "phone": "+507 6318 7739",
            "email": "j.vega@necsia.es",
            "web": "www.necsia.com.pa",
            "address": "Innova 109, No. 2"
        },
        {
            "name": "OaOa",
            "description": `App móvil que te ayuda a regalar o pedir lo que 
            desees a través de tus redes sociales desde cualquier parte del
             mundo`,
            "phone": "+507 6151 4004",
            "email": "daniel.billingslea@gmail.com",
            "web": "www.oaoaweb.com",
            "address": "Innova 109"
        },
        {
            "name": "OCCIDENT ANIMATION",
            "description": `Estudio especializado en animación 3D y 2D. 
            Creamos contenido audiovisual para todas las industrias (cine, 
            tv, arquitectura, banca, tecnología y más)`,
            "phone": "+507 6674 0192",
            "email": "info@occidentanimation.com",
            "web": "www.occidentanimation.com",
            "address": "Innova 105, Ofic. 4 y 11"
        },
        {
            "name": "ONU | OHCHR",
            "description": `Sistema de Naciones Unidas, Derechos Humanos, 
            Oficina de Alto Comisionado`,
            "phone": "+507 306 3106 ext. 3577, 3181, 3578",
            "email": "crodriguez@ohchr.org",
            "web": "www.ohchr.org",
            "address": "Innova 104, Ofic. 17"
        },
        {
            "name": "PANAMA INTERPRETERS",
            "description": `Servicios de interpretación para eventos, 
            alquiler de equipo audiovisuales, livestreaming, filmación, 
            traducción de documentos y talleres de intérpretes`,
            "phone": "+507 392 8819",
            "email": "info@panamainterpreters.com",
            "web": "www.panamainterpreters.com",
            "address": "Innova 104, Ofic. 19"
        },
        {
            "name": "CANAL DE EMPRESARIAS",
            "description": `Potencia el emprendimiento liderado por mujeres 
            a nivel nacional con herramientas que permiten el crecimiento 
            de sus proyectos, en una comunidad de más de 10 mil personas`,
            "phone": "+507 306 3106",
            "email": "empresarias@cdspanama.org",
            "web": "www.canalempresarias.org",
            "address": "Innova 104"
        },
        {
            "name": "PROGRAMA ENTER",
            "description": `Programa de formación práctica para emprendimientos
             start up`,
            "phone": "+507 306 3106",
            "email": "info@enterstartup.com",
            "web": "www.enterstartup.com",
            "address": "Innova 109"
        },
        {
            "name": "PROGRAMA DE INVERSIÓN START UP",
            "description": `Dedicado a invertir capital semilla en 
            emprendimientos innovadores`,
            "phone": "+507 306 3106",
            "email": "ccollazos@cdspanama.org",
            "web": "www.startups.ciudaddelsaber.org",
            "address": "Innova 104"
        },
        {
            "name": "PHOENIX DESIGN AID",
            "description": `Agencia Internacional de Comunicación y Diseño, 
            Identidad Visual, Infografías, Ilustraciones y otros`,
            "phone": "+507 6490 9359",
            "email": "lsa@phoenixdesignaid.com",
            "web": "www.phoenixdesignaid.com",
            "address": "Innova 104, Ofic. 9"
        },
        {
            "name": "PLUGDO",
            "description": `Plataforma y Framework de Integración, que 
            permite el desarrollo de soluciones de integración corporativas 
            y aplicaciones web, web api de manera ágil, y al alcance de todo 
            presupuesto`,
            "phone": "+507 306-3700 ext 3595",
            "email": "info@plugdo.com",
            "web": "www.plugdo.com",
            "address": "Innova 104, Ofic. 2A y 2B"
        },
        {
            "name": "PRAGMA",
            "description": `Desarrollo de soluciones tecnológicas, desarrollo 
            móvil, business intelligence, robotización, Devops, etc.`,
            "phone": "+507 6298 1546",
            "email": "daniel.osorio@pragma.com.co",
            "web": "www.pagma.com.co",
            "address": "Innova 104, Ofic. 22"
        },
        {
            "name": "PRAXIS",
            "description": `Desarrollo y evaluación de programas educativos 
            mediante capacitaciones, guines interpretativos y exhibiciones`,
            "phone": "+507 6564 4141",
            "email": "praxieducationalconsultants.ad@gmail.com",
            "web": "www.praxis-edu.com",
            "address": "Innova 109"
        },
        {
            "name": "PROM COUNSELORS",
            "description": `Consejeros Vocacionales, Tutorías para SAT, ACT, 
            TOEFL, ibt, TOEFL pbt, IELTS. Aplicaciones a Universidades en el 
            extranjero`,
            "phone": "+507 6304 4330",
            "email": "chris@prom.com.pa",
            "web": "www.prom.com.pa",
            "address": "Innova 109, No. 12"
        },
        {
            "name": "PMI - PROJECT MANAGEMENT INSTITUTE CAPÍTULO DE PANAMÁ",
            "description": `Asociación de profesionales que realiza certificaciones 
            en gestión de proyectos en Panamá`,
            "phone": "+507 306 3169",
            "email": "administracion@pmi-panama.org",
            "web": "www.pmi-panama.org",
            "address": "Innova 104, Ofic. 21"
        },
        {
            "name": "ROSA CREATIVA",
            "description": `Especialista en diseñar y crear experiencias de 
            marca, eventos corporativos, stands y visual merchandising`,
            "phone": "+507 6675 9024",
            "email": "hola@rosacreativa.com",
            "web": "www.rosacreativa.com",
            "address": "Innova 109, No. 7"
        },
        {
            "name": "SCHOOL MARKETING DIGITAL",
            "description": `Centro de formación en competencias digitales 
            mediante talleres online y presenciales`,
            "phone": "+507 6220 8563",
            "email": "aminta@epayschool.com",
            "web": "www.schoolmarketingdigital.com",
            "address": "Innova 109, No. 21"
        },
        {
            "name": "SMARTCOM",
            "description": `Comunicación digital, storytelling, actividades 
            BTL, eventos corporativos, capacitación ejecutiva y marketing 
            digital`,
            "phone": "+507 6761 0796",
            "email": "vhernandez@smartcomcorp.com",
            "web": "www.smartcomcorp.com",
            "address": "Innova 104, Ofic. 24"
        },
        {
            "name": "SOCIAL MEDIA CO5",
            "description": `Estrategia de marketing digital, e-commerce, 
            auditorias de marketing digital, marca personal, publicidad 
            online, plan de manejo de crisis online`,
            "phone": "+507 306 3116",
            "email": "coach@socialmediaco5.com",
            "web": "www.socialmediaco5.com",
            "address": "Innova 104, Ofic. 10"
        },
        {
            "name": "TELENTIA",
            "description": `Asesoría sobre plan y modelo del negocio, 
            apoyamos a emprendedores en sus primeros pasos`,
            "phone": "+507 6805 0805",
            "email": "carlos@talentia.net",
            "web": "www.talentia.net",
            "address": "Innova 109"
        },
        {
            "name": "TALENTO TRAINING",
            "description": `Consultoría en gestión de procesos de recursos 
            humanos y atención al cliente mediante talleres, cursos y 
            seminarios`,
            "phone": "+507 6675 8972",
            "email": "yariela@talentotraining.com",
            "web": "www.talentotraining.com",
            "address": "Innova 109, No. 25"
        },
        {
            "name": "TARA CHIAL",
            "description": `Diseñadora de Joyas`,
            "phone": "",
            "email": "info@tarachial.com",
            "web": "www.tarachial.com",
            "address": "Innova 109, Ofic. 3"
        },
        {
            "name": "TERRADATA",
            "description": `Sistema de recolección de data de bienes y 
            raíces`,
            "phone": "+507 6090 3062",
            "email": "mapasepasa@gmail.com",
            "web": "",
            "address": "Innova 109, No. 19"
        },
        {
            "name": "THE KEY OF COMMUNICATION",
            "description": `Desarrollo habilidades de comunicación para la 
            expresión de la creatividad, ambientes de mayor paz y cohesión 
            social`,
            "phone": "+507 6283 4729",
            "email": "markel@thekeycomm.com",
            "web": "www.thekeycommunications.com",
            "address": "Innova 109, No. 7"
        },
        {
            "name": "TOO EASY TRADING",
            "description": `Plataforma que facilita el comercio global con la 
            comercialización de materias primas`,
            "phone": "+507 6203 6138",
            "email": "ceo@tooeasytrading.com",
            "web": "www.tooeasytrading.com",
            "address": "Innova 109"
        },
        {
            "name": "TUTOREZ",
            "description": `Plataforma online donde encontrarás tutores 
            según tus necesidades de una manera segura y confiable`,
            "phone": "+507 6103 7811",
            "email": "info@tutorez.com",
            "web": "www.tutorez.com",
            "address": "Innova 109"
        },
        {
            "name": "YABT",
            "description": `Young Americas Business Trust, es una organización 
            internacional sin fines de lucro, que promueve el desarrollo social 
            y económico de los jóvenes alrededor del mundo`,
            "phone": "+507 6614 6770",
            "email": "yabt_panama@myybiz.net",
            "web": "www.yabt.net",
            "address": "Innova 104, Ofic. 26"
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