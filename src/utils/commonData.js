export const categoriesData = [
  {
    id: 1,
    title: "Sectoral Analysis",
    value: 10,
    color: "#1C75BC",
    description:
      "In-depth examination of industry-specific trends, competitive landscapes, and emerging markets, providing critical insights for sector-focused initiatives.",
    keyComponents: [
      "Industry Trends",
      "Competitor Analysis",
      "Emerging Markets",
      "SWOT Analysis",
    ],
  },
  {
    id: 2,
    title: "External Data",
    value: 10,
    color: "#00C45A",
    description:
      "Aggregated information from external sources such as market trends, competitor analysis, and public sentiment, offering a broader context for informed strategic planning.",
    keyComponents: [
      "Market Data",
      "Competitor Data",
      "Economic Indicators",
      "Demographic Data",
      "Third-Party Reports",
      "Social Media & Sentiment Analysis",
    ],
  },
  {
    id: 3,
    title: "Organizational Data",
    value: 10,
    color: "#D43F97",
    description:
      "Centralized records related to human resources, project management, and internal communications, reflecting the organization's structure, employee management, and internal activities.",
    keyComponents: [
      "HR Data",
      "Project Management",
      "Organizational Structure & Hierarchies",
      "Performance Reviews",
      "Training & Development",
    ],
  },
  {
    id: 4,
    title: "Country Profiles",
    value: 10,
    color: "#895EA7",
    description:
      "Detailed data on countries' economic and political climates, demographics, and trade opportunities, supporting targeted international business strategies.",
    keyComponents: [
      "Economic Data",
      "Political Climate",
      "Demographic Information",
      "Trade & Investment Opportunities",
    ],
  },
  {
    id: 5,
    title: "Research & Studies",
    value: 10,
    color: "#3EC3DB",
    description:
      "The compilation of academic research, market studies, and industry reports that provide a foundational understanding and informed perspectives to drive strategic decisions.",
    keyComponents: [
      "Academic Research",
      "Market Studies",
      "Industry Reports",
      "Case Studies",
    ],
  },
  {
    id: 6,
    title: "Policies & Procedures (Internal)",
    value: 10,
    color: "#F8962F",
    description:
      "The framework of internal guidelines, SOPs, and compliance standards that govern operations, ensuring consistency, safety, and adherence to organizational values and legal requirements.",
    keyComponents: [
      "Compliance Guidelines",
      "Employee Handbooks",
      "Company Policies",
      "Standard Operating Procedures (SOPs)",
    ],
  },
  {
    id: 7,
    title: "Documentation",
    value: 10,
    color: "#8B5E3C",
    description:
      "A structured repository of essential documents supporting operational clarity and continuity, including internal guidelines, project plans, and strategic initiatives.",
    keyComponents: [
      "Internal Documentation",
      "Guidelines & Manuals",
      "Project Documentation",
      "Strategic Plans",
    ],
  },
  {
    id: 8,
    title: "Data & Business Intelligence",
    value: 10,
    color: "#EF4136",
    description:
      "Comprehensive insights derived from operational, financial, and performance data, empowering decision-makers through robust Business Intelligence tools and analytics.",
    keyComponents: [
      "Operational Data",
      "Financial Data",
      "Performance Data",
      "Business Intelligence Dashboards",
      "Data Analytics Reports",
      "Investor Data & Opportunities",
    ],
  },
];

export const menuData = [
  {
    id: "overview",
    title: "Overview",
    subMenu: [
      {
        id: "overview-dashboard",
        title: "Dashboard",
        items: [
          { id: "overview-dashboard-key-metrics", name: "Key metrics and insights" },
          { id: "overview-dashboard-recent-queries", name: "Recent queries" },
          { id: "overview-dashboard-notifications", name: "Notifications" },
        ],
      },
      {
        id: "overview-insights-recommendations",
        title: "Insights & Recommendations",
        items: [
          { id: "overview-insights-llm", name: "LLM-generated insights" },
          { id: "overview-insights-alerts", name: "Alerts and trends" },
          { id: "overview-insights-next-actions", name: "Next-action suggestions" },
        ],
      },
    ],
  },
  {
    id: "search-analytics",
    title: "Search & Analytics",
    subMenu: [
      {
        id: "search-analytics-search",
        title: "Search",
        items: [
          { id: "search-ask-question", name: "Prompt – Ask a Question" },
          { id: "search-history", name: "Search history" },
          { id: "search-saved-queries", name: "Saved queries" },
        ],
      },
      {
        id: "search-analytics-analytics",
        title: "Analytics and Insights",
        items: [
          { id: "analytics-build-reports", name: "Build custom reports" },
          { id: "analytics-visualization-tools", name: "Visualization tools (charts, graphs)" },
          { id: "analytics-predictive-analytics", name: "Predictive analytics" },
        ],
      },
      {
        id: "search-analytics-reports",
        title: "Reports",
        items: [
          { id: "reports-schedule", name: "Schedule report generation" },
          { id: "reports-export", name: "Export data" },
          { id: "reports-share", name: "Share reports" },
        ],
      },
    ],
  },
  {
    id: "knowledge-center",
    title: "Knowledge Center",
    subMenu: [
      {
        id: "knowledge-center-research-studies",
        title: "Research and Studies",
        items: [],
      },
      {
        id: "knowledge-center-domain-insights",
        title: "Domain Insights",
        items: [
          { id: "domain-specific-knowledge", name: "Industry-specific knowledge" },
          { id: "domain-research-reports", name: "Research and reports" },
        ],
      },
      {
        id: "knowledge-center-guides-tutorials",
        title: "Guides & Tutorials",
        items: [
          { id: "guides-faqs", name: "FAQs and how-to guides" },
          { id: "guides-training-materials", name: "Training materials" },
        ],
      },
    ],
  },
  {
    id: "data-management",
    title: "Data Management",
    subMenu: [
      {
        id: "data-management-data-sources",
        title: "Data Sources",
        items: [
          { id: "data-sources-view-add", name: "View/Add/Remove data sources" },
          { id: "data-sources-internal-externals", name: "Internal and external integrations" },
          { id: "data-sources-usage-statistics", name: "Usage statistics" },
        ],
      },
      {
        id: "data-management-data-catalog",
        title: "Data Catalog",
        items: [
          { id: "data-catalog-browse", name: "Browse available data sets" },
          { id: "data-catalog-metadata", name: "Metadata and tagging" },
          { id: "data-catalog-classification", name: "Data classification" },
        ],
      },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration",
    subMenu: [
      {
        id: "collaboration-collaborative-workspace",
        title: "Collaborative Workspace",
        items: [
          { id: "workspace-share", name: "Share data/insights with teams" },
          { id: "workspace-commenting-editing", name: "Real-time commenting and editing" },
          { id: "workspace-annotation-tagging", name: "Annotation and tagging" },
        ],
      },
      {
        id: "collaboration-user-sharing",
        title: "User Sharing",
        items: [
          { id: "user-sharing-create", name: "Create shared views or workspaces" },
          { id: "user-sharing-permissions", name: "Set collaboration permissions" },
        ],
      },
    ],
  },
  {
    id: "settings-support",
    title: "Settings & Support",
    subMenu: [
      {
        id: "settings-user-preferences",
        title: "User Preferences",
        items: [
          { id: "preferences-theme-notifications", name: "Theme, notifications, and language" },
        ],
      },
      {
        id: "settings-access-management",
        title: "Access Management",
        items: [
          { id: "access-roles-permissions", name: "Manage roles and permissions" },
        ],
      },
      {
        id: "settings-system-settings",
        title: "System Settings",
        items: [
          { id: "system-settings-api", name: "API integration" },
          { id: "system-settings-webhooks", name: "Webhooks and external connections" },
        ],
      },
      {
        id: "settings-help-support",
        title: "Help & Support",
        items: [
          { id: "help-chatbot", name: "Chatbot/live assistance" },
          { id: "help-feedback-suggestions", name: "Feedback and suggestions" },
        ],
      },
    ],
  },
];

