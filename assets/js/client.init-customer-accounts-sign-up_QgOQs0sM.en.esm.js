import {
  _ as t,
  bT as e,
  bU as n,
  B as o,
  at as s,
  bV as i,
  bW as a,
  bX as r,
  bY as c,
  bZ as u,
  b_ as l,
  aJ as d,
  b7 as m,
  b$ as b,
  D as v,
  be as f,
  bf as p,
  bR as g,
} from "./chunk.common_INJqqS6p.esm.js";
import {
  C as y,
  d as h,
  c as _,
} from "./client.login-button_C9IPdYM9.en.esm.js";
function A() {
  return t(this, void 0, void 0, function* () {
    if (!e("initCustomerAccountsSignUp")) {
      n("initCustomerAccountsSignUp");
      try {
        !(function () {
          const t = s(),
            e = new y({
              elementName: "shop-login-button",
              flowVersion: i.SignUp,
              analyticsTraceId: t,
            }),
            n = new WeakMap();
          let f = null;
          const p = a({
            onVisible: _,
            onFallback: (t) => {
              t.addEventListener("focus", g, { once: !0 }),
                e.trackShopPayLoginWithSdkErrorEvents({
                  apiKey: "",
                  errorCode: "fallback_to_focus_event",
                  errorMessage:
                    "Fallback to focus event for classic customer accounts",
                });
            },
          });
          function g(t) {
            _(t.target);
          }
          function h(t, e) {
            var n, o;
            const s =
                null === (n = t.elements.namedItem("checkout_url")) ||
                void 0 === n
                  ? void 0
                  : n.value,
              i =
                null === (o = t.elements.namedItem("return_url")) ||
                void 0 === o
                  ? void 0
                  : o.value,
              a = new URLSearchParams(
                Object.assign(
                  Object.assign(
                    { analytics_trace_id: e },
                    s && { checkout_url: s }
                  ),
                  i && { return_url: i }
                )
              );
            return `${window.location.origin}/account/redirect?${a.toString()}`;
          }
          function _(s) {
            var a;
            const r = s.form;
            if (!r)
              return void o.notify(
                new Error("Email form missing for classic customer accounts")
              );
            n.has(s) &&
              (o.notify(new Error("Input listener already exists for input")),
              null === (a = n.get(s)) || void 0 === a || a.destroy(),
              n.delete(s));
            const c = document.createElement("input");
            (c.type = "hidden"),
              (c.name = "login_with_shop[analytics_trace_id]"),
              (c.value = t),
              r.appendChild(c),
              f ||
                ((f = (function (t) {
                  const e = new m("modalDismissed", !1),
                    n = null === document.querySelector(b),
                    o = e.value,
                    s = n && !o,
                    a = document.createElement("shop-login-button");
                  a.setAttribute("client-id", ""),
                    a.setAttribute("action", "default"),
                    a.setAttribute("version", "2"),
                    a.setAttribute("flow-version", i.SignUp),
                    a.setAttribute(
                      "analytics-context",
                      v.ClassicCustomerAccounts
                    ),
                    a.setAttribute("analytics-trace-id", t),
                    a.setAttribute("hide-button", "true"),
                    a.setAttribute("disable-sign-up", "true"),
                    s && a.setAttribute("auto-open", "true");
                  return document.body.appendChild(a), a;
                })(t)),
                e.trackClassicCustomerAccountsCreateAccountPageImpression(),
                f.addEventListener("completed", () => {
                  const e = h(r, t);
                  window.location.assign(e);
                }));
            const p = r.querySelector(u),
              g = r.querySelector(l);
            (f.firstName = null == p ? void 0 : p.value),
              (f.lastName = null == g ? void 0 : g.value),
              (f.email = s.value),
              n.set(
                s,
                new d(s, (t) => {
                  (f.firstName = null == p ? void 0 : p.value),
                    (f.lastName = null == g ? void 0 : g.value),
                    (f.email = t);
                })
              );
          }
          r({ selector: c, onElementFound: (t) => p.observe(t) });
        })();
      } catch (t) {
        t instanceof Error && o.notify(t);
      }
    }
  });
}
f() &&
  (p({ bundle: "initCustomerAccountsSignUp", bundleLocale: "en" }),
  h(),
  _(),
  g("initCustomerAccountsSignUp", A));
//# sourceMappingURL=client.init-customer-accounts-sign-up_QgOQs0sM.en.esm.js.map