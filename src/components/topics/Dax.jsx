function Dax() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">🧮 DAX Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. What DAX Is</h3>
        <ul>
          <li>DAX = Data Analysis Expressions used in Power BI models.</li>
          <li>
            Mostly used for <strong>measures</strong> and calculated columns.
          </li>
          <li>Measures are calculated at query time and respond to filters.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. Context Basics</h3>
        <ul>
          <li>
            <strong>Row context:</strong> Calculation per row (common in
            calculated columns).
          </li>
          <li>
            <strong>Filter context:</strong> Current report
            filters/slicers/visual scope.
          </li>
          <li>
            <strong>CALCULATE()</strong> changes filter context.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>3. Most Useful Functions</h3>
        <ul>
          <li>
            <strong>SUM()</strong>, <strong>AVERAGE()</strong>,{' '}
            <strong>COUNT()</strong>, <strong>DISTINCTCOUNT()</strong>
          </li>
          <li>
            <strong>CALCULATE()</strong> for context transition and custom
            filters
          </li>
          <li>
            <strong>FILTER()</strong> for row-level filter logic
          </li>
          <li>
            <strong>ALL()</strong>, <strong>REMOVEFILTERS()</strong>,{' '}
            <strong>ALLEXCEPT()</strong>
          </li>
          <li>
            <strong>DIVIDE(a,b,0)</strong> for safe division
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>4. Time Intelligence Pattern</h3>
        <ul>
          <li>Create and mark a proper Date table.</li>
          <li>Common measures: YTD, MTD, same period last year.</li>
          <li>
            Functions: <strong>TOTALYTD()</strong>, <strong>DATEADD()</strong>,{' '}
            <strong>SAMEPERIODLASTYEAR()</strong>
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--orange">
        <h3>5. Practical Measure Examples</h3>
        <p>
          <strong>Total Sales:</strong> SUM(Sales[Amount])
        </p>
        <p>
          <strong>Avg Order Value:</strong> DIVIDE([Total Sales], [Order Count],
          0)
        </p>
        <p>
          <strong>Sales YTD:</strong> TOTALYTD([Total Sales], 'Date'[Date])
        </p>
        <p>
          <strong>YoY %:</strong> DIVIDE([Total Sales] - [Sales LY], [Sales LY],
          0)
        </p>
      </article>

      <article className="cheat-card cheat-card--red">
        <h3>6. Common Mistakes to Avoid</h3>
        <ul>
          <li>Using calculated columns where measures are better.</li>
          <li>Ignoring filter context when results look wrong.</li>
          <li>Not using DIVIDE() for denominator safety.</li>
          <li>Building time-intelligence without a valid Date table.</li>
        </ul>
        <p className="cheat-note">
          Tip: Start simple, test measure output in a table visual, then
          optimize.
        </p>
      </article>
    </section>
  );
}

export default Dax;
