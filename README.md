# Yesería Artística

Sitio web de una tienda artesanal de yesería, con secciones de restauración, productos, kits y esculturas.

## Ejecutar localmente

```bash
npm install
npm run dev
```

La app quedará disponible en el puerto de Vite normalmente en:

```bash
http://localhost:5173
```

## Compilar para producción

```bash
npm run build
```

La salida se genera en la carpeta docs, que está preparada para publicarse en GitHub Pages.

## Publicar en GitHub Pages

Este proyecto ya viene configurado para desplegar automáticamente desde GitHub Actions usando la carpeta docs.

Pasos:

1. Sube el proyecto a un repositorio de GitHub.
2. Asegúrate de que la rama principal del repositorio se llama `main`.
3. En GitHub, entra a Settings > Pages.
4. En Source, selecciona "GitHub Actions".
5. Haz push a `main` y la acción se ejecutará automáticamente.

También queda listo un workflow en [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Nota importante

La aplicación usa `HashRouter`, por lo que las rutas internas funcionan bien cuando se sirve desde GitHub Pages sin necesidad de configuración extra de rewrites del servidor.
