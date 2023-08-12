import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dropdown","originalId":"614395a3d3302a4aac106d46|c2e46496-233a-c5d9-8c52-485cc9c1e687","appliesTo":"CLASS"},"targets":[{"selector":".dropdown","originalId":"614395a3d3302a4aac106d46|c2e46496-233a-c5d9-8c52-485cc9c1e687","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1597797870795},"e-42":{"id":"e-42","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".dropdown","originalId":"614395a3d3302a4aac106d46|c2e46496-233a-c5d9-8c52-485cc9c1e687","appliesTo":"CLASS"},"targets":[{"selector":".dropdown","originalId":"614395a3d3302a4aac106d46|c2e46496-233a-c5d9-8c52-485cc9c1e687","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1597797870797},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dce1ee2c-a89a-fa2e-618d-497f7f392df5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dce1ee2c-a89a-fa2e-618d-497f7f392df5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1634496050342},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dce1ee2c-a89a-fa2e-618d-497f7f392df5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dce1ee2c-a89a-fa2e-618d-497f7f392df5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1634496050342}},"actionLists":{"a-10":{"id":"a-10","title":"Navigation (OPEN)","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"yValue":10,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-10-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1597797876625},"a-11":{"id":"a-11","title":"Navigation (CLOSE)","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"yValue":10,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-list","selectorGuids":["9d31dbf3-3ba6-af5e-0bc2-91bf41fa4f6a"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1597797876625},"a-12":{"id":"a-12","title":"NAV open","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav_icon","selectorGuids":["3d14f907-d73b-85fc-0af8-58fbedaccdc5"]},"value":34}}]}],"useFirstGroupAsInitialState":false,"createdOn":1634496053127},"a-13":{"id":"a-13","title":"NAV close","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav_icon","selectorGuids":["3d14f907-d73b-85fc-0af8-58fbedaccdc5"]},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1634496053127}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navigation-wrap")}
        tag="nav"
        id="nav"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-navigation")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "nav__left")} tag="div">
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
                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616ab8fcfdb3cb730eb2f6dd_astraflow_logo-design2.svg"
              />
            </_Builtin.NavbarBrand>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "nav_right")} tag="div">
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav__wrap")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                options={{
                  href: "#pricing-section",
                  preload: "none",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block")}
                  tag="div"
                >
                  {"Pricing"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "dropdown")}
                tag="div"
                delay="200"
                hover="1"
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "nav__link")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "chevron")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "dropdown_text")}
                    tag="div"
                  >
                    {"Resources"}
                  </_Builtin.Block>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list")}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "dropdown-base-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "dropdown-link-base")}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(
                          _styles,
                          "navigation-grid-dropdown"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "nav-links-wrapper")}
                          tag="div"
                        >
                          <_Builtin.Grid
                            className={_utils.cx(_styles, "link-grid")}
                            tag="div"
                          >
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "large-link-wrapper"
                              )}
                              button={false}
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "dropdown_image")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616c0dc9947a5d71da1f6f55_Group%20114.png"
                              />
                              <_Builtin.Block tag="div">
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "title-wrapper-2"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(_styles, "nav-title")}
                                    tag="div"
                                  >
                                    {"AstraStickers"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "badge-orange"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "badge-text"
                                      )}
                                      tag="div"
                                    >
                                      {"COMINGSOON"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Paragraph
                                  className={_utils.cx(
                                    _styles,
                                    "details-overview"
                                  )}
                                >
                                  {
                                    "A collection of 80+ customizable trippy stickers "
                                  }
                                </_Builtin.Paragraph>
                                <_Builtin.Block
                                  className={_utils.cx(_styles, "details-link")}
                                  tag="div"
                                >
                                  {"See details"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Link>
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "large-link-wrapper"
                              )}
                              button={false}
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "dropdown_image")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616c2d9cac007b13caf0edd5_astraflow-product2.png"
                              />
                              <_Builtin.Block tag="div">
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "title-wrapper-2"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(_styles, "nav-title")}
                                    tag="div"
                                  >
                                    {"AstraNFTs"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "badge-orange",
                                      "second"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "badge-text"
                                      )}
                                      tag="div"
                                    >
                                      {"COMINGSOON"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Paragraph
                                  className={_utils.cx(
                                    _styles,
                                    "details-overview"
                                  )}
                                >
                                  <_Builtin.Strong>
                                    {
                                      "Unique Webflow components on the blockchain."
                                    }
                                  </_Builtin.Strong>
                                </_Builtin.Paragraph>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "details-link",
                                    "second"
                                  )}
                                  tag="div"
                                >
                                  {"See details"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Link>
                            <_Builtin.Link
                              className={_utils.cx(
                                _styles,
                                "large-link-wrapper"
                              )}
                              button={false}
                              options={{
                                href: "#",
                              }}
                            >
                              <_Builtin.Image
                                className={_utils.cx(_styles, "dropdown_image")}
                                loading="lazy"
                                width="auto"
                                height="auto"
                                src="https://uploads-ssl.webflow.com/615e1039e4188175442dcc09/616c7e9e9c8d491fcc258d33_astraflow-logo-brnd.png"
                              />
                              <_Builtin.Block tag="div">
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "title-wrapper-2"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(_styles, "nav-title")}
                                    tag="div"
                                  >
                                    {"AstraToken"}
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "badge-orange",
                                      "third"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "badge-text"
                                      )}
                                      tag="div"
                                    >
                                      {"COMINGSOON"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Paragraph
                                  className={_utils.cx(
                                    _styles,
                                    "details-overview"
                                  )}
                                >
                                  <_Builtin.Strong>
                                    {
                                      "AnERC-20 token that you can redeem for design projects"
                                    }
                                  </_Builtin.Strong>
                                </_Builtin.Paragraph>
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "details-link",
                                    "third"
                                  )}
                                  tag="div"
                                >
                                  {"See details"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Link>
                          </_Builtin.Grid>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.Link
                className={_utils.cx(_styles, "nav__link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "nav-link")}
                  tag="div"
                >
                  {"Contact Us"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button")}
              data-w-id="dce1ee2c-a89a-fa2e-618d-497f7f392df5"
              tag="div"
            >
              <_Builtin.NotSupported _atom="Animation" />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "btn", "mobile")}
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
    </_Component>
  );
}
