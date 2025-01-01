/**
 * BADGE Cards
 */

const BADGE_CARDS = [
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card1-azureaistudio?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Azure AI Foundry",
    description:
      " Build, evaluate, and deploy generative AI solutions and custom agents. ",
  },
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card2-azureaicontentsafety?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Azure AI Content Safety",
    description: " Use AI to monitor text and image content for safety. ",
  },
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card3-windows?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Windows Server on Azure",
    description:
      " Run business-critical workloads with hybrid cloud agility and advanced security. ",
  },
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card4-azurelocal?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Azure Local",
    description:
      " Run any app, VM, or container anywhere with a consistent Azure experience. ",
  },
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card5-azuresqldatabase?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Azure SQL Database",
    description:
      " Build limitless, trusted, AI-ready apps on a fully managed SQL database. ",
  },
  {
    badge:
      "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/371220-productandservices-logos-featured-card6-microsoftfabric?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=100&fmt=png-alpha&fit=constrain",
    title: "Microsoft Fabric",
    description:
      " Reshape how everyone accesses, manages, and acts on data with a single, AI-powered platform. ",
  },
];

/**
 * STORIES
 */
const STORIES = [
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-CustomerStories-HP-656x522?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=100&fmt=png-alpha&fit=constrain",
    authorImage:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-HP-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=74&qlt=100&fmt=png-alpha&fit=constrain",
    quote:
      "HP incorporated GitHub Copilot into its workflow to help developers collaborate more easily and work more productively.",
    products: [
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-GitHubCopilot-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "GitHub Copilot",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureDevOps-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure DevOps",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Hero-icon-337178?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=85&fmt=png-alpha&fit=constrain",
        label: "Visual Studio",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Customer-GM-Product-GitHub?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "GitHub Enterprise",
      },
    ],
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-CustomerStories-Unity-656x522?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=100&fmt=png-alpha&fit=constrain",
    authorImage:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Unity-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=75&qlt=100&fit=constrain",
    quote:
      "Unity made game development more accessible to all by using Azure OpenAI Service to create an AI assistant that helps creators throughout their development workflows.",
    products: [
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureOpenAIService-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=20&hei=20&qlt=85",
        label: "Azure OpenAI Service",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureAIContentSafety-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure AI Content Safety",
      },
    ],
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-CustomerStory-Media-LEGO?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=100&fmt=png-alpha&fit=constrain",
    authorImage:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-LEGO-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=75&qlt=100",
    quote:
      "LEGO House takes the physical brick to new frontiers with inventive, interactive digital experiences built with Azure solutions.",
    products: [
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureIoTEdge-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=20&hei=20&qlt=85",
        label: "Azure IoT Edge",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureKubernetesService-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure Kubernetes Service (AKS)",
      },
    ],
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-Desktop-CustomerStories-Siemens-656x522?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=100&fit=constrain",
    authorImage:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Siemens-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=75&qlt=100&fit=constrain",
    quote:
      "Siemens connects frontline workers and engineers for real-time problem-solving using Azure AI Foundry.",
    products: [
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureAI-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure AI",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-ProductandServices-Featured-AzureAIStudio-28x28?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure AI Foundry",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureMachineLearning-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure Machine Learning",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureOpenAIService-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=20&hei=20&qlt=85",
        label: "Azure OpenAI Service",
      },
    ],
  },
  {
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Customer-img-Heineken-2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&hei=547&qlt=85&fmt=png-alpha&fit=constrain",
    authorImage:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/351994-CustomerStories-Logo-Heineken-135x58?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=174&hei=75&qlt=85&fit=constrain",
    quote:
      "HEINEKEN built chatbots that connect employees with information across the company using Azure OpenAI Service and its built-in ChatGPT capabilities.",
    products: [
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureAI-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure AI",
      },
      {
        icon: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/351994-Product-Logo-AzureOpenAIService-16x16?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85",
        label: "Azure OpenAI Service",
      },
    ],
  },
];
