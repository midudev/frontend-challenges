<a href="https://hacktoberfest-2022.vercel.app/">
<img src="public/banner_gh.jpg">
</a>

<div align="center">
	<h1>¡Contribuye a un proyecto de código abierto!</h1>
	<p>🚀 Soluciona el reto y participa en la Hacktoberfest</p>

![GitHub stars](https://img.shields.io/github/stars/midudev/hacktoberfest-2022)
![GitHub issues](https://img.shields.io/github/issues/midudev/hacktoberfest-2022)
![GitHub pull requests](https://img.shields.io/github/issues-pr/midudev/hacktoberfest-2022)
![GitHub pull requests](https://img.shields.io/github/issues-pr-closed-raw/midudev/hacktoberfest-2022)

</div>

## 🤔 ¿Qué es la Hacktoberfest?

La **[Hacktoberfest](https://hacktoberfest.com/)** es un evento anual organizado por [DigitalOcean](https://www.digitalocean.com/) y [DEV](https://dev.to/), que consiste en contribuir a proyectos de código abierto y ganar una camiseta gratis.

## 🚀 ¿Cómo participar?

> 🚧 Necesitarás la extensión [Astro para Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) y [Nodejs 16+](https://nodejs.org/en/).

1. **Regístrate en [Hacktoberfest](https://hacktoberfest.com/)**:

- Clic en **Start Hacking**.
- Inicia sesión con GitHub o GitLab.

2. **Crea un fork de este repositorio**:

- Clic en _Fork_ en la esquina superior derecha o haz click [aquí](https://github.com/midudev/hacktoberfest-2022/fork).

3. **Clona el repositorio:**

```bash
git clone git@github.com:TU_USUARIO/hacktoberfest-2022.git
```

4. **Instala las dependencias:**

```bash
npm install
# o
pnpm install
# o
yarn install
```

5. **Crea una página en**:

```txt
/pages/entry/<tu-nombre-de-usuario-en-github>/index.astro
```

6. **Ejecuta el proyecto:**

```bash
npm run dev
# o
pnpm run dev
# o
yarn dev
```

7. **Soluciona el reto que se indica en [la página principal](https://hacktoberfest-2022.vercel.app/)** y happy hacking 🥳.

## 📝 Reglas

- ✅ Puedes usar cualquier framework dentro de esta lista: React, Vue, Svelte, Preact y Solid. También puedes usar Vanilla JavaScript.
- ❌ NO puedes usar dependencias de terceros. Nada de npm install, ni yarn add ni similares.
- ✅ Se puede utilizar CSS y Tailwind pero...
- ❌ NO se puede utilizar otro framework CSS como Bootstrap, Bulma, NextUI, Material UI, etc... ni tampoco SASS, Stylus o similares.
- ❌ No copies soluciones de otros participantes o soluciones de fuera. ¡La idea es que practiques y te esfuerces!
- ✅ Crea tus PRs del **1 al 31 de octubre**.
- ❌ No uses ni modifiques código o componentes de otros participantes.
- ❌ No modifiques código de fuera de tus carpetas (a no ser que sea exactamente para arreglar un problema de la página).
- ❌ NO USES ESTILOS GLOBALES. NO ESTILES etiquetas. Usa siempre un selector muy específico (por ejemplo, una id con tu nombre) y a partir de ahí estila lo que quieras de tu solución. Así evitamos conflictos entre estilos.
- ✅ Si necesitas crear componentes auxiliares para tu solución, crea una carpeta en:

```bash
 components/<nombre-de-usuario-en-github>/*
```

## 🎁 Premios

Además de poder conseguir la camiseta de la Hacktoberfest, haremos una votación para elegir las mejores soluciones. Los premios son:

- 🥇 Teclado mecánico [Keychron K3 v2 RGB Backlight](https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard?variant=32220198633561).
- 🥈 [Cheque regalo para Red Bubble](https://www.redbubble.com/es/) por valor de 30€.
- 🥉 [Libro de Aprendiendo Git](https://leanpub.com/aprendiendo-git) + [Descubre Svelte](https://leanpub.com/descubre-svelte).

## 📝 Notas

Si usas Solid o Preact, debes indicar el [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource) en un comentario pragma. Haz esto en la primera línea de cada archivo JSX/TSX.

```jsx
// Para Preact
/** @jsxImportSource preact */

// Para Solid
/** @jsxImportSource solid-js */
```

Para poder ejeuctar solo los test que esten en tus carpetas tienes que ir al archivo <code>jest.config.js</code> y modifica el parametro <code>testMatch</code>

```JSON
{
	"testMatch": ["**/<tu-nombre-de-usuario-en-github>/**/*.spec.{js,ts}"]
}
```

**Nota: tendras que deshacer este cambio antes de hacer commit**

<br>

Más información al respecto [aquí](https://docs.astro.build/es/guides/typescript/#soluci%C3%B3n-de-problemas).

## 🤗 Contribuidores

<a href="https://github.com/midudev/hacktoberfest-2022/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=midudev/hacktoberfest-2022" />
</a>
