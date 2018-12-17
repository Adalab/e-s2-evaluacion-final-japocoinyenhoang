# e-s2-evaluacion-final-japocoinyenhoang

Ejercicio de evaluación final ‒ Sprint 2

Consiste en desarrollar una aplicación web de búsqueda de series de TV.
HITOS DEL EJERCICIO
1. Maquetación:
        maquetación básica. No nos centramos en medidas, colores ni tipografía hasta un hito posterior.
        Sass y la base de gulp del Adalab Web Starter Kit.
La aplicación de búsqueda de series consta de dos partes:
    1. Un campo de texto y un botón para buscar series por su título
    2. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título


2. Búsqueda
    Al hacer clic sobre el botón de 'Buscar===>conectarse al API abierto de TVMaze para búsqueda de series. Os recomendamos echar un vistazo al JSON que devuelve una petición de búsqueda para ver qué datos de los que nos devuelve necesitamos. Para construir la URL de búsqueda necesitaremos recoger el texto que ha introducido el usuario en el campo debúsqueda. Por cada show contenido en el resultado de búsqueda debemos pintar una tarjeta donde mostramos una imagen de la serie y el título.
Algunas de las series que obtenemos en los resultados no tienen cartel. En ese caso debemos mostrar una imagen de relleno. Podemos crear una imagen de relleno con el servicio de placeholder.com donde en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/cccccc/666666/?text=TV

3. Favoritos
Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestros favoritos.
Para ello, al hacer clic sobre un resultado cambia el color de fondo y se pone un borde alrededor de la tarjeta. También vamos a almacenar la información de favoritos en el localStorage. De esta forma si como resultado de búsqueda aparece una serie que hemos marcado como favorita, aparecerá directamente como favorita en el listado.

4. BONUS: Afinar la maquetación
Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación para aproximarnos a la propuesta gráfica.


Entrega
    La entrega del ejercicio se realizará en el mismo repositorio que has creado al comienzo del ejercicio. 12 horas de dedicación al ejercicio, por lo que el límite de entrega es turno de mañana: sesión  siguiente a la entrega a las 15:00h

Normas
    Este ejercicio está pensado para que se realice de forma individual en clase, pero podrás consultar
    tus dudas con la profesora y tus compañeras si lo consideras necesario. Es una buena oportunidadpara conocer cómo estás progresando, saber qué temas debes reforzar durante las siguientes semanas y cuáles dominas.
    Te recomendamos que te sientas cómoda con el ejercicio que entregues y no envíes cosas copiadas que no entiendas, puesto que en la revisión del ejercicio con la profesora se te pedirá que expliques las decisiones tomadas para realizar el ejercicio. Este feedback individual con la profesora será de un máximo de 30 minutos, y te propondrá además realizar cambios in situ sobre el ejercicio. Al final, tendrás un feedback sobre aspectos a destacar y a mejorar en tu ejercicio, y sabrás qué objetivos de aprendizaje has superado de los listados a continuación.


Criterios de evaluación
    Vamos a listar los criterios de evaluación de este ejercicio. Si superas más del 80% de los criterios, estás aprendiendo al ritmo que hemos pautado para poder afrontar los conocimientos del siguiente sprint.
            Control de versiones
            Uso de control de versiones con ramas para nuevas funcionalidades
            JavaScript básico
            Crear código JavaScript con sintaxis correcta, bien estructurado e indentado
            Usar variables para almacenar información y re‒asignar valores
            Usar condicionales para ejecutar acciones distintas en función de una condición
            Saber recorrer listados de datos para procesarlos
            Usar funciones para estructurar el código
            Saber modificar la información del DOM para añadir contenido dinámico
            Saber escuchar eventos del DOM y actuar en consecuencia
            AJAX y APIs
            Crear peticiones con fetch y promesas
            Gestionar información en formato JSON
            Usar el localStorage para guardar información en el navegador
¡Al turrón!