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
    root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = '--color-' + name;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
  })()
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};