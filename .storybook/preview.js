import '../.storybook/global.postcss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ backgroundColor: '#eee', boxSizing: 'content-box', minHeight: '100vh', padding: '25px' }}>
      <Story />
    </div>
  ),
];

export default preview;