(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();(()=>{const n={openMobileMenu:document.querySelectorAll("[data-mobile-menu-open]"),closeMobileMenu:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),closeMenuLink:document.querySelectorAll(".mobile-modal-nav-link")};n.openMobileMenu.forEach(t=>{t.addEventListener("click",l)}),n.closeMobileMenu.addEventListener("click",l),n.closeMenuLink.forEach(t=>t.addEventListener("click",l)),n.mobileMenu.addEventListener("click",i);function i(t){t.target===t.currentTarget&&n.mobileMenu.classList.add("is-hidden")}function l(){n.mobileMenu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=commonHelpers.js.map
