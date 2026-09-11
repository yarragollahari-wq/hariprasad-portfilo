import type { Metadata } from 'next';
import Link from 'next/link';
import WorkList from '@/components/WorkList';
import Reveal from '@/components/Reveal';
import Stats from '@/components/Stats';
import ContactSection from '@/components/ContactSection';
import { caseStudies } from '@/lib/case-studies';
import { mockups } from '@/lib/mockups';
import { site } from '@/lib/site';
import s from './work.module.css';

export const metadata: Metadata = {
  title: 'Case studies',
  description:
    'Twelve builds — custom Shopify storefronts, Next.js websites, internal software and systems. The client, the structure, the decisions and the numbers.',
};

export default function WorkIndex() {
  return (
    <>
      <section className={`section ${s.head}`}>
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Selected work</span>
            <span className="micro">
              ({String(caseStudies.length).padStart(2, '0')}) · Delivered at {site.studio}
            </span>
          </div>

          <Reveal>
            <h1 className="display">Case studies.</h1>
          </Reveal>

          <Reveal delay={0.08} className={s.intro}>
            <p className="lede">
              Storefronts, websites, custom software and the systems underneath them — delivered
              at {site.studio}, and published with the client named. What is written up is the
              structure, the decisions and the numbers each build actually produced, including the
              projects that are still too early to claim a result.
            </p>
            <div className={s.introMeta}>
              <span>
                <strong>12</strong> builds
              </span>
              <span>
                <strong>6</strong> markets
              </span>
              <span>
                <strong>4</strong> continents
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <WorkList items={caseStudies} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Across the book</span>
            <span className="micro">Live dashboard figures</span>
          </div>
          <Stats />
        </div>
      </section>

      <section className={`section section--tight ${s.crossBand}`}>
        <div className="wrap">
          <span className="micro">Under NDA? There are still things to see</span>
          <Link href="/mockups" className={s.cross}>
            <span className={s.crossTitle}>Live mockups.</span>
            <span className={s.crossMeta}>
              {mockups.length} full front-end builds deployed as working previews — storefronts,
              business sites and platforms you can open and click through.
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

      <ContactSection heading={'Want something\nbuilt like this?'} />
    </>
  );
}
