import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";
import MyButton from "../ui/MyButton";
import AuthTextField from "../ui/AuthTextField";


const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Landing">
        <Landing />
      </ComponentPreview>
      <ComponentPreview path="/Auth">
        <Auth />
      </ComponentPreview>
      <ComponentPreview path="/Registration">
        <Registration />
      </ComponentPreview>
      <ComponentPreview path="/MyButton">
        <MyButton />
      </ComponentPreview>
      <ComponentPreview path="/AuthTextField">
        <AuthTextField />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;