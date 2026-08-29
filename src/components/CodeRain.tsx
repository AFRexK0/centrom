const SNIPPETS = [
  `boot> centrom.studio
INIT memory.bank .... OK
LOAD modules/shopify
LOAD modules/wordpress
LOAD modules/hosting
RUN deploy --quiet
echo "signal locked"`,
  `function ship(build) {
  return build
    .compile()
    .test()
    .host()
    .handOff();
}`,
  `SELECT * FROM clients
WHERE mid_market = true
ORDER BY trust DESC;`,
  `crt.phosphor = #39ff9a
crt.scanlines = on
studio.mode = multi-desk
await request();`,
  `npm run build
vite optimize
wp-cli plugin update
shopify theme push
uptime: 99.9`,
]

export function CodeRain() {
  return (
    <div className="code-rain" aria-hidden="true">
      {SNIPPETS.map((snippet, i) => (
        <pre
          key={i}
          style={{
            left: `${8 + i * 18}%`,
            animationDuration: `${18 + i * 4}s`,
            animationDelay: `${-i * 3.5}s`,
            opacity: 0.35 + (i % 3) * 0.15,
          }}
        >
          {snippet}
        </pre>
      ))}
    </div>
  )
}
