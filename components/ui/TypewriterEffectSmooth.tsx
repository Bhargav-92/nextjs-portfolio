'use client';

import { cn } from '@/utils/cn';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const TypewriterEffect = ({
  prefixText,
  words,
  className,
  cursorClassName,
}: {
  prefixText: string;
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < words.length; i++) {
        await controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
        await controls.start({
          opacity: 0,
          transition: { duration: 0.5, delay: 1 },
        });
      }
    };
    sequence();
  }, [controls, words]);

  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
        className
      )}
    >
      <span>{prefixText}&nbsp;</span>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={controls}
          className={cn('inline-block', word.className)}
        >
          {word.text}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
