# Contributing

> You want to contribute to the website? Welcome!
> Our website runs off of VuePress. Here you will find contribution resources and advice.

If you have any questions, you can ask them in #website-dev channel in our Discord.

 * [Preparing the development environment](#preparing-the-development-environment)
 * [Guidelines](#guidelines-1)
 * [Localization](#localization)
 * [Technical informations](#technical-informations)

## Preparing the development environment
### Fork the project
* Create your own fork of the repository by choosing the **Fork** option at the top right of the website github repository.
* Create a new branch before working on your new fork. The method of branching depends on the Git CLI/GUI that you use, reference your software manual, or contact us if you need help with this step.
* Once on your own branch, you're ready to start making improvements to the website

> You can use a git client like [GitHub Desktop](https://desktop.github.com/) to manage your local repository.

When your done submit a pull request. This can be done by navigating to the main page of the [website git repository](https://github.com/Paperback-iOS/website) and selecting "pull request" at the top. You may have to click the button titled **compare across forks**. Ensure that the base repository belongs to Paperback-iOS, whereas the head is your fork, and your branch.

### Running the website
> When you make modifications to the site, you should validate your changes and formatting yourself first.

See [Building local environment](https://github.com/Paperback-iOS/website#building-local-environment)

## Guidelines
### Glossary

| Variations               | To be used     |
|:------------------------:|:--------------:|
| App/application          | app            |
| Device/iPhone/iPad/phone | iPhone or iPad |
| iOS                      | iOS or iPadOS  |

> Be careful of capitalization:

* Paperback
* MangaDex

* Safari
* macOS
* iTunes

### Components
You can use the following components. Try not to abuse of `warning`.

**[VuePress Custom Containers](https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers)**
```markdown
::: tip Title
 Content
:::
```
```markdown
::: warning Title
 Content
:::
```

**[VuePress Plugin Element Ui](https://lq782655835.github.io/vuepress-plugin-element-ui/)**
```markdown
:::: el-tabs
::: el-tab-pane label="Tab1"
Content1
:::
::: el-tab-pane label="Tab2"
Content2
:::
::::
```
```html
<el-tag type="warning">Not the Windows Store app!</el-tag>
```

**Download link**
The following component creates a link allowing to download the latest public build.
```html
<Download text="from here"/>
```

**Picture dialog windows**
This component create a dialog component containing a picture. It is based on an Element dialog and is lazy loaded. See [PR 32](https://github.com/Paperback-iOS/website/pull/32) for more informations.
 * `title`: title of the dialog window
 * `button`: text shown in the link
 * `src`: picture's path
```html
<PictureDialog title="Download iCloud for Windows 8" button="GIF" src="/assets/iCloud.gif"/>
```

**Extensions list**
The following component will create a bullet list of the sources contained in the extension repo. This list will also render source tags.
```html
<ExtensionsList url="https://paperback-ios.github.io/extensions"/>
```

**"Not up to date" warning**
You've made a major modification to the English version of the site and you want to show that a translation is not up to date? You can mark a page as "not up to date" by adding the following code at the top of the concerned page.
```html
<NotUpToDate/>
```
It will create a translated warning saying:
> Major changes have been made in the English version of this page. We suggest you use the English revision until this page is up to date.

### Potential issues
**Note that `tabs` currently needs to begin by a `h3` and finish by an `ol` components.** 
Otherwise there will be padding issues. See [PR #20](https://github.com/Paperback-iOS/website/pull/20)

## Localization
You want to translate the website?
The following languages are currently available:
|  Language  |  Translator  |    Reviewer    |
|:----------:|:------------:|:--------------:|
|   English  |              |                |
|   French   |     Lemon    |  Sirus, fma16  |
|  Italiano  |   Kinpatsu   |                |
| Nederlands |     Joery    |       Syn      |
| Bulgarian  |   Rinto-kun  |                |


In development: 
|  Language  |  Translator  |    Reviewer    |
|:----------:|:------------:|:--------------:|
|  Russian   |KorewaWatchful|     Dkzver     |

### Adding a new language
**Copy and localize the following files:**
 * `website/src/README.md` to `website/src/LANG/README.md`
 * `website/src/help` to `website/src/LANG/help`
 * `src/.vuepress/config/nav/en.js` to `src/.vuepress/config/nav/LANG.js`
 * `src/.vuepress/config/sidebar/en.js` to `src/.vuepress/config/sidebar/LANG.js`

**Edit `src/.vuepress/config.js` file:**
 * Localize and add the following code in `locales` dictionary:
```js
"/LANG": {
  lang: "en-US",
  title: "Paperback",
  description: "An ad-free manga reader for iOS.",
},
```
 * Localize and add the following code in `themeConfig/locales` dictionary:
```js
"/LANG": {
  label: "English",
  selectText: "Languages",
  artiaLabel: "Select language",
  nav: require("./config/nav/LANG"),
  sidebar: require("./config/sidebar/LANG"),
  serviceWorker: {
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh",
    },
  },
},
```
 * Add the following lines in `extraWatchFiles` list:
```js
".vuepress/config/nav/LANG.js",
```
```js
".vuepress/config/sidebar/LANG.js",
```

Don't forget to change links. For example `/help/faq/#troubleshooting` becomes `/fr/help/faq/#resolution-des-problemes-de-l-application` in French.

Please do not translate our privacy policy located in `website/src/privacy_policy.md`.

### Translation decisions
> You will find here decisions made for the translation. 
> If you want to change or improve them, please make the modification in all the website. It will allow to have a consistent translation.

<details>
  <summary>French</summary>
  
  * "An ad-free manga reader for iOS. " : "Une application pour lire des manga, sur iOS, sans publicités"
  * "Getting started" : "Démarrer"
  
  * "Patron" : "Supporter sur Patreon"
  
  * "Public build" : "version accessible au publique"
  * "Full release" : "publication définitive"
  
  * Ponctuation: use `’`
</details>

## Technical informations
This website is based on [VuePress](https://vuepress.vuejs.org/) and is hosted on [GitHub Pages](https://pages.github.com/). 
It use the theme [Yuu](https://vuepress-theme-yuu.netlify.app/) over VuePress default theme with a custom [Home](.vuepress/components/PaperbackHome.vue) page.

We also use [Element](https://element.eleme.io/#/en-US) components for custom layouts and in markdown with [VuePress Plugin Element UI](https://lq782655835.github.io/vuepress-plugin-element-ui/).