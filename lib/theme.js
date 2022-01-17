class Cookie {
  set(name, value, daysToLive) {
    let cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
      cookie += "; max-age=" + daysToLive * 24 * 60 * 60;
      document.cookie = cookie;
    }
  }
  get(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  check(name) {
    let cookieName = this.get(name);
    if (cookieName != null) {
      return true;
    } else {
      return false;
    }
  }
  delete(name) {
    document.cookie = `${name}=; max-age=0`;
  }
}
class Theme extends Cookie {
  createDefaultToggleBtn(top, left) {
    let btn = document.createElement("span");
    btn.classList.add("theme-toggle-btn");
    btn.textContent = "🌜";
    btn.setAttribute("data-newtheme", "dark");
    btn.setAttribute("data-aftertitle", "🌞");
    btn.setAttribute("data-beforetitle", "🌜");
    btn.setAttribute("style", `top:${top};left:${left};`);
    document.body.appendChild(btn);
    if (!defaultObj.check("animate")) {
      btn.classList.add("theme-toggle-btn-animate");
    }
    setTimeout(function () {
      btn.classList.remove("theme-toggle-btn-animate");
      defaultObj.set("animate", "1", 30);
    }, 11000);
  }
  addDarkClasses(allLightTheme, lightTheme) {
    let style = document.createElement("style");
    if (
      defaultObj.check("cur_sel_theme") &&
      defaultObj.get("cur_sel_theme") == "dark"
    ) {
      style.textContent = `
      :root {
      --dark-body-background: #1a202c;
      --colors-omegaDarker: #2d3748;
      --colors-mute: #e2e8f0;
      --colors-omegaLighter: #edf2f7;
      --colors-beta: #9f7aea;
      }
    .dark-bg {
      background: var(--dark-body-background) !important; 
      transition:all 500ms ease-in-out; 
      color: var(--colors-mute) !important;
    }
    .dark-box {
      background: var(--colors-omegaDarker) !important;
      color: var(--colors-mute) !important;
      
    }
    .dark-box-shadow {
      box-shadow: rgba(1, 1, 1, 0.1) 1px 1px 5px 0px;
      border-radius: 10px;
      background: var(--colors-omegaDarker) !important;
      color: var(--colors-mute) !important;
      
    }
    .dark-header, .dark-footer {
      background: var(--colors-omegaDarker) !important;
      color: var(--colors-mute) !important;
    }
    .dark-heading {
      color: var(--colors-omegaLighter) !important;
    }
    .dark-text,.dark-link {
      color: var(--colors-mute) !important;
    }
    .dark-link:hover{
       color:var(--colors-beta) !important;
    }
    .dark-link.active{
      color:var(--colors-beta) !important;
    }
    .dark-list{
      color: var(--colors-mute) !important;
    }
    `;
      allLightTheme.forEach(function (one) {
        one.classList.remove(one.dataset.type);
      });
    } else if (
      defaultObj.check("cur_sel_theme") &&
      defaultObj.get("cur_sel_theme") != "dark"
    ) {
      document.head.lastChild.textContent = "";
      allLightTheme.forEach(function (one) {
        one.classList.remove(one.dataset.type);
      });
    } else {
      style.textContent = `
      :root {
        --colors-background: #f8f8f8;
        --colors-white: #fff;
        --colors-text: #718096;
        --colors-heading: #2d3748;
        --colors-betaDark: #805ad5;
      }
      .bg{
        background: var(--colors-background);
        transition:all 500ms ease-in-out !important;
        color: var(--colors-text) !important;
      }
      .box {
        background: var(--colors-white) !important;
        color: var(--colors-text) !important;   
      }
      .box-shadow {
        box-shadow: rgba(1, 1, 1, 0.1) 1px 1px 5px 0px;
        border-radius: 10px;
        background: var(--colors-white) !important;
        color: var(--colors-text) !important;
        
      }
      .header,.footer {
        background: var(--colors-white) !important;
        color: var(--colors-text) !important;
      }
      .heading {
        color: var(--colors-heading) !important;
      }
      .text,.link {
        color: var(--colors-text) !important;
      }
      .link:hover{
        color:var(--colors-betaDark) !important;
      }
      .link.active{
        color:var(--colors-betaDark) !important;
      }
      .list{
        color: var(--colors-text) !important;
      }
      `;
      if (lightTheme == true) {
        allLightTheme.forEach(function (one) {
          one.classList.add(one.dataset.type);
        });
      }
    }
    style.textContent += `  

     .theme-toggle-btn {
      border: 0;
      outline: 0;
      cursor: pointer;
      width: 48px;
      height: 23px;
      border-radius: 38px;
      position: fixed;
      z-index: 999999999;
      background: rgba(0,0,0,0.7);
      display:flex;
      justify-content:flex-end;
      box-sizing:border-box;
    }  
    .theme-toggle-btn::before {
      content: "";
      position: absolute;
      width:20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      top: 5%;
      left: 1%;
      z-index: 9999999999;
      transition: 0.5s;
      box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.07);
    }
    .theme-toggle-btn.active::before  {
      left: 57%;
      transition: 0.5s;
      background:#fff;
      top: 5%;
      box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.1);
    }
    .theme-toggle-btn.active{
      background:#ccc;
      justify-content:flex-start;
      align-items:center;
    }
    .theme-toggle-btn-animate {
      animation: animate 0.82s cubic-bezier(.36, .07, .19, .97) both infinite;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    @keyframes animate {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }
      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }
      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }
      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }`;
    document.head.appendChild(style);
  }
  toDark(allLightTheme) {
    let themeChoice = defaultObj.get("cur_sel_theme");
    allLightTheme.forEach((l) => {
      let theme = l.dataset.type;
      theme = `dark-${theme}`;
      let updatedThemeClass = theme.replace("dark", themeChoice);
      l.classList.add(updatedThemeClass);
    });
  }
  toLight(allLightTheme) {
    allLightTheme.forEach((l) => {
      let theme = l.dataset.type;
      theme = `dark-${theme}`;
      let selectedtheme = defaultObj.get("cur_sel_theme");
      if (selectedtheme == null) {
        l.classList.remove(theme);
      }
    });
  }
  handleMultipleTheme(btn, allLightTheme = null, lightTheme) {
    const themeChoice = btn.dataset.newtheme;
    allLightTheme.forEach((one) => {
      one.classList.remove(`dark-${one.dataset.type}`);
      if (defaultObj.check("cur_sel_theme")) {
        one.classList.remove(
          `${defaultObj.get("cur_sel_theme")}-${one.dataset.type}`,
        );
      }
    });
    if (
      defaultObj.check("cur_sel_theme") &&
      defaultObj.get("cur_sel_theme") == themeChoice
    ) {
      defaultObj.delete("cur_sel_theme");
      defaultObj.toLight(allLightTheme);
      defaultObj.addDarkClasses(allLightTheme, lightTheme);
    } else {
      defaultObj.set("cur_sel_theme", themeChoice, 30);
      defaultObj.addDarkClasses(allLightTheme, lightTheme);
      defaultObj.toDark(allLightTheme);
    }
  }
  handleMultipleBtn(btns) {
    btns.forEach(function (btn) {
      const themeChoice = btn.dataset.newtheme;
      let updatetitle = "";
      if (btn.dataset.aftertitle) {
        updatetitle = btn.dataset.aftertitle;
      } else {
        updatetitle = "";
      }
      if (
        defaultObj.check("cur_sel_theme") &&
        defaultObj.get("cur_sel_theme") == themeChoice
      ) {
        btn.classList.add("active");
        if (updatetitle !== "") {
          btn.textContent = updatetitle;
        }
      } else {
        btn.classList.remove("active");
      }
      btn.addEventListener("click", function () {
        btns.forEach(function (btn) {
          btn.classList.remove("active");
          if (btn.dataset.beforetitle && btn.dataset.beforetitle !== "") {
            btn.textContent = btn.dataset.beforetitle;
          }
        });
        if (
          defaultObj.check("cur_sel_theme") &&
          defaultObj.get("cur_sel_theme") == themeChoice
        ) {
          btn.classList.add("active");
          if (updatetitle !== "") {
            btn.textContent = updatetitle;
          }
        } else {
          btn.classList.remove("active");
        }
      });
    });
  }
  manageOptions(options) {
    options = {
      hideButton: options.hideButton || false,
      lightTheme: options.lightTheme || false,
      removeAutoDark: options.removeAutoDark || false,
      top: options.top || "5%",
      left: options.left || "83%",
    };

    return options;
  }
  autoAddType(selector, value) {
    let allElement = document.querySelectorAll(`${selector}`);
    allElement.forEach(function (el) {
      if (!el.dataset.type) {
        el.setAttribute("data-type", `${value}`);
      }
    });
  }
  manageAutoAddType() {
    let allProp = {
      body: "bg",
      header: "header",
      footer: "footer",
      nav: "header",
      main: "box",
      p: "text",
      span: "text",
      li: "list",
      ul: "list",
      a: "link",
      h1: "heading",
      h2: "heading",
      h3: "heading",
      h4: "heading",
      h5: "heading",
      h6: "heading",
    };
    for (let key in allProp) {
      defaultObj.autoAddType(`${key}`, `${allProp[key]}`);
    }
  }
  init(btns = null, allLightTheme = null, lightTheme) {
    defaultObj.addDarkClasses(allLightTheme, lightTheme);
    defaultObj.handleMultipleBtn(btns);
    if (allLightTheme != null) {
      if (defaultObj.check("cur_sel_theme")) {
        defaultObj.toDark(allLightTheme);
      } else {
        defaultObj.toLight(allLightTheme);
      }
    }
  }
  start(options = {}) {
    let { hideButton, left, top, lightTheme, removeAutoDark } =
      defaultObj.manageOptions(options);
    if (hideButton == false) {
      defaultObj.createDefaultToggleBtn(top, left);
    }
    if (removeAutoDark == false) {
      defaultObj.manageAutoAddType();
    }

    let btns = document.querySelectorAll("[data-newtheme]");
    let allLightTheme = document.querySelectorAll("[data-type]");
    addEventListener("load", function () {
      defaultObj.init(btns, allLightTheme, lightTheme);
    });
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        defaultObj.handleMultipleTheme(this, allLightTheme, lightTheme);
      });
    });
  }
}
// exporting object of Theme class
const defaultObj = new Theme();
let start = defaultObj.start;
export { start as default };
