import { CtaBand, PageIntro, SectionHeading } from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About the Culinary Practice',
  description:
    'Meet Kevin Miller and learn why Echelon Foundry combines software engineering, AI, decision methodology, and substantial culinary grounding for foodservice work.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader current="about" />
      <main id="main-content">
        <PageIntro
          eyebrow="About"
          index="P / 06"
          title="Echelon Foundry, applied to foodservice."
          lede="Culinary is a practice within Echelon Foundry: the same systems thinking, software depth, and demand for evidence—brought to the workflows and decisions that shape foodservice."
        />

        <section className="section" aria-labelledby="founder-title">
          <div className="page-shell founder-grid">
            <div>
              <p className="eyebrow">Founder & principal consultant</p>
              <h2 id="founder-title">Kevin Miller</h2>
              <p className="speaker-title">
                Founder & Principal Consultant, Echelon Foundry
              </p>
              <p className="speaker-descriptor">
                AI · Software Engineering · Foodservice Technology
              </p>
            </div>
            <div className="founder-copy">
              <p className="pull-quote">
                A technologist with deep culinary grounding—and a practice built
                to connect operating reality to technical decisions.
              </p>
              <p>
                Kevin brings more than 25 years of software engineering and
                technical leadership experience across architecture,
                modernization, AI systems, delivery, and decision frameworks.
              </p>
              <p>
                His culinary grounding comes from more than 40 years of cooking,
                Indiana State Fair culinary competition in categories including
                dips and brownies, catering experience, chocolatier work, and
                extensive informal study. That study has included Culinary
                Institute of America educational material and instruction from
                chefs trained at Le Cordon Bleu, in France, and in professional
                catering environments.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-paper"
          aria-labelledby="boundary-title"
        >
          <SectionHeading
            id="boundary-title"
            eyebrow="A precise claim"
            title="Culinary fluency is not restaurant-operator theater."
            intro="Kevin does not claim restaurant employment or operator experience. His role is to bring unusual technical depth to foodservice while understanding enough of the environment to ask better questions, observe the work carefully, and avoid designing from abstraction alone."
          />
          <div className="page-shell credibility-ledger">
            <div>
              <span>Technical foundation</span>
              <p>
                Architecture, modernization, software development, AI systems,
                integrations, technical assessment, reliability, and
                state-system research.
              </p>
            </div>
            <div>
              <span>Culinary foundation</span>
              <p>
                Four decades of practice, competition, catering, chocolatier
                work, and continuing informal culinary education.
              </p>
            </div>
            <div>
              <span>Team perspective</span>
              <p>
                The broader Echelon team adds restaurant, culinary
                demonstration, accessibility, and James Beard scholarship
                experience.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section section-dark"
          aria-labelledby="combination-title"
        >
          <SectionHeading
            id="combination-title"
            eyebrow="The combination"
            title="Domain fluency. Decision discipline. Engineering capability."
          />
          <div className="page-shell combination-grid">
            <div>
              <span>01</span>
              <h3>Culinary grounding</h3>
              <p>
                Enough fluency to recognize that service pressure, physical
                work, timing, accessibility, and exceptions change what a good
                system looks like.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Clarity</h3>
              <p>
                A disciplined way to separate the problem from the proposed
                solution and choose a proportionate next move.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Engineering depth</h3>
              <p>
                The ability to assess, advise, architect, modernize, integrate,
                and build when implementation is the evidence-backed answer.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="principles-title">
          <SectionHeading
            id="principles-title"
            eyebrow="Working principles"
            title="What guides the practice."
          />
          <dl className="page-shell principle-ledger">
            <div>
              <dt>Diagnosis before prescription.</dt>
              <dd>
                Do not choose a tool before locating the mechanism that produces
                the problem.
              </dd>
            </div>
            <div>
              <dt>Operational fit over feature count.</dt>
              <dd>
                A system is useful only when it works for the people, timing,
                constraints, and exceptions around it.
              </dd>
            </div>
            <div>
              <dt>Evidence before momentum.</dt>
              <dd>
                Make value, risk, uncertainty, and stopping conditions visible
                before scaling.
              </dd>
            </div>
            <div>
              <dt>Build only when building is earned.</dt>
              <dd>
                Custom software is a capability, not a predetermined
                recommendation.
              </dd>
            </div>
          </dl>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
