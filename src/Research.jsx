import React from 'react';
import { motion } from 'framer-motion';
import results from './data/results.json';

// Copy from the revised manuscript (under review, 2026). Figures match results/table_main.csv.
const findings = [
  {
    pull: '60–90%',
    text: 'Telling the model to answer only when certain cut hallucination by 60–90% on every model (Llama 21% to 3%, Qwen 35% to 8%, gpt-oss-120b 31% to 12%), but mostly by refusing. Abstention rose to 73%, 72% and 39%.',
  },
  {
    pull: '31% → 15%',
    text: "Asking gpt-oss-120b to check the question's premises first cut its hallucination from 31% to 15%, the lowest rate of any strategy that doesn't rely on refusal, with the most correct answers in the study (84%).",
  },
  {
    pull: '70',
    text: 'Expert personas had no effect on hallucination. Asking for sources produced 70 citations that were fabricated or misattributed, across 300 responses.',
  },
];

const segments = [
  { key: 'Correct', className: 'bg-light-text' },
  { key: 'Hallucinated', className: 'bg-blood-red' },
  { key: 'Abstained', className: 'bg-rain-grey hatch' },
];

const Chart = () => (
  <figure className="mt-16">
    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-mono text-[11px] tracking-widest uppercase text-mid-text" aria-hidden="true">
      {segments.map((s) => (
        <span key={s.key} className="flex items-center gap-2">
          <span className={`inline-block w-3 h-3 ${s.className}`}></span>
          {s.key}
        </span>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10" aria-hidden="true">
      {results.models.map((model, m) => (
        <div key={model.name}>
          <p className="text-white font-bold mb-5">{model.name}</p>
          <div className="space-y-4">
            {model.rows.map((row, r) => (
              <div key={r}>
                <div className="flex justify-between font-mono text-[11px] tracking-wider uppercase text-mid-text mb-1.5">
                  <span>{results.strategies[r]}</span>
                  <span className="text-blood-red">{row[1]}% halluc.</span>
                </div>
                <div className="flex h-3 gap-[2px]">
                  {row.map((value, s) =>
                    value > 0 ? (
                      <motion.div
                        key={s}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: m * 0.15 + r * 0.06 + s * 0.1 }}
                        style={{ width: `${value}%`, transformOrigin: 'left' }}
                        className={segments[s].className}
                      />
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <table className="sr-only">
      <caption>Share of correct, hallucinated and abstained responses, out of 100 per strategy and model</caption>
      <thead>
        <tr>
          <th scope="col">Model</th>
          <th scope="col">Strategy</th>
          <th scope="col">Correct</th>
          <th scope="col">Hallucinated</th>
          <th scope="col">Abstained</th>
        </tr>
      </thead>
      <tbody>
        {results.models.flatMap((model) =>
          model.rows.map((row, r) => (
            <tr key={model.name + r}>
              <td>{model.name}</td>
              <td>{results.strategies[r]}</td>
              <td>{row[0]}%</td>
              <td>{row[1]}%</td>
              <td>{row[2]}%</td>
            </tr>
          )),
        )}
      </tbody>
    </table>

    <figcaption className="mt-8 text-mid-text text-sm max-w-3xl">
      <span className="font-mono text-[11px] tracking-widest uppercase text-white mr-2">Fig. 1</span>
      Correct, hallucinated and abstained responses for each prompting strategy and model. Each bar is 100 responses.
    </figcaption>
  </figure>
);

const Research = () => {
  return (
    <section id="research" className="py-24 md:py-32 relative z-10 pointer-events-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-mono text-[12px] tracking-[0.3em] uppercase text-blood-red mb-4">02 · Case File</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          The Case File.
        </h2>

        <div className="border-l-2 border-blood-red pl-6 max-w-4xl">
          <p className="font-mono text-[11px] tracking-widest uppercase text-mid-text mb-3">
            Under review · 2026
          </p>
          <h3 className="text-xl md:text-2xl text-white font-semibold leading-snug">
            A Systematic Evaluation of Prompting Strategies for Hallucination Mitigation in LLMs
          </h3>
          <p className="text-mid-text text-sm mt-3">
            <span className="text-light-text">Abhyuday Sachdeva</span> · Prisha Verma · Sendhil Kumar K. S. · VIT
          </p>
        </div>

        <p className="text-light-text leading-relaxed mt-10 max-w-3xl md:text-lg">
          Prompting is the cheapest way to reduce hallucination in language models, but fewer errors
          often just means more refusals. I compared 5 prompting strategies on Llama 3.1 8B, Qwen2.5 7B
          and gpt-oss-120b, using 100 questions built around false premises, fictional entities,
          post-cutoff events, obscure facts and ambiguity. All 1,500 responses were labelled correct,
          hallucinated or abstained.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {findings.map((f, i) => (
          <motion.div
            key={f.pull}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="border-t border-rain-grey pt-6"
          >
            <p className="font-mono text-[11px] tracking-widest uppercase text-mid-text">Finding 0{i + 1}</p>
            <p className="text-5xl md:text-6xl font-extrabold text-blood-red tracking-tight mt-3 mb-4">{f.pull}</p>
            <p className="text-light-text text-[15px] leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>

      <Chart />

      <blockquote className="mt-16 border-y border-rain-grey py-8 max-w-3xl">
        <p className="text-white text-xl md:text-2xl font-semibold leading-snug">
          “Mitigation prompts should be judged on abstention and on errors among answered questions,
          not on hallucination rate alone.”
        </p>
      </blockquote>

      <a
        href="https://github.com/Abhyuday14/Reducing-Hallucination"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-10 text-[12px] font-mono uppercase tracking-[0.3em] text-blood-red hover:text-white transition-colors"
      >
        Inspect the evidence: code & data ↗
      </a>
    </section>
  );
};

export default Research;
