import MyButton from "../../my-button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/MyButton",
  component: MyButton,
  parameters: {
    layout: "fullscreen",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    handleClick: () => {}
  }
};

export const Blue = {
  args: {
    color: "blue",
    children: "Blue Button",
    handleClick: () => {}
  },
};

export const Red = {
  args: {
    color: "red",
    children: "Red Button",
    handleClick: () => {}
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Small Button",
    handleClick: () => {}
  },
};

export const Medium = {
  args: {
    size: "medium",
    color: "blue",
    children: "Medium Button",
    handleClick: () => {}
  },
};

export const Large = {
  args: {
    size: "large",
    color: "red",
    children: "Large Button",
    handleClick: () => {}
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled Button",
    handleClick: () => {}
  },
};
