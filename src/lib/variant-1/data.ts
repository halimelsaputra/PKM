import type { Perspective } from './types';

export const images = [
  './img/img1.webp',
  './img/img2.webp',
  './img/img3.webp',
  './img/img4.webp',
  './img/img5.webp',
  './img/img6.webp',
  './img/img7.webp',
  './img/img8.webp',
  './img/img9.webp',
  './img/img10.webp',
  './img/img11.webp',
  './img/img12.webp',
];

export const perspectives: Perspective[] = [
  {
    title: 'PKM',
    description: 'PENGELOLAAN KESEJAHTERAAN MAHASISWA',
    position: 'top',
  },
  {
    title: 'OPEN RECRUITMENT',
    description: 'LETS JOIN US AND BE PART OF THE CHANGE',
    position: 'center',
  },
  {
    title: 'Grow Together',
    description: 'Build your potential with us',
    position: 'center',
  },
  {
    title: 'Registration Links',
    links: [
      { label: 'WAKADEP', url: 'https://forms.gle/Xi9oBWqdTucXuzsY7' },
      { label: 'ANGGOTA', url: 'https://forms.gle/ybDWtuH5q8piYmXD9' },
    ],
    timeline: {
      left: {
        items: [
          { label: 'PENDAFTARAN WAKADEP', date: '16 – 18 FEBRUARI 2026' },
          { label: 'WAWANCARA WAKADEP', date: '19 FEBRUARI 2026' },
        ],
      },
      right: {
        items: [
          { label: 'PENDAFTARAN ANGGOTA', date: '16 – 22 FEBRUARI 2026' },
          { label: 'WAWANCARA ANGGOTA', date: '23 FEBRUARI 2026' },
        ],
      },
    },
    position: 'bottom',
  },
];

export const cylinderConfig = {
  radius: window.innerWidth > 768 ? 2.5 : 2.2,
  height: window.innerWidth > 768 ? 2 : 1.2,
  radialSegments: 64,
  heightSegments: 1,
};

export const particleConfig = {
  numParticles: 12,
  particleRadius: 3.3, // cylinderRadius + 0.8
  segments: 20,
  angleSpan: 0.3,
};

export const imageConfig = {
  width: 1024,
  height: 1024,
};
