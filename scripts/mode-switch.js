import { analytics } from './analytics.js';

export function initModeSwitch() {
    const doctrineA = document.getElementById('doctrine-a');
    const doctrineB = document.getElementById('doctrine-b');
    const btnA = document.getElementById('btn-mode-a');
    const btnB = document.getElementById('btn-mode-b');

    function set(mode, { track = true } = {}) {
        const isA = mode === 'A';
        doctrineA.hidden = !isA;
        doctrineB.hidden = isA;
        btnA.setAttribute('aria-pressed', String(isA));
        btnB.setAttribute('aria-pressed', String(!isA));
        if (track) analytics.doctrineSwitch(mode);
    }

    btnA.addEventListener('click', () => set('A'));
    btnB.addEventListener('click', () => set('B'));
}
