import type { Metadata } from 'next';
import Link from 'next/link';
import MockupGrid from '@/components/MockupGrid';
import Reveal from '@/components/Reveal';
import ContactSection from '@/components/ContactSection';
import { caseStudies } from '@/lib/case-studies';
import { mockups, mockupKinds, mockupsByKind, mockupCountries } from '@/lib/mockups';
import s from './mockups.module.css';

export const metadata: Metadata = {
  title: 'Live mockups — web development',
  description:
    'Twenty-one full front-end builds deployed as live previews — e-commerce storefronts, business and service websites, and platforms. Open any of them and click around.',
};

export default function MockupsIndex() {
  let running = 0;

  return (
    <>
      <section className={`section ${s.head}`}>
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Web development</span>
            <span className="micro">({String(mockups.length).padStart(2, '0')}) · Live mockups</span>
          </div>

          <Reveal>
            <h1 className="display">Live mockups.</h1>
          </Reveal>

          <Reveal delay={0.08} className={s.intro}>
            <p className="lede">
              Full front-end builds, deployed as working previews rather than screenshots.
              Client work sits under NDA, so the case studies describe the industry rather than
              the company; these are the front ends I can show in full. Every one below is live —
              open it, resize it, click through it.
            </p>
            <div className={s.introMeta}>
              <span>
                <strong>{mockups.length}</strong> mockups
              </span>
              <span>
                <strong>{mockupKinds.length}</strong> kinds of build
              </span>
              <span>
                <strong>{mockupCountries.length}</strong> countries
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {mockupKinds.map((group) => {
        const items = mockupsByKind(group.kind);
        const start = running;
        running += items.length;
        return (
          <section key={group.kind} className="section section--tight" id={group.kind.toLowerCase().replace(/\s+/g, '-')}>
            <div className="wrap">
              <div className="eyebrow-row">
                <span className="micro">{group.title}</span>
                <span className="micro">({String(items.length).padStart(2, '0')})</span>
              </div>

              <Reveal className={s.groupHead}>
                <h2 className="h2">{group.title}.</h2>
                <p className="lede">{group.text}</p>
              </Reveal>

              <MockupGrid items={items} startIndex={start} />
            </div>
          </section>
        );
      })}

      <section className={`section section--tight ${s.crossBand}`}>
        <div className="wrap">
          <span className="micro">Looking for the numbers?</span>
          <Link href="/work" className={s.cross}>
            <span className={s.crossTitle}>Case studies.</span>
            <span className={s.crossMeta}>
              {caseStudies.length} client builds — the industry, the structure, the decisions and
              what each one produced.
            </span>
            <span className={s.crossArrow} aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <ContactSection heading={'Want one of these\nbuilt for real?'} />
    </>
  );
}
