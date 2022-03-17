import {
  animate as animator,
  AnimationControls,
  motion,
  SVGMotionProps,
  useAnimation,
  useMotionValue,
} from 'framer-motion';
import { AnimationOptions } from 'framer-motion/types/animation/animate';
import { useEffect, useState } from 'react';
import * as React from 'react';

import { useFlubber } from '@/lib/useFlubber';

const defaultTransition = {
  duration: 0.8,
  ease: 'easeInOut',
} as AnimationOptions<number>;

export interface MorpherReference {
  morphTo: (toPathIndex: number, transitionOverride?: AnimationOptions<number>) => Promise<void>;
}

export const useMorpher = () => useAnimation() as AnimationControls & MorpherReference;
declare type UnwrapSVGFactoryElement<F> = F extends React.SVGProps<infer P> ? P : never;
export function Morpher({
  paths,
  animate,
  transition = defaultTransition,
  ...props
}: {
  paths: string[];
  animate: AnimationControls & MorpherReference;
  transition?: AnimationOptions<number>;
} & SVGMotionProps<UnwrapSVGFactoryElement<JSX.IntrinsicElements['path']>>) {
  const [progressValue, setProgressValue] = useState(0);
  const progress = useMotionValue(progressValue);
  const flubberPath = useFlubber(progress, paths);

  // Basically extend the framer api with our morphTo method -  useImperativeHandle but without the .current
  useEffect(() => {
    if (animate) {
      animate.morphTo = (toPathIndex, transitionOverride) => {
        return new Promise<void>((resolve) =>
          animator(progress, toPathIndex, {
            ...(transitionOverride ?? transition),
            onComplete: () => {
              setProgressValue(toPathIndex);
              resolve();
            },
          })
        );
      };
    }
  }, [animate]);

  return <motion.path animate={animate} d={flubberPath} {...props} />;
}
