import { SVGIcon } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function Icon({ size = 24, className }: SVGIcon) {
  return (
    <svg
      viewBox="0 0 256 222"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      fill="currentColor"
      className={cn('', className)}
    >
      <path fill="currentColor" d="m128 0 128 221.705H0z" />
    </svg>
  );
}
