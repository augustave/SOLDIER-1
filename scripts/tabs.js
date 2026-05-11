import { playClick, playRustle } from './audio.js';
import { analytics } from './analytics.js';

function wireTabGroup({ navSelector, tabSelector, panePrefix, onActivate }) {
    const nav = document.querySelector(navSelector);
    if (!nav) return;
    const tabs = Array.from(nav.querySelectorAll(tabSelector));

    function activate(target, { focus = false } = {}) {
        tabs.forEach(tab => {
            const isActive = tab.dataset.target === target;
            tab.setAttribute('aria-selected', String(isActive));
            tab.tabIndex = isActive ? 0 : -1;
            const pane = document.getElementById(`${panePrefix}${tab.dataset.target}`);
            if (pane) pane.hidden = !isActive;
        });
        if (focus) {
            const active = tabs.find(t => t.dataset.target === target);
            active?.focus();
        }
        onActivate?.(target);
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => activate(tab.dataset.target));
        tab.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const dir = e.key === 'ArrowRight' ? 1 : -1;
                const next = tabs[(i + dir + tabs.length) % tabs.length];
                activate(next.dataset.target, { focus: true });
            } else if (e.key === 'Home') {
                e.preventDefault();
                activate(tabs[0].dataset.target, { focus: true });
            } else if (e.key === 'End') {
                e.preventDefault();
                activate(tabs[tabs.length - 1].dataset.target, { focus: true });
            }
        });
    });
}

export function initTabs() {
    wireTabGroup({
        navSelector: '#nav-a',
        tabSelector: '.tab-btn-a',
        panePrefix: 'tab-a-',
        onActivate: (target) => { playClick(); analytics.tabChange('A', target); },
    });
    wireTabGroup({
        navSelector: '#nav-b',
        tabSelector: '.tab-btn-b',
        panePrefix: 'tab-b-',
        onActivate: (target) => { playRustle(); analytics.tabChange('B', target); },
    });
}
