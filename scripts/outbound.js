import { analytics } from './analytics.js';

export function initOutboundTracking() {
    document.querySelectorAll('a[data-track]').forEach(a => {
        a.addEventListener('click', () => {
            analytics.outbound(a.dataset.track);
        });
    });
}
