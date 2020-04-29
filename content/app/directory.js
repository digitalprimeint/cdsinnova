function DirectorioCentroInnovacion() {
    this.init = function () {

        $(document).ready(function () {

            $('#searchText').on('input', function (e) {
                var searchText = $(this).val();
                appDir.searchByText(searchText);
            });

            $(".btn").click(function (e) {
                e.preventDefault();

                var searchText = $(this).text();
                appDir.searchByFirstLetter(searchText);
            });

            appDir.addDataToPlugdoMiembroElement();

        });
    }

    this.addDataToPlugdoMiembroElement = function () {
        var model = {
            "css": "row",
            "miembros": this.data
        };
        view.setInitialData("plugdo-miembro", "miembros", model);
        view.load();
    }

    this.data = [{
            "name": "ADELANTOS",
            "description": "APP móvil de préstamos personales",
            "phone": "+507 216 9090",
            "email": "simon@adelantos.com.pa",
            "web": "https://www.adelantos.com.pa",
            "address": "Innova 109, Ofic. A2"
        },
        {
            "name": "ALCANZZA",
            "description": `Asesoría contable`,
            "phone": "+507 6725 3793",
            "email": "info@alcanzza.com",
            "web": "",
            "address": "Innova 109, No.6"
        },
        {
            "name": "AIESEC",
            "description": `Plataforma global más grande del mundo que desarrolla 
                          liderazgo en jóvenes a través de intercambio y experiencias 
                          de equipo`,
            "phone": "+507 306 3130",
            "email": "panama@aiesec.net",
            "web": "https://www.aiesec.org.pa",
            "address": "Innova 104, Ofic. 15 y 16"
        },
        {
            "name": "ALEPH CONSULTING GROUP",
            "description": `Consultora dedicada a ayudar a crear estrategias comerciales diferenciadas e
                        incorporar disciplinas contables y financieras.`,
            "phone": "+507 6671 1206",
            "email": "info@alephco.net",
            "web": "https://www.alephco.net",
            "address": "Innova 109"
        },
        {
            "name": "APOLO LAB",
            "description": `Desarrollo de tecnologías móviles en el sector de la salud. Prescripción electrónica 
                          de medicamentos mediante un app`,
            "phone": "+507 6675 3077",
            "email": "hanz.ardon@apololab.com",
            "web": "https://www.es-apololab.strikingly.com",
            "address": "Innova 109, No.11"
        },

        {
            "name": "AYUDINGA",
            "description": `Plataforma de educación digital que busca explicarle a
            las personas materias física, química y matemáticas de una forma 
            totalmente diferente a la tradicional`,
            "phone": "+507 6920 4843",
            "email": "info@ayudinga.com",
            "web": "https://www.ayudinga.com",
            "address": "CdS - Casa Ayudinga, Edificio: 137-A"
        },

        {
            "name": "BLUETIDE WEB CONSULTING",
            "description": `Desarrollo y Diseño Web, Mantenimiento Wordpress, 
             SEO y SEM`,
            "phone": "+507 388 4371",
            "email": "contacto@bluetideconsulting.com",
            "web": "https://www.bluetideconsulting.com",
            "address": "CdS - Edificio 237, Piso 3, Local D"
        },

        {
            "name": "OCM CORP",
            "description": `Asesoría Legal a Emprendedores`,
            "phone": "+507 6645 4443",
            "email": "info@ocmcorp.com",
            "web": "https://www.ocmcorp.com",
            "address": "Innova 109, No. 1"
        },
        {
            "name": "BOWMAN 507 - Tiro con Arco",
            "description": `Clases, entrenamiento o práctica libre de tiro 
                             con arco y actividades grupales para arquería, venta y mantenimiento 
                             de equipos`,
            "phone": "+507 6874 6364",
            "email": "bowmanpty507@gmail.com",
            "web": "https://www.bowman507.com",
            "address": "CdS - Edificio 234"
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
            "web": "https://www.capatec.org.pa",
            "address": "Innova 104, Ofic. 27"
        },
        {
            "name": "CAMITYPE STUDIO",
            "description": `Diseño Industrial, Lettering y Muralismo`,
            "phone": "+507 6234 0686",
            "email": "camilaborreoa@gmail.com",
            "web": "https://www.camitype.tumblr.com",
            "address": "Innova 104"
        },
        {
            "name": `CENTRO REGIONAL PARA LATINOAMÉRICA Y EL CARIBE DEL PROGRAMA DE LAS NACIONES UNIDAS 
                    PARA EL DESARROLLO - PNUD `,
            "description": `Asesoramiento y apoyo a 25 oficinas de América Latina y el Caribe ofreciendo 
                            servicios accesibles, apoyo técnico y una fuente confiable de conocimientos, 
                            experiencias y recursos de expertos y profesionales`,
            "phone": "+507 302 4500",
            "email": "rcpanama@undp.org",
            "web": "",
            "address": "CdS - Edificio 128, Innova 104"
        },
        {
            "name": "DARIEN TECHNOLOGY",
            "description": `Smart Apps, Ecosistemas Web y Móviles`,
            "phone": "+507 395 4122",
            "email": "contact@darient.com",
            "web": "https://www.darient.com",
            "address": "Innova 104, Ofic. 3B"
        },
        {
            "name": "Digital Media LAB",
            "description": `Estrategias digitales corporativas, investigación, desarrollo e innovación en tecnología, web, social media y transformación digital.`,
            "phone": "+507 6525-5454",
            "email": "info@digitalmedialab.tv",
            "web": "https://www.digitalmedialab.tv/",
            "address": "Innova 109"
        },
        {
            "name": "EDUTEK",
            "description": `Soluciones en Tecnología Educativas, STEM y 
                            Robótica`,
            "phone": "+507 236 9129",
            "email": "acarrizo@edutek.com.pa",
            "web": "https://www.edutek.com.pa",
            "address": "Innova 104, Ofic. 1"
        },
        {
            "name": "ENFINITY",
            "description": `Ciberseguridad, Consultoría y Programas de 
          Concientización`,
            "phone": "+507 6504 6789",
            "email": "hector@enfinity.io",
            "web": "https://www.enfinity.com.pa",
            "address": "Innova 109, No. 14"
        },

        {
            "name": "FAB LAB ECOSTUDIO",
            "description": `Espacio educativo basado en la tecnología, pensamiento, 
          diseño y ciencias para estimular la cultura creativa mediante acceso a 
          herramientas de fabricación digital y manual`,
            "phone": "+507 6783 3433",
            "email": "matthewhotsko@gmail.com",
            "web": "https://www.ecostudio.ngo",
            "address": "Galera 245"
        },
        {
            "name": "FERNANDO CASSANI",
            "description": `Agencia de diseño digital, imagen corporativa, 
          diseño web, diseño gráfico y social marketing`,
            "phone": "+4477 1725 2945",
            "email": "info@brandinnpty.com",
            "web": "https://www.brandinnpty.com",
            "address": "Innova 109, No. 3"
        },
        {
            "name": "FITWAVE",
            "description": `Herramientas tecnológicas de desarrollo deportivo.`,
            "phone": "+507 6998 3834",
            "email": "info@fitwave507.com",
            "web": "https://www.fitwave507.com",
            "address": "Innova 104"
        },
        {
            "name": "FLAMINGO CAFÉ by Pan y Canela",
            "description": `Somos una cafetería de especialidad, ofrecemos 
                            pastelería, catering, rodeados en un ambiente artístico creativo`,
            "phone": "+507 317 1122",
            "email": "panycanela@panycanela.com",
            "web": "https://www.panycanelacafe.com",
            "address": "Innova 104"
        },

        {
            "name": "GRUPO FRACTAL",
            "description": `Importación y venta de maquinaria industrial`,
            "phone": "+507 6826 3150",
            "email": "josefina@grupo-fractal.com",
            "web": "https://www.grupo-fractal.com",
            "address": "Innova 109"
        },
        {
            "name": "HAUZD",
            "description": `Solución de ventas para proyectos de Bienes 
          Raices, mediante tecnología 3D interactiva`,
            "phone": "+507 6674 9863",
            "email": "info@hauzd.com",
            "web": "https://www.hauzd.com",
            "address": "Edificio 235, CdS - Innova 109, No. 14"
        },
        {
            "name": "ICC - INTERNATIONAL CHAMBERS OF COMMERCE",
            "description": `Cámara de Comercio Internacional - Capítulo 
                            de Panamá`,
            "phone": "+507 306 3133",
            "email": "kturner@panacamara.org",
            "web": "https://www.iccpanama.org",
            "address": "Innova 104, Ofic. 14"
        },
        {
            "name": "iGROW SUSTAINABLE INDUSTRIES",
            "description": `Servicios de asesoría ambiental, topografías, 
          hidrogeología, sostenibilidad, hidroponía, confección de 
          uniformes y ropa técnica outdoors`,
            "phone": "+507 6280 0643",
            "email": "contactenos@igrow-si.com",
            "web": "https://www.igrow-si.com",
            "address": "Innova 109, No 18"
        },
        {
            "name": "ITIS INTERNATIONAL",
            "description": `Desarrollamos herramientas de tecnología para 
                            automatizar los procesos críticos de tu negocio`,
            "phone": "+507 6634 4634",
            "email": "jose.siso@itisla.com",
            "web": "https://www.itisla.com",
            "address": "Innova 109, No 16"
        },
        {
            "name": "ISSATEC",
            "description": `Ofrecemos plataformas tecnológicas para 
                             diferentes sectores`,
            "phone": "+507 6398 1289",
            "email": "maria.escobar@issatec.com",
            "web": "https://www.issatec.com",
            "address": "Innova 109"
        },
        {
            "name": "IVO TALENTS",
            "description": `Plataforma que conecta el talento artístico 
          con la industria`,
            "phone": "+507 6134 4220",
            "email": "yunai@ivotalents.com",
            "web": "https://www.ivotalents.com",
            "address": "Innova 109, No. 9"
        },
        {
            "name": "IIAFEC",
            "description": `Laboratorio de ideas que opera como espacio propulsor, aglutinados de conocimientos y experiencias investigativas en I+D+I.`,
            "phone": "+507 6974 8251",
            "email": "mmurai@iiafec.com",
            "web": "https://www.iiafec.com",
            "address": "Innova 109"
        },
        {
            "name": "INTECH IDEAS",
            "description": `Web development, blockchain solutions, devops.`,
            "phone": "+507 317 3132",
            "email": "Jose.llamas@intechideas.com",
            "web": "https://intechideas.com",
            "address": "CdS - Innova 109, Ofic. 4"
        },
        {
            "name": "JJ ESTRATEGIC COMMUNICATIONS",
            "description": `Ofrecemos servicios de interpretación y 
          divulgación en las comunicaciones científicas, relaciones 
          públicas, periodismo, marketing estratégico y digital`,
            "phone": "+507 6980 7399",
            "email": "jjestrategiccommunications@gmail.com",
            "web": "https://jjstrategiccommuni.wixsite.com/jjsc/quienes-somos",
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
            "web": "https://www.kingnova.com.pa",
            "address": "Innova 109"
        },
        {
            "name": "LAPGL",
            "description": `Plataforma ESPORT que permite al video jugador 
          competir desde la comodidad de su casa y ganar premios`,
            "phone": "+507 6406 3489",
            "email": "info@lapgl.com",
            "web": "https://www.lapgl.com",
            "address": "Innova 104, Ofic. 3A"
        },
        {
            "name": "LAURA BAKER STUDIO",
            "description": `Ilustradora, diseño de superficies, dibujo e 
          ilustración textil`,
            "phone": "+507 6982 2513",
            "email": "laura.baker.puentes@gmail.com",
            "web": "https://www.laurabakerstudio.com",
            "address": "Innova 109, No. 3"
        },
        {
            "name": "LEYGH - PHOTOGRAPHER",
            "description": `Fotógrafo creativo, marketing y diseñador`,
            "phone": "+(507) 6100 9968",
            "email": "hi@leygh.com",
            "web": "https://www.leygh.com",
            "address": "Innova 109"
        },
        {
            "name": "LIBELULA FRACTAL",
            "description": `Estudio de experimentación audiovisual, video 
                            mapping, realidad virtual e instalación interactiva`,
            "phone": "+507 6224 8403",
            "email": "libelulafractal@gmail.com",
            "web": "https://www.libelulafractal.com",
            "address": "Innova 104, Ofic. 28"
        },
        {
            "name": "LUNA LLENA PRODUCTIONS",
            "description": `Productora de eventos, talleres, festivales 
          culturales y familiares`,
            "phone": "+507 6670 6973",
            "email": "lunallenadetambores@gmail.com",
            "web": "https://www.lunallenadetambores.com",
            "address": "El Lunario Galera No. 215"
        },
        {
            "name": "MICROPOS SOFTWARE",
            "description": `Servicios tecnológicos, especializados en 
          sistemas de puntos de ventas y desarrollo de software a la 
          medida`,
            "phone": "+507 306 3700 ext 3606",
            "email": "jmiur@micropossoft.com",
            "web": "https://www.micropossoft.com",
            "address": "Innova 109"
        },
        {
            "name": "MEDIA RANK",
            "description": `Inteligencia de Redes Sociales, Minería de 
                             Datos, Análisis Estratégicos y Presentación de Data`,
            "phone": "+507 6981 2266",
            "email": "josh@mediarank.info",
            "web": "https://www.mediarank.info",
            "address": "Innova 109, No. 17"
        },
        {
            "name": "MULTITOOL STUDIO",
            "description": `Desarrollo de Video Juegos, Gamificación, 
          Tecnología VR y Mapeo 3D`,
            "phone": "+507 6757 2143",
            "email": "info@multitoolstudios.com",
            "web": "https://www.multitoolstudios.com",
            "address": "Innova 104, Ofic. 5"
        },
        {
            "name": "NECSIA SERVICES",
            "description": `Empresa de ciberseguridad, brindamos servicios 
          de auditoría, hacking ético, SOC/SIEM, Microsoft Office 365 
          Secure`,
            "phone": "+507 6318 7739",
            "email": "j.vega@necsia.es",
            "web": "https://www.necsia.com.pa",
            "address": "Innova 109, No. 2"
        },
        {
            "name": "OaOa",
            "description": `App móvil que te ayuda a regalar o pedir lo que 
          desees a través de tus redes sociales desde cualquier parte del
           mundo`,
            "phone": "+507 6151 4004",
            "email": "daniel.billingslea@gmail.com",
            "web": "https://www.oaoaweb.com",
            "address": "Innova 109"
        },
        {
            "name": "OCCIDENT ANIMATION",
            "description": `Estudio especializado en animación 3D y 2D. 
          Creamos contenido audiovisual para todas las industrias (cine, 
          tv, arquitectura, banca, tecnología y más)`,
            "phone": "+507 6674 0192",
            "email": "info@occidentanimation.com",
            "web": "https://www.occidentanimation.com",
            "address": "Innova 105, Ofic. 4 y 11"
        },
        {
            "name": "NORTE SERVICIOS INTEGRALES",
            "description": `Consultorías y capacitaciones en temas de marketing y servicio al cliente. Comunicación de marca, eventos corporativos, materiales promocionales, diseño gráfico e impresión.`,
            "phone": " +507 6030-7210",
            "email": " rbravo@nortepublicidad.com",
            "web": "https://www.nortepublicidad.com",
            "address": "CdS - Edificio 234"
        },
        {
            "name": "ONU | OHCHR",
            "description": `Sistema de Naciones Unidas, Derechos Humanos, 
          Oficina de Alto Comisionado`,
            "phone": "+507 306 3106 ext. 3577, 3181, 3578",
            "email": "crodriguez@ohchr.org",
            "web": "https://www.ohchr.org",
            "address": "Innova 104, Ofic. 17"
        },
        {
            "name": "PANAMA INTERPRETERS",
            "description": `Servicios de interpretación para eventos, 
          alquiler de equipo audiovisuales, livestreaming, filmación, 
          traducción de documentos y talleres de intérpretes`,
            "phone": "+507 392 8819",
            "email": "info@panamainterpreters.com",
            "web": "https://www.panamainterpreters.com",
            "address": "Innova 104, Ofic. 19"
        },
        {
            "name": "PETKII.COM",
            "description": `Plataforma web que conecta a dueños de mascotas con cuidadores.`,
            "phone": "+507 6314 1420",
            "email": "info@petkii.com ",
            "web": "https://petkii.com",
            "address": "Innova 109"
        },
        {
            "name": "CANAL DE EMPRESARIAS",
            "description": `Potencia el emprendimiento liderado por mujeres 
          a nivel nacional con herramientas que permiten el crecimiento 
          de sus proyectos, en una comunidad de más de 10 mil personas`,
            "phone": "+507 306 3106",
            "email": "empresarias@cdspanama.org",
            "web": "https://www.canalempresarias.org",
            "address": "Innova 104"
        },
        {
            "name": "PROGRAMA ENTER",
            "description": `Programa de formación práctica para emprendimientos
           start up`,
            "phone": "+507 306 3106",
            "email": "info@enterstartup.com",
            "web": "https://www.enterstartup.com",
            "address": "Innova 109"
        },
        {
            "name": "PROGRAMA DE INVERSIÓN START UP",
            "description": `Dedicado a invertir capital semilla en 
          emprendimientos innovadores`,
            "phone": "+507 306 3106",
            "email": "ccollazos@cdspanama.org",
            "web": "https://www.startups.ciudaddelsaber.org",
            "address": "Innova 104"
        },
        {
            "name": "PHOENIX DESIGN AID",
            "description": `Agencia Internacional de Comunicación y Diseño, 
          Identidad Visual, Infografías, Ilustraciones y otros`,
            "phone": "+507 6490 9359",
            "email": "lsa@phoenixdesignaid.com",
            "web": "https://www.phoenixdesignaid.com",
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
            "web": "https://www.plugdo.com",
            "address": "Innova 104, Ofic. 2A y 2B"
        },
        {
            "name": "PRAGMA",
            "description": `Desarrollo de soluciones tecnológicas, desarrollo 
          móvil, business intelligence, robotización, Devops, etc.`,
            "phone": "+507 6298 1546",
            "email": "daniel.osorio@pragma.com.co",
            "web": "https://www.pagma.com.co",
            "address": "Innova 104, Ofic. 22"
        },
        {
            "name": "PRAXIS – EDUCATIONAL CONSULTANTS",
            "description": `Desarrollo y evaluación de programas educativos 
          mediante capacitaciones, guines interpretativos y exhibiciones`,
            "phone": "+507 6564 4141",
            "email": "praxieducationalconsultants.ad@gmail.com",
            "web": "https://www.praxis-edu.com",
            "address": "Innova 109"
        },
        {
            "name": "PROM COUNSELORS",
            "description": `Consejeros Vocacionales, Tutorías para SAT, ACT, 
          TOEFL, ibt, TOEFL pbt, IELTS. Aplicaciones a Universidades en el 
          extranjero`,
            "phone": "+507 6304 4330",
            "email": "chris@prom.com.pa",
            "web": "https://www.prom.com.pa",
            "address": "Innova 109, No. 12"
        },
        {
            "name": "PM PARTNERS",
            "description": `Servicios de asesorías profesionales en el ámbito de los negocios y levantamientos de capital`,
            "phone": " +507 6717 4844",
            "email": "rpinochet@pmpartnerschile.com",
            "web": "https://www.pmpartnerschile.com",
            "address": " Innova 109"
        },
        {
            "name": "PMI - PROJECT MANAGEMENT INSTITUTE CAPÍTULO DE PANAMÁ",
            "description": `Asociación de profesionales que realiza certificaciones 
          en gestión de proyectos en Panamá`,
            "phone": "+507 306 3169",
            "email": "administracion@pmi-panama.org",
            "web": "https://www.pmi-panama.org",
            "address": "Innova 104, Ofic. 21"
        },
        {
            "name": "ROSA CREATIVA",
            "description": `Especialista en diseñar y crear experiencias de 
          marca, eventos corporativos, stands y visual merchandising`,
            "phone": "+507 6675 9024",
            "email": "hola@rosacreativa.com",
            "web": "https://www.rosacreativa.com",
            "address": "Innova 109, No. 7"
        },
        {
            "name": "SCHOOL MARKETING DIGITAL",
            "description": `Centro de formación en competencias digitales 
          mediante talleres online y presenciales`,
            "phone": "+507 6220 8563",
            "email": "aminta@epayschool.com",
            "web": "https://www.schoolmarketingdigital.com",
            "address": "Innova 109, No. 21"
        },
        {
            "name": "SMARTCOM",
            "description": `Comunicación digital, storytelling, actividades 
          BTL, eventos corporativos, capacitación ejecutiva y marketing 
          digital`,
            "phone": "+507 6761 0796",
            "email": "vhernandez@smartcomcorp.com",
            "web": "https://www.smartcomcorp.com",
            "address": "Innova 104, Ofic. 24"
        },
        {
            "name": "SOCIAL MEDIA CO5",
            "description": `Estrategia de marketing digital, e-commerce, 
          auditorias de marketing digital, marca personal, publicidad 
          online, plan de manejo de crisis online`,
            "phone": "+507 306 3116",
            "email": "coach@socialmediaco5.com",
            "web": "https://www.socialmediaco5.com",
            "address": "Innova 104, Ofic. 10"
        },
        {
            "name": "TELENTIA",
            "description": `Asesoría sobre plan y modelo del negocio, 
          apoyamos a emprendedores en sus primeros pasos`,
            "phone": "+507 6805 0805",
            "email": "carlos@talentia.net",
            "web": "https://www.talentia.net",
            "address": "Innova 109"
        },
        {
            "name": "TALENTO TRAINING CORP",
            "description": `Consultoría en gestión de procesos de recursos 
          humanos y atención al cliente mediante talleres, cursos y 
          seminarios`,
            "phone": "+507 6675 8972",
            "email": "yariela@talentotraining.com",
            "web": "https://www.talentotraining.com",
            "address": "Innova 109, No. 25"
        },
        {
            "name": "TARA CHIAL",
            "description": `Diseñadora de Joyas`,
            "phone": "",
            "email": "info@tarachial.com",
            "web": "https://www.tarachial.com/",
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
            "web": "https://thekeycommunications.com/",
            "address": "Innova 109, No. 7"
        },

        {
            "name": "WISY",
            "description": `Plataforma tecnológica que combina el poder del crowdsourcing, gamificación, datos e inteligencia artificial.`,
            "phone": "+507 317 2288",
            "email": "",
            "web": "",
            "address": "CdS - Edificio 235"
        },
        {
            "name": "TUTOREZ",
            "description": `Plataforma online donde encontrarás tutores 
          según tus necesidades de una manera segura y confiable`,
            "phone": "+507 6103 7811",
            "email": "info@tutorez.com",
            "web": "https://tutorez.com/",
            "address": "Innova 109"
        },

    ];

    this.searchByText = function (searchText) {
        var data = view.getData("miembros");
        var globalData = "";
        if (globalData == "") {
            globalData = JSON.stringify(data);
        } else {
            data = JSON.parse(globalData);
        }

        if (searchText !== "Todos") {
            var result = select("*")
                .from(this.data)
                .where(function (item) {
                    searchText = searchText.toLowerCase();
                    if (item.name.toLowerCase().search(searchText) != -1 ||
                        item.description.toLowerCase().search(searchText) != -1 ||
                        item.phone.search(searchText) != -1 ||
                        item.email.toLowerCase().search(searchText) != -1 ||
                        item.web.toLowerCase().search(searchText) != -1 ||
                        item.address.toLowerCase().search(searchText) != -1) {
                        return true;
                    }

                    return false;
                })
                .return();

            data.miembros = result;
        }
        view.setData("miembros", data);
        view.components.handler.sleep(100);
    }

    this.searchByFirstLetter = function (searchText) {
        var data = view.getData("miembros");
        var globalData = "";
        if (globalData == "") {
            globalData = JSON.stringify(data);
        } else {
            data = JSON.parse(globalData);
        }

        if (searchText !== "Todos") {
            var result = select("*")
                .from(this.data)
                .where(function (item) {
                    return item.name.substring(0, 1).toLowerCase() === searchText.toLowerCase();
                })
                .return();

            data.miembros = result;
        } else {
            data.miembros = this.data;
        }

        view.setData("miembros", data);
        view.components.handler.sleep(100);
    }
}

var appDir = new DirectorioCentroInnovacion();