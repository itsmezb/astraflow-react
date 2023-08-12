import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170ce9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170ce9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626128774570},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170ce9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170ce9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626128774570},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718718765},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718718765},"e-28":{"id":"e-28","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d16","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d16","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718724896},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d16","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d16","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718724896},"e-32":{"id":"e-32","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170cf4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170cf4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718729399},"e-33":{"id":"e-33","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170cf4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170cf4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718729399},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170cff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170cff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718797809},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170cff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170cff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718797809},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718799544},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d75a909-065b-9699-6df7-6f86a2170d21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d75a909-065b-9699-6df7-6f86a2170d21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1633718799544}},"actionLists":{"a-8":{"id":"a-8","title":"3. Open Accordion Item - BRIX ✅","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accordion-content---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c7"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-8-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".accordion-3-open-close-icon-wrapper---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c3"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-8-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix.second-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca","97301368-8d62-22a4-3471-d5299d85f2d0"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-8-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-content---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c7"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-8-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-3-open-close-icon-wrapper---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c3"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-8-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-8-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix.second-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca","97301368-8d62-22a4-3471-d5299d85f2d0"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":500,"target":{},"value":1,"unit":""}},{"id":"a-8-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":100,"easing":"ease","duration":300,"target":{},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626125281623},"a-9":{"id":"a-9","title":"3. Close Accordion Item - BRIX","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{},"value":0,"unit":""}},{"id":"a-9-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"xValue":0.9,"yValue":0.9,"locked":true}},{"id":"a-9-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix.second-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca","97301368-8d62-22a4-3471-d5299d85f2d0"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":100,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-content---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c7"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-9-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":100,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".accordion-3-open-close-icon-wrapper---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2c3"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-9-n-6","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":100,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".large-open-close-line---brix","selectorGuids":["97301368-8d62-22a4-3471-d5299d85f2ca"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626125281623}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Faq({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "color")}
      tag="div"
      id="faq-section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "flex")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "section-title", "center")}
          tag="h2"
        >
          {"Frequently Asked Questions"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "accordion-columns-wrapper---brix",
            "preview-page"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "column---brix", "left---brix")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170ce9"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"Why are your logo packages so expensive?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {
                    "Designing a logo is an iterative and multi-step process that involves consultations, research, brainstorming, sketches, and several design concepts, revisions and much more. "
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170cf4"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"How long does it takes to complete a logo?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {
                    "Ultimately, the timeline for completion depends on the feedback and communication. On average, a logo design takes between 1-2 weeks from start to finish."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170cff"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"Do you offer other services?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {
                    "Yes! We specialize in web design, Webflow development and SEO. These services will be added in the coming weeks so stay tuned!"
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "column---brix", "right---brix")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170d0b"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"What software do you use to create logos?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {"We use Adobe Illustrator and Photoshop."}
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170d16"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"Where are you based?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {
                    "We're based in Germany, but our team is globally-distributed and remote-first. We're flexible to your time zone, and most of our clients and partners are in North America and Europe. "
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "accordion-item---brix",
                "accordion-3---brix"
              )}
              data-w-id="6d75a909-065b-9699-6df7-6f86a2170d21"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-trigger---brix")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-item-title---brix",
                    "accordion-3---brix"
                  )}
                  tag="div"
                >
                  {"I have more questions, how do I contact you?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "accordion-3-open-close-icon-wrapper---brix"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "open-close-icon-wrapper---brix",
                      "large-icon---brix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix"
                      )}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "large-open-close-line---brix",
                        "second-line---brix"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "accordion-content---brix")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "grid_paragraph")}
                >
                  {"For more questions, you can reach us via email"}
                  <br />
                  <_Builtin.Link
                    className={_utils.cx(_styles, "email_link")}
                    button={false}
                    options={{
                      href: "mailto:contact@astraflow.co?subject=Hello%20Astraflow!",
                    }}
                  >
                    {"contact@astraflow.co"}
                  </_Builtin.Link>
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
