import { 
  COLORS, 
  SIDEBAR,
  INITIAL_COLOR_MODE_CSS_PROP,
  INITIAL_SIDEBAR_MODE_CSS_PROP, 
} from '/src/styles/theme';

const MagicScriptTag = () => {

  // localstorage isnt changing with each new page, only on hard refresh
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      return 'light';
    }
    function getInitialSidebarMode() {
      const persistedSidebarPreference = window.localStorage.getItem('sidebar-mode');
      const hasPersistedPreference = typeof persistedSidebarPreference === 'string';
      if (hasPersistedPreference) {
        return persistedSidebarPreference;
      }
      return 'open';
    }
    const colorMode = getInitialColorMode();
    const sidebarMode = getInitialSidebarMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.text.light}'
        : '${COLORS.text.dark}'
    );
    root.style.setProperty(
      '--color-bg',
      colorMode === 'light'
        ? '${COLORS.bg.light}'
        : '${COLORS.bg.dark}'
    );
    root.style.setProperty(
      '--color-bgAlpha',
      colorMode === 'light'
        ? '${COLORS.bgAlpha.light}'
        : '${COLORS.bgAlpha.dark}'
    );
    root.style.setProperty(
      '--color-bg2',
      colorMode === 'light'
        ? '${COLORS.bg2.light}'
        : '${COLORS.bg2.dark}'
    );
    root.style.setProperty(
      '--color-bg3',
      colorMode === 'light'
        ? '${COLORS.bg3.light}'
        : '${COLORS.bg3.dark}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${COLORS.primary.light}'
        : '${COLORS.primary.dark}'
    );
    root.style.setProperty(
      '--color-toggle',
      colorMode === 'light'
        ? '${COLORS.toggle.light}'
        : '${COLORS.toggle.dark}'
    );
    root.style.setProperty(
      '--sidebar-width',
      sidebarMode === 'open'
        ? '${SIDEBAR.width.open}'
        : '${SIDEBAR.width.closed}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
    root.style.setProperty('--initial-sidebar-mode', sidebarMode);
  })()
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};