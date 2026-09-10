import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';
import s from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell me what you are building — a store, a site, an internal tool, or the systems and agents behind them. I will tell you what I would build first, and in what order.',
};

export default function ContactPage() {
  return (
    <>
      <section className={`section ${s.head}`}>
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Get in touch</span>
            <span className="micro">US · UK · Gulf · India</span>
          </div>

          <Reveal>
            <h1 className="display">Let’s talk.</h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className={s.lede}>
              You will get me, not a sales team. Bring the brief, the platform you are stuck on,
              or the process that is eating your week — and I will tell you honestly whether a
              build is the right answer at all.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactSection heading={'Have something\nyou need built?'} />

      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="micro">Before you write</span>
            <span className="micro">FAQ</span>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
