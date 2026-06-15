export function HowItWorks() {
  return (
    <div className="how-it-works">

      <section className="hiw-section">
        <h2>About this project</h2>
        <p>
          I'm a product manager with a deep interest in sports analytics and AI.
          As someone who has followed the Italian national team for years — through
          the highs, the lows, and the inexplicable playoff exits — I kept coming
          back to the same question: what are we actually losing by not having Italy
          at the World Cup?
        </p>
        <p>
          Rather than debating it with friends over dinner, I built a simulation
          engine and let the data do the talking. This project sits at the
          intersection of football analytics, probability modeling, software
          engineering, and product thinking. It started as a curiosity and turned
          into something I'm genuinely proud of.
        </p>
        <p>
          If you want to share feedback, swap ideas, or just talk football —
          feel free to reach out.
        </p>
      </section>

      <section className="hiw-section">
        <h2>What you can do here</h2>
        <div className="hiw-cards">
          <div className="hiw-card">
            <h3>Realistic Mode</h3>
            <p>Simulate the tournament using current team strengths, form, and attacking and defensive ratings.</p>
          </div>
          <div className="hiw-card">
            <h3>Italy Mode</h3>
            <p>Put Italy back in the draw and see how often the Azzurri reach the knockout stages, the final, or go all the way.</p>
          </div>
          <div className="hiw-card">
            <h3>What-If Scenarios</h3>
            <p>Build alternative realities — injuries, suspensions, players in peak form. Stack modifiers and share the scenario via URL.</p>
          </div>
          <div className="hiw-card">
            <h3>Team Comparison</h3>
            <p>Pick any two nations and get a direct head-to-head probability breakdown, expected goals, and historical record.</p>
          </div>
        </div>
      </section>

      <section className="hiw-section">
        <h2>How the simulation works</h2>
        <p>
          Every time you hit Simulate, the engine runs 100,000 complete World Cups —
          group stage, best third-placed teams, Round of 32 through to the final —
          entirely in your browser in roughly half a second. No server, no API, no data
          leaving your device.
        </p>
        <p>
          Each match is modelled using a bivariate Poisson distribution with a
          Dixon-Coles correction, computing the probability of every possible scoreline
          up to 7 goals per side. The winner is drawn from those probabilities — the
          favourite doesn't advance automatically. In any single run, Bolivia can beat
          France. Unlikely, but not impossible.
        </p>
        <p>
          The final percentages are empirical frequencies: if France appears as champion
          in 28,000 of 100,000 runs, their win probability is 28%. The animated bracket
          shows one possible tournament — not the average outcome, not the most likely one.
        </p>
      </section>

      <section className="hiw-section">
        <h2>The Strength Score</h2>
        <p>
          Every team gets a Strength Score — a 0 to 100 index combining six signals,
          each weighted by how reliably it predicts match outcomes.
        </p>
        <ul className="hiw-list">
          <li><strong>Elo rating</strong> — the strongest predictor, built on decades of international results</li>
          <li><strong>Attack and Defense</strong> — estimated via a hierarchical Bayesian model trained on ~49,000 matches</li>
          <li><strong>Recent form</strong> — last 30 matches, time-decay weighted, deliberately kept at low weight since it's a noisy signal</li>
          <li><strong>Knockout experience</strong> — historical performance in single-elimination rounds, applied only in KO matches</li>
          <li><strong>Squad value</strong> — market value as a secondary proxy for squad depth</li>
          <li><strong>Head-to-head record</strong> — adjusts goal probabilities by ±1–3pp based on historical matchup data since 1994</li>
        </ul>
      </section>

      <section className="hiw-section">
        <h2>What-If scenarios</h2>
        <p>
          The what-if modifiers are openly labelled as heuristics — they're not part of
          the predictive model and aren't calibrated to the same precision. They're
          designed to be playful and exploratory: form boosts, injury penalties, a chaos
          factor that makes the whole tournament more unpredictable.
        </p>
        <p>
          Every scenario is encoded in the URL, so you can share exactly what you've
          built with anyone.
        </p>
      </section>

      <section className="hiw-section">
        <h2>What this is not</h2>
        <p>
          This is not a live prediction platform. The underlying data — Elo ratings,
          squad values, the official group draw — are snapshots from June 2026. They
          don't update automatically and don't account for last-minute injuries, tactical
          decisions, or anything that happens after the data was collected.
        </p>
        <p>
          It's a personal project driven by genuine curiosity about what the numbers say.
          If you use it to place bets, that's entirely on you.
        </p>
      </section>

      <section className="hiw-section">
        <h2>Disclaimer</h2>
        <p>
          This is an independent fan-made analytics project. It is not affiliated with,
          endorsed by, or connected to FIFA or any national football association. All
          team names and tournament references remain the property of their respective
          owners.
        </p>
      </section>

      <section className="hiw-section">
        <h2>Privacy</h2>
        <p>
          No registration required. No personal data collected beyond standard
          anonymised analytics used to improve the platform.
        </p>
      </section>

    </div>
  );
}