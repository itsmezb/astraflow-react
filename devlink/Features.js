import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Features.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"442020d8-4c7c-47a3-0684-1621f5502a6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"442020d8-4c7c-47a3-0684-1621f5502a6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1633717023334}},"actionLists":{"a-7":{"id":"a-7","title":"benefits_main-grid-text","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".benefits_main-grid-2","selectorGuids":["1fac781c-64de-bc7b-5d73-e5ad53705864"]},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".benefits_main-grid-2","selectorGuids":["1fac781c-64de-bc7b-5d73-e5ad53705864"]},"value":0,"unit":""}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".benefits_main-grid-line","selectorGuids":["fa496ab7-ea23-a589-f840-bd3140094bce"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"easeInOut","duration":500,"target":{"selector":".benefits_main-grid-line","selectorGuids":["fa496ab7-ea23-a589-f840-bd3140094bce"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":1500,"easing":"easeInOut","duration":700,"target":{"selector":".title-gray","selectorGuids":["14ef0eef-249c-630c-1e11-d23afb826295"]},"globalSwatchId":"","rValue":129,"bValue":129,"gValue":129,"aValue":1}},{"id":"a-7-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":1500,"easing":"easeInOut","duration":500,"target":{"selector":".benefits_main-grid-line","selectorGuids":["fa496ab7-ea23-a589-f840-bd3140094bce"]},"globalSwatchId":"","rValue":129,"bValue":129,"gValue":129,"aValue":1}}]},{"actionItems":[{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"PARENT","selector":".benefits_main-grid-2","selectorGuids":["1fac781c-64de-bc7b-5d73-e5ad53705864"]},"xValue":null,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-7-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"PARENT","selector":".benefits_main-grid-2","selectorGuids":["1fac781c-64de-bc7b-5d73-e5ad53705864"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1633717026893}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Features({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "color")}
      tag="section"
      id="benefits-section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "section-label")}
          tag="h2"
        >
          {"Benefits"}
        </_Builtin.Heading>
        <_Builtin.Heading
          className={_utils.cx(_styles, "section-title")}
          tag="h2"
        >
          {"We see a problem & we fix it."}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "benefits_grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "benefits_grid_main")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_main-grid-1")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "benefits_main-grid-line")}
                tag="div"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "no-mg")}
                tag="h2"
              >
                <_Builtin.Span className={_utils.cx(_styles, "title-gray")}>
                  {"Just a logo"}
                </_Builtin.Span>
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_main-grid-2")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "grid_title",
                  "center",
                  "main",
                  "mobile"
                )}
                data-w-id="442020d8-4c7c-47a3-0684-1621f5502a6d"
                tag="h2"
              >
                {"A stunning identity."}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "grid_paragraph")}
            >
              {
                "We design beautiful brands that speak to the hearts and minds of your consumers. A good brand isn’t only beautiful, it tells a clear story and speaks to the unique value of your product to set your brand apart from the noise."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "benefits_grid-stats")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_small")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "benefits_grid_number")}
                tag="div"
              >
                {"25"}
                <_Builtin.Span className={_utils.cx(_styles, "number_small")}>
                  {"+"}
                </_Builtin.Span>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "center")}
              >
                {"Happy clients"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_small")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "benefits_grid_number",
                  "second-gradient"
                )}
                tag="div"
              >
                {"100"}
                <_Builtin.Span
                  className={_utils.cx(_styles, "number_small", "end")}
                >
                  {"%"}
                </_Builtin.Span>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "center")}
              >
                {"Passion"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "benefits_double-grid")}
            id={_utils.cx(
              _styles,
              "w-node-_442020d8-4c7c-47a3-0684-1621f5502a80-f5502a5f"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Lightning Fast"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c8f9c8d3a4c23e879c_AstraFlow%20Icon-1.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Lightning-fast"}
                <br />
                {"delivery"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {
                  "Get your logo design package back within two weeks of purchase. Word."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Multiple Revisions"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c83390fe982a07ddcf_AstraFlow%20Icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Multiple"}
                <br />
                {"revisions"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {"We’re not happy until you’re"}
                <br />
                {"100% satisfied."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Smooth Collaboration"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c8e97b0a597a13d9db_AstraFlow%20Icon-2.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Smooth"}
                <br />
                {"Collaboration"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {"Easily track the process using"}
                <br />
                {"Slack or Discord."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Customer-first principle"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c8ac531185598d9fd5_AstraFlow%20Icon-4.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Customer-first "}
                <br />
                {"principle"}
                <br />
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {
                  "We make sure your branding will appeal to the right kind of people!"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "benefits_double-grid-dark")}
            id={_utils.cx(
              _styles,
              "w-node-_442020d8-4c7c-47a3-0684-1621f5502aa6-f5502a5f"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid", "dark")}
              id={_utils.cx(
                _styles,
                "w-node-_442020d8-4c7c-47a3-0684-1621f5502aa7-f5502a5f"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "grid_title",
                  "center",
                  "gradient"
                )}
                tag="h2"
              >
                {"Pixel-perfect"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "color"
                )}
              >
                {"Your SVG and EPS logo files"}
                <br />
                {"let you scale your logo to any size"}
              </_Builtin.Paragraph>
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_waves")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Waves"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/61603eb3f8b587cc8a2d2965_waves.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_big", "styleguide")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title")}
                tag="h2"
              >
                {"Full brand"}
                <br />
                {"guideline"}
                <br />
              </_Builtin.Heading>
              <_Builtin.Image
                className={_utils.cx(_styles, "styleguide_gif")}
                loading="lazy"
                height="auto"
                width="auto"
                alt="Logo branding Design Style Guide"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/61601853a694ce186df3c5dc_styleguide.gif"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "benefits_double-grid")}
            id={_utils.cx(
              _styles,
              "w-node-_442020d8-4c7c-47a3-0684-1621f5502ab6-f5502a5f"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Goal-oriented"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c85cb48e21d8e068a0_AstraFlow%20Icon-5.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Goal"}
                <br />
                {"Oriented"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {"We go beyond to exceed"}
                <br />
                {"all your expectations."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "benefits_grid_mid")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "benefits_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo branding Design Non-Profit "
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616009c8935c24a55e90cb17_AstraFlow%20Icon-3.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "grid_title", "center")}
                tag="h2"
              >
                {"Non-Profit"}
                <br />
                {"Love"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "grid_paragraph",
                  "center",
                  "_75percent"
                )}
              >
                {"Registrered non-profits receive "}
                <br />
                {"50% off on all packages."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
