# Prueba técnica Frontend-Backend

## Test 1. Maquetación HTML + CSS
Para la maquetación he utilizado HTML5 y Tailwind. He recreado el prototipo de Figma dado, en mi caso utilizando como productos de ejemplo los que posteriormente obtendré mediante la API recomendada. También he hecho uso de un pequeño fragmento de CSS y JavaScript para recrear la apertura del componente de filtros.

## Test 2. Framework de Frontend
En este apartado he elegido el framework de Frontend Angular en su versión 16 y con componentes standalone. He dividido la maquetación del test 1 en varios componentes importados en la página principal de productos. Los componentes creados son:
* Card: Es la tarjeta resumen del producto. En lugar de añadir una a una, se crean de forma dinámica gracias a la directiva ng-For.
* Category-box: Son las filas de categorías a filtrar con su correspondiente checkbox. También se crean de manera dinámica según las categorías que se reciban.
* Filters: Es la pestaña de filtros que aparece en la zona inferior de la pantalla.
* Filters.btn: Es el botón flotante que hace aparecer el componente de filtros.
* Footer: Es el footer de la web.
* Header: Es la barra superior con sus respectivos iconos.

En este caso he obtenido los datos de los productos mediante un archivo json y la creación de un servicio para facilitar la integración en el test posterior. En este apartado también he podido implementar reactividad en el componente de filtros, mostrando en el botón de filtrar la cantidad de filtros seleccionados. También he modificado la funcionalidad de la aparición del componente de selección de filtros para su funcionamiento mediante un método de TypeScript. A su vez, las categorías mostradas en el componente de filtrado aparecen gracias a un método que recupera las categorías de los productos del archivo json.

## Test 3. PHP
Para el desarrollo del Backend he elegido el framework Laravel. He creado un controlador (ProductsController) con dos métodos, index y show. 
* En el método index se recuperan todos los productos de la API y se valoran las posibles condiciones de filtrado y búsqueda.
* En el método show se recupera la información de un producto concreto.

También he creado los dos endpoints necesarios en el archivo api.php. Estos endpoints son:
* /products. Con la posibilidad de añadir el parámetro ?category para el filtrado por categoría y el parámetro /search para la búsqueda de productos.
* /products{id}. Con el que se recibe la información de un producto por su id.

Para la integración de este Backend con Angular, he creado los métodos necesarios en un servicio al que se llama desde diferentes partes de la aplicación, consumiendo de la API creada en Laravel gracias al cliente HttpClient. He necesitado añadir dos elementos más a la maquetación Frontend para poder hacer uso de todas las funcionalidades requeridas. Los elementos añadidos son la barra de búsqueda en el encabezado de la página y una nueva página para mostrar la información detallada de un producto seleccionado.

# Resumen de tecnologías utilizadas:

### Test 1
* HTML5
* Tailwind 3.3.6
* CSS3
* JavaScipt
### Test 2
* Angular 16
* TypeScript
### Test 3
* Laravel 10
* PHP

# Documentación de la API

## Obtener todos los productos

* Endpoint: /api/products
* Para filtrar por categoría: /api/products?category=[categoría]
* Para realizar una búsqueda /api/products/search?q=[término buscado]

## Obtener información de un producto

* Endpoint: /api/products/{id}

# Ejecución del proyecto

## Test 1
Abrir archivo index.html en un navegador.

## Test 2
Ejecutar comandos:

$ npm install

$ ng serve

> [!NOTE]
> Más información en Readme del proyecto de Angular

## Test 3
Ejecutar comandos:

$ composer install

$ php artisan serve

> [!NOTE]
> Más información en Readme del proyecto de Laravel
