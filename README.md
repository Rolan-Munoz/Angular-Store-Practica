EJERCICIO ANGULAR STORE

El siguiente ejercicio forma parte del modulo de Angular del bootcamp full stack web developer de Kreitek by Nunsys. Empresa donde estoy realizando las practicas del grado superior de Desarrollo de Aplicaciones Web

En el siguiente ejercicio se ha tenido que realizar un frontEnd con Angular en el que se  ha simulado una tienda online. 
Para este ejercicio, a aparte de Angular, se ha usado también Bootstrap para añadir diferentes estilos y estructuras a las vistas, como por ejemplo el carrusel o la vista de los productos. Para simular el backEnd se ha usado la herramienta Mockoon donde se han creado los diferentes endPoints necesarios.

A continuación se va a especificar los pasos que se han ido dando para desarrollar el trabajo, así como una explicación sobre las diferentes vistas que nos encontramos.

1: Se crea la estructura y enrutamiento de la aplicación. Posteriormente se crea el navbar y el footer, que van a ser visibles desde cualquier vista. A ambos componentes se le ha dado estilos propios, y en el caso del navbar se ha creado la funcionalidad para que marque con un estilo diferente la pestaña activa.

2: Se ha creado el primer componente, en este caso nos referimos al carrusel, lo podemos observar en la carpeta de capturas de pantalla, en este caso con el numero 1; Para realizar dicho carrusel se ha elegido un estilo predeterminado de Bootstrap, se ha dado estilo propio y se hace una llamada al backend creado en Mockoon para recoger las imágenes que forman parte del carrusel.

3: Se han creado dos componentes en la misma pagina principal, podemos observarlas en la captura de pantalla numero 2.  Por un lado tenemos tres banner que muestran un ejemplo de productos que tenemos en nuestra tienda, al igual que con el carrusel, las imágenes están recogidas del backEnd simulado en Mockoon. El segundo componente es el relacionado con las categorías, en la que vemos tres imágenes que representan cada una, una de las categorías que tenemos en la tienda. Igual que los banners, estas imágenes están recogidas del backEnd. 

4: Se ha creado la funcionalidad necesaria para que al clickar sobre las imágenes de las categorías nos cambia a la vista donde tenemos el listado de productos, también recogidos del backEnd. Cabe destacar que una sugerencia de implementación hubiera sido que al clickar en las imágenes nos mostrara solo los productos de cada categoría. 

5: La vista de productos, se puede ver en la captura de pantalla numero 3. Para visualizarlas se ha seleccionado un card de bootstrap, el cual ha sido modificado para responder a nuestras necesidades, y al estilo general de la pagina. La forma de mostrar la información de los productos también es interesante comentar, por un lado se ha usado el currency pipe para darle formato a los precios, en este caso se ha utilizado con el locale “es-ES”. Se ha creado también la funcionalidad para ver determinar si un producto esta rebajado o no, y en caso de estar rebajado, visualizar este precio rebajado y cambiar el estilo del precio antiguo, en este caso tachándolo. También se ha creado la funcionalidad de favorito, en este caso observamos que los productos que tienen en el backend determinado como no favorito tienen un icono de corazón en azul, sin embargo los que tienen determinado como favorito aparecen en rojo. Destacar que las imágenes de los productos son subcomponentes.


6: Se ha creado una funcionalidad para que a la hora de hacer click sobre alguno de los productos nos lleve a la ficha individual de cada uno de ellos donde vemos la información completa del producto. Dicha  información se recoge igualmente del backEnd. Esta ficha la podemos observar en la captura de pantalla 4. Destacar en este apartado que la maquetación se ha hecho desde cero, sin usar ningún card predeterminado de bootstrap, aunque si nos hemos ayudado de el para terminar de darle estilos. Observamos también que la imagen es la misma solo que se han puesto en escalas diferentes. También se ha utilizado el currency pipe para los precios y se ha dado formato a las tallas, creando a su vez la funcionalidad necesaria para que si no hay stock no aparezcan las tallas y se muestre el mensaje de “no hay stock”. Toda la información esta recogida desde el backend.

7: Por ultimo encontramos la vista “nosotros” la cual es una pagina estática donde vemos una imagen con un texto, y el componente de banners abajo de ellos. Se ha intentado mantener la estética de la pagina. Se ha utilizado también bootstrap para ayudar a posicionar y dar estilos a la vista. Se puede observar en la captura de pantalla numero 5.


ALGUNAS SUGERENCIAS DE MEJORA:

Como sugerencias de mejora podemos decir que hubiera sido interesante usar un modulo de angular para la creación de las vistas de los productos. Para de esta manera poder agrupar funcionalidades relacionadas. 

Se podría haber mejorado el enrutamiento gracias a la utilización también del modulo creado. 

Se podrían haber creado pipes personalizados para el formateo de la información. Aunque en este caso se han cogido pipes predeterminados de angular.

Se podría haber definido a priori una estructura de archivos y carpetas mas clara, así como las etiquetas y nombres usados. 


CONCLUSIONES

En general ha sido un ejercicio muy interesante donde se ha podido poner en practica la mayoría de los conceptos y funcionalidades tratados en el modulo de FrontEnd y Angular.

El uso de framework SPA (simple page application) ha resultado ser muy útil, tanto a nivel de desarrollo como de performance de la aplicación, ya que facilita la carga de información y componentes y facilita el ir a las diferentes rutas. Nos ahorra también mucho código y archivos duplicados. En general se considera un gran avance este tipo de framework.

Ha sido interesante también usar diferentes herramientas relacionadas con el desarrollo del FrontEnd, como uplash para la selección de imágenes, fontawesome para los iconos y base64 para crear imágenes en base64.

En definitiva el ejercicio realizado abre la puerta al desarrollo de proyectos propios de calidad, modernos y con buena performance.

