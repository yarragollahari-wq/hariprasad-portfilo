import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Stats from '@/components/Stats';
import ServicesAccordion from '@/components/ServicesAccordion';
import Process from '@/components/Process';
import WordReveal from '@/components/WordReveal';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import { caseStudies } from '@/lib/case-studies';
import { site } from '@/lib/site';
import s from './page.module.css';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />

      {/* ================= WORK ================= */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Selected work</span>
            <span className="micro">({String(caseStudies.length).padStart(2, '0')})</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">
              Case studies.
              <span className={s.headSup}>©{new Date().getFullYear()}</span>
            </h2>
            <p className="lede">
              Twelve builds — storefronts, sites, systems and an in-house product. Named clients,
              real structure, and the decisions behind each one rather than a gallery of thumbnails.
            </p>
          </Reveal>

          <WorkList items={caseStudies} />

          <Reveal delay={0.1} className={s.workFoot}>
            <Link href="/work" className="btn btn--ghost">
              All case studies
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= MARQUEE CTA ================= */}
      <div className={s.ctaBand}>
        <Marquee duration={30} gap={0} edgeToEdge pauseOnHover>
          <Link href="/contact" className={s.ctaItem}>
            Your growth starts with a conversation
            <span className={s.ctaDot} aria-hidden="true" />
            Let’s talk
            <span className={s.ctaDot} aria-hidden="true" />
          </Link>
        </Marquee>
      </div>

      {/* ================= STATS ================= */}
      <section className="section" id="results">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Why work with me</span>
            <span className="micro">Results, not reporting</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h2" style={{ maxWidth: '18ch' }}>
              No fluff. Just the numbers the account actually produced.
            </h2>
            <p className="lede">
              Every figure below comes from a build on this site. Nothing is modelled, rounded
               up, or borrowed from a project I did not ship.
            </p>
          </Reveal>

          <Stats />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">What I do</span>
            <span className="micro">(05)</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">Services.</h2>
            <p className="lede">
              Five disciplines, one stack. Most projects start with a site or a store and end up
              needing the systems, the integrations and the agents behind it — because the
              constraint is rarely where it first looked.
            </p>
          </Reveal>

          <ServicesAccordion />
        </div>
      </section>

      {/* ================= APPROACH (light) ================= */}
      <section className="section section--light" id="approach">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">How I work</span>
            <span className="micro">{site.name}®</span>
          </div>

          <div className={s.approachGrid}>
            <Reveal>
              <h2 className="h2" style={{ maxWidth: '14ch' }}>
                Not an agency. One builder who owns the whole stack.
              </h2>
            </Reveal>

            <Reveal delay={0.08} className={s.approachBody}>
              <p className={s.approachLede}>
                Most studios are hired for one layer. They design the front end, hand over a
                template, and the integrations, the infrastructure and the internal tooling become
                somebody else’s problem. I take the whole stack, because the seams between those
                layers are where projects actually fail.
              </p>
              <p className={s.approachLede}>
                In the work on this site, the highest-value thing I did was often outside the
                design scope entirely — scripting a catalogue out of a platform that offered no
                export, building a B2B quote channel no theme ships, or structuring forty brands
                and twenty-nine product types before a single template was written.
              </p>
            </Reveal>
          </div>

          <div className={s.processWrap}>
            <Process />
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className={`section ${s.manifesto}`}>
        <div className="wrap">
          <div className={s.manifestoGrid}>
            <div className={s.manifestoLeft}>
              <span className="micro micro--accent">My approach is simple</span>
            </div>
            <WordReveal text="A developer does not just build what you asked for. A developer builds the thing that still works at ten times the volume." />
          </div>

          <Reveal delay={0.1} className={s.manifestoFoot}>
            <p className="body" style={{ maxWidth: '58ch' }}>
              I do not overpromise or hide behind flashy language. Every build on this site was
              scoped, structured and shipped on a documented process — and where a project is too
              early to claim a result, the case study says exactly that instead.
            </p>
            <Link href="/contact" className="btn">
              Start a conversation
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">About</span>
            <span className="micro">(01)</span>
          </div>

          <Reveal className={s.sectionHead}>
            <h2 className="h1">
              Who you actually
              <br />
              work with.
            </h2>
            <p className="lede">
              No account managers, no hand-offs, no junior writing the code. You talk to the
              person building it, every time.
            </p>
          </Reveal>

          <Team />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section section--tight" id="faq">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">FAQ</span>
            <span className="micro">Straight answers</span>
          </div>

          <div className={s.faqGrid}>
            <Reveal>
              <h2 className="h2">FAQ.</h2>
              <p className="lede" style={{ marginTop: 14, maxWidth: '32ch' }}>
                Everything worth knowing before you get in touch.
              </p>
            </Reveal>
            <div>
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

function Arrow() {
  return (
    <svg className="btn__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
