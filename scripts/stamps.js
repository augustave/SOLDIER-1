import { playStamp } from './audio.js';
import { analytics } from './analytics.js';

const STAMP_TEXTS = ['APPROVED', 'FILED', 'VERIFIED', 'RECEIVED', 'VOID', 'CLASSIFIED'];

export function initStamps() {
    const surfaces = document.querySelectorAll('.stamp-surface');
    const live = document.getElementById('stamp-live-region');

    surfaces.forEach(surface => {
        surface.addEventListener('click', e => {
            if (e.target.closest('.folder-tab')) return;
            if (e.target.closest('.invoice-table')) return;
            if (e.target.closest('[data-no-stamp]')) return;

            const text = STAMP_TEXTS[Math.floor(Math.random() * STAMP_TEXTS.length)];
            const rotation = (Math.random() * 40) - 20;

            const rect = surface.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const stamp = document.createElement('div');
            stamp.className = 'red-stamp-mark';
            stamp.textContent = text;
            stamp.style.left = `${x}px`;
            stamp.style.top = `${y}px`;
            stamp.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            surface.appendChild(stamp);

            playStamp();
            analytics.stampApplied(text);
            if (live) live.textContent = `Stamped ${text}`;
        });
    });
}
