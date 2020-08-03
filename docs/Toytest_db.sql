/*Creación de DB*/
DROP DATABASE IF EXISTS DHToys_db;
CREATE DATABASE DHToys_db CHARACTER SET utf8 COLLATE utf8_general_ci;
USE DHToys_db;

/*Creación de Tablas*/
CREATE TABLE categories_users (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(5) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	lastName VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	avatar VARCHAR(255) NOT NULL,
    idCategoryUser INT,
    status BOOLEAN,
    phoneNumber INT,
    country VARCHAR(255),
	PRIMARY KEY (id),
    FOREIGN KEY (idCategoryUser) REFERENCES categories_users(id)
);

CREATE TABLE categories_products (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    price FLOAT,
    age INT,
    idCategoryProduct INT,
    status BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (idCategoryProduct)
		REFERENCES categories_products(id)    
);

CREATE TABLE orders_status (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT NOT NULL,
	description TEXT,
    amount FLOAT,
    idStatus INT,
    idUser INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idStatus) REFERENCES orders_status(id),
    FOREIGN KEY (idUser) REFERENCES users(id)
);

CREATE TABLE orders_products (
	id INT AUTO_INCREMENT NOT NULL,
    idProduct INT,
    idOrder INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idProduct) REFERENCES products(id),
    FOREIGN KEY (idOrder) REFERENCES orders(id)
);

/*Insertando Registros*/

/*Registros de la tabla categories_products*/
INSERT INTO categories_products (name) VALUES 
('Aire Libre'),
('Bebes'),
('Bloques y Construcción'),
('Didácticos'),
('Figuras de Acción'),
('Gift Cards y Listas de Cumple'),
('Juegos de Mesa'),
('Juguetes'),
('Muñecas'),
('Peluches'),
('Vehículos');

/*Registros de la tabla products*/

INSERT INTO orders_status(name) VALUES
	('Pendiente'),
    ('Aprobado'),
    ('Rechazado'),
    ('Cancelado');

INSERT INTO products (name, description, image, price, age, idCategoryProduct, status) VALUES
    ('Batman','Figura coleccionable de Batman. Muñeco articulado de exelente material y sin baterías, mide aproximadamente unos 20 cm de alto.','batman.jpg', 1500, 4, 5, true),
	('Buzz Lightyear','Figura coleccionable de Buzz Lightyear. Basada en la pelicula Toy Story , coleccionable y sin baterías, mide aproximadamente unos 20 cm de alto. ', 'buzz.jpg', 1500, 3, 5, true),
    ('Woody','Figura coleccionable de Woody. Basada en la pelicula Toy Story , coleccionable y sin baterías, mide aproximadamente unos 20 cm de alto.','woody.jpg',2000, 3, 5, true),
    ('Lego Avengers','Juguete de construcción LEGO® Marvel Agengers: disfruta de armar tu propio robot Avengers uniendo todas las piezas que incluye este juguete. ', 'legoAvengers.jpg', 4000, 8, 3, true),
    ('LEGO Thanos','Juguete de construcción LEGO® Marvel Agengers (Thanos): disfruta de armar tu propio Thanos Avengers uniendo todas las piezas.', 'legoThanos.jpg', 4500, 6, 3, true),
    ('LEGO IronMan','Juguete de construcción LEGO® Marvel Agengers (Iron Man): disfruta de armar tu propio Iron Man Avengers.', 'legoIronMan2.jpg', 3500, 7, 3, true),
    ('Pelota Umbro','Exterior 100% poliuretano, sin costuras termosellado para una trayectoria más predecibl. Cámara de butilo', 'pelota.jpg', 2000, 3, 1, true),
    ('Pelota Dolphin','Exterior 100% poliuretano, sin costuras termosellado para una trayectoria más predecibl. Cámara de butilo', 'pelota1.jpg', 2700, 3, 1, true),
    ('Rubik 3x3','Cubo de rubik, con excelente corte de esquina, ultra lubricado para una agradable experiencia de giro sin interbloqueos.', 'rubick1.jpg', 800, 7, 8, true),
    ('Barbie','Disfruta de la Barbie Ciclista, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras.', 'barbie5.jpg', 1500, 3, 9, true),
    ('Lego Builder City','¡Rescata las hamburguesas! El letrero de Lego City Burger Bar está en llamas y el propietario necesita tu ayuda. Sujete el tanque de oxígeno, súbase al camión de bomberos y diríjase a la barra de hamburguesas mientras su compañero de bomberos corre hacia adelante en su motocicleta. Cuando llegues, apunta la bomba y comienza a combatir el fuego. ¿Puedes apagarlo antes de que la tienda de hamburguesas se queme? ¡Y no se olvide de apagar el basurero en llamas!', 'Lego_Builder_City_5_2.png', 1357, 5, 3, true),
    ('Lego Duplo Frozen','Este lindo juego de construcción LEGO DUPLO Princess Elsa y Olafs Ice Party (10920) con grandes ladrillos para niños pequeños ofrece un mundo de juego y posibilidades educativas. Los niños en edad preescolar pueden representar una variedad de escenarios, desde una fiesta de té para esconderse y buscar entre los bloques de hielo, que desarrollan su conciencia creativa y visual-espacial. Se relacionan con Elsa y Olaf, por lo que el juego de roles estimula el desarrollo emocional. Cada pieza es fácil de levantar y colocar para las manos pequeñas, por lo que los niños pueden reorganizar el set para crear sus propias historias, ideal para la imaginación y las habilidades motoras finas. Estos encantadores juegos para armar combinan temas icónicos, escenarios familiares, personajes conocidos y ladrillos para niños pequeños para estimular el desarrollo de los niños en edad preescolar con diversión creativa. El juguete ensamblado icehouse mide más de 3 (12 cm) de altura. Contiene 17 piezas.', 'Lego_Frozen_2.png', 4186, 2, 3, true),
    ('LEGO Friends','Ensillarse durante un día explorando el bosque a caballo. Los amigos de Lego, Mia y Emma, ​​llevan a Bianca al bosque para hacer ejercicio. Ayúdelos a cargar el remolque con accesorios para caballos, luego enganche a MiaS Cool 4X4 Buggy y estarán listos para comenzar. En el bosque, quítate la manta BiancaS y métete la silla de montar para que Mia pueda dar un paseo por los árboles. Mantenga sus ojos abiertos para las criaturas del bosque. ¿Que es eso? ¡Es un conejito que viene a saludar!', 'Lego_Friends_6_1.png', 4449, 2, 3, true),
    ('LEGO City Sky Police Jet Patrol','¡Súbete al avión de policía y patrulla las calles de la ciudad de Lego desde arriba! Espera, ¿qué está haciendo ese ladrón con la caja de seguridad? ¡Gira el reflector, brilla en el cayado y desciende para detenerlo antes de que se vaya! ¡Es otro día emocionante en la ciudad de Lego!', 'Lego_city_4_1.png', 1831, 4, 3, true),
    ('LEGO City Fire Plan','¡Únete al equipo de bomberos de Lego City y ayuda a defender la fauna local! Un incendio forestal ha comenzado en los bosques cercanos. Súbete al avión para combatir las llamas desde arriba, mientras que el bombero de respuesta en tierra se apresura a combatir el fuego abajo. ¡Mira, hay una mofeta indefensa atrapada debajo de ese árbol en llamas! Coge tu equipo de humo y dirígete para rescatar al bicho. ¿Lo lograrás a tiempo? ¡Otro día emocionante para The Fire Plane Crew!', 'Lego_city_FirePlane_6_2.png', 4837, 6, 3, true),
    ('LEGO Creator Sunset Track Racer','Zoom alrededor del circuito de carrera con el Sunset Track Racer, con un esquema de color naranja brillante, blanco y azul oscuro, carrocería aerodinámica con grandes tomas de aire, parabrisas redondeado y tintado, faros polarizados, motor visible montado en la parte trasera, alerón trasero grande y suelo -Gripping Neumáticos. Eche un vistazo al diseño de baja fricción y eje cruzado y levante el techo para acceder a la cabina. ¡Luego toma tu lugar en la línea de salida y prepárate para competir! Cuando hayas terminado, reconstruye este modelo Lego Creator 3In1 para crear un auto de carreras clásico descapotable o sube a las olas a bordo de un potente bote de velocidad.' ,'Lego_Builder_City_5.png', 2843, 5, 3, true),
    ('LEGO DUPLO Super Heroes Super Heroes Lab ','Estimule la creatividad e inspire la imaginación con este set de construcción LEGO DUPLO Super Heroes Lab (10921) para niños pequeños. ¡Los personajes populares de Marvel Avengers y los equipos y vehículos geniales se unen para crear un juego de desarrollo lleno de diversión! Los niños pequeños pueden divertirse con los juguetes Iron Man, Spider-Man y Capitán América en el laboratorio Iron Mans. ¡Usando una grúa, un plato giratorio, una llave y un panel de control, los pequeños superhéroes pueden arreglar la motocicleta del Capitán América, levantar y mover cargas pesadas y tirar de la figura de Spider-Man para un divertido paseo detrás de la motocicleta! Y, si bien los niños en edad preescolar están ocupados divirtiéndose con este colorido juguete de superhéroes de Marvel, también están desarrollando su pensamiento cognitivo, razonamiento espacial, creatividad y habilidades motoras finas. El juguete de laboratorio superheores mide más de 5 (14 cm) de altura, 2 (6 cm) de ancho y 3 (8 cm) de largo. El juguete de la grúa mide más de 3 (8 cm) de altura, 5 (13 cm) de largo con brazo, 2 (6 cm) de ancho. Contiene 29 piezas.' ,'Lego_MarvelSuperHero_2_1.png', 2957, 2, 3, true),
    ('LEGO Technic Rescue Helicopter','Realiza misiones de rescate heroico con el helicóptero de rescate Lego Technic. Este modelo realista viene con un esquema de colores rojo, blanco y negro y una gran variedad de características y funciones realistas. Gire los rotores, abra las puertas laterales y traseras, y opere el cabrestante para bajar la camilla de rescate ... ¡Es como la cosa real! Reconstruya este conjunto para crear un plano conceptual futurista.', 'Lego_Technic_8_1.png', 1172, 8, 3, true),
    ('LEGO Star Wars Duel on Mustafar','¡Recrea el memorable Duelo de Anakin Skywalker y Obi-Wan Kenobis en Mustafar de Star Wars: La venganza de los Sith con este juego de construcción LEGO Star Wars (75269) lleno de acción para niños! La mina Mustafarian para construir tiene plataformas deslizantes y giratorias para las 2 minifiguras que manejan el sable de luz para luchar. El modelo de construcción también se despliega y tiene una función de explosión de lava fresca para inspirar aventuras ilimitadas. Los niños pueden usar Instrucciones PLUS, disponible dentro de la aplicación gratuita LEGO Life, para permitirles acercarse, rotar y visualizar la mina mientras construyen la cosa real. Desde 1999, el Grupo LEGO ha estado creando versiones construidas con ladrillos de naves estelares, vehículos, ubicaciones y personajes icónicos del universo de Star Wars, que son excelentes ideas de regalos para los fanáticos de todas las edades. La mina Mustafarian mide más de 5 (14 cm) de alto, 4 (12 cm) de ancho y 4 (12 cm) de profundidad. Contiene 208 piezas.', 'Lego_StarWars_7_1.png', 2139, 7, 3, true),
    ('LEGO Minecraft The Panda Nursery','El set de construcción LEGO Minecraft Panda Nursery (21158) da vida a las aventuras de los juegos de computadora pandas, brindando a los niños una experiencia de juego auténtica y práctica de Minecraft en el mundo real. ¡Los niños de 7 años en adelante pueden continuar sus aventuras en línea de Minecraft en un entorno físico con los adorables y adorables pandas nuevos para enero de 2020! Pueden cuidar y entretener al bebé panda, preparar el edificio de la guardería y la cama de la azotea donde duerme el cachorro juguetón, y proporcionar comida para todos. ¡Hay mucho bambú para que los pandas mordisqueen y Alex está aquí con un delicioso pastel de juguete! El juguete para niños panda mide más de 7 (19 cm) de largo, 3 (9 cm) de alto y 3 (8 cm) de ancho. Contiene 204 piezas.', 'Lego_Minecraft_7_1.png', 3662, 7, 3, true),
    ('Playmobil 123 Front Loader','El cargador frontal Playmobil 123 cuenta con una pala de trabajo en la parte delantera. El conjunto incluye un trabajador Playmobil 123 y una carga pesada para levantar. Playmobil 123 Front Loader 6775 es adecuado para mayores de 18 meses.', 'Playmobil_3_1.png', 3162, 1, 8, true),
    ('Playmobil 1.2.3 Tractor with Trailer','El Tractor Playmobil 1.2.3 con Trailer 6964 es el vehículo perfecto para cualquier trabajo agrícola que necesite realizar. La pala frontal se puede mover hacia arriba y hacia abajo para recoger cualquier material que necesite moverse. El remolque se puede inclinar para cargar y descargar fácilmente.', 'PM_Tractor_3_1.png', 2744, 1, 8, true),
    ('Playmobil 123 Ladder Unit Fire Truck','El Playmobil 123 Ladder Unit Fire Truck 6967 es el vehículo de emergencia perfecto para manos pequeñas. La unidad de escalera se puede girar 360 grados y se mueve hacia arriba y hacia abajo en tres posiciones. El oficial de bomberos puede sentarse en la cabina del conductor, al final de la plataforma de la escalera y puede asegurarse en cada escalón de la escalera listo para llevar a cabo la próxima gran emergencia.', 'PM_LADDER_3_1.png', 3057, 1, 8, true),
    ('Playmobil 123 Noahs Ark','Playmobil 123 Noahs Ark viene con 5 animales diferentes, todos en pares, y por supuesto, Noah y su esposa. El arca puede flotar en el agua y tiene una plataforma extraíble para almacenar los animales. Hay un asa de transporte integrada en la parte superior para facilitar el transporte. Playmobil 13 Noahs Ark 6765 es apto para mayores de 18 meses.', 'PM_ARKS_NOE_3_1.png', 2995, 1, 8, true),
    ('Playmobil 123 Recycling Truck','El camión de reciclaje Playmobil 123 presenta una sección trasera basculante con un clasificador de formas. El set incluye una figura Playmobil 123 y dos artículos para reciclar. El Playmobil 123 Recycling Truck 6774 es apto para mayores de 18 meses.', 'PM_RECICLE_TRUCK_3_1.png', 3560, 1, 8, true),
    ('Harry Potter Gryffindor Crest A5 Notebook','A los fanáticos de Harry Potter viejos y jóvenes les encantará esta adorable colección de artículos de papelería temáticos de Harry Potter. El cuaderno Harry Potter Gryffindor Crest A5 presenta insignias de sus personajes favoritos de Hogwarts. Alohamora uno de estos geniales cuadernos', 'HP_1.png', 3572, 3, 4, true),
    ('Harry Potter Premium Backpack','La mochila Harry Potter Premium cuenta con hebillas magnéticas, 2 bolsillos laterales, bolsillo para computadora portátil, bolsillo delantero, asas y correas ajustables. Esta mochila está hecha de poliéster premium de 900 deniers, por lo que es lo suficientemente resistente como para contener todos tus elementos mágicos, incluso cuando estás luchando contra Voldemort o entrando en Gringotts. Esta gama de alta calidad de ropa y artículos de papelería de Harry Potter, sin duda, te convertirá en la bruja o mago mejor vestido en Hogwarts (o la aburrida escuela muggle a la que tienes que ir ...).', 'HP_BAG_1.png', 3680, 5, 4, true),
    ('Harry Potter A5 Notebook','¿Por qué, por qué, por qué, la verdadera escuela no es como Hogwarts? Promete tu lealtad a la escuela con la que solo los muggles solo podemos soñar, con este Cuaderno A5 de Harry Potter con un diseño de Harry Potter, ¡nos encanta y, si eres fanático de Harry Potter, también lo harás!', 'HP_BOOK_1.png', 4426, 3, 4, true),
    ('Harry Potter Golden 3D Snitch Mug','Si usted es un padre que compra esto para usted o para sus compañeros mágicos, entonces ya conoce los inmensos poderes que se encuentran en todas las bebidas con cafeína: puntos adicionales que se le otorgan si su bebida aún está caliente en el punto de consumo. ¡Combina esto con una taza de snitch 3D de Harry Potter Golden y tendrás combustible para padres como ningún otro!', 'HP_GOLDEN_SNITCH.png', 2238, 8, 5, true),
    ('Harry Potter Golden Snitch','La snitch dorada es muy rápida y casi imposible de ver, ¡a menos que seas Harry Potter porque atraparlo está en su sangre! Consigue la snitch o muere en el intento. Tal es el valor de la snitch dorada alada que todo buscador de quidditch debe intentar capturar. ¡Coge el tuyo y embolsad 150 puntos fáciles!', 'HP_SNITCH.png', 3459, 8, 5, true),
    ('Mini Thanos','Juguete de construcción LEGO® Marvel Agengers (Thanos): disfruta de armar tu propio Thanos Avengers uniendo todas las piezas.', 'legoThanos3.jpg', 1548, 5, 3, true),
    ('Lego Creator Car','Auto,super auto, mucha velocidad. Disfruta armando tu LEGO® Creator auto super veloz, super divertido , deja que tu imaginacion lo haga.' ,'Lego_Creator_7_2.png', 2376, 7, 3, true),
    ('LEGO Technic','Zoom Around The Race Circuit With The Sunset Track Racer, Featuring A Fresh Bright Orange, White And Dark Blue Color Scheme, Aerodynamic Bodywork With Large Air Intakes, Rounded And Tinted Windshield, Tinted Headlamps, Visible Rear-Mounted Engine, Large Rear Spoiler And Ground-Gripping Tires. Check Out The Low-Friction, Cross-Axle Design And Lift The Roof To Access The Cockpit. Then Take Your Place At The Start Line And Get Ready To Race! When YouRe Done, Rebuild This Lego Creator 3In1 Model To Create An Open-Top Classic Race Car Or Take To The Waves Aboard A Powerful Speed Boat.', 'Lego_Technic_8_2.png', 2503, 8, 3, true),
    ('Barbie 1','Disfruta de la Barbie 1, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras. Siempre contigo.', 'barbie1.jpg', 4532, 3, 9, true),
    ('Barbie 2','Disfruta de la Barbie 2, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie2.jpg',3571, 3, 9, true),
    ('Barbie 3','Disfruta de la Barbie 3, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie3.jpg',3000, 3, 9, true),
    ('Barbie 4','Disfruta de la Barbie 4, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie4.jpg',2300, 3, 9, true),
    ('Barbie 5','Disfruta de la Barbie 5, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie6.jpg',2000, 3, 9, true),
    ('Barbie 6','Disfruta de la Barbie 6, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie7.jpg',2500, 3, 9, true),
    ('Barbie 7','Disfruta de la Barbie 7, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie8.jpg',2700, 3, 9, true),
    ('Barbie 8','Disfruta de la Barbie 8, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie9.jpg',3000, 3, 9, true),
    ('Barbie 9','Disfruta de la Barbie 9, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie10.jpg',2800, 3, 9, true),
    ('Barbie 10','Disfruta de la Barbie 10, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie11.jpg',2900, 3, 9, true),
    ('Barbie 11','Disfruta de la Barbie 11, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie12.jpg',2800, 3, 9, true),
    ('Barbie 12','Disfruta de la Barbie 12, cuenta con una bici todo terreno, y un perro que te acompaña en tus travesuras','barbie13.jpg',2800, 3, 9, true);

/*Registros de la tabla categories_users*/
INSERT INTO categories_users (name) VALUES 
('Admin'),
('User');

/*Registros de la tabla users*/
INSERT INTO users (name, lastName, email, password, avatar, idCategoryUser, status, phoneNumber, country)VALUES
    ('Francisco','Olmos','francisco.olamos@unxdigital.com','$2b$10$6I7l9usDeFNUQPh9SZkxoO7.EBMRvOmlC9B.EqjilW1cRpBeYSHE.','abaddon.gif',1, true, null, null),
    ('Francisco','Olmos','francisco.olmos.ubp@gmail.com','$2b$10$mU8hVDOcuJBOgSqvYlR.y.dc.rf4FzOkRRloNBcyvE/bhpylcH1ky','abaddon.gif',1, true, null, null),
    ('Ignacio','Quiroga','iquiroga@grupoprominente.com','$2b$10$AlJAiQV7k6U3FXNBOJ2uzeI5BndrBr8/B6wKQZbTNAlS13WiFHnIG','walterwhite-avatar.jpg',1, true, null, null),
    ('Eduardo','Bedini','edu.bedini@gmail.com','$2b$10$0ocEwjzth1yWo2fWLEQEee3kzdjUKV.9P1ZYSOxX.5j28gpMD1Clm','el ojo.jpg',1, true, null, null),
    ('javier','Bedini','ejbedini@gmail.com','$2b$10$4QmuCEcuGZyX7MXD7hcRTecR1hD783vyGnhuo.eVkf9O9tWMbooQu','el ojo.jpg',2, true, null, null),
    ('Usuario','Prueba','usuarioDePrueba@gmail.com','$2b$10$6bBlAMH46EykEc25RUK67ebIxDcGprTSTcB1Tbx0mLW4HFwzM8BRy','userImage.png',2, true, null, null),
    ('francisco1','olmitos','francisco.olmosaa@unxdigital.com','$2b$10$H3w8U.GZozW8plVPDn2E9OeAcZtJJY.13rEHv7ajk.hm9sryFV5K2','abaddon.gif',2, true, null, null),
    ('francisco','olmos','francisco.olmos.ubp1@gmail.com','$2b$10$7jv2qb5CzN.Xv798ao36xuBCNJ0NN24ECJOV.54L5MqCXpELqZoA6','abaddon.gif',2, true, null, null);
