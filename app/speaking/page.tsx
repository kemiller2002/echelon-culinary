import {
  CtaBand,
  DecisionPath,
  PageIntro,
  SectionHeading,
} from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { workshopFactors, workshopTakeaways } from '@/lib/content';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Foodservice AI Speaker & Workshops',
  description:
    'Interactive foodservice AI decision workshops with Kevin Miller, Founder and Principal Consultant at Echelon Foundry.',
  path: '/speaking',
});

export default function SpeakingPage() {
  return (
    <>
      <SiteHeader current="speaking" />
      <main id="main-content">
        <PageIntro
          eyebrow="Speaking & workshops"
          index="P / 04"
          title="A useful session should change a decision."
          lede="Interactive, evidence-led sessions for foodservice leaders deciding where AI, automation, software, or process change belongs—and where it does not."
        />

        <section
          className="section flagship-section"
          aria-labelledby="flagship-title"
        >
          <div className="page-shell flagship-grid">
            <div className="flagship-label">
              <p className="eyebrow">Flagship interactive session</p>
              <span>Workshop / 01</span>
            </div>
            <div>
              <h2 id="flagship-title">
                Bring One Restaurant Problem: Leave With an AI Decision.
              </h2>
              <p className="flagship-lede">
                Around minute five, every participant chooses one real
                restaurant or foodservice problem. The rest of the session is
                devoted to making a better decision about that problem.
              </p>
              <blockquote>
                You are not leaving with a list of AI tools. You are leaving
                with a decision about one real problem in your operation.
              </blockquote>
              <dl className="session-facts">
                <div>
                  <dt>Format</dt>
                  <dd>Interactive workshop</dd>
                </div>
                <div>
                  <dt>Designed for</dt>
                  <dd>Restaurant operators and foodservice leaders</dd>
                </div>
                <div>
                  <dt>Participant outcome</dt>
                  <dd>One defensible decision posture</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section-paper" aria-labelledby="room-title">
          <SectionHeading
            id="room-title"
            eyebrow="How the room works"
            title="One problem moves through a visible decision process."
            intro="The format is participatory, but structured. Participants use a simplified Clarity path and keep the operating consequence in view."
          />
          <div className="page-shell">
            <DecisionPath compact />
          </div>
          <div className="page-shell workshop-grid">
            <div>
              <h3>Participants test</h3>
              <ul className="factor-list">
                {workshopFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Participants leave with</h3>
              <ol className="takeaway-list">
                {workshopTakeaways.map((takeaway, index) => (
                  <li key={takeaway}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {takeaway}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="value-title">
          <SectionHeading
            id="value-title"
            eyebrow="Educational value"
            title="Practical without becoming a product pitch."
            intro="The session teaches a transferable way to examine AI decisions. No vendor stack is required, and “do nothing” remains a legitimate result."
          />
          <div className="page-shell organizer-grid">
            <div>
              <h3>For operators</h3>
              <p>
                A way to move from “we should use AI” to a specific decision
                tied to one operating problem and one measurable outcome.
              </p>
            </div>
            <div>
              <h3>For technology leaders</h3>
              <p>
                A shared language for data quality, consequence of error,
                integration burden, human oversight, and system constraints.
              </p>
            </div>
            <div>
              <h3>For organizers</h3>
              <p>
                An interactive room with a concrete participant outcome,
                grounded in an original decision methodology rather than a
                product tour.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="speaker-title">
          <div className="page-shell speaker-grid">
            <div>
              <p className="eyebrow">Speaker</p>
              <h2 id="speaker-title">Kevin Miller</h2>
              <p className="speaker-title">
                Founder & Principal Consultant, Echelon Foundry
              </p>
              <p className="speaker-descriptor">
                AI · Software Engineering · Foodservice Technology
              </p>
            </div>
            <div>
              <p className="pull-quote">
                Kevin bridges technical depth, decision methodology, and more
                than four decades of culinary practice.
              </p>
              <p>
                His technology background spans software architecture,
                modernization, AI systems, technical leadership, and decision
                frameworks. His culinary grounding includes competition,
                catering, chocolatier work, and long-term informal study. The
                result is a practical perspective on technology that has to
                survive the realities of foodservice.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-paper"
          aria-labelledby="topics-title"
        >
          <SectionHeading
            id="topics-title"
            eyebrow="Additional topics"
            title="More questions worth putting in the room."
          />
          <ol className="page-shell topic-list">
            <li>
              <span>01</span>
              <h3>Stop Automating Bad Processes</h3>
            </li>
            <li>
              <span>02</span>
              <h3>The Hidden Cost of AI</h3>
            </li>
            <li>
              <span>03</span>
              <h3>From AI Pilot to Measurable Value</h3>
            </li>
            <li>
              <span>04</span>
              <h3>
                Before You Automate: Where AI Actually Belongs in Foodservice
              </h3>
            </li>
          </ol>
        </section>

        <CtaBand
          eyebrow="For conference organizers"
          title="Looking for a session with a practical outcome?"
          body="Share the audience, format, and decision you want participants to be better equipped to make."
        />
      </main>
      <SiteFooter />
    </>
  );
}
