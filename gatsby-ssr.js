import { lightTheme, darkTheme } from "./src/styles/theme";

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = COOKIESTHHASJDAJSDHASDGAHSDASD;
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
        ? '${lightTheme.text}'
        : '${darkTheme.text}'
    );
    root.style.setProperty(
      '--color-bg',
      colorMode === 'light'
        ? '${lightTheme.bg}'
        : '${darkTheme.bg}'
    );
    root.style.setProperty(
      '--color-bgAlpha',
      colorMode === 'light'
        ? '${lightTheme.bgAlpha}'
        : '${darkTheme.bgAlpha}'
    );
    root.style.setProperty(
      '--color-bg2',
      colorMode === 'light'
        ? '${lightTheme.bg2}'
        : '${darkTheme.bg2}'
    );
    root.style.setProperty(
      '--color-bg3',
      colorMode === 'light'
        ? '${lightTheme.bg3}'
        : '${darkTheme.bg3}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${lightTheme.primary}'
        : '${darkTheme.primary}'
    );
  })()
  
  I'll
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};