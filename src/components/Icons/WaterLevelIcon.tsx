import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HeartSvg = () => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.72532 14.2375C1.72532 14.2375 2.3097 15.0875 4.11595 15.0875C6.3472 15.0875 6.24095 13.2812 9.00345 13.2812C11.7128 13.2812 12.1909 15.0875 13.8378 15.0875C15.6441 15.0875 16.2284 14.3438 16.3347 14.2375C16.7066 13.4938 17.7159 13.9719 17.3972 14.7156C17.3972 14.7156 16.8659 16.3094 13.8378 16.3094C11.6597 16.3094 11.2878 14.5031 9.00345 14.5031C6.7722 14.5031 6.87845 16.3094 4.11595 16.3094C1.08782 16.3094 0.556571 14.7156 0.556571 14.7156C0.290946 13.9187 1.40657 13.5469 1.72532 14.2375ZM9.00345 9.66875C11.7128 9.66875 12.1909 11.475 13.8378 11.475C15.4847 11.475 16.4409 10.4656 16.4409 10.4656C16.9722 9.88125 17.8753 10.7312 17.3441 11.3156C17.2909 11.3687 16.0159 12.6969 13.8378 12.6969C11.6597 12.6969 11.2878 10.8906 9.00345 10.8906C6.7722 10.8906 6.87845 12.6969 4.11595 12.6969C1.08782 12.6969 0.556571 11.1031 0.556571 11.1031C0.237821 10.3594 1.35345 9.93437 1.72532 10.625C1.72532 10.625 2.3097 11.475 4.11595 11.475C6.3472 11.475 6.24095 9.66875 9.00345 9.66875ZM0.556571 6.8C0.556571 6.8 1.08782 9.03125 4.11595 9.03125C6.87845 9.03125 6.7722 7.225 9.00345 7.225C11.2878 7.225 11.6597 9.03125 13.8378 9.03125C16.8659 9.03125 17.4503 6.8 17.4503 6.8C17.7159 6.00313 16.4941 5.7375 16.2816 6.48125C16.2816 6.48125 15.8566 7.8625 13.8909 7.8625C12.2441 7.8625 11.7659 6.05625 9.05657 6.05625C6.29407 6.05625 6.40032 7.8625 4.16907 7.8625C2.20345 7.8625 1.77845 6.48125 1.77845 6.48125C1.51282 5.7375 0.397196 6.05625 0.556571 6.8ZM12.4566 0.159375L13.6784 1.38125C14.2097 1.9125 13.3597 2.7625 12.8284 2.23125L12.6691 2.07188V4.25C12.6691 5.04688 11.4472 5.04688 11.4472 4.25V2.07188L11.2878 2.23125C10.7566 2.7625 9.90657 1.9125 10.4378 1.38125L11.6597 0.159375C11.8191 -0.053125 12.1909 -0.053125 12.4566 0.159375ZM6.40032 0.159375L7.6222 1.38125C8.15345 1.9125 7.30345 2.7625 6.7722 2.23125L6.61282 2.07188V4.25C6.61282 5.04688 5.39095 5.04688 5.39095 4.25V2.07188L5.23157 2.23125C4.70032 2.7625 3.85032 1.9125 4.38157 1.38125L5.60345 0.159375C5.81595 -0.053125 6.18782 -0.053125 6.40032 0.159375Z"
      fill="currentColor"
    />
  </svg>
);

const WaterLevelIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

export { WaterLevelIcon };
