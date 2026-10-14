import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sections, RESUME } from './site';

// Hidden over the hero so the opening stays cinematic; slides in once the visitor starts scrolling.
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio < 0.6), {
      threshold: [0, 0.6, 1],
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Mobile menu: Esc closes it, focus stays inside, the page doesn't scroll behind it.
  useEffect(() => {
    if (!open) return;
    const button = menuButton.current;
    document.documentElement.style.overflow = 'hidden';
    menu.current?.querySelector('a')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && menu.current) {
        const items = menu.current.querySelectorAll('a, button');
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      button?.focus();
    };
  }, [open]);

  const shown = visible || open;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: shown ? 0 : '-100%', opacity: shown ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-40 bg-black/90 border-b border-rain-grey/60"
        aria-hidden={!shown}
        inert={!shown}
      >
        <nav
          aria-label="Main"
          className="container mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between"
        >
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="w-2 h-2 bg-blood-red" aria-hidden="true"></span>
            <span className="font-mono text-sm tracking-widest uppercase text-white group-hover:text-blood-red transition-colors">
              A. Sachdeva
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {sections.map(({ id, n, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`font-mono text-[12px] tracking-widest uppercase py-2 border-b transition-colors ${
                    active === id
                      ? 'text-white border-blood-red'
                      : 'text-mid-text border-transparent hover:text-white'
                  }`}
                >
                  <span className="text-blood-red mr-1.5">{n}</span>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME}
                download="Abhyuday_Sachdeva_Resume.pdf"
                className="font-mono text-[12px] tracking-widest uppercase border border-blood-red text-blood-red px-4 py-2 hover:bg-blood-red hover:text-black transition-colors"
              >
                Resume ↓
              </a>
            </li>
          </ul>

          <button
            ref={menuButton}
            type="button"
            className="lg:hidden font-mono text-[12px] tracking-widest uppercase text-white min-h-11 px-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menu}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-30 bg-black lg:hidden overflow-y-auto"
          >
            <ul className="px-6 py-10 space-y-2">
              {sections.map(({ id, n, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-3 text-3xl font-bold text-white tracking-tight border-b border-rain-grey/60"
                  >
                    <span className="font-mono text-sm text-blood-red">{n}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-6">
              <a
                href={RESUME}
                download="Abhyuday_Sachdeva_Resume.pdf"
                className="flex justify-center font-mono text-[13px] tracking-widest uppercase border border-blood-red text-blood-red px-8 py-4"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
