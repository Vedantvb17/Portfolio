'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { AboutData } from '../types';

type Props = {
  data: AboutData;
};

export default function AboutSection({ data }: Props) {
  return (
    <section className='px-6 py-20 max-w-5xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
      >
        <div className='flex justify-center md:justify-start'>
          <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg'>
            <Image
              src='/headshot.png'
              alt='Profile headshot'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold mb-6'>{data.title}</h2>
          <div className='text-[var(--foreground)]/80 text-lg leading-relaxed space-y-6'>
            {data.description.map((para: string, idx: number) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
