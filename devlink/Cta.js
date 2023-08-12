import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

export function Cta({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "color", "small")}
      tag="section"
      id="cta-section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "flex")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "cta-wrapper")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "cta_left")} tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "cta_heading")}
              tag="h2"
            >
              {"Don’t just buy a logo, Invest in your brand."}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph_large", "light")}
            >
              {"Let’s make something beautiful for you!"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "cta_button", "dark", "cta")}
            button={true}
            options={{
              href: "#",
            }}
          >
            {"Get Started"}
          </_Builtin.Link>
          <_Builtin.Image
            className={_utils.cx(_styles, "cta_stas")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6160940a9bf870722678cdbb_stars.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
