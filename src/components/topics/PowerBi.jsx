function PowerBi() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">📊 Power BI Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. Core Building Blocks</h3>
        <ul>
          <li>
            <strong>Dataset (semantic model):</strong> Your tables +
            relationships + measures.
          </li>
          <li>
            <strong>Report:</strong> Interactive pages built from visuals.
          </li>
          <li>
            <strong>Dashboard:</strong> Single-page pinned tiles in Power BI
            Service.
          </li>
          <li>
            <strong>Workspace:</strong> Collaboration and publishing space.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. Typical Workflow</h3>
        <ol>
          <li>Get data (CSV, Excel, SQL, APIs).</li>
          <li>Transform in Power Query (clean, rename, type, merge).</li>
          <li>Model data (star schema, keys, relationships).</li>
          <li>Create measures with DAX.</li>
          <li>Build visuals and slicers.</li>
          <li>Publish to Power BI Service and share securely.</li>
        </ol>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>3. Data Modeling Essentials</h3>
        <ul>
          <li>
            Use <strong>star schema</strong>: one fact table, multiple
            dimensions.
          </li>
          <li>Avoid many-to-many unless truly needed.</li>
          <li>
            Set correct data types and mark date table for time intelligence.
          </li>
          <li>Hide technical keys from report view to keep UX clean.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>4. Visual Design Rules</h3>
        <ul>
          <li>Start with KPI cards for top metrics.</li>
          <li>Use bar/column charts for comparisons.</li>
          <li>Use line charts for trends over time.</li>
          <li>Limit colors and keep consistent labels/units.</li>
          <li>Use tooltips and drill-through for deeper detail.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--orange">
        <h3>5. Performance Quick Wins</h3>
        <ul>
          <li>Keep model lean: remove unused columns/tables.</li>
          <li>Prefer measures over calculated columns when possible.</li>
          <li>Avoid high-cardinality columns in visuals and slicers.</li>
          <li>Reduce heavy custom visuals on one page.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--neutral">
        <h3>6. Interview Talking Points</h3>
        <p className="cheat-note">
          "I use Power BI with a model-first approach: clean data in Power
          Query, design a star schema, build reusable DAX measures, and present
          clear KPI-driven reports with accessible visual choices."
        </p>
      </article>
    </section>
  );
}

export default PowerBi;
