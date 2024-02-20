import { ensureLeadingSlash } from "@vuepress/helper/client";
import type { FunctionalComponent, PropType } from "vue";
import { h, resolveComponent } from "vue";

export interface ProjectLinkProps {
  type?: "plugin" | "theme";
  name: string;
  path?: string;
}

const ProjectLink: FunctionalComponent<
  ProjectLinkProps,
  Record<never, never>,
  { default: () => string }
> = (props, { slots }) => {
  const path = ensureLeadingSlash(props.path || "/");
  const base =
    props.name === "hope" ? "" : `/${props.name.replace(/\d+$/, "")}`;

  return h(
    "a",
    {
      href: `https://${`${props.type || "plugin"}-${
        props.name
      }.vuejs.press${path}`}`,
      target: "_blank",
    },
    [slots.default(), h(resolveComponent("ExternalLinkIcon"))]
  );
};

ProjectLink.displayName = "ProjectLink";

ProjectLink.props = {
  /**
   * Plugin type
   */
  type: {
    type: String as PropType<"plugin" | "theme">,
    default: "plugin",
  },

  /**
   * Plugin name
   */
  name: {
    type: String,
    required: true,
  },

  /**
   * Link pathname
   */
  path: {
    type: String,
    default: "/",
  },
};

export default ProjectLink;
