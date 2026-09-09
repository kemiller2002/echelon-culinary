import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  CtaBand,
  EngagementList,
  PageIntro,
  SectionHeading,
} from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { foodserviceSystems } from '@/lib/content';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Foodservice Technology Consulting',
  description:
    'Defined consulting engagements for foodservice workflow, productivity, software architecture, automation, AI value, accessibility, and custom systems.',
  path: '/consulting',
});

export default function ConsultingPage() {
  return (
    <>
      <SiteHeader current="consulting" />
      <main id="main-content">
        <PageIntro
          eyebrow="Consulting"
          index="P / 01"
          title="One operating problem. A proportionate next move."
          lede="Independent, defined engagements for foodservice organizations that need to understand a workflow, system, technology decision, or investment before committing to a larger program."
        />

        <section
          className="section section-paper"
          aria-labelledby="scope-title"
        >
          <SectionHeading
            id="scope-title"
            eyebrow="Where the work lands"
            title="Foodservice systems, not abstract capabilities."
            intro="The same intervention can succeed in one operating context and fail in another. Scope begins with the environment, the people doing the work, and the consequence of getting it wrong."
          />
          <div className="page-shell consulting-systems">
            {foodserviceSystems.map((system, index) => (
              <article key={system.title}>
                <header>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{system.title}</h3>
                </header>
                <p>{system.description}</p>
                <ul aria-label={`Examples for ${system.title}`}>
                  {system.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="engagements"
          aria-labelledby="engagements-title"
        >
          <SectionHeading
            id="engagements-title"
            eyebrow="Engagement menu"
            title="Clear work. Clear outcome."
            intro="Each engagement can stand on its own. The finding may lead to a process change, a vendor decision, an experiment, a build, or a decision to leave the system alone."
          />
          <div className="page-shell">
            <EngagementList />
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="build-title">
          <div className="page-shell build-position">
            <div>
              <p className="eyebrow">Custom software</p>
              <h2 id="build-title">
                We can build. We do not begin by assuming we should.
              </h2>
            </div>
            <div>
              <p className="pull-quote light-quote">
                A legitimate recommendation is: don&apos;t build anything.
              </p>
              <p>
                When custom software is the right intervention, Echelon can
                carry the work from architecture through implementation. When a
                simpler process, existing product, or bounded automation will do
                the job better, the recommendation should say so.
              </p>
              <Link href="/clarity">
                See how the decision is made{' '}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="section accessibility-section"
          aria-labelledby="accessibility-title"
        >
          <SectionHeading
            id="accessibility-title"
            eyebrow="Accessibility"
            title="Access is part of the operating system."
            intro="Menus, ordering, employee tools, service interactions, and physical experiences can all create barriers. An accessibility review connects those barriers to the workflow and to the people affected."
          />
          <div className="page-shell two-column-notes">
            <div>
              <h3>Customer-facing</h3>
              <p>
                Menus, digital ordering, visual access, service handoffs,
                exception handling, and recovery.
              </p>
            </div>
            <div>
              <h3>Employee-facing</h3>
              <p>
                Training, internal tools, task communication, workflow cues, and
                systems used under real operating conditions.
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Start bounded"
          title="Bring one workflow, system, or decision."
          body="We will start by understanding what is happening, why it matters, and what evidence would support a useful next move."
        />
      </main>
      <SiteFooter />
    </>
  );
}
