"use client";

import { motion } from "framer-motion";

import { HeroData } from "../types";

type Props = {
  data: HeroData;
};

export default function Hero({ data }: Props) {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <motion.section
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {data.greeting} <span className="text-primary">{data.name}</span>{" "}
          <motion.span className="inline-block origin-bottom-left">
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[var(--foreground)]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {data.description}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 rounded border border-[var(--foreground)] overflow-hidden group"
          >
            <span className="relative z-10 text-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300">
              LinkedIn
            </span>
            <span className="absolute inset-0 bg-[var(--foreground)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 rounded border border-[var(--foreground)] overflow-hidden group"
          >
            <span className="relative z-10 text-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300">
              Github
            </span>
            <span className="absolute inset-0 bg-[var(--foreground)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full border border-[var(--foreground)]/20 bg-[var(--foreground)]/5 text-[var(--foreground)]/90"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.section>

      <a className="hidden sm:block" href="#about">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-primary cursor-pointer">
          ↓
        </div>
      </a>
    </main>
  );
}
