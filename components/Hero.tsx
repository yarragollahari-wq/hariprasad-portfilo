'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { site, capabilities } from '@/lib/site';
import Marquee from './Marquee';
import s from './Hero.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

/** Base delay so the hero lands just after the preloader curtain lifts. */
const BASE = 1.85;

const WORDMARK = ['H', 'a', 'r', 'i', ' ', 'P', 'r', 'a', 's', 'a', 'd'];

const PILLARS = [
  'Website development',
  'Custom Shopify development',
  'Systems, APIs & AWS',
  'AI & voice agents',
];

export default function Hero() {
  return (
    <section className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={`wrap ${s.inner}`}>
        <motion.div
          className={s.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: BASE }}
        >
          <span className={s.dot} aria-hidden="true" />
          <span className="micro">Full-stack &amp; AI development · US · UK · Gulf · India</span>
        </motion.div>

        <h1 className={s.wordmark} aria-label={site.name}>
          <span className={s.wordmarkLine}>
            {WORDMARK.map((ch, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING, delay: BASE + 0.04 + i * 0.04 }}
              >
                {ch === ' ' ? ' ' : ch}
              </motion.span>
            ))}
            <motion.span
              className={s.reg}
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING, delay: BASE + 0.42 }}
            >
              *
            </motion.span>
          </span>
          <motion.span
            className={s.wordmarkSub}
            aria-hidden="true"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: BASE + 0.34 }}
          >
            Yarragolla
          </motion.span>
        </h1>

        <div className={s.grid}>
          <motion.ul
            className={s.pillars}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: BASE + 0.5 }}
          >
            {PILLARS.map((p) => (
              <li key={p}>
                <span className={s.pillarDash} aria-hidden="true" />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className={s.statement}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: BASE + 0.58 }}
          >
            <p className={s.statementText}>
              No configured templates. No handover you cannot maintain.
              <br />
              I build the storefront, the software and the systems underneath — and the AI and
              voice agents that run on top of them.
            </p>

            <div className={s.actions}>
              <Link href="/work" className="btn">
                See the work
                <Arrow />
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Start a conversation
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={s.card}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: BASE + 0.66 }}
          >
            <span className="micro">From data model to deploy</span>
            <p className={s.cardStat}>
              <span className={s.cardStatValue}>1,467</span>
              <span className={s.cardStatLabel}>
                products in a single custom Shopify build — live in under a week
              </span>
            </p>
            <Link href="/contact" className={s.cardLink}>
              Talk to {site.first}
              <Arrow />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={s.ticker}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: BASE + 0.8 }}
      >
        <Marquee duration={42} gap={0} edgeToEdge>
          {capabilities.map((c) => (
            <span key={c} className={s.tickerItem}>
              {c}
              <span className={s.tickerDot} aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
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
