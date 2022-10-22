import React from "react";

import Header2 from "../components/Header2";

export default {
  title: "Header2",
  component: Header2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Header2 {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
    age: 45
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  backgroundColor: "pink",
  bgcButton: "yellow"
};
