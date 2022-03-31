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
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = \`--color-\${name}\`;
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
    root.style.setProperty('--initial-color-mode', colorMode);
  })()
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};