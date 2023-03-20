import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const Attachment = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_171627_27068)">
      <path
        d="M11.1766 2.07556C9.7047 0.60368 7.30783 0.60368 5.83751 2.07556L1.75939 6.15056C1.73283 6.17712 1.71876 6.21306 1.71876 6.25056C1.71876 6.28806 1.73283 6.32399 1.75939 6.35056L2.33595 6.92712C2.36231 6.95336 2.39798 6.96809 2.43517 6.96809C2.47236 6.96809 2.50804 6.95336 2.53439 6.92712L6.61251 2.85212C7.11877 2.34587 7.7922 2.06774 8.50783 2.06774C9.22345 2.06774 9.89689 2.34587 10.4016 2.85212C10.9078 3.35837 11.186 4.03181 11.186 4.74587C11.186 5.46149 10.9078 6.13337 10.4016 6.63962L6.24533 10.7943L5.57189 11.4677C4.9422 12.0974 3.91876 12.0974 3.28908 11.4677C2.98439 11.1631 2.8172 10.7584 2.8172 10.3271C2.8172 9.89587 2.98439 9.49118 3.28908 9.18649L7.41252 5.06462C7.5172 4.96149 7.6547 4.90368 7.80158 4.90368H7.80314C7.95002 4.90368 8.08595 4.96149 8.18908 5.06462C8.29376 5.16931 8.35002 5.30681 8.35002 5.45368C8.35002 5.59899 8.2922 5.73649 8.18908 5.83962L4.81876 9.20681C4.7922 9.23337 4.77814 9.26931 4.77814 9.30681C4.77814 9.34431 4.7922 9.38024 4.81876 9.40681L5.39533 9.98337C5.42168 10.0096 5.45736 10.0243 5.49455 10.0243C5.53174 10.0243 5.56741 10.0096 5.59377 9.98337L8.96251 6.61462C9.27345 6.30368 9.44377 5.89118 9.44377 5.45212C9.44377 5.01306 9.27189 4.59899 8.96251 4.28962C8.32033 3.64743 7.27658 3.64899 6.63439 4.28962L6.23439 4.69118L2.51251 8.41149C2.25991 8.66262 2.05967 8.9614 1.92341 9.2905C1.78716 9.61961 1.7176 9.97249 1.71876 10.3287C1.71876 11.0521 2.00158 11.7318 2.51251 12.2427C3.0422 12.7709 3.73595 13.0349 4.4297 13.0349C5.12345 13.0349 5.8172 12.7709 6.34533 12.2427L11.1766 7.41462C11.8875 6.70212 12.2813 5.75368 12.2813 4.74587C12.2828 3.73649 11.8891 2.78806 11.1766 2.07556Z"
        fill="black"
        fillOpacity="0.45"
      />
    </g>
    <defs>
      <clipPath id="clip0_171627_27068">
        <rect width="14" height="14" fill="white" transform="translate(0 0.00100708)" />
      </clipPath>
    </defs>
  </svg>
);

export const AttachmentIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Attachment} {...props} />
);
