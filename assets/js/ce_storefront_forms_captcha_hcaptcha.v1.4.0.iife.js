!(function () {
  "use strict";

  function t(t) {
    return Array.from(Array(t), () => Math.random().toString(36)[2]).join("");
  }
  const n = "form_key",
    e = [
      "recaptcha-v3-token",
      "g-recaptcha-response",
      "h-captcha-response",
      "password",
    ],
    s = () => {
      try {
        return window.sessionStorage;
      } catch {
        return;
      }
    },
    a = (t) => t.elements[n],
    o = (function (n) {
      let e;
      return () =>
        e ||
        ((e = new Promise((n, s) =>
          new Promise((n, e) => {
            const s = `__shopify_hcap_load_${t(8)}`,
              a = `https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off&onload=${s}`,
              o = setTimeout(() => {
                window.hcaptcha
                  ? (console.warn(
                      "hCaptcha already loaded - was the script downloaded more than once?"
                    ),
                    n(window.hcaptcha))
                  : e(new Error("hCaptcha load timeout"));
              }, 6e4);
            (window[s] = () => {
              clearTimeout(o), delete window[s], n(window.hcaptcha);
            }),
              (function (t) {
                new Promise((n, e) => {
                  const s = document.createElement("script");
                  (s.src = t),
                    (s.async = !0),
                    (s.defer = !0),
                    (s.onload = n),
                    (s.onerror = (t) => {
                      var n;
                      const s = new Error(
                        `The captcha provider script ${
                          (null == (n = null == t ? void 0 : t.target)
                            ? void 0
                            : n.src) || ""
                        } didn't load correctly.`
                      );
                      e(s);
                    }),
                    document.body.append(s);
                });
              })(a);
          })
            .then(n)
            .catch((t) => {
              (e = null), s(t);
            })
        )),
        e);
    })();
  const c = "shop-hcaptcha-badge-container";
  function r(t) {
    return document.querySelector(t);
  }

  function i(t, n, e) {
    const s = Object.assign(document.createElement(t), n);
    return e && e.append(s), s;
  }

  function h(t, n, e, s) {
    return i(
      "a",
      { href: n, target: "_blank", textContent: e, className: s },
      i("li", {}, t)
    );
  }
  const l = "h-captcha",
    p = "data-hcaptcha-bound";

  function d(o, c, r, i = !1) {
    if (!o || o.getAttribute(p)) return;
    if (!c || !c.execute) throw new Error("hcaptcha is required");
    if (!r) throw new Error("siteKey is required");
    const h = (function (t, n) {
        const e = t.querySelector(`.${l}`);
        if (e) return e;
        const s = (function (t) {
          const n = document.createElement("div");
          return (
            (n.className = l),
            n.setAttribute("data-sitekey", t),
            n.setAttribute("data-size", "invisible"),
            n
          );
        })(n);
        return t.append(s), s;
      })(o, r),
      f = c.render(
        h,
        (function (t, n, e) {
          return {
            "expire-callback": () => {
              d(t, n, e);
            },
          };
        })(o, i, c)
      ),
      u = (function (t, n) {
        const e = (function (t) {
          return "function" == typeof t.submit
            ? t.submit
            : HTMLFormElement.prototype.submit;
        })(t).bind(t);
        return (function (t, s) {
          let a;
          return () => {
            a ||
              ((a = !0),
              n().then(
                () => {
                  e();
                },
                (t) => {
                  console.error("form submit failed", t);
                }
              ),
              setTimeout(() => (a = !1), 250));
          };
        })();
      })(o, () =>
        c.execute(f, { async: !0 }).then(({ response: c }) => {
          const r = "h-captcha-response";
          o.elements[r] ||
            o.append(
              Object.assign(document.createElement("input"), {
                type: "hidden",
                name: r,
              })
            ),
            (o.elements[r].value = c),
            i &&
              (function (o) {
                try {
                  if (!s()) return;
                  !(function (t) {
                    const n = s();
                    if (!n) return;
                    const e = a(t);
                    if (!e) return;
                    const o = e.value;
                    o && n.removeItem(o);
                  })(o);
                  const c = t(32);
                  !(function (t, e) {
                    a(t) ||
                      t.append(
                        Object.assign(document.createElement("input"), {
                          type: "hidden",
                          name: n,
                        })
                      ),
                      (t.elements[n].value = e);
                  })(o, c),
                    (function (t, n) {
                      const a = s();
                      if (!a) return;
                      const o = [
                          ...t.querySelectorAll('input[type="password"]'),
                        ].map(({ name: t }) => t),
                        c = [...e, ...o],
                        r = {};
                      for (const [e, s] of new FormData(t).entries())
                        c.includes(e) || (r[e] = s);
                      a.setItem(n, JSON.stringify(r));
                    })(o, c);
                } catch (c) {
                  console.error("failed to persist form", c);
                }
              })(o);
        })
      );
    !(function (t, n) {
      if ("function" == typeof t.submit && "function" == typeof n)
        try {
          t.submit = n;
        } catch {}
    })(o, u),
      o.addEventListener("submit", (t) => {
        t.preventDefault(), u();
      }),
      o.setAttribute(p, !0);
  }

  const f = function (t, n, e, s) {
    if (t)
      return (async function () {
        return o();
      })()
        .then((a) => {
          d(t, a, n, e),
            s &&
              (function (t) {
                if (r("p[data-spam-detection-disclaimer]") || r(`#${c}`))
                  return;
                const { infoText: n, privacyText: e, termsText: s } = t,
                  a = "https://hcaptcha.com/",
                  o = i("div", { id: c });
                i(
                  "img",
                  {
                    width: 44,
                    src: `data:image/svg+xml;utf8,${encodeURIComponent(
                      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 482.3 482.3" style="enable-background:new 0 0 482.3 482.3" xml:space="preserve">\n<style>.st0,.st2,.st3{fill:#1074bc;opacity:.5;enable-background:new}.st2,.st3{opacity:.7;fill:#0c82bf}.st3{opacity:.8}.st5{opacity:.5;fill:#048fbf}.st5,.st6,.st8{enable-background:new}.st6{fill:#048fbf;opacity:.8}.st8{opacity:.7}.st8,.st9{fill:#019ec0}.st10{opacity:.7;enable-background:new}.st10,.st11{fill:#00abbf}.st12,.st13,.st15,.st16,.st18{enable-background:new;opacity:.5;fill:#02b8be}.st13,.st15,.st16,.st18{opacity:.8}.st15,.st16,.st18{opacity:.7;fill:#31bdba}.st16,.st18{opacity:.8}.st18{opacity:.5;fill:#47c0b4}</style>\n<path class="st0" d="M301.5 422h60.3v60.3h-60.3z"/>\n<path d="M241.2 422h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="enable-background:new;opacity:.7;fill:#1074bc"/>\n<path class="st0" d="M120.6 422h60.3v60.3h-60.3z"/>\n<path class="st2" d="M361.8 361.8h60.3v60.3h-60.3z"/>\n<path class="st3" d="M301.5 361.8h60.3v60.3h-60.3z"/>\n<path d="M241.2 361.8h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="fill:#0c82bf"/>\n<path class="st3" d="M120.6 361.8h60.3v60.3h-60.3z"/>\n<path class="st2" d="M60.3 361.8h60.3v60.3H60.3z"/>\n<path class="st5" d="M422 301.5h60.3v60.3H422z"/>\n<path class="st6" d="M361.8 301.5h60.3v60.3h-60.3z"/>\n<path d="M301.5 301.5h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="fill:#048fbf"/>\n<path class="st6" d="M60.3 301.5h60.3v60.3H60.3z"/>\n<path class="st5" d="M0 301.5h60.3v60.3H0z"/>\n<path class="st8" d="M422 241.2h60.3v60.3H422z"/>\n<path class="st9" d="M361.8 241.2h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z"/>\n<path class="st9" d="M60.3 241.2h60.3v60.3H60.3z"/>\n<path class="st8" d="M0 241.2h60.3v60.3H0z"/>\n<path class="st10" d="M422 180.9h60.3v60.3H422z"/>\n<path class="st11" d="M361.8 180.9h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z"/>\n<path class="st11" d="M60.3 180.9h60.3v60.3H60.3z"/>\n<path class="st10" d="M0 180.9h60.3v60.3H0z"/>\n<path class="st12" d="M422 120.6h60.3v60.3H422z"/>\n<path class="st13" d="M361.8 120.6h60.3v60.3h-60.3z"/>\n<path d="M301.5 120.6h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="fill:#02b8be"/>\n<path class="st13" d="M60.3 120.6h60.3v60.3H60.3z"/>\n<path class="st12" d="M0 120.6h60.3v60.3H0z"/>\n<path class="st15" d="M361.8 60.3h60.3v60.3h-60.3z"/>\n<path class="st16" d="M301.5 60.3h60.3v60.3h-60.3z"/>\n<path d="M241.2 60.3h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="fill:#31bdba"/>\n<path class="st16" d="M120.6 60.3h60.3v60.3h-60.3z"/>\n<path class="st15" d="M60.3 60.3h60.3v60.3H60.3z"/>\n<path class="st18" d="M301.5 0h60.3v60.3h-60.3z"/>\n<path d="M241.2 0h60.3v60.3h-60.3zm-60.3 0h60.3v60.3h-60.3z" style="opacity:.7;fill:#47c0b4;enable-background:new"/>\n<path class="st18" d="M120.6 0h60.3v60.3h-60.3z"/>\n<path d="m158.8 222.1 16.8-37.6c6.1-9.6 5.3-21.4-1.4-28.1-.9-.9-1.9-1.7-2.9-2.4-4.7-2.9-10.3-3.5-15.5-1.8-5.8 1.8-10.8 5.7-14 10.8 0 0-23 53.7-31.6 77.8S105 309.2 138 342.3c35 35 85.7 43 118 18.7 1.4-.7 2.6-1.5 3.8-2.5l99.6-83.2c4.8-4 12-12.2 5.6-21.6-6.3-9.2-18.1-2.9-23 .2l-57.3 41.7c-1.1.9-2.7.8-3.6-.3 0 0 0-.1-.1-.1-1.5-1.8-1.7-6.5.6-8.4l87.9-74.6c7.6-6.8 8.6-16.8 2.5-23.6-6-6.7-15.5-6.5-23.2.4l-79.1 61.9c-1.5 1.2-3.7 1-4.9-.5 0-.1-.1-.1-.1-.2-1.6-1.8-2.2-4.7-.4-6.5l89.6-86.9c7.1-6.6 7.5-17.7.9-24.7-3.2-3.3-7.6-5.2-12.2-5.2-4.7-.1-9.2 1.7-12.6 5l-91.6 86c-2.2 2.2-6.5 0-7-2.6-.2-.9.1-1.9.8-2.6l70.1-79.8c7-6.5 7.4-17.4.9-24.4s-17.4-7.4-24.4-.9c-.3.3-.6.5-.8.8L171.5 225.9c-3.8 3.8-9.4 4-12.1 1.8-1.7-1.3-2-3.8-.6-5.6z" style="fill:#fff"/>\n</svg>'
                    )}`,
                    alt: n,
                  },
                  o
                );
                const l = i("div", { className: "info" });
                i("span", { textContent: n }, l);
                const p = i("ul", { className: "links" }, l);
                h(p, `${a}privacy`, e, "privacy"),
                  h(p, `${a}terms`, s, "terms"),
                  (function () {
                    const t = [
                      `#${c} {\n      position: fixed;\n\n      bottom: 20px;\n      left: calc(100vw - 56px);\n      z-index: 9999;\n\n      display: flex;\n      justify-content: space-evenly;\n      transition: transform 450ms;\n\n      height: 55px;\n\n      border-top-left-radius: 12px;\n      border-bottom-left-radius: 12px;\n      box-shadow: #CCC 0px 0px 8px;\n\n      color: #FFF;\n      background-color: #FFF;\n    }`,
                      `#${c}:hover {\n      transform: translateX(calc(-100% + 56px));\n    }`,
                      `#${c} * {\n      all: unset;\n    }`,
                      `#${c} img {\n      width: 44px;\n      margin: 0 6px;\n    }`,
                      `#${c} a {\n      color: #FFF;\n      font-size: 10px;\n      text-decoration: none;\n      cursor: pointer;\n      font-weight: 300;\n    }`,
                      `#${c} a:hover {\n      text-decoration: underline;\n      text-underline-offset: 0.3em;\n    }`,
                      `#${c} .info {\n      display: flex;\n      text-wrap: nowrap;\n      padding: 4px 12px;\n\n      cursor: auto;\n\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 4px;\n\n      background-color: #00ABBF;\n\n      font-family: Inter, Helvetica, sans-serif;\n      font-size: 12px;\n      line-height: 1;\n    }`,
                      `#${c} .info {\n      font-weight: 600;\n    }`,
                      `#${c} .links {\n      display: flex;\n      width: 100%;\n      gap: 4px;\n      list-style: none;\n    }`,
                      `#${c} .links li + li:before {\n      content: "·";\n      padding-right: 4px;\n    }`,
                      `@media (prefers-reduced-motion: reduce) {\n      #${c} {\n        transition: none;\n      }\n    }`,
                    ];
                    try {
                      const n = new CSSStyleSheet();
                      n.replaceSync(t.join("\n")),
                        document.adoptedStyleSheets.push(n);
                    } catch {
                      const n = document.createElement("style");
                      document.head.appendChild(n),
                        t.forEach((t, e) => {
                          n.sheet.insertRule(t, e);
                        });
                    }
                  })(),
                  o.append(l),
                  document.body.append(o);
              })(s);
        })
        .catch((t) => {
          console.error("hcaptcha load error", t);
        });
  };
  (window.Shopify = window.Shopify || {}),
    (window.Shopify.ce_forms = window.Shopify.ce_forms || {}),
    (window.Shopify.ce_forms.bindForm = f),
    window.Shopify.ce_forms.q &&
      (window.Shopify.ce_forms.q.forEach(([t, n]) =>
        f(...t).then(() => "function" == typeof n && n())
      ),
      delete window.Shopify.ce_forms.q);
})();