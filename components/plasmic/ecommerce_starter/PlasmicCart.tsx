// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dErDvWPnyKvMfD5m4jpnKM
// Component: SS2_zdaRvT6s
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: emxQNjUI4uHX/component
import CartItem from "../../CartItem"; // plasmic-import: 33Y-_J39Tdpq/component
import Button from "../../Button"; // plasmic-import: 9mok55OwiDz/component
import Separator from "../../Separator"; // plasmic-import: CZauEleNtWdG/component
import Footer from "../../Footer"; // plasmic-import: dP2xEJNU1vI_/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: FTRLMKer0YEQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: dErDvWPnyKvMfD5m4jpnKM/projectcss
import * as sty from "./PlasmicCart.module.css"; // plasmic-import: SS2_zdaRvT6s/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: OxBpFUQdtlgI/icon
import Secure2Icon from "./icons/PlasmicIcon__Secure2"; // plasmic-import: ToXhGmWMQ4zq/icon

export type PlasmicCart__VariantMembers = {
  filled: "filled";
};

export type PlasmicCart__VariantsArgs = {
  filled?: SingleBooleanChoiceArg<"filled">;
};

type VariantPropType = keyof PlasmicCart__VariantsArgs;
export const PlasmicCart__VariantProps = new Array<VariantPropType>("filled");

export type PlasmicCart__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCart__ArgsType;
export const PlasmicCart__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5"
);

export type PlasmicCart__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  section?: p.Flex<"section">;
  cartItem?: p.Flex<typeof CartItem>;
  separator?: p.Flex<typeof Separator>;
  svg?: p.Flex<"svg">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultCartProps {
  dataFetches: PlasmicCart__Fetches;
}

function PlasmicCart__RenderFunc(props: {
  variants: PlasmicCart__VariantsArgs;
  args: PlasmicCart__ArgsType;
  overrides: PlasmicCart__OverridesType;
  dataFetches?: PlasmicCart__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Shopping Cart"}</title>
        <meta key="og:title" property="og:title" content={"Shopping Cart"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "Congue pulvinar scelerisque vestibulum senectus ullamcorper ac sem justo odio adipiscing volutpat nam a amet quam facilisi parturient parturient et id parturient per."
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            { [sty.root__filled]: hasVariant(variants, "filled", "filled") }
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar, {
              [sty.navBar__filled]: hasVariant(variants, "filled", "filled")
            })}
            filled={
              hasVariant(variants, "filled", "filled")
                ? ("filled" as const)
                : undefined
            }
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(defaultcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__jxXxa, {
                [sty.freeBox__filled__jxXxaxfv47]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                )
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__b4Pzy, {
                  [sty.freeBox__filled__b4Pzyxfv47]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  )
                })}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__fuZjC,
                    {
                      [sty.text__filled__fuZjCxfv47]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    }
                  )}
                >
                  {hasVariant(variants, "filled", "filled")
                    ? "Your bag (1)"
                    : "Looks like your bag is empty"}
                </div>

                {(hasVariant(variants, "filled", "filled") ? true : false) ? (
                  <CartItem
                    data-plasmic-name={"cartItem"}
                    data-plasmic-override={overrides.cartItem}
                    className={classNames("__wab_instance", sty.cartItem, {
                      [sty.cartItem__filled]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                    title={"Eternity NITRO Men's Running Shoes"}
                  />
                ) : null}

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__gZaGc)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__zQwC3,
                      {
                        [sty.text__filled__zQwC3Xfv47]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        )
                      }
                    )}
                  >
                    {
                      "If you have an account, please sign in to see items you previously added."
                    }
                  </div>

                  <Button
                    colors={"black" as const}
                    rounded={"rounded" as const}
                    size={"large" as const}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__kLp1E
                        )}
                      >
                        {"Login"}
                      </div>
                    ) : null}
                  </Button>

                  <Button
                    colors={"white" as const}
                    rounded={"rounded" as const}
                  >
                    {"Continue shopping"}
                  </Button>
                </p.Stack>

                {(hasVariant(variants, "filled", "filled") ? false : false) ? (
                  <div
                    className={classNames(defaultcss.all, sty.freeBox___8Qv0W, {
                      [sty.freeBox__filled___8Qv0Wxfv47]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__womxR, {
                  [sty.freeBox__filled__womxRxfv47]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  )
                })}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__yuDUu, {
                    [sty.freeBox__filled__yuDUuxfv47]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    )
                  })}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___6Wy7N,
                      {
                        [sty.text__filled___6Wy7Nxfv47]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        )
                      }
                    )}
                  >
                    {"Order Summary"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__bJf7C, {
                      [sty.freeBox__filled__bJf7Cxfv47]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                  >
                    <div
                      className={classNames(defaultcss.all, sty.freeBox__zdatt)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__jvDHf,
                          {
                            [sty.freeBox__filled__jvDHfxfv47]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "Subtotal (1)"
                            : "Subtotal (0)",
                          value: args.slot5,
                          className: classNames(sty.slotTargetSlot5, {
                            [sty.slotTargetSlot5__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox___8DFrL,
                          {
                            [sty.freeBox__filled___8DFrLxfv47]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.children,
                          className: classNames(sty.slotTargetChildren, {
                            [sty.slotTargetChildren__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__qw2Tq)}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__n9PGl,
                            {
                              [sty.text__filled__n9PGLxfv47]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Shipping (free over $49)"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__bcwTf,
                          {
                            [sty.freeBox__filled__bcwTfxfv47]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "FREE"
                            : "-",
                          value: args.slot,
                          className: classNames(sty.slotTargetSlot, {
                            [sty.slotTargetSlot__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox___15Ix3
                      )}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__pnfLb,
                            {
                              [sty.text__filled__pnfLBxfv47]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Tax"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__pE9U0,
                          {
                            [sty.freeBox__filled__pE9U0Xfv47]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "-",
                          value: args.slot2,
                          className: classNames(sty.slotTargetSlot2, {
                            [sty.slotTargetSlot2__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__efZfd,
                        {
                          [sty.button__filled__efZfDxfv47]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        }
                      )}
                      colors={"link" as const}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__ivHqk
                        )}
                      >
                        {"Have a promo code?"}
                      </div>
                    </Button>

                    <Separator
                      data-plasmic-name={"separator"}
                      data-plasmic-override={overrides.separator}
                      className={classNames("__wab_instance", sty.separator)}
                      dark={"dark" as const}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox__hmMy6,
                        {
                          [sty.freeBox__filled__hmMy6Xfv47]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        }
                      )}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text___5Mx9,
                            {
                              [sty.text__filled___5Mx9Xfv47]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Total"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox___4FtL,
                          {
                            [sty.freeBox__filled___4FtLxfv47]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.slot4,
                          className: classNames(sty.slotTargetSlot4, {
                            [sty.slotTargetSlot4__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    {(hasVariant(variants, "filled", "filled") ? true : false)
                      ? p.renderPlasmicSlot({
                          defaultContents: true ? (
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__pvrX4
                              )}
                              colors={"blue" as const}
                              rounded={"rounded" as const}
                              size={"large" as const}
                            >
                              <div
                                className={classNames(
                                  defaultcss.all,
                                  defaultcss.__wab_text,
                                  sty.text__tvh3
                                )}
                              >
                                {"Checkout"}
                              </div>
                            </Button>
                          ) : null,
                          value: args.slot3
                        })
                      : null}

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox__cidcy,
                        {
                          [sty.freeBox__filled__cidcYxfv47]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        }
                      )}
                    >
                      <Secure2Icon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(defaultcss.all, sty.svg)}
                        role={"img"}
                      />

                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__pt889,
                            {
                              [sty.text__filled__pt889Xfv47]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Secure"}
                        </div>
                      ) : null}
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__hxB9C, {
                    [sty.freeBox__filled__hxB9Cxfv47]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    )
                  })}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ydvlb)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"48px" as const}
                    src={{
                      src: "/plasmic/ecommerce_starter/images/visa.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yb11C)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"48px" as const}
                    src={{
                      src: "/plasmic/ecommerce_starter/images/americanExpress.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__jJqz2)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"48px" as const}
                    src={{
                      src: "/plasmic/ecommerce_starter/images/discover.svg",
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__x2Ee)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"48px" as const}
                    src={{
                      src: "/plasmic/ecommerce_starter/images/mastercard.svg",
                      fullWidth: 213,
                      fullHeight: 150,
                      aspectRatio: 1.416667
                    }}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__eczlh, {
                [sty.freeBox__filled__eczlHxfv47]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                )
              })}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ck6A)}
                displayHeight={"32px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={
                  "https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw4b201dc8/images/for-the-planet.png" as const
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__opMM)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__dgM6X
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button___0XzQz)}
                  colors={"link" as const}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navBar", "section", "cartItem", "separator", "svg", "footer"],
  navBar: ["navBar"],
  section: ["section", "cartItem", "separator", "svg"],
  cartItem: ["cartItem"],
  separator: ["separator"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  section: "section";
  cartItem: typeof CartItem;
  separator: typeof Separator;
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCart__VariantsArgs;
    args?: PlasmicCart__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCart__Fetches;
  } & Omit<PlasmicCart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCart__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCart__ArgProps,
      internalVariantPropNames: PlasmicCart__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    cartItem: makeNodeComponent("cartItem"),
    separator: makeNodeComponent("separator"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps
  }
);

export default PlasmicCart;
/* prettier-ignore-end */
