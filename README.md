# theme.js

![npm](https://img.shields.io/npm/v/@sonuyadav51/theme)
![npm](https://img.shields.io/npm/dw/@sonuyadav51/theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Twitter Follow](https://img.shields.io/twitter/follow/Sonukyadav51?style=social)

#### 🌞 Add Multiple color Themes in Your Website in few Seconds.

This library provides multiple color themes for websites.it has pre-design `darkmode` 🌜 and `lightmode` 🌞 themes in it's installation but you can add as much as color themes you want. to add your own custom colors themes referes to [add custom multiple color themes](#add-custom-multiple-color-themes) topic.

## Installation

Using npm

```sh
npm i @sonuyadav51/theme
```

## How To Use

add this code in your javascript file or script tag. <br>
Important => add attribute `type="module"` in script tag in which you will `import` this library.

#### use this code if you have downloaded library `using npm`.

```javascript
// import library to your js file
import theme from "./node_modules/@sonuyadav51/theme/lib/theme.js";
// call this function to activate library
theme();
```

Note : You can pass an `object type` optional argument to `theme()` function.

## Options

You can pass an object type `options` argument to `theme()` function. <br>

```javascript
//creating options object
options = {
  hideButton: true, // hide default toggle button provided by library | default value is false
  top: "95%", // position toggle button from top | default value is "5%"
  left: "53%", // position toggle button from left |  default value is "83%"
  lightTheme: true, // to add the light-theme provided by library | default values is false,
  removeAutoDark: true, // to remove autometic adding dark theme on installation | default value is false.
};
// passing to theme function
theme(options);
```

Note: `lightTheme: true` can change the color of your website's elemetns on which you added `data-type` attribute

## add custom multiple color themes

This library autometic generates classes with the value of attribute `data-newtheme` of toggle button.
this library takes this attribute value and concatinate it with (-) with following values
`bg` `box` `header` `nav` `text` `heading` `link` `list` `footer` and generate classes which will append to html elements according to these value type.

- `bg` generated classes with `bg` will added to `body` tag.
- `box` generated classes with `box` will added to `main` tag.
- `header` generated classes with `header` will added to `header` tag.
- `nav` generated classes with `nav` will added to `nav` tag.
- `text` generated classes with `text` will added to `p` and `span` tag.
- `heading` generated classes with `heading` will added to `h1,h2,h3,h3,h5,h6`.
- `link` generated classes with `link` will added to `a` tag.
- `list` generated classes with `list` will added to `li` and `ul` tag.
- `footer` generated classes with `footer` will added to `footer` tag

see below [step](#Steps-to-add-custom-multiple-color-theme) to add custom color theme and [example](#adding-a-custom-red-theme) of generated classes.

#### Steps to add custom multiple color theme.

1. add a button for toggling your custom color theme with `data-newtheme`, `data-beforetitle, data-aftertitle` attribute. Here `data-newtheme` attribute is `required` other two are optional.[know more about toggle button](#toggle-button)<br>
2. now this library will concatinate value of `data-newtheme` attribute of button with above listed values with (-) and generate classes. see below [example](#Example).
3. you need to write color style for this generated classes for your custom theme in your css file only. see below [example](#Example) for generated classes.

### Example

#### adding a custom red theme.

1. add a toggle button with `data-newtheme="red"` in your html file.
   `<button data-newtheme="red" data-beforetitle="change to red" data-aftertitle="change to light">change to red </button>`
2. now this library will concatinate value `red` of `data-newtheme` attribute of button with above listed values with (-) and generate following classes.
3. write your own color to following classes for red theme.

```css
/*  ================ GENERATED CLASSES BY LIBRARY WITH data-newtheme="red" VALUE ====================== */
.red-bg {
  /* this will change background color of body*/
}
.red-box {
  /* this will change background color of main */
}
.red-header {
  /* this will change header background*/
}
.red-nav {
  /* this will change background color of navbar */
}
.red-heading {
  /* this will change color of heading*/
}
.red-text {
  /* this will change color of content of p and span tag*/
}
.red-link {
  /* this will change color of link*/
}
.red-list {
  /* this will change color of ul and li*/
}
.red-footer {
  /* this will change background color of footer */
}
```

Note: You can generate your custom classes too for any specific HTML elements which will be added to this specific element when you toggle custom color theme.
[see example of generating custom classes](#generate-custom-classes).

##### add a custom drakula theme.

1. add a toggle button with `data-newtheme="drakula"` in your html file.
   `<button data-newtheme="drakula" data-beforetitle="change to drakula theme" data-aftertitle="change to light">change to drakula theme </button>`
2. now this library will concatinate value `drakula` of `data-newtheme` attribute of button with above listed values with (-) and generate following classes.
3. write your own color to following classes for drakula theme.

```css
/*  ================ GENERATED CLASSES BY LIBRARY WITH data-newtheme="drakula" VALUE ==================== */
.drakula-bg {
  /* this will change background color of body*/
}
.drakula-box {
  /* this will change background color of main tag */
}
.drakula-header {
  /* this will change header background*/
}
.drakula-nav {
  /* this will change background color of navbar */
}
.drakula-heading {
  /* this will change color of heading*/
}
.drakula-text {
  /* this will change color of content of p and span tag*/
}
.drakula-link {
  /* this will change color of link*/
}
.drakula-list {
  /* this will change color of ul and li*/
}
.drakula-footer {
  /* this will change background color of footer */
}
```

Note: You can generate your custom classes too for any specific HTML elements which will be added to this specific element when you toggle custom color theme.
[see example of generating custom classes](#generate-custom-classes).

- You can have both these above color theme in your website at a same time. write all these css classes code in your stylesheet and both button in your html file. [see a full example of multiple custom theme](#full-example-for-multiple-custom-theme).

## Toggle Button

- When we will click on theme toggle button for changing theme then this library add a `active` class to it.
  with the help of this `active` class we can write styles for button when custom color theme activated.<br>
  for example. <br>
  `<button class="mybtn" data-newtheme="blue"> change to blue</button>`

```css
/* This style  will be applied on button in light theme*/
.mybtn {
  background-color: blue;
}
/* this style will be applied on button when you change theme to your custom color theme*/
.mybtn.active {
  background-color: white;
}
```

- add built-in `theme-toggle-btn` class to your button to make it toggling like default toggle button. it is not required to add this class. you can design your toggle button as you want with your custom class just like above.
  `<button class="theme-toggle-btn" data-newtheme="blue"> change to blue</button>`

### Toggle Button has 3 Attributes

1. `data-newtheme` => this is `required` and used for generating classes for custom color themes.
2. `data-beforetitle` => this is `optional` attribute. it's value will be display on button before custom color theme activated.
3. `data-aftertitle` => this is `optional` attribute. it's value will be display on button after custom color theme activated.

Note: if you want to create a toggle button withought title like library's default toggle button then no need to write above 2nd and 3rd attribute in your custom toggle button. like <br>
`<button data-newtheme="anything"> change to blue</button>`

## Generate custom classes

you can generate your own custom classes. which will be added to elements when you toggle your theme.
for generating custom classes you need to add `data-type` attribute in your html file.
for example, if your html file has a `div` tag and when will change your theme you want to apply some css on this `div` then you have to add an attribute `data-type="anyvalue"` on this div. then this library will take this attribute value `anyvalue` and concatinate it with your toggle button `data-newtheme` value. and generate a class and when you toggle theme then this library will add this class to this div. all you need to write css for this generated class. see below full example to undestand

## full example for multiple custom theme

this example has custom data-type values too. see in following example.

### add toggle button in your html file

```html
<body>
  <!-- red theme button -->
  <button
    data-newtheme="red"
    data-beforetitle="change to red theme"
    data-aftertitle="change to light"
  >
    change to red theme
  </button>
  <!-- drakula theme button withought data-beforetitle and data-aftertitle attribute-->
  <button data-newtheme="drakula"></button>
  <!-- =================ADDING data-type IN HTML ELEMENTS FOR CUSTOM CLASSES  -->
  <div data-type="mybox"></div>
  <p data-type="mytext"></p>
</body>
```

### write styles for generated clases in your css file

```css
/*  ================ GENERATED CLASSES BY LIBRARY WITH data-newtheme="red" VALUE ====================== */
.red-bg {
  /* this will change background color of body*/
}
.red-box {
  /* this will change background color of main */
}
.red-header {
  /* this will change header background*/
}
.red-nav {
  /* this will change background color of navbar */
}
.red-heading {
  /* this will change color of heading*/
}
.red-text {
  /* this will change color of content of p and span tag*/
}
.red-link {
  /* this will change color of link*/
}
.red-list {
  /* this will change color of ul and li*/
}
.red-footer {
  /* this will change background color of footer */
}
/* ======== CUSTOM CLASSES */
.red-mybox {
  /* write your css here */
}
.red-mytext {
  /* write your css here */
}
/*  ================ GENERATED CLASSES BY LIBRARY WITH data-newtheme="drakula" VALUE ==================== */
.drakula-bg {
  /* this will change background color of body*/
}
.drakula-box {
  /* this will change background color of main tag */
}
.drakula-header {
  /* this will change header background*/
}
.drakula-nav {
  /* this will change background color of navbar */
}
.drakula-heading {
  /* this will change color of heading*/
}
.drakula-text {
  /* this will change color of content of p and span tag*/
}
.drakula-link {
  /* this will change color of link*/
}
.drakula-list {
  /* this will change color of ul and li*/
}
.drakula-footer {
  /* this will change background color of footer */
}
/* ======== CUSTOM CLASSES */
.drakula-mybox {
  /* write your css here */
}
.drakula-mytext {
  /* write your css here */
}
```
