(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const t={openMobileMenu:document.querySelectorAll("[data-mobile-menu-open]"),closeMobileMenu:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};t.openMobileMenu.forEach(n=>{n.addEventListener("click",r)}),t.closeMobileMenu.addEventListener("click",r),t.mobileMenu.addEventListener("click",i);function i(n){n.target===n.currentTarget&&t.mobileMenu.classList.add("is-hidden")}function r(){t.mobileMenu.classList.toggle("is-hidden"),t.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}})();
//# sourceMappingURL=commonHelpers.js.map
