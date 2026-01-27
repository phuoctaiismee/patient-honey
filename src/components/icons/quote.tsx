import * as React from 'react';

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" fill="none" viewBox="0 0 42 32" {...props}>
    <path
      fill="#fff"
      d="M0 32v-8.421q0-3.837 1.357-8.14Q2.76 11.088 5.38 7.064A30.1 30.1 0 0 1 11.79 0l5.988 4.866a62 62 0 0 0-5.146 8.795q-2.152 4.538-2.152 9.73V32zm23.953 0v-8.421q0-3.837 1.357-8.14 1.404-4.351 4.023-8.375A30.1 30.1 0 0 1 35.743 0l5.988 4.866a62 62 0 0 0-5.146 8.795q-2.152 4.538-2.152 9.73V32z"
    ></path>
  </svg>
);

export default QuoteIcon;
