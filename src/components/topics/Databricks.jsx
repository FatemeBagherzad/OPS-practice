function Databricks() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">Databricks Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. What Databricks Is</h3>
        <ul>
          <li>Unified platform for data engineering, analytics, and ML.</li>
          <li>Built on Apache Spark for distributed processing.</li>
          <li>Runs notebooks, jobs, SQL warehouses, and Delta Lake tables.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. Delta Lake Basics</h3>
        <ul>
          <li>
            <strong>ACID transactions</strong> on data lake storage.
          </li>
          <li>
            <strong>Schema enforcement</strong> and schema evolution.
          </li>
          <li>
            <strong>Time travel</strong> for rollback and auditability.
          </li>
          <li>Optimized reads/writes for BI workloads.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>3. Medallion Architecture</h3>
        <ul>
          <li>
            <strong>Bronze:</strong> Raw ingested data.
          </li>
          <li>
            <strong>Silver:</strong> Cleaned and standardized data.
          </li>
          <li>
            <strong>Gold:</strong> Business-ready aggregated data.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>4. SQL + Notebook Workflow</h3>
        <ul>
          <li>Use SQL for analytics and reporting transformations.</li>
          <li>Use Python notebooks for complex ETL and quality checks.</li>
          <li>Schedule production pipelines as Databricks Jobs.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--red">
        <h3>5. Practical Interview Points</h3>
        <p className="cheat-note">
          "I use Databricks to transform raw data into trusted gold-layer data
          products using Delta Lake and medallion architecture, then serve
          analytics-ready datasets to Power BI."
        </p>
      </article>
    </section>
  );
}

export default Databricks;
