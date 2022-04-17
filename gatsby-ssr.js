import { COLORS } from '/src/styles/globalstyles/theme';

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
    root.style.setProperty(
      '--color-toggleThumb',
      colorMode === 'light'
        ? '${COLORS.toggleThumb.light}'
        : '${COLORS.toggleThumb.dark}'
    );
    root.style.setProperty(
      '--color-toggleName',
      colorMode === 'light'
        ? '${COLORS.toggleName.light}'
        : '${COLORS.toggleName.dark}'
    );
    root.style.setProperty(
      '--color-moonIcon',
      colorMode === 'light'
        ? '${COLORS.moonIcon.light}'
        : '${COLORS.moonIcon.dark}'
    );
    root.style.setProperty(
      '--color-sunIcon',
      colorMode === 'light'
        ? '${COLORS.sunIcon.light}'
        : '${COLORS.sunIcon.dark}'
    );
    root.style.setProperty(
      '--color-checkMarkBorder',
      colorMode === 'light'
        ? '${COLORS.checkMarkBorder.light}'
        : '${COLORS.checkMarkBorder.dark}'
    );
    root.style.setProperty(
      '--color-tooltip',
      colorMode === 'light'
        ? '${COLORS.tooltip.light}'
        : '${COLORS.tooltip.dark}'
    );
    root.style.setProperty(
      '--color-ttText',
      colorMode === 'light'
        ? '${COLORS.ttText.light}'
        : '${COLORS.ttText.dark}'
    );
    root.style.setProperty(
      '--color-diffOpacity',
      colorMode === 'light'
        ? '${COLORS.diffOpacity.light}'
        : '${COLORS.diffOpacity.dark}'
    );
    root.style.setProperty(
      '--color-placeholder',
      '${COLORS.placeholder}'
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