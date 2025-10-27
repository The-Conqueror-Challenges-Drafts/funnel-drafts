'use client'

import Script from 'next/script'

export function CookieMonitor() {
  return (
    <Script
      id="cookie-monitor"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
        // =============================
        // Config
        // =============================
        // VIP: only _ga now
        const VIP_ADDED   = new Set(["_ga"]);
        const VIP_REMOVED = new Set(["_ga", "debug_cookie_id"]);
        const MASS_LOSS_THRESHOLD = 10;
        const RESTORE_MAX_AGE_S   = 60 * 60 * 24 * 365 * 2; // 2 years
        const RESTORE_SAMESITE    = "Lax";
        const REQUIRE_CONSENT     = false;
        function hasConsentToRestore() {
          return true;
        }
        window.dataLayer = window.dataLayer || [];
        // =============================
        // Utilities
        // =============================
        function parseCookies() {
          const map = new Map();
          const raw = document.cookie || "";
          if (!raw) return map;
          raw.split(/; */).forEach(pair => {
            if (!pair) return;
            const i = pair.indexOf("=");
            const name = i >= 0 ? pair.slice(0, i) : pair;
            const value = i >= 0 ? pair.slice(i + 1) : "";
            map.set(decodeURIComponent(name), decodeURIComponent(value));
          });
          return map;
        }
        /**
         * Attempt to set cookie at the **broadest viable domain first**.
         * Order we try (example host "www.domain.com"):
         *   1) "domain.com"  (preferred)
         *   2) "www.domain.com"
         * (For deeper hosts like "a.b.domain.com" we try "domain.com", "b.domain.com", "a.b.domain.com".)
         * We skip single-label like "com" and verify each attempt by readback.
         */
        function setCookieBestDomain(name, value, { maxAgeSec, path = "/", sameSite = "Lax", secure = true } = {}) {
          const parts = location.hostname.split(".");
          const parentFirst = [];
          // Build parent-first candidates: domain.com, b.domain.com, a.b.domain.com, ...
          for (let i = parts.length - 2; i >= 0; i--) {
            const d = parts.slice(i).join(".");
            if (d.includes(".")) parentFirst.push(d);
          }
          // Ensure the exact host is included once at the end (in case of edge cases)
          if (!parentFirst.includes(location.hostname)) {
            parentFirst.push(location.hostname);
          }
          const base = [
            \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)}\`,
            \`Path=\${path}\`,
            \`Max-Age=\${Math.max(0, maxAgeSec|0)}\`
          ];
          if (secure && location.protocol === "https:") base.push(\`Secure\`);
          if (sameSite) base.push(\`SameSite=\${sameSite}\`);
          for (const domain of parentFirst) {
            document.cookie = \`\${base.join("; ")}; Domain=\${domain}\`;
            const after = parseCookies();
            if (after.get(name) === String(value)) {
              return { ok: true, domainUsed: domain };
            }
          }
          // Fallback: host-only
          document.cookie = base.join("; ");
          const after = parseCookies();
          if (after.get(name) === String(value)) {
            return { ok: true, domainUsed: "(host-only)" };
          }
          return { ok: false, domainUsed: null };
        }
        // =============================
        // Watcher with mass-restore
        // =============================
        function trackCookies({ interval = 100, onChange = console.log } = {}) {
          let prev = parseCookies();
          let timer = null;
          const t0 = performance.now();
          const nowMs = () => Math.round(performance.now() - t0);
          function diffAndReport() {
            const now = parseCookies();
            const added = [];
            const removed = [];
            const changed = [];
            // added / changed
            for (const [k, v] of now) {
              if (!prev.has(k)) {
                added.push({ name: k, value: v });
                if (VIP_ADDED.has(k)) {
                  window.dataLayer.push({ event: "added_vip_cookie", cookie_name: k, value: v, ts_ms: nowMs() });
                }
              } else if (prev.get(k) !== v) {
                changed.push({ name: k, oldValue: prev.get(k), newValue: v });
              }
            }
            // removed
            for (const k of prev.keys()) {
              if (!now.has(k)) {
                const oldValue = prev.get(k);
                removed.push({ name: k, oldValue });
                if (VIP_REMOVED.has(k)) {
                  window.dataLayer.push({ event: "removed_vip_cookie", cookie_name: k, oldValue, ts_ms: nowMs() });
                }
              }
            }
            // MASS RESTORE
            if (
              removed.length >= MASS_LOSS_THRESHOLD &&
              removed.some(c => c.name === "_ga") &&
              (!REQUIRE_CONSENT || hasConsentToRestore())
            ) {
              let restored = 0;
              for (const { name, oldValue } of removed) {
                if (!name || typeof oldValue === "undefined") continue;
                const res = setCookieBestDomain(name, oldValue, {
                  maxAgeSec: RESTORE_MAX_AGE_S,
                  path: "/",
                  sameSite: RESTORE_SAMESITE,
                  secure: true
                });
                if (res.ok) restored++;
              }
              // Update snapshot post-restore
              prev = parseCookies();
              window.dataLayer.push({
                event: "mass_cookie_restore",
                cookies_restored: restored,
                ts_ms: nowMs()
              });
            } else {
              prev = now;
            }
            if (added.length || removed.length || changed.length) {
              onChange({
                ts_ms: nowMs(),
                added, removed, changed,
                count: parseCookies().size,
                snapshot: parseCookies()
              });
            }
          }
          timer = setInterval(diffAndReport, interval);
          return () => { clearInterval(timer); };
        }
        // Example usage
        const stopCookieWatch = trackCookies({
          interval: 100,
          onChange: ({ ts_ms, added, removed, changed, count }) => {
            console.group(\`[cookies +\${ts_ms}ms] total=\${count}\`);
            if (added.length)   console.log("added:", added);
            if (removed.length) console.log("removed:", removed);
            if (changed.length) console.log("changed:", changed);
            console.groupEnd();
          }
        });
        `,
      }}
    />
  )
}
