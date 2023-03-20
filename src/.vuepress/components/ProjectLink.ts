import { ensureLeadingSlash } from "@vuepress/shared";
import { type FunctionalComponent, type PropType, h } from "vue";

export interface ProjectLinkProps {
  type?: "plugin" | "theme";
  name: string;
  path?: string;
}

const ProjectLink: FunctionalComponent<ProjectLinkProps> = (
  props,
  { slots }
) => {
  const path = ensureLeadingSlash(props.path || "/");

  return h(
    "a",
    {
      href: `https://${`${props.type || "plugin"}-${
        props.name
      }.vuejs.press${path}`}`,
      target: "_blank",
    },
    slots["default"]?.()
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
