# Plaza Lama Dashboard

Proyecto de ordenes para apoyar a la tienda online de Plaza Lama.

## 🚀 Comienzo rapido

1.  **Descarga el repositorio.**

    ```git
    git clone git@gitlab.com:alexander9306/pl-picking-front.git
    ```

1.  **Comienza con el desarrollo.**

    Navega hacia el proyecto e inicialo.

    ```shell
    cd pl-picking-front/
    npm install
    npm start
    ```

1.  **Abre el codigo fuente y comienza a editarlo**

    El sitio por defecto estara montado en  `http://localhost:8000`
    
_**Nota**: Veras un segundo enlace: _`http://localhost:8000/___graphql`_. Este es la herramienta para experimentar con graphql dentro del sitio, para mas información visita la pagina oficial: [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Los cambios se mostraran en tiempo real automaticamente.
## 🧐 Que contiene este proyecto?
    .
    ├── node_modules
    ├── src
    ├── .eslintrc.json
    ├── .gitattributes
    ├── .prettierrc
    ├── .stylelintrc.json 
    ├── .babel.config.js
    ├── .codegen-api.yml    
    ├── .codegen-local.yml
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── wrap-with-provider.js
    └── yarn.lock   

_**Nota**: En la mayoria de casos solo necesitaras editar los archivos dentro de la carpeta `src`, en caso de necesitar editar un archivo de configuración debes antes confirmar que es la unica via para resolver su problema y debes acordar los cambios con el equipo de desarrollo._

## 📜 Reglas del proyecto

1.  **Linters de estilos y buenas practicas.**

    Este proyecto esta configurado con varios linters para que se sigan buenas practicas en la creación de codigo. Si usted esta teniendo algun problema con alguna regla en especifico siga estos pasos:
    
    -  Leea la documentacion de esa regla y comprenda la razon por la que le su codigo esta gritando.
    -  Implemente lo aprendido en el paso 1.
    -  Si sigue teniendo problemas con la regla desactivela exclusivamente en la linea donde esta trabajando. **Debe comentar la razon por la cual desactivo la regla una linea antes de desactivarla**.

_**Nota**: En caso de que este teniendo muchos problemas con alguna regla en especifico deberas comunicarlo a el team de desarrollo para analizar si hay que desactivar la regla completamente. Es recomendable instalar [la extencion de eslint para vs code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)._

2.  **Nombre de los directorios y/o archivos**

    Para nombrar las carpetas y archivos utiliza snake-case(letras minusculas y un guion para separar palabras con espacios). Para mas informacion visita [angular - style 02-01](https://angular.io/guide/styleguide#style-02-01) 
    
3.  **Estilos de archivos**

    Considera limitar las lineas de un archivo a no mas de 400 lineas de codigo, visita [angular - rule of one](https://angular.io/guide/styleguide#rule-of-one) para mas información.
   
4.  **Tamaño de las funciones**

    Vamos a tratar de hacer funciones pequeñas, siempre que sea posible se limitaran a no mas de 75 lineas de codigo. Las funciones cortas son mas faciles de leer y testear. Lee la documentación de [angular - style small functions ](https://angular.io/guide/styleguide#small-functions).
    
4.  **Unit testing o test unitarios**
   
 	Lost test se van a hacer al lado de la archivo que estan testiando agregandole  `.test`
    	
	
    	├── polyglot.ts
    	└── polyglot.test.ts
	
	Para mas información [angular - style unit test ](https://angular.io/guide/styleguide#unit-test-file-names).
	
