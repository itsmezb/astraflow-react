import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Process.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-4","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"616aeda224f06221418aa473|2de52274-c2ae-e5f7-9b01-f5d6da74f365","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"616aeda224f06221418aa473|2de52274-c2ae-e5f7-9b01-f5d6da74f365","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-4-p","smoothing":22,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1634397641655},"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-4","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a35d354a-4212-c54a-8e51-736e20f412ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-4-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1634658342834}},"actionLists":{"a-4":{"id":"a-4","title":"section_bg-color","continuousParameterGroups":[{"id":"a-4-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"keyframe":36,"actionItems":[{"id":"a-4-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"keyframe":40,"actionItems":[{"id":"a-4-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":254,"bValue":239,"gValue":239,"aValue":1}}]},{"keyframe":52,"actionItems":[{"id":"a-4-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":244,"bValue":239,"gValue":254,"aValue":1}}]},{"keyframe":65,"actionItems":[{"id":"a-4-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":239,"bValue":254,"gValue":244,"aValue":1}}]},{"keyframe":75,"actionItems":[{"id":"a-4-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"id":"a35d354a-4212-c54a-8e51-736e20f412ca"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}]}],"createdOn":1633699197933}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Process({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "hide")}
      data-w-id="a35d354a-4212-c54a-8e51-736e20f412ca"
      tag="div"
      id="process-section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "process")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "sticky")} tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "section-title")}
              tag="h2"
            >
              {"Our Creative"}
              <br />
              {"Proccess"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "process-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "process_wrap", "first")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "process_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Logo"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616043aec4dcac4ce8eab369_process_icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "process-title")}
                tag="h2"
              >
                {"Discovery"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {
                  "Going deep into your business to understand its core sense, goals and challenges to build partnership."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "process_wrap", "second")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "process_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616043aec4dcac4ce8eab369_process_icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "process-title")}
                tag="h2"
              >
                {"Research"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {
                  "Conduct research focused on your industry, its history, and competitors."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "process_wrap", "third")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "process_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616043aec4dcac4ce8eab369_process_icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "process-title")}
                tag="h2"
              >
                {"Creation"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {
                  "Creating your brand’s identity including the logo, font system and color palettes."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "process_wrap", "fourth")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "process_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616043aec4dcac4ce8eab369_process_icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "process-title")}
                tag="h2"
              >
                {"Revisions"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {"Repeating until a shortlist of concepts have been selected."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "process_wrap", "fifth")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "process_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616043aec4dcac4ce8eab369_process_icon.svg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "process-title")}
                tag="h2"
              >
                {"Delivery"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "grid_paragraph", "small-p-xs")}
              >
                {"Delivering files, style guide and providing further support"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
