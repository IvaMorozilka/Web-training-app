import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";
import MyButton from "../ui/MyButton";
import MyTextField from "../ui/MyTextField";
import {Trade} from "../components/trading/Trade";
import {TradeGroup} from "../components/trading/TradeGroup";

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
      <ComponentPreview path="/MyTextField">
        <MyTextField />
      </ComponentPreview>
        <ComponentPreview path="/Trade">
            <Trade/>
        </ComponentPreview>
        <ComponentPreview path="/TradeGroup">
            <TradeGroup/>
        </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;