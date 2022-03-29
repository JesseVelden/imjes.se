import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import * as React from 'react';

import { Morpher, useMorpher } from '@/components/Morph/Morpher';

// You can create svg paths using Figma.
const dotCommaPaths = [
  'M11.5087 18.5568C9.79184 18.5568 8.3186 17.942 7.08896 16.7124C5.85932 15.4827 5.2445 14.0095' +
    ' 5.2445 12.2926C5.2445 10.5758 5.85932 9.10251 7.08896 7.87287C8.3186 6.64323 9.79184 6.02841 11.5087' +
    ' 6.02841C13.2256 6.02841 14.6988 6.64323 15.9284 7.87287C17.1581 9.10251 17.7729 10.5758 17.7729 12.2926C17.7729 13.4295 17.4829 14.4735 16.9029 15.4247C16.3461 16.3759 15.592 17.1416 14.6408 17.7216C13.7128 18.2784 12.6687 18.5568 11.5087 18.5568Z',
  'M5.97124 24V17.7358C5.97124 15.8333 6.30765 13.8149 6.98047 11.6804C7.67649 9.52273 8.67412 7.44626 9.97337 5.45099C11.2958 3.43253 12.8851 1.68087 14.7411 0.196021L19.1957 3.81534C17.734 5.90341 16.458 8.08428 15.3675 10.358C14.3003 12.6084 13.7667 15.0213 13.7667 17.5966V24H5.97124Z',
];

const jPaths = [
  'M5.94833 14.2727H15.025V48.6193C15.025 51.1477 14.5279 53.1932 13.5336 54.7557C12.5392 56.3182 11.1117 57.4616' +
    ' 9.25089 58.1861C7.4043 58.9105 5.19549 59.2727 2.62447 59.2727C2.31197 59.2727 2.01367 59.2656 1.72958 59.2514C1.43129 59.2514 1.11879 59.2443 0.792081 59.2301V52.1349C1.03356 52.1491 1.24663 52.1562 1.43129 52.1562C1.60174 52.1705 1.7864 52.1776 1.98526 52.1776C3.44833 52.1776 4.47106 51.8651 5.05344 51.2401C5.65004 50.6293 5.94833 49.706 5.94833 48.4702V14.2727ZM10.4654 10.054C9.13015 10.054 7.97958 9.60653 7.01367 8.71165C6.04776 7.80256 5.56481 6.71591 5.56481 5.4517C5.56481 4.2017 6.04776 3.12926 7.01367 2.23438C7.97958 1.32528 9.13015 0.870736 10.4654 0.870736C11.829 0.870736 12.9867 1.32528 13.9384 2.23438C14.9043 3.12926 15.3873 4.2017 15.3873 5.4517C15.3873 6.71591 14.9043 7.80256 13.9384 8.71165C12.9867 9.60653 11.829 10.054 10.4654 10.054Z',
  'M20.6548 0.363635H29.7741V30.7898C29.7741 33.6023 29.142 36.0455 27.8778 38.1193C26.6278 40.1932 24.8878 41.7912 22.6577 42.9134C20.4276 44.0355 17.8352 44.5966 14.8807 44.5966C12.2528 44.5966 9.86648 44.1349 7.72159 43.2116C5.59091 42.2741 3.90057 40.8537 2.65057 38.9503C1.40057 37.0327 0.78267 34.625 0.796875 31.7273H9.98011C10.0085 32.8778 10.2429 33.8651 10.6832 34.6889C11.1378 35.4986 11.7557 36.1236 12.5369 36.5639C13.3324 36.9901 14.2699 37.2031 15.3494 37.2031C16.4858 37.2031 17.4446 36.9616 18.2259 36.4787C19.0213 35.9815 19.625 35.2571 20.0369 34.3054C20.4489 33.3537 20.6548 32.1818 20.6548 30.7898V0.363635Z',
];

const iPaths = [
  'M0.948331 47V14.2727H10.025V47H0.948331ZM5.50799 10.054C4.15856 10.054 3.00089 9.60653 2.03498 8.71165C1.08327' +
    ' 7.80256 0.607422 6.71591 0.607422 5.4517C0.607422 4.2017 1.08327 3.12926 2.03498 2.23438C3.00089 1.32528 4.15856 0.870736 5.50799 0.870736C6.85742 0.870736 8.00799 1.32528 8.95969 2.23438C9.9256 3.12926 10.4086 4.2017 10.4086 5.4517C10.4086 6.71591 9.9256 7.80256 8.95969 8.71165C8.00799 9.60653 6.85742 10.054 5.50799 10.054Z',
  'M10.1103 0.363635V44H0.88441V0.363635H10.1103Z',
];

const clipPathStyle = { clipPath: 'url(/#imjesseClip)' };
export function ImjesseMorph() {
  const dotApostrophe = useMorpher();
  const iI = useMorpher();
  const m = useAnimation();
  const jJ = useMorpher();
  const es = useAnimation();
  const se = useAnimation();
  useEffect(() => {
    async function beautiful() {
      await dotApostrophe.start({ y: 0 }, { duration: 0.85, delay: 2 });
      await dotApostrophe.start({ x: 10 }, { duration: 1 });
      const transition = { duration: 1 };

      await Promise.all([
        dotApostrophe.morphTo(1, transition),
        iI.morphTo(1, transition),
        iI.start({ translateY: 3.5 }, transition),
        m.start({ dx: 30 }, transition),
        jJ.start({ translateX: 35, translateY: 3.5 }, transition),
        jJ.morphTo(1, transition),
        es.start({ dx: 55 }, transition),
        se.start({ dx: 0 }, transition),
      ]);
    }

    beautiful();
  }, []);

  return (
    <>
      <div className='relative'>
        <span className='text-bold text-4xl font-bold text-secondary'>Hi, nice to meet you</span>
        <span className='absolute block h-full w-full text-6xl font-bold tracking-wider text-transparent'>
          I'm Jesse
        </span>
        <div className='mt-4 ml-1 max-w-max select-none  text-6xl font-bold tracking-wider'>
          <div className='bg-gradient-aqua-day relative h-[70px] w-full overflow-hidden' style={clipPathStyle} />
          <svg height='0'>
            <defs>
              <clipPath id='imjesseClip' className='select-none'>
                <Morpher animate={iI} paths={iPaths} initial={{ y: 3 }} />
                <Morpher animate={jJ} paths={jPaths} initial={{ x: 70, y: 3 }} />
                <text y='50'>
                  <motion.tspan dx={15} animate={m}>
                    m
                  </motion.tspan>
                  <motion.tspan dx={20} animate={es}>
                    es
                  </motion.tspan>
                  <motion.tspan dx={10} animate={se}>
                    se
                  </motion.tspan>
                </text>
                <Morpher animate={dotApostrophe} paths={dotCommaPaths} initial={{ x: 160, y: 35 }} />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
