function MccssAccessibility() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">
        📋 MCCSS / Accessibility Cheat Sheet
      </h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. MCCSS Programs to Know</h3>
        <ul>
          <li>
            <strong>Ontario Works (OW):</strong> Social assistance for people in
            financial need - money for food, housing, health benefits, and
            employment participation.
          </li>
          <li>
            <strong>ODSP:</strong> Support for adults with disabilities - income
            support, health/disability benefits, and employment supports.
          </li>
          <li>
            <strong>Ontario Autism Program (OAP):</strong> Support for
            children/youth under 18 with ASD - foundational family services,
            clinical services, entry-to-school supports, and urgent response.
          </li>
          <li>
            <strong>Anti-Human Trafficking:</strong> Ontario's strategy focuses
            on awareness, early intervention, protecting victims, supporting
            survivors, and holding offenders accountable.
          </li>
          <li>
            <strong>Broader MCCSS mandate:</strong> Supports children, youth,
            families, low-income Ontarians, adults with developmental
            disabilities, survivors of violence, and women's economic
            opportunity.
          </li>
        </ul>

        <h3>2. What MCCSS Does Overall</h3>
        <ul>
          <li>
            Improves outcomes for children, youth, families, and individuals who
            need support.
          </li>
          <li>
            Oversees child/youth programs, social assistance, developmental
            services, community supports, and anti-human trafficking services.
          </li>
          <li>
            Works in a policy-heavy, privacy-sensitive environment where public
            trust, service quality, accessibility, and evidence-based decisions
            matter.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>3. Data Strategy and Solutions Platform Branch</h3>
        <ul>
          <li>
            Modernizes how Social Assistance data is{' '}
            <strong>modeled, governed, validated, and used</strong>.
          </li>
          <li>
            Builds and supports integrated reporting platforms, cloud-based
            analytics, and data products.
          </li>
          <li>
            Cares about: data correctness, version control, validation,
            maintainability, user-centred analytics, and accessibility.
          </li>
        </ul>
        <p className="cheat-note">
          💬{' '}
          <em>
            "This branch focuses on building reliable, accessible analytics
            products on top of governed data models so policy and operational
            teams can make evidence-based decisions."
          </em>
        </p>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>4. GO-ITS Standards</h3>
        <p>
          <strong>GO-ITS</strong> = Government of Ontario Information Technology
          Standards - the government's internal IT framework covering security,
          accessibility, privacy, architecture, governance, and delivery
          practices.
        </p>
        <ul>
          <li>
            <strong>GO-ITS 25 (Security):</strong> Systems handling government
            data must be designed with security controls, access control, risk
            awareness, and protection of sensitive data throughout design,
            development, and operations.
          </li>
          <li>
            <strong>GO-ITS 54 (Accessibility):</strong> Accessibility is
            mandatory in public-sector digital services - it must be considered
            in design, implementation, testing, and delivery, aligned with AODA
            and WCAG.
          </li>
        </ul>
        <p className="cheat-note">
          💬{' '}
          <em>
            "GO-ITS standards ensure accessibility, security, privacy, and
            consistency are built into delivery expectations - not treated as
            afterthoughts."
          </em>
        </p>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>5. WCAG 2.1 - The Essentials</h3>
        <p>
          WCAG is organized around <strong>4 principles: POUR</strong>
        </p>
        <ul>
          <li>
            <strong>Perceivable:</strong> Users must be able to perceive content
            (text alternatives, captions, contrast, adaptable layout).
          </li>
          <li>
            <strong>Operable:</strong> Users must be able to operate the
            interface (keyboard access, no traps, visible focus, navigation).
          </li>
          <li>
            <strong>Understandable:</strong> Content must be understandable
            (clear labels, predictable behavior, error messages).
          </li>
          <li>
            <strong>Robust:</strong> Content must work with assistive
            technologies (semantics, name/role/value, status messages).
          </li>
        </ul>
        <p>
          <strong>Levels:</strong> A (basic) - AA (standard public-sector
          target) - AAA (enhanced)
        </p>
        <p>
          <strong>Key WCAG 2.1 items:</strong> keyboard access, contrast
          (4.5:1), focus visibility, labels, error identification, reflow,
          non-text contrast, text spacing, content on hover/focus, status
          messages, touch/pointer accessibility.
        </p>
      </article>

      <article className="cheat-card cheat-card--orange">
        <h3>6. AODA Overview</h3>
        <p>
          <strong>AODA</strong> = Accessibility for Ontarians with Disabilities
          Act - Ontario's law for identifying, removing, and preventing
          barriers.
        </p>
        <p>
          <strong>Covers:</strong> customer service, information &
          communications, employment, transportation, design of public spaces.
        </p>
        <p className="cheat-note">
          💬{' '}
          <em>
            "AODA sets Ontario's accessibility requirements, and in digital
            delivery that means accessibility needs to be built into
            information, communication, employment processes, and user-facing
            services - it is a legal requirement, not a best practice."
          </em>
        </p>
      </article>

      <article className="cheat-card cheat-card--neutral">
        <h3>7. Key Terms to Remember</h3>
        <div className="cheat-tags">
          <span className="cheat-tag">evidence-based decision-making</span>
          <span className="cheat-tag">user-centred analytics</span>
          <span className="cheat-tag">data governance</span>
          <span className="cheat-tag">data quality</span>
          <span className="cheat-tag">validation</span>
          <span className="cheat-tag">semantic models</span>
          <span className="cheat-tag">accessibility compliance</span>
          <span className="cheat-tag">public trust</span>
          <span className="cheat-tag">privacy and security</span>
          <span className="cheat-tag">maintainability</span>
          <span className="cheat-tag">version control</span>
          <span className="cheat-tag">inclusive design</span>
          <span className="cheat-tag">sensitive ministry data</span>
          <span className="cheat-tag">public service delivery</span>
        </div>
      </article>

      <article className="cheat-card cheat-card--green-strong">
        <h3>8. 30-Second Interview Answer</h3>
        <p className="cheat-note">
          "I understand MCCSS supports critical programs like Ontario Works,
          ODSP, autism services, and anti-human trafficking supports, so the
          work has direct public impact. The Data Strategy and Solutions
          Platform Branch appears to focus on reliable, governed, cloud-based
          analytics products that support evidence-based decisions. I also
          understand accessibility is essential in this environment, including
          AODA, WCAG 2.1, and GO-ITS expectations around accessible and secure
          digital delivery."
        </p>
      </article>

      <article className="cheat-card cheat-card--red">
        <h3>9. Fast Study - Memorize These 5 Lines</h3>
        <ol>
          <li>
            MCCSS supports vulnerable Ontarians through OW, ODSP, autism
            services, and anti-human trafficking services.
          </li>
          <li>
            The branch builds governed, reliable, cloud-based analytics and
            reporting products.
          </li>
          <li>
            GO-ITS = Ontario government IT standards - security, accessibility,
            and delivery consistency.
          </li>
          <li>
            WCAG 2.1 = <strong>POUR</strong>: Perceivable, Operable,
            Understandable, Robust.
          </li>
          <li>
            AODA makes accessibility a <strong>legal requirement</strong> in
            Ontario.
          </li>
        </ol>
      </article>
    </section>
  );
}

export default MccssAccessibility;
