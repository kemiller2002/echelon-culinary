import { CtaBand, PageIntro, SectionHeading } from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Foodservice Technology Research',
  description:
    'Echelon Foundry research at the intersection of foodservice operations, AI, automation, software, accessibility, productivity, and decision-making.',
  path: '/research',
});

const inquiries = [
  {
    code: 'RQ / 01',
    title: 'Before You Automate',
    question:
      'How should a foodservice organization decide whether AI belongs in a specific operating problem?',
    scope:
      'Problem definition, consequence of error, data quality, reversibility, verification cost, and proportional experimentation.',
  },
  {
    code: 'RQ / 02',
    title: 'Stop Automating Bad Processes',
    question:
      'When does automation increase the speed and scale of work that should have been simplified or eliminated?',
    scope:
      'Workflow observation, handoffs, exception load, rework, hidden managerial labor, and the cost of preserving a broken process.',
  },
  {
    code: 'RQ / 03',
    title: 'What Does an AI Task Actually Cost?',
    question:
      'What changes when oversight, correction, integration, failure, and operational interruption are counted—not only model usage?',
    scope:
      'Human verification, latency, integration, governance, reversibility, reliability, and value under real service conditions.',
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      <SiteHeader current="research" />
      <main id="main-content">
        <PageIntro
          eyebrow="Research"
          index="P / 03"
          title="Practice informed by evidence, not appetite for novelty."
          lede="Echelon Foundry Culinary studies the decisions and systems between foodservice operations and technology: where interventions create value, where they shift cost, and where they should stop."
        />

        <section className="section" aria-labelledby="inquiry-title">
          <SectionHeading
            id="inquiry-title"
            eyebrow="Current lines of inquiry"
            title="Questions under examination."
            intro="These are research directions, not published articles or finished claims. Work will be added when it has enough evidence to be useful."
          />
          <div className="page-shell inquiry-list">
            {inquiries.map((inquiry) => (
              <article key={inquiry.code}>
                <p className="eyebrow">{inquiry.code}</p>
                <h3>{inquiry.title}</h3>
                <p className="inquiry-question">{inquiry.question}</p>
                <p className="inquiry-scope">
                  <span>Scope</span>
                  {inquiry.scope}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section section-paper"
          aria-labelledby="method-title"
        >
          <SectionHeading
            id="method-title"
            eyebrow="Research posture"
            title="Observe the system. Test the mechanism. Keep uncertainty visible."
          />
          <ol className="page-shell research-method">
            <li>
              <span>01</span>
              <h3>Frame a consequential question</h3>
              <p>
                Begin with a decision that affects foodservice work, cost,
                access, reliability, or value.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Collect operating evidence</h3>
              <p>
                Separate what the workflow is supposed to do from what people
                actually have to do.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Compare explanations</h3>
              <p>
                Test assumptions, causal mechanisms, alternatives, and boundary
                conditions.
              </p>
            </li>
            <li>
              <span>04</span>
              <h3>Publish what survives</h3>
              <p>
                Make evidence, confidence, limits, and implications available
                without forcing certainty.
              </p>
            </li>
          </ol>
        </section>

        <section
          className="section section-dark"
          aria-labelledby="network-title"
        >
          <div className="page-shell network-grid">
            <div>
              <p className="eyebrow">The broader network</p>
              <h2 id="network-title">
                Culinary draws from the full Echelon research practice.
              </h2>
            </div>
            <div>
              <p>
                AI Engineering, Communication Engineering, Framework
                Engineering, Software Engineering, and Visual Engineering
                provide connected bodies of research for dependable systems,
                decision quality, architecture, and human understanding.
              </p>
              <a
                className="button button-light"
                href="https://echelonfoundry.com/research/"
              >
                Explore Echelon research ↗
              </a>
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="A problem worth studying"
          title="Bring a foodservice system that resists easy answers."
          body="A focused consulting question can become the starting point for evidence, not a sales narrative looking for confirmation."
        />
      </main>
      <SiteFooter />
    </>
  );
}
