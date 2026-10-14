/**
 * Personal projects, shown as cards on the homepage.
 *
 * These are side projects, not professional work — the Experience section covers
 * that. Keep the descriptions plain and high level, and only name a technology
 * when it actually tells the reader something.
 */

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  imageNote?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: 'Custom Digital Synthesizer',
    summary:
      'A handheld synthesizer I designed and built from scratch, starting with the circuit board and working up to the firmware. It has a grid of keys for playing notes, a pair of encoders for moving around the menus, and it can load and play samples off an SD card.',
    stack: ['KiCad', 'C++', 'ESP32'],
    image: '/img/projects/synth-concept.jpg',
    imageAlt:
      'Interface concept art for the synthesizer: a four-track sequencer view with coloured clip lanes and a waveform overview',
    imageNote: "Concept art for the instrument's screens, not a photo of the board.",
  },
  {
    title: 'ReclaimSpace',
    summary:
      'A Mac app for clearing out the things developer tools leave behind, like package caches, old toolchains and stale build folders. It tells you what each item is and how risky it would be to delete, and holds onto anything you remove for a week in case you want it back.',
    stack: ['Swift', 'SwiftUI'],
    image: '/img/projects/reclaimspace.jpg',
    imageAlt: 'ReclaimSpace showing a treemap of reclaimable storage by category',
  },
];
