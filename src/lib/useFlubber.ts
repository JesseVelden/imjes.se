// @ts-ignore
import { interpolate } from 'flubber';
import { MotionValue, useTransform } from 'framer-motion';
export const getIndex = (_: any, index: number) => index;

export function useFlubber(index: MotionValue<number>, paths: string[]) {
  return useTransform(index, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
