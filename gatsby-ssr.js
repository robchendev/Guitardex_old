import { COLORS } from '/src/styles/theme';
import Cookies from 'universal-cookie';

const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    const cookies = new Cookies();
    alert(cookies);
    function getInitialColorMode() {
      const persistedColorPreference = cookies.get('color-mode');
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
    
    root.style.setProperty('--initial-color-mode', colorMode);
  })()
`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};