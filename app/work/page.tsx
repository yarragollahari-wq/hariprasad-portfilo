import type { Metadata } from 'next';
import WorkList from '@/components/WorkList';
import Reveal from '@/components/Reveal';
import Stats from '@/components/Stats';
import ContactSection from '@/components/ContactSection';
import { caseStudies } from '@/lib/case-studies';
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

      <ContactSection heading={'Want something\nbuilt like this?'} />
    </>
  );
}
