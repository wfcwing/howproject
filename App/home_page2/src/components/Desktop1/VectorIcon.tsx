import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.1501 47.0316C2.52844 27.2842 0 25.2575 0 18C0 8.05884 8.05884 0 18 0C27.9412 0 36 8.05884 36 18C36 25.2575 33.4716 27.2842 19.8499 47.0316C18.956 48.3229 17.0439 48.3228 16.1501 47.0316ZM18 25.5C22.1422 25.5 25.5 22.1422 25.5 18C25.5 13.8578 22.1422 10.5 18 10.5C13.8578 10.5 10.5 13.8578 10.5 18C10.5 22.1422 13.8578 25.5 18 25.5Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
