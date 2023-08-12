import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeroSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e724e31d-0e6f-3d6c-d6d5-0f3990442879","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e724e31d-0e6f-3d6c-d6d5-0f3990442879","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633622946228}},"actionLists":{"a-3":{"id":"a-3","title":"Open Popup","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1631213428207}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeroSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "hero-section")}
      tag="section"
      id="hero-section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero_content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "hero_heading")}
              tag="h1"
            >
              {"We make your "}
              <_Builtin.Span
                className={_utils.cx(_styles, "hero_heading_color")}
              >
                {"logo"}
              </_Builtin.Span>
              {" and "}
              <_Builtin.Span
                className={_utils.cx(
                  _styles,
                  "hero_heading_color",
                  "hero_heading_color2"
                )}
              >
                {"brand"}
              </_Builtin.Span>
              {" stand out from the crowd."}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph_large")}
            >
              {
                "We create compelling brands for startups, companies, and organizations. With German quality."
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "hero_button-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "btn", "hero")}
                data-w-id="e724e31d-0e6f-3d6c-d6d5-0f3990442879"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "main-button", "hero")}
                  tag="div"
                >
                  {"Request a Logo"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hero_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #1"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699a6c01f0b56a2b116_Astraflow-webdesign-branding.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-2")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #2"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699a6539b56f2b8458a_Astraflow-webdesign-branding-5.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-5")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #6"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699247b93f698d47c70_Astraflow-webdesign-branding-1.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-3")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #3"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699d3d586340adb9e8c_Astraflow-webdesign-branding-3.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-7")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #7"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f6992c2082560fe966fc_Astraflow-webdesign-branding-6.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-6")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #4"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f69972da35639e3ddf70_Astraflow-webdesign-branding-8.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-9")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #9"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699247b938bfcd47c71_Astraflow-webdesign-branding-2.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-8")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #8"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f699f35c9543dac5c778_Astraflow-webdesign-branding-4.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-4")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Design Branding #5"
              src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/6165f6997f4b0b8a46e37729_Astraflow-webdesign-branding-7.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
