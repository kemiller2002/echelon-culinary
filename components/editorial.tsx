import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { claritySteps, engagements } from '@/lib/content';

export function PageIntro({
  eyebrow,
  title,
  lede,
  index,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  index: string;
}) {
  return (
    <section className="page-intro grid-field" aria-labelledby="page-title">
      <div className="page-shell page-intro-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
        </div>
        <div className="page-intro-side">
          <span aria-hidden="true">{index}</span>
          <p>{lede}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="page-shell section-heading split-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
    </div>
  );
}

export function DecisionPath({ compact = false }: { compact?: boolean }) {
  return (
    <ol
      className={`decision-path${compact ? ' decision-path-compact' : ''}`}
      aria-label="Clarity decision path"
    >
      {claritySteps.map((step, index) => (
        <li key={step}>
          <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
          {index < claritySteps.length - 1 ? (
            <ArrowRight aria-hidden="true" size={16} />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function EngagementList({ limit }: { limit?: number }) {
  const visible =
    typeof limit === 'number' ? engagements.slice(0, limit) : engagements;

  return (
    <ol className="engagement-list">
      {visible.map((engagement, index) => (
        <li key={engagement.title}>
          <span className="engagement-number" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3>{engagement.title}</h3>
            <p>{engagement.summary}</p>
          </div>
          <p className="engagement-outcome">
            <span>Outcome</span>
            {engagement.outcome}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function StateFlow({
  label = 'Illustrative order state',
  states = ['Received', 'Accepted', 'Preparing', 'Ready', 'Fulfilled'],
}: {
  label?: string;
  states?: readonly string[];
}) {
  return (
    <figure className="state-figure">
      <figcaption>{label}</figcaption>
      <ol className="state-flow">
        {states.map((state, index) => (
          <li key={state}>
            <span>{state}</span>
            {index < states.length - 1 ? (
              <ArrowRight aria-hidden="true" size={19} />
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function CtaBand({
  eyebrow = 'Bring us a problem',
  title = 'You do not need to know whether the answer is AI.',
  body = 'The first job is to understand the operating problem well enough to choose a proportionate next move.',
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="page-shell cta-grid">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{body}</p>
          <Link className="button button-light" href="/contact">
            Discuss a foodservice problem
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
