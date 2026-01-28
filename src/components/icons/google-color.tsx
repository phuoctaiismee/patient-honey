import * as React from 'react';

const GoogleColorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#4285F4"
      d="M18.003 10.193c0-.566-.046-1.136-.143-1.693H10v3.209h4.5a3.86 3.86 0 0 1-1.665 2.532v2.082h2.685c1.577-1.451 2.483-3.594 2.483-6.13"
    ></path>
    <path
      fill="#34A853"
      d="M10 18.334c2.247 0 4.143-.738 5.524-2.012l-2.686-2.082c-.747.508-1.711.796-2.835.796-2.174 0-4.017-1.466-4.679-3.438h-2.77v2.146A8.33 8.33 0 0 0 10 18.334"
    ></path>
    <path fill="#FBBC04" d="M5.32 11.599a5 5 0 0 1 0-3.19V6.261H2.554a8.34 8.34 0 0 0 0 7.483z"></path>
    <path
      fill="#EA4335"
      d="M10 4.966a4.53 4.53 0 0 1 3.197 1.25l2.379-2.38A8 8 0 0 0 10 1.67 8.33 8.33 0 0 0 2.553 6.26l2.768 2.147C5.98 6.433 7.826 4.966 10 4.966"
    ></path>
  </svg>
);

export default GoogleColorIcon;
