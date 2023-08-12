import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Pricing.module.css";

export function Pricing({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "color")}
      tag="div"
      id="pricing-section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "flex")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "section-title", "center")}
          tag="h2"
        >
          {"Choose the right package that works for your business"}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "grid_paragraph",
            "center",
            "_75percent"
          )}
        >
          {"We offer 3 different type of packages."}
        </_Builtin.Paragraph>
        <_Builtin.Block className={_utils.cx(_styles, "pricing")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "price-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "price_details-top")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-label")}
                tag="h3"
              >
                {"Bronze"}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-title")}
                tag="h3"
              >
                {"$495"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {
                  "Best suited for small businesses, start-ups and entrepreneurs who need an identity."
                }
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "price-btn")}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Get Started"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-details")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"What Included:"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Client Brainstorm"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"2 Rounds of Revisions"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"1 Initial Logo Design"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Files Provided: JPEG, PNG, SVG, etc."}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Full brand guidelines"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-time")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "price_icon")}
                value="%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.50001%201.0835C3.51326%201.0835%201.08334%203.51341%201.08334%206.50016C1.08334%209.48691%203.51326%2011.9168%206.50001%2011.9168C9.48676%2011.9168%2011.9167%209.48691%2011.9167%206.50016C11.9167%203.51341%209.48676%201.0835%206.50001%201.0835ZM6.50001%2010.8335C4.11072%2010.8335%202.16668%208.88945%202.16668%206.50016C2.16668%204.11087%204.11072%202.16683%206.50001%202.16683C8.8893%202.16683%2010.8333%204.11087%2010.8333%206.50016C10.8333%208.88945%208.8893%2010.8335%206.50001%2010.8335Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M7.04168%203.7915H5.95834V6.72409L7.74205%208.5078L8.50797%207.74188L7.04168%206.27559V3.7915Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"1 Week Delivery"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "price-wrapper", "dark")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "price_details-top")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-label", "light")}
                tag="h3"
              >
                {"Silver"}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-title", "gradient")}
                tag="h3"
              >
                {"$895"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "small-p-xs",
                  "light"
                )}
              >
                {
                  "Medium sized businesses who require a quality custom brand that will take them to the next level."
                }
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "price-btn", "dark")}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Get Started"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-details")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"What Included:"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Client Brainstorm"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"3 rounds of Revisions"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"2 Initial Logo Sketch Design"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Files Provided: JPEG, PNG, SVG, etc."}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Full brand guidelines + Mockups"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-time")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "price_icon", "light")}
                value="%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.50001%201.0835C3.51326%201.0835%201.08334%203.51341%201.08334%206.50016C1.08334%209.48691%203.51326%2011.9168%206.50001%2011.9168C9.48676%2011.9168%2011.9167%209.48691%2011.9167%206.50016C11.9167%203.51341%209.48676%201.0835%206.50001%201.0835ZM6.50001%2010.8335C4.11072%2010.8335%202.16668%208.88945%202.16668%206.50016C2.16668%204.11087%204.11072%202.16683%206.50001%202.16683C8.8893%202.16683%2010.8333%204.11087%2010.8333%206.50016C10.8333%208.88945%208.8893%2010.8335%206.50001%2010.8335Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M7.04168%203.7915H5.95834V6.72409L7.74205%208.5078L8.50797%207.74188L7.04168%206.27559V3.7915Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"1-2 Weeks Delivery"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price_top-element")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "price_top-element-text")}
                tag="div"
              >
                {"Most popular"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "cta_stas", "_2")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Brand Design Stars Astra"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6160940a9bf870722678cdbb_stars.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "price-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "price_details-top")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-label")}
                tag="h3"
              >
                {"Gold"}
              </_Builtin.Heading>
              <_Builtin.Heading
                className={_utils.cx(_styles, "price-title")}
                tag="h3"
              >
                {"$1295"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {
                  "Large and Medium businesses looking for authenticity in their brand."
                }
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "price-btn")}
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"Get Started"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-details")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"What Included:"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Client Brainstorm"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"4 rounds of Revisions"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"3 Initial Logo Sketch Designs"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Files Provided: JPEG, PNG, SVG, etc."}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Full brand guidelines + Mockups"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "price_details")}
                tag="div"
              >
                {"Logo guideline"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-time")}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "price_icon")}
                value="%3Csvg%20width%3D%2213%22%20height%3D%2213%22%20viewBox%3D%220%200%2013%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.50001%201.0835C3.51326%201.0835%201.08334%203.51341%201.08334%206.50016C1.08334%209.48691%203.51326%2011.9168%206.50001%2011.9168C9.48676%2011.9168%2011.9167%209.48691%2011.9167%206.50016C11.9167%203.51341%209.48676%201.0835%206.50001%201.0835ZM6.50001%2010.8335C4.11072%2010.8335%202.16668%208.88945%202.16668%206.50016C2.16668%204.11087%204.11072%202.16683%206.50001%202.16683C8.8893%202.16683%2010.8333%204.11087%2010.8333%206.50016C10.8333%208.88945%208.8893%2010.8335%206.50001%2010.8335Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M7.04168%203.7915H5.95834V6.72409L7.74205%208.5078L8.50797%207.74188L7.04168%206.27559V3.7915Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "price_detail-title")}
                tag="div"
              >
                {"1-2 Weeks Delivery"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(
            _styles,
            "grid_paragraph",
            "center",
            "warning-msg"
          )}
        >
          {"Need something more custom? We got you! Contact us "}
          <_Builtin.Link
            className={_utils.cx(_styles, "contact-link")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"here"}
          </_Builtin.Link>
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
