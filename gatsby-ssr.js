import { COLORS } from '/src/styles/theme';

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
    const colorMode = getInitialColorMode();
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
      '--color-tabimg',
      colorMode === 'light'
        ? '${COLORS.tabimg.light}'
        : '${COLORS.tabimg.dark}'
    );
    root.style.setProperty(
      '--color-link',
      colorMode === 'light'
        ? '${COLORS.link.light}'
        : '${COLORS.link.dark}'
    );
    root.style.setProperty(
      '--color-linkHover',
      colorMode === 'light'
        ? '${COLORS.linkHover.light}'
        : '${COLORS.linkHover.dark}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};