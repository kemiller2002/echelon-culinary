import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  CtaBand,
  DecisionPath,
  EngagementList,
  SectionHeading,
  StateFlow,
} from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { foodserviceSystems } from '@/lib/content';

const signals = [
  'Foodservice operations',
  'AI & automation',
  'Software engineering',
  'Workflow',
  'Productivity',
  'Accessibility',
];

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="main-content">
        <section className="hero grid-field" aria-labelledby="hero-title">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Echelon Foundry / Culinary practice</p>
              <h1 id="hero-title">
                Better foodservice operations, built on better technology.
              </h1>
              <p className="hero-lede">
                Echelon Foundry helps foodservice organizations improve
                workflows, productivity, and accessibility—and determine where
                software, automation, and AI can create measurable value.
              </p>
              <div className="button-row" aria-label="Primary actions">
                <Link className="button button-primary" href="/contact">
                  Discuss a foodservice problem
                  <ArrowUpRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.8}
                  />
                </Link>
                <Link className="button button-secondary" href="/clarity">
                  Explore Clarity
                </Link>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Practice focus">
              <div className="service-ticket">
                <div className="ticket-topline">
                  <span>Practice brief</span>
                  <span aria-hidden="true">EF / C-01</span>
                </div>
                <p className="ticket-statement">
                  Start with the operating problem. Choose the intervention
                  second.
                </p>
                <ol className="signal-list">
                  {signals.map((signal, index) => (
                    <li key={signal}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {signal}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
          <div className="page-shell hero-principle">
            <p className="eyebrow">Our position</p>
            <p>
              Technology should solve the realities of service—not ask the
              operation to work around the technology.
            </p>
          </div>
        </section>

        <section
          className="section section-paper"
          aria-labelledby="problems-title"
        >
          <div className="page-shell section-heading split-heading">
            <p className="eyebrow">At the pass</p>
            <div>
              <h2 id="problems-title">
                The work begins where service gets difficult.
              </h2>
              <p className="section-intro">
                Ordering, production, inventory, labor, and software meet in the
                same operating environment. Small points of friction compound
                quickly.
              </p>
            </div>
          </div>
          <div className="page-shell problem-preview">
            <article>
              <p className="item-number">01</p>
              <h3>Orders cross channels. Context gets lost.</h3>
              <p>
                Guest requests, exceptions, accessibility needs, and service
                recovery all depend on clean handoffs from ordering to
                execution.
              </p>
            </article>
            <article>
              <p className="item-number">02</p>
              <h3>The kitchen is asked to absorb system friction.</h3>
              <p>
                Prep, prioritization, availability, and production decisions
                happen under time pressure. The system has to respect that
                reality.
              </p>
            </article>
            <article>
              <p className="item-number">03</p>
              <h3>Managers become the integration layer.</h3>
              <p>
                Re-entry, reconciliation, repetitive communication, and
                exception handling consume the attention that operations
                actually need.
              </p>
            </article>
          </div>
        </section>

        <section
          className="section section-dark"
          aria-labelledby="approach-title"
        >
          <SectionHeading
            id="approach-title"
            eyebrow="Diagnosis before prescription"
            title="Find the constraint before choosing the tool."
            intro="A foodservice operation can look like it needs AI when the real problem is unclear ownership, unreliable reference data, a broken handoff, or work that should not exist."
          />
          <ol className="page-shell approach-sequence">
            <li>
              <span>01</span>
              <h3>Observe the service reality.</h3>
              <p>
                Follow the work, exceptions, timing, authority, and
                consequences—not only the happy path in a system diagram.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Compare interventions.</h3>
              <p>
                Simplification, process repair, vendor software, conventional
                automation, AI, and custom systems all stay on the table.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Make value testable.</h3>
              <p>
                Define the useful outcome, cost of oversight, guardrails,
                evidence, and stopping rule before scaling the investment.
              </p>
            </li>
          </ol>
        </section>

        <section className="section" aria-labelledby="systems-title">
          <SectionHeading
            id="systems-title"
            eyebrow="Foodservice systems"
            title="The operation is the architecture."
            intro="We organize the work around the systems foodservice teams actually have to run—not around a menu of generic technology capabilities."
          />
          <div className="page-shell system-index">
            {foodserviceSystems.map((system, index) => (
              <article key={system.title}>
                <p className="item-number">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3>{system.title}</h3>
                  <p className="system-signal">{system.signal}</p>
                </div>
                <p>{system.description}</p>
              </article>
            ))}
          </div>
          <div className="page-shell section-link">
            <Link href="/consulting">
              Explore the consulting practice{' '}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>

        <section
          className="section clarity-feature"
          aria-labelledby="clarity-title"
        >
          <SectionHeading
            id="clarity-title"
            eyebrow="Clarity"
            title="Before you automate, get clear."
            intro="Good AI decisions begin with problem clarity, not tool selection. Clarity turns a proposed solution back into a decision that can be examined."
          />
          <div className="page-shell clarity-case">
            <div className="case-prompt">
              <p className="eyebrow">Assumption brought to the room</p>
              <blockquote>“We need AI to reduce food waste.”</blockquote>
            </div>
            <div className="case-questions">
              <p className="eyebrow">Questions Clarity makes visible</p>
              <ul>
                <li>
                  Where is the waste occurring—purchasing, receiving, prep,
                  production, portioning, or spoilage?
                </li>
                <li>
                  Is the underlying data trustworthy enough to forecast from?
                </li>
                <li>
                  What happens when the recommendation is wrong during service?
                </li>
                <li>
                  Could a workflow change solve the constraint before software
                  is introduced?
                </li>
              </ul>
            </div>
          </div>
          <div className="page-shell">
            <DecisionPath compact />
          </div>
          <div className="page-shell section-link">
            <Link href="/clarity">
              See Clarity applied to foodservice{' '}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>

        <section
          className="section section-paper"
          aria-labelledby="engagements-title"
        >
          <SectionHeading
            id="engagements-title"
            eyebrow="Defined engagements"
            title="Start with a bounded piece of work."
            intro="You do not have to buy an open-ended transformation program. Bring one consequential problem, workflow, system, or decision."
          />
          <div className="page-shell">
            <EngagementList limit={3} />
          </div>
          <div className="page-shell section-link">
            <Link href="/consulting#engagements">
              View all consulting engagements{' '}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="page-shell why-grid">
            <div>
              <p className="eyebrow">Why Culinary</p>
              <h2 id="why-title">Technical depth with culinary fluency.</h2>
            </div>
            <div className="why-copy">
              <p className="pull-quote">
                We understand the technology—and we understand why the
                environment where it has to work changes the design.
              </p>
              <p>
                Echelon Foundry combines deep experience in software
                engineering, architecture, AI, and technical leadership with
                more than four decades of culinary practice. The broader team
                adds restaurant, culinary demonstration, and accessibility
                experience.
              </p>
              <Link href="/about">
                Read the practice story{' '}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section operational-section"
          aria-labelledby="operational-title"
        >
          <SectionHeading
            id="operational-title"
            eyebrow="Software engineering"
            title="Software built for operational reality."
            intro="Foodservice workflows have meaningful states. Not every next action should be possible, and authority and constraints should not disappear when AI participates."
          />
          <div className="page-shell operational-grid">
            <StateFlow />
            <div className="principle-pair">
              <p>
                <span>Decision layer</span>Clarity constrains the decision.
              </p>
              <p>
                <span>System layer</span>Our engineering approach constrains the
                system.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-split-feature"
          aria-labelledby="speaking-title"
        >
          <div className="page-shell feature-grid">
            <div className="feature-index" aria-hidden="true">
              S / 01
            </div>
            <div>
              <p className="eyebrow">Speaking & workshops</p>
              <h2 id="speaking-title">
                Bring One Restaurant Problem: Leave With an AI Decision.
              </h2>
              <p>
                An interactive session where participants test one real
                operating problem against evidence, consequence of error,
                verification cost, integration burden, and expected value.
              </p>
              <p className="feature-promise">
                Not a list of tools. A decision posture, a smallest useful
                experiment, a success metric, a guardrail, and a stopping rule.
              </p>
              <Link className="button button-secondary" href="/speaking">
                Explore the session
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section research-preview"
          aria-labelledby="research-title"
        >
          <div className="page-shell research-grid">
            <div>
              <p className="eyebrow">Research</p>
              <h2 id="research-title">Questions before claims.</h2>
            </div>
            <div>
              <p>
                Culinary research will examine where AI belongs in foodservice,
                why bad processes resist automation, and what an AI task
                actually costs once verification and operational risk are
                counted.
              </p>
              <p className="research-note">
                Work will be published when the evidence is ready.
              </p>
              <Link href="/research">
                See current lines of inquiry{' '}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
