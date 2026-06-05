import { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "headline", type: "text", required: true },
        { name: "subheadline", type: "textarea" },
        {
          name: "primaryCta",
          type: "group",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
        {
          name: "secondaryCta",
          type: "group",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
    {
      name: "ourPerspective",
      label: "Our Perspective Section",
      type: "textarea",
    },
    {
      name: "capabilites",
      label: "Capabilities (Core advisory areas)",
      type: "group",
      fields: [
        {
          name: "peopleInfrastructure",
          label: "People Infrastracture",
          type: "textarea",
        },
        {
          name: "organizationalStructure",
          label: "Organization Structure",
          type: "textarea",
        },
        {
          name: "governanceSystems",
          type: "textarea",
          label: "Governance Systems",
        },
        {
          name: "sustainableGrowth",
          label: "Sustainable Growth",
          type: "textarea",
        },
      ],
    },
    {
      name: "valueProposition",
      label: "Why Organizations Partner With Us Section",
      type: "group",
      fields: [
        { name: "description", type: "textarea" },
        {
          name: "features",
          label: "Feature Items (add three for now, and select icon)",
          type: "array", // Allows adding, removing, and reordering the listed points
          labels: {
            singular: "Feature",
            plural: "Features",
          },
          fields: [
            {
              name: "icon",
              type: "select", // Provides a dropdown for your editor to choose the icon graphic
              options: [
                { label: "Exclamation / Alert", value: "AlertCircle" },
                { label: "Ecosystem / People", value: "Users" },
                { label: "Globe / Pan-African", value: "Globe" },
                {
                  label: "Growth without alignment",
                  value: "TrendingUp",
                },
                {
                  label: "Unclear Roles/Structures",
                  value: "GitFork",
                },
                {
                  label: "Inconsistent Processes",
                  value: "RefreshCw",
                },
                {
                  label: "Transitions & Continuity",
                  value: "Shuffle",
                },
                {
                  label: "Policy/Practice Gaps",
                  value: "Unlink",
                },
                {
                  label: "Unclear Decision-Making",
                  value: "HelpCircle",
                },
              ],
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "processSection",
      label: "Our Process Section",
      type: "group",
      fields: [
        {
          name: "overline",
          label: "Section Overline",
          type: "text",
          required: true,
          defaultValue: "OUR PROCESS",
        },
        {
          name: "title",
          label: "Section Title",
          type: "text",
          required: true,
          defaultValue: "Framework for Implementation",
        },
        {
          name: "steps",
          label: "Process Steps",
          type: "array",
          minRows: 1,
          maxRows: 6,
          labels: {
            singular: "Step",
            plural: "Steps",
          },
          fields: [
            {
              name: "title",
              label: "Step Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Step Description",
              type: "textarea",
              required: true,
            },
          ],
        },
      ],
    },

    {
      name: "experience",
      label: "Experience Section",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Section Title",
          type: "text",
          defaultValue: "Experience & Specilaztion",
        },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
