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
      return 'dark';
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    Object.entries(COLORS).forEach(([colname, colorByTheme]) => {
      const cssVarName = \`--color-${colname}\`;
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