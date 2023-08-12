import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "color", "footer")}
      tag="footer"
      id="footer-section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "flex")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_bottom-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_top-left")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "brand")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "logo")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/615e22e65437f452aa8d46df_AstraFlow.svg"
              />
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_top-right")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_top-left-wrap", "first")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_top-title")}
                tag="div"
              >
                {"Useful Links"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Work"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Pricing"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Resources"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Sitemap"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                  preload: "none",
                }}
              >
                {"Contact"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer_top-left-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_top-title")}
                tag="div"
              >
                {"Services"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Logo & Branding"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer_top-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer_bottom")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer_link", "small")}
              button={false}
              options={{
                href: "#",
              }}
            >
              {"© Copyright"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-3")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link", "small", "right")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Cookie Policy"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer_link", "small", "right")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"Privacy Policy"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
