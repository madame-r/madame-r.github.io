import { setScrollBehavior } from "./modules/setScrollBehavior.js";
import { openMenu } from "./modules/openMenu.js";
import { switchArrowScroll } from "./modules/switchArrowScroll.js";






setScrollBehavior();
window.addEventListener('resize', setScrollBehavior);

openMenu("menu", "icon-menu");

switchArrowScroll();