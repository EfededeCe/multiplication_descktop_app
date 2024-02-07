# Node TS multiplication desktop app

Esta aplicación está hecha con los materiales proporcionados por
Fernando Herrera, donde se desarrollan algunos conceptos de
**clean arquitecture**, tales como la utilización del **patron adaptador**, **modularización** y **encapsulación** del código, **testing**, **documentación**, entre otros.

## Tecnologías

- JavaScript
- TypeScript
- NodeTS

### Paquetes

- [rimraf](https://www.npmjs.com/package/rimraf)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [yargs](https://www.npmjs.com/package/yargs)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [jest](https://jestjs.io/)

## Comentario

Esta aplicación no pretende ser utilizada, pero de querer hacerlo, simplemente clonar el
repositorio, en la terminal desde la raíz del directorio de la app, ejecutar el comando

- `npm i` para instalar las dependencias
- `npm run build` para transpilar a JS
- `node dist/app.js [-b] [5] [-l] [10] [-s] [-n] [nombre_archivo] [-d] [nombre_directorio]`

**Donde** los flag son:

- **-b:** base por la que se multiplica **obligatorio**
- **-l:** ímite de la tabla
- **-s:** hacer un log de la tabla en terminal
- **-n:** nombre del archivo donde se guardará la tabla
- **-d:** nombre del directorio donde se guardará la tabla
