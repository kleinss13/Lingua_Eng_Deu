# Lingua — Flash dual idioma (A1)

PWA de tarjetas de vocabulario alemán e inglés (nivel A1), optimizada para iPhone (acceso directo en pantalla de inicio).

## Cambios (refactor)

- **Vocabulario embebido** en `script.js` (sin Excel ni carga de archivos).
- **Orden aleatorio** al iniciar y en cada nuevo test / sesión.
- **Respuesta correcta** en rojo grande debajo de la palabra cuando fallas.
- **Matching flexible**: sin mayúsculas, sin puntuación, espacios extra y **variantes** aceptadas (p. ej. `hi` / `hello`, `bye` / `goodbye`, `tschüss` / `Auf Wiedersehen`, etc.).
- Se eliminó la vista «Añadir» y toda la importación/exportación Excel.
- Service Worker actualizado a **v6** (fuerza actualización de caché en el dispositivo).

## Idiomas

- Interruptor **DE · A1** / **EN · A1** en la barra superior.
- Alemán: 211 entradas · Inglés: 235 entradas.

## Archivos a subir a GitHub

- `index.html`
- `script.js`
- `style.css`
- `sw.js`
- `manifest.json`
- `icons/` (sin cambios)

No hace falta subir los `.xlsx`.

## PWA / iOS

Se mantienen `manifest.json`, meta tags de Apple y el registro del Service Worker. Tras desplegar, en el iPhone puede ser necesario cerrar la app desde el selector de apps y volver a abrirla (o quitar y volver a añadir a pantalla de inicio) para que cargue la caché v6.
