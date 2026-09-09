import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/editorial';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Discuss a Foodservice Problem',
  description:
    'Start a conversation with Echelon Foundry Culinary about a foodservice workflow, software, automation, AI, accessibility, or decision problem.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader current="contact" />
      <main id="main-content">
        <PageIntro
          eyebrow="Contact"
          index="P / 07"
          title="Bring us a foodservice problem."
          lede="You do not need to decide whether the answer is AI, software, automation, process change, a product purchase, or nothing at all. That is part of the work."
        />

        <section
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="page-shell contact-grid">
            <div className="contact-action">
              <p className="eyebrow">Direct contact</p>
              <h2 id="contact-title">Start with the problem as you see it.</h2>
              <p>
                A short note is enough. Describe the part of the operation, who
                is affected, what keeps happening, and why it matters now.
              </p>
              <a
                className="contact-email"
                href="mailto:kevin@echelonfoundry.com?subject=A%20foodservice%20problem"
              >
                kevin@echelonfoundry.com
                <ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.6} />
              </a>
            </div>
            <aside className="contact-brief" aria-labelledby="brief-title">
              <div className="ticket-topline">
                <span id="brief-title">Useful context</span>
                <span aria-hidden="true">INTAKE / 01</span>
              </div>
              <ul>
                <li>
                  <span>01</span>Where in the foodservice operation the problem
                  appears
                </li>
                <li>
                  <span>02</span>What staff, guests, managers, or systems
                  experience
                </li>
                <li>
                  <span>03</span>What has already been tried or purchased
                </li>
                <li>
                  <span>04</span>What outcome would make the work worthwhile
                </li>
                <li>
                  <span>05</span>Any timing, access, safety, or implementation
                  constraints
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section-paper" aria-labelledby="next-title">
          <div className="page-shell next-grid">
            <div>
              <p className="eyebrow">What happens next</p>
              <h2 id="next-title">
                A fit conversation, not a commitment to a program.
              </h2>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>Clarify the situation</h3>
                  <p>
                    We will make sure we understand the operating problem,
                    consequence, and decision in front of you.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Decide whether Echelon is useful</h3>
                  <p>
                    If the problem fits the practice, we will identify a bounded
                    engagement or next conversation.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Keep the intervention open</h3>
                  <p>
                    No technology or build is assumed before the evidence
                    supports it.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
