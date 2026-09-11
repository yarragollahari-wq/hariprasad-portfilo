'use client';

import { motion } from 'motion/react';
import type { Mockup } from '@/lib/mockups';
import s from './MockupGrid.module.css';

const SPRING = { type: 'spring', damping: 27, stiffness: 121, mass: 0.3 } as const;

/**
 * Cards for the live mockups. Each one opens the deployed preview in a new
 * tab — the point is that a visitor can click around the real thing, so
 * there is no write-up in between. The whole card is the primary link;
 * secondary routes (a product page, a service page) sit above it so they
 * stay clickable without nesting anchors.
 */
export default function MockupGrid({
  items,
  startIndex = 0,
}: {
  items: Mockup[];
  startIndex?: number;
}) {
  return (
    <ul className={s.grid}>
      {items.map((item, i) => (
        <motion.li
          key={item.slug}
          className={s.card}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...SPRING, delay: (i % 3) * 0.06 }}
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={s.primary}
            aria-label={`Open the ${item.name} mockup in a new tab`}
          >
            <span className={s.top}>
              <span className={s.index}>{String(startIndex + i + 1).padStart(2, '0')}</span>
              <span className={s.kind}>{item.kind}</span>
            </span>

            <span className={s.name}>{item.name}</span>

            <span className={s.meta}>
              <span>{item.sector}</span>
              <span className={s.metaDot} aria-hidden="true" />
              <span>{item.market}</span>
            </span>

            <span className={s.blurb}>{item.blurb}</span>
          </a>

          <span className={s.foot}>
            {item.pages ? (
              <span className={s.pages}>
                {item.pages.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.page}
                  >
                    {p.label}
                    <Arrow />
                  </a>
                ))}
              </span>
            ) : (
              <span className={s.host}>{host(item.url)}</span>
            )}

            <span className={s.go} aria-hidden="true">
              <Arrow />
            </span>
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function host(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
