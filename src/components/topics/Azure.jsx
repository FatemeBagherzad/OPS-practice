function Azure() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">Azure Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. Core Azure Data Services</h3>
        <ul>
          <li>
            <strong>Azure SQL Database:</strong> Managed relational database.
          </li>
          <li>
            <strong>Azure Data Lake Storage Gen2:</strong> Scalable data lake.
          </li>
          <li>
            <strong>Azure Data Factory:</strong> ETL/ELT pipelines and
            orchestration.
          </li>
          <li>
            <strong>Azure Synapse Analytics:</strong> Integrated analytics
            workspace.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. Typical Data Flow</h3>
        <ol>
          <li>Ingest data from source systems.</li>
          <li>Store raw data in Data Lake.</li>
          <li>Transform via ADF/Synapse/Databricks.</li>
          <li>Serve curated data to BI tools.</li>
          <li>Apply access control, monitoring, and governance.</li>
        </ol>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>3. Security Essentials</h3>
        <ul>
          <li>
            Use <strong>Entra ID (Azure AD)</strong> for identity and RBAC.
          </li>
          <li>Prefer managed identities over secrets in code.</li>
          <li>Encrypt data at rest and in transit.</li>
          <li>Use Key Vault for secrets/certificates.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--orange">
        <h3>4. Interview Soundbite</h3>
        <p className="cheat-note">
          "I use Azure with a lakehouse mindset: secure ingestion, governed
          storage, reliable transformation pipelines, and curated datasets for
          Power BI reporting."
        </p>
      </article>
    </section>
  );
}

export default Azure;
