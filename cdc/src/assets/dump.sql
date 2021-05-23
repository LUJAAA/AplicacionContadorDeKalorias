CREATE TABLE IF NOT EXISTS dietass(
    id INTEGER PRIMARY KEY AUTOINCREMENT,  /*cuidado con las comas xd */
    nombre_dieta TEXT, 
    calorias_total TEXT,
    comida TEXT,
    alimentoNombre TEXT,
    calorias TEXT,
    cantidad TEXT,
    fecha TEXT
);

<<<<<<< HEAD
/*INSERT or IGNORE INTO dietass(id, nombre_dieta, calorias_total,comida,alimentoNombre,calorias,cantidad,fecha) 
VALUES (0, 'Dieta1', '3000','Desayuno','pepsi','30','100','20/05/2021');
INSERT or IGNORE INTO dietass(id, nombre_dieta, calorias_total,comida,alimentoNombre,calorias,cantidad,fecha) 
VALUES (1, 'Dieta1', '3000','Desayuno','apple','20','10','20/05/2021');*/
=======
INSERT or IGNORE INTO dietass(id, nombre_dieta, calorias_total,comida,alimentoNombre,calorias,cantidad,fecha) 
VALUES (0, 'Dieta1', '3000','Desayuno','pepsi','30','100','20/05/2021');
INSERT or IGNORE INTO dietass(id, nombre_dieta, calorias_total,comida,alimentoNombre,calorias,cantidad,fecha) 
VALUES (1, 'Dieta1', '3000','Desayuno','apple','20','10','20/05/2021');
>>>>>>> 67663ab7a10397196c345bda4708189933574d47

/*CREATE TABLE IF NOT EXISTS Dietas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT, 
    calorias TEXT
);

/*
CREATE TABLE IF NOT EXISTS songtablee(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_name TEXT, 
    song_name TEXT,
    dato_dos TEXTcuidado con las comas xd 
);

INSERT or IGNORE INTO songtablee(id, artist_name, song_name,dato_dos) VALUES (1, 'Justin Bieber', 'Yummy','HOLA');


CREATE TABLE IF NOT EXISTS Dietas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT, 
    calorias TEXT
);
*/
