// Vercel Analytics wrapper. Falls back to a noop when offline / local dev.

function track(name, data) {
    try {
        if (typeof window.va === 'function') {
            window.va('event', { name, ...(data || {}) });
        }
    } catch (e) {
        // Analytics failures must never break the UI.
    }
}

export const analytics = {
    doctrineSwitch(target) { track('doctrine-switch', { value: target }); },
    tabChange(doctrine, target) { track('tab-change', { doctrine, target }); },
    muteToggle(muted) { track('mute-toggle', { value: muted ? 'off' : 'on' }); },
    stampApplied(text) { track('stamp-applied', { value: text }); },
    outbound(label) { track('outbound-click', { value: label }); },
};
