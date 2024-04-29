# creacion de estructura basica npm con express nodemon y levantamos un servidor.

# middlewares: son funciones que se activan antes de nuestras rutas, sirven como filtros o estaciones previas, donde se definen validaciones, a cualquier ruta se le puede agregar un middleware.



# archivos estaticos: 
use: palabra reservada usada en express hace referencia a un middleware global. 
para crear el frontend usando node.js se crea una carpeta llamada public donde creamos la carpeta assets y su estructura.
para que funcione se le indica a express con :

app.use(express.static('public'))---para ruta relativa al index---



const __dirname = import.meta.dirname;
app.use(express.static(__dirname, + 'public'))---para utilizar ruta absoluta---



por defecto los archivos estaticos usan la ruta raiz en el navegador.

---- tips------
para clonar un repositorio de github usar:
git clone y la direccion del archivo a clonar 
