import {
  CtaBand,
  DecisionPath,
  PageIntro,
  SectionHeading,
} from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { clarityOutcomes } from '@/lib/content';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Clarity for Foodservice Decisions',
  description:
    'A practical decision methodology for deciding whether a foodservice problem calls for process change, software, automation, AI, or no intervention.',
  path: '/clarity',
});

const wasteQuestions = [
  [
    'Locate the problem',
    'Is waste happening in purchasing, receiving, storage, prep, overproduction, portioning, spoilage, or menu complexity?',
  ],
  [
    'Test the assumption',
    'Is forecasting actually the constraint, or is the operation failing to act on information it already has?',
  ],
  [
    'Check the evidence',
    'Are counts, recipes, yields, sales, substitutions, and waste records dependable enough to support a decision?',
  ],
  [
    'Price the error',
    'What happens when a prediction is wrong—stockout, excess prep, lower quality, guest disappointment, or more manager work?',
  ],
  [
    'Compare the move',
    'Could a smaller menu, a receiving change, clearer prep decisions, or conventional automation solve the problem first?',
  ],
  [
    'Define value',
    'What would improve, by how much, over what period, and who will verify that the benefit is real?',
  ],
] as const;

export default function ClarityPage() {
  return (
    <>
      <SiteHeader current="clarity" />
      <main id="main-content">
        <PageIntro
          eyebrow="Clarity"
          index="P / 02"
          title="Before you automate, get clear."
          lede="Clarity is Echelon Foundry’s decision methodology. It turns a proposed tool into an inspectable choice about the problem, the evidence, the risk, and the next proportionate move."
        />

        <section className="section" aria-labelledby="path-title">
          <SectionHeading
            id="path-title"
            eyebrow="The decision path"
            title="Structure the reasoning without flattening the reality."
            intro="The sequence makes missing evidence, hidden assumptions, and competing interventions visible before momentum hardens around a tool."
          />
          <div className="page-shell">
            <DecisionPath />
          </div>
        </section>

        <section
          className="section section-paper clarity-example"
          aria-labelledby="example-title"
        >
          <SectionHeading
            id="example-title"
            eyebrow="Worked foodservice example"
            title="“We need AI to reduce food waste.”"
            intro="That statement contains a goal and a preferred intervention, but it does not yet identify the operating mechanism producing the waste."
          />
          <ol className="page-shell question-ledger">
            {wasteQuestions.map(([title, question], index) => (
              <li key={title}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{title}</h3>
                <p>{question}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section outcome-section"
          aria-labelledby="outcomes-title"
        >
          <SectionHeading
            id="outcomes-title"
            eyebrow="Possible decisions"
            title="AI is one outcome. It is not the default."
            intro="A disciplined process preserves the full option space until the evidence earns a narrower recommendation."
          />
          <ul className="page-shell outcome-list">
            {clarityOutcomes.map((outcome, index) => (
              <li key={outcome}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section section-dark"
          aria-labelledby="posture-title"
        >
          <div className="page-shell posture-grid">
            <div>
              <p className="eyebrow">Decision posture</p>
              <h2 id="posture-title">
                Enough confidence for the next move—not manufactured certainty.
              </h2>
            </div>
            <div>
              <p>
                Clarity does not force every question into a yes or no. It can
                recommend investigation, a reversible test, a constrained pilot,
                a purchase, implementation, or a deliberate stop.
              </p>
              <dl className="posture-definitions">
                <div>
                  <dt>Next move</dt>
                  <dd>The smallest action proportionate to the evidence.</dd>
                </div>
                <div>
                  <dt>Guardrail</dt>
                  <dd>A boundary that limits consequence while learning.</dd>
                </div>
                <div>
                  <dt>Success metric</dt>
                  <dd>The observable change that would count as value.</dd>
                </div>
                <div>
                  <dt>Stopping rule</dt>
                  <dd>The condition that ends the experiment or investment.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <CtaBand
          eyebrow="Clarity workshop"
          title="Bring one decision that has resisted easy answers."
          body="Leave with an explicit decision posture and a next move you can explain to operators, technical teams, and leadership."
        />
      </main>
      <SiteFooter />
    </>
  );
}
