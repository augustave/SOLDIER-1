import { isMuted, toggleMuted } from './audio.js';

export function initMuteToggle() {
    const btn = document.getElementById('btn-mute');
    if (!btn) return;

    function render() {
        const muted = isMuted();
        btn.setAttribute('aria-pressed', String(muted));
        btn.textContent = muted ? 'Sound · Off' : 'Sound · On';
    }

    btn.addEventListener('click', () => {
        toggleMuted();
        render();
    });

    document.addEventListener('audio-mute-change', render);
    render();
}
