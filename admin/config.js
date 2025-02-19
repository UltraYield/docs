export const config = {
  load_config_file: false,
  backend: {
    name: "github",
    repo: "UltraYield/docs"
  },
  branch:'main',
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      label: "Навигация", name: "navigation", folder: "content/nav",
      create: true, slug: "{{text}}",
      fields: [
        { label: "Название", name: "text", widget: "string" },
        { label: "URL", name: "link", widget: "string" },
        { label: "Порядок", name: "order", widget: "number" },
      ]
    },
    {
      label: "Боковое меню", name: "sidebar", folder: "content/sidebar",
      create: true, slug: "{{text}}",
      fields: [
        { label: "Название", name: "text", widget: "string" },
        { label: "URL", name: "link", widget: "string" },
        { label: "Порядок", name: "order", widget: "number" },
      ]
    },
    {
      label: "Детали", name: "features", folder: "content/features",
      create: true, slug: "{{text}}",
      fields: [
        { label: "Название", name: "text", widget: "string" },
        { label: "Описание", name: "description", widget: "markdown" },
      ]
    },
  ]
}
