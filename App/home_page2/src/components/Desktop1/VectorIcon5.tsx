import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.476689 9.83162L9.68866 0.484536C10.3254 -0.161512 11.3549 -0.161512 11.9849 0.484536L13.5157 2.0378C14.1524 2.68385 14.1524 3.72852 13.5157 4.3677L6.9928 11L13.5225 17.6254C14.1592 18.2715 14.1592 19.3161 13.5225 19.9553L11.9917 21.5155C11.3549 22.1615 10.3254 22.1615 9.69544 21.5155L0.483463 12.1684C-0.160021 11.5223 -0.160021 10.4777 0.476689 9.83162V9.83162Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
