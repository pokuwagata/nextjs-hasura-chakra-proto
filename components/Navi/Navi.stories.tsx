import React from "react";

import { Navi, NaviButton } from "./Navi";

export default {
  title: "Navi",
  component: Navi,
};

export const Default: React.VFC<{}> = () => (
  <Navi>
    <NaviButton>カテゴリ一覽</NaviButton>
    <NaviButton>ランキング</NaviButton>
    <NaviButton>レシピをよむ</NaviButton>
  </Navi>
);
