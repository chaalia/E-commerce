// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dErDvWPnyKvMfD5m4jpnKM
// Component: 9mok55OwiDz
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: dErDvWPnyKvMfD5m4jpnKM/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: 9mok55OwiDz/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: OxBpFUQdtlgI/icon

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  iconOnly: "iconOnly";
  colors:
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link";
  size: "large" | "small" | "narrow";
  rounded: "rounded";
  states: "active";
  isDisabled: "isDisabled";
};

export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  colors?: SingleChoiceArg<
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link"
  >;
  size?: SingleChoiceArg<"large" | "small" | "narrow">;
  rounded?: SingleBooleanChoiceArg<"rounded">;
  states?: SingleChoiceArg<"active">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "iconOnly",
  "colors",
  "size",
  "rounded",
  "states",
  "isDisabled"
);

export type PlasmicButton__ArgsType = {
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  colors?: SingleChoiceArg<
    | "gray"
    | "white"
    | "blue"
    | "black"
    | "lightGray"
    | "lightGrayOutline"
    | "link"
  >;
  size?: SingleChoiceArg<"large" | "small" | "narrow">;
  rounded?: SingleBooleanChoiceArg<"rounded">;
  states?: SingleChoiceArg<"active">;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  dataFetches?: PlasmicButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root__colors_black]: hasVariant(variants, "colors", "black"),
          [sty.root__colors_blue]: hasVariant(variants, "colors", "blue"),
          [sty.root__colors_gray]: hasVariant(variants, "colors", "gray"),
          [sty.root__colors_lightGrayOutline]: hasVariant(
            variants,
            "colors",
            "lightGrayOutline"
          ),
          [sty.root__colors_lightGray]: hasVariant(
            variants,
            "colors",
            "lightGray"
          ),
          [sty.root__colors_link]: hasVariant(variants, "colors", "link"),
          [sty.root__colors_white]: hasVariant(variants, "colors", "white"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.root__rounded]: hasVariant(variants, "rounded", "rounded"),
          [sty.root__rounded_size_large]:
            hasVariant(variants, "rounded", "rounded") &&
            hasVariant(variants, "size", "large"),
          [sty.root__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.root__size_large]: hasVariant(variants, "size", "large"),
          [sty.root__size_narrow]: hasVariant(variants, "size", "narrow"),
          [sty.root__size_small]: hasVariant(variants, "size", "small"),
          [sty.root__states_active]: hasVariant(variants, "states", "active")
        }
      )}
    >
      {(
        hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showEndIcon", "showEndIcon")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      ) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox___4Hrfy, {
            [sty.freeBox__iconOnly___4HrfyUnekw]: hasVariant(
              variants,
              "iconOnly",
              "iconOnly"
            ),
            [sty.freeBox__showEndIcon___4HrfyHWHn]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBox__showStartIcon___4HrfyrnZSp]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.freeBox__size_large___4HrfydSuj0]: hasVariant(
              variants,
              "size",
              "large"
            ),
            [sty.freeBox__size_small___4HrfyORztb]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(defaultcss.all, sty.svg___6XD)}
                    role={"img"}
                  />
                ),

                value: args.startIcon,
                className: classNames(sty.slotTargetStartIcon, {
                  [sty.slotTargetStartIcon__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),
                  [sty.slotTargetStartIcon__colors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),
                  [sty.slotTargetStartIcon__colors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),
                  [sty.slotTargetStartIcon__showEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  ),
                  [sty.slotTargetStartIcon__size_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),
                  [sty.slotTargetStartIcon__size_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(hasVariant(variants, "iconOnly", "iconOnly") ? true : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren__colors_black]: hasVariant(
                variants,
                "colors",
                "black"
              ),
              [sty.slotTargetChildren__colors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),
              [sty.slotTargetChildren__colors_gray]: hasVariant(
                variants,
                "colors",
                "gray"
              ),
              [sty.slotTargetChildren__colors_link]: hasVariant(
                variants,
                "colors",
                "link"
              ),
              [sty.slotTargetChildren__iconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),
              [sty.slotTargetChildren__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildren__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
              [sty.slotTargetChildren__size_large]: hasVariant(
                variants,
                "size",
                "large"
              ),
              [sty.slotTargetChildren__size_small]: hasVariant(
                variants,
                "size",
                "small"
              )
            })
          })
        : null}
      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__ki07S, {
            [sty.freeBox__showEndIcon__ki07SHWHn]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.freeBox__size_small__ki07SORztb]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(defaultcss.all, sty.svg__tE4Rn)}
                    role={"img"}
                  />
                ),

                value: args.endIcon,
                className: classNames(sty.slotTargetEndIcon, {
                  [sty.slotTargetEndIcon__colors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),
                  [sty.slotTargetEndIcon__colors_link]: hasVariant(
                    variants,
                    "colors",
                    "link"
                  ),
                  [sty.slotTargetEndIcon__showEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  return pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButton__Fetches;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
