# Sidebar 16

## Metadata
- **Category**: Sidebar
- **Objective**: AWS-style full-width mega menu sidebar.
- **Use Case**: Large-scale service catalogues or cloud management consoles requiring navigation across hundreds of items organized by category.
- **Visual Style**: High-density navigation with a focus on comprehensive visibility and logical grouping.
- **Interactivity**: Clicking a primary category reveals a full-width overlay panel containing a multi-column grid of services and sub-categories.

## Description
A powerhouse component for platform-scale applications. It handles extreme navigation depth by utilizing the entire content width for categorizing services, similar to the AWS Management Console navigation.

## Source Code
```tsx
"use client";

import {
  Check,
  ChevronRight,
  ChevronsUpDown,
  LogOut,
  Search,
  User,
  X,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Nav group with optional collapsible state
type NavGroup = {
  title: string;
  items: Array<{
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href: string;
    isActive?: boolean;
    children?: Array<{
      label: string;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      href: string;
      isActive?: boolean;
    }>;
  }>;
  defaultOpen?: boolean;
};

// User data for footer (Sidebar6+)
type UserData = {
  name: string;
  email: string;
  avatar: string;
};

// Workspace data for switcher (Sidebar7+)
type Workspace = {
  id: string;
  name: string;
  logo: string;
  plan: string;
};

// Complete sidebar data structure
type SidebarData = {
  // Logo/branding (all sidebars)
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  // Main navigation groups (all sidebars)
  navGroups: NavGroup[];
  // Footer navigation group (all sidebars)
  footerGroup: NavGroup;
  // User data for user footer (Sidebar6+)
  user?: UserData;
  // Workspaces for switcher (Sidebar7+)
  workspaces?: Workspace[];
  // Currently active workspace (Sidebar7+)
  activeWorkspace?: string;
};

// Shared sidebar data - works with all sidebar variations
const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Shadcnblocks",
    title: "Shadcnblocks",
    description: "Build your app",
  },
  navGroups: [],
  footerGroup: {
    title: "Support",
    items: [],
  },
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  workspaces: [
    {
      id: "1",
      name: "Shadcnblocks",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Enterprise",
    },
    {
      id: "2",
      name: "Shadcn Templates",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Startup",
    },
    {
      id: "3",
      name: "Shadcn Components",
      logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
      plan: "Free",
    },
  ],
  activeWorkspace: "1",
};

// Helper to get active workspace
const getActiveWorkspace = (data: SidebarData): Workspace | undefined => {
  return data.workspaces?.find((w) => w.id === data.activeWorkspace);
};

// AWS-style mega menu data - extensive service catalog
const megaMenuCategories = [
  {
    id: "compute",
    title: "Compute",
    sections: [
      {
        title: "Instances",
        items: [
          "EC2 Instances",
          "Spot Instances",
          "Reserved Instances",
          "Dedicated Hosts",
          "Capacity Reservations",
        ],
      },
      {
        title: "Containers",
        items: [
          "ECS",
          "EKS",
          "Fargate",
          "ECR",
          "App Runner",
          "Red Hat OpenShift",
        ],
      },
      {
        title: "Serverless",
        items: [
          "Lambda",
          "Lambda@Edge",
          "Step Functions",
          "EventBridge",
          "SQS",
          "SNS",
        ],
      },
      {
        title: "Edge & Hybrid",
        items: ["Outposts", "Wavelength", "Local Zones", "Snow Family"],
      },
    ],
  },
  {
    id: "storage",
    title: "Storage",
    sections: [
      {
        title: "Object Storage",
        items: [
          "S3 Standard",
          "S3 Intelligent-Tiering",
          "S3 Glacier",
          "S3 Glacier Deep Archive",
          "S3 Access Points",
        ],
      },
      {
        title: "Block Storage",
        items: [
          "EBS Volumes",
          "EBS Snapshots",
          "Instance Store",
          "FSx for NetApp",
        ],
      },
      {
        title: "File Storage",
        items: ["EFS", "FSx for Windows", "FSx for Lustre", "FSx for OpenZFS"],
      },
      {
        title: "Data Transfer",
        items: [
          "DataSync",
          "Transfer Family",
          "Snow Family",
          "Storage Gateway",
        ],
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    sections: [
      {
        title: "Relational",
        items: [
          "RDS for PostgreSQL",
          "RDS for MySQL",
          "RDS for MariaDB",
          "RDS for Oracle",
          "RDS for SQL Server",
          "Aurora PostgreSQL",
          "Aurora MySQL",
          "Aurora Serverless",
        ],
      },
      {
        title: "Key-Value",
        items: [
          "DynamoDB",
          "DynamoDB Accelerator",
          "ElastiCache Redis",
          "ElastiCache Memcached",
          "MemoryDB",
        ],
      },
      {
        title: "Document",
        items: ["DocumentDB", "MongoDB Compatible"],
      },
      {
        title: "Other",
        items: [
          "Neptune",
          "Timestream",
          "QLDB",
          "Keyspaces",
          "Redshift",
          "Redshift Serverless",
        ],
      },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    sections: [
      {
        title: "Core Networking",
        items: [
          "VPC",
          "Subnets",
          "Route Tables",
          "Internet Gateway",
          "NAT Gateway",
          "Elastic IPs",
        ],
      },
      {
        title: "Connectivity",
        items: [
          "Direct Connect",
          "Site-to-Site VPN",
          "Client VPN",
          "Transit Gateway",
          "PrivateLink",
        ],
      },
      {
        title: "DNS & CDN",
        items: ["Route 53", "CloudFront", "Global Accelerator"],
      },
      {
        title: "Security",
        items: [
          "Security Groups",
          "Network ACLs",
          "WAF",
          "Shield",
          "Firewall Manager",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security & Identity",
    sections: [
      {
        title: "Identity",
        items: [
          "IAM",
          "IAM Identity Center",
          "Organizations",
          "Resource Access Manager",
          "Directory Service",
        ],
      },
      {
        title: "Detection",
        items: ["GuardDuty", "Inspector", "Macie", "Security Hub", "Detective"],
      },
      {
        title: "Protection",
        items: ["WAF", "Shield", "Firewall Manager", "Network Firewall"],
      },
      {
        title: "Compliance",
        items: ["Audit Manager", "Artifact", "Config", "CloudTrail"],
      },
      {
        title: "Encryption",
        items: [
          "KMS",
          "CloudHSM",
          "Certificate Manager",
          "Secrets Manager",
          "Private CA",
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    sections: [
      {
        title: "Data Lakes",
        items: ["Lake Formation", "Glue", "Glue DataBrew", "Data Exchange"],
      },
      {
        title: "Query Services",
        items: ["Athena", "Redshift", "OpenSearch", "QuickSight"],
      },
      {
        title: "Streaming",
        items: [
          "Kinesis Data Streams",
          "Kinesis Firehose",
          "Kinesis Analytics",
          "MSK",
          "MSK Serverless",
        ],
      },
      {
        title: "Big Data",
        items: ["EMR", "EMR Serverless", "EMR on EKS"],
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    sections: [
      {
        title: "ML Platform",
        items: [
          "SageMaker Studio",
          "SageMaker Notebooks",
          "SageMaker Training",
          "SageMaker Inference",
          "SageMaker Pipelines",
        ],
      },
      {
        title: "AI Services",
        items: [
          "Bedrock",
          "Rekognition",
          "Textract",
          "Comprehend",
          "Translate",
          "Polly",
          "Transcribe",
          "Lex",
        ],
      },
      {
        title: "ML Frameworks",
        items: ["Deep Learning AMIs", "Deep Learning Containers", "Neuron"],
      },
    ],
  },
  {
    id: "devtools",
    title: "Developer Tools",
    sections: [
      {
        title: "CI/CD",
        items: [
          "CodeCommit",
          "CodeBuild",
          "CodeDeploy",
          "CodePipeline",
          "CodeArtifact",
        ],
      },
      {
        title: "Development",
        items: [
          "Cloud9",
          "CodeStar",
          "X-Ray",
          "CodeGuru",
          "Fault Injection Simulator",
        ],
      },
      {
        title: "SDKs & Tools",
        items: ["CLI", "CloudShell", "SDKs", "CDK", "SAM", "Amplify"],
      },
    ],
  },
  {
    id: "management",
    title: "Management",
    sections: [
      {
        title: "Monitoring",
        items: [
          "CloudWatch Metrics",
          "CloudWatch Logs",
          "CloudWatch Alarms",
          "CloudWatch Dashboards",
          "CloudWatch Synthetics",
          "CloudWatch RUM",
        ],
      },
      {
        title: "Governance",
        items: [
          "Organizations",
          "Control Tower",
          "Service Catalog",
          "Systems Manager",
          "Trusted Advisor",
        ],
      },
      {
        title: "Infrastructure",
        items: ["CloudFormation", "OpsWorks", "App Config", "Launch Wizard"],
      },
      {
        title: "Cost Management",
        items: [
          "Cost Explorer",
          "Budgets",
          "Cost & Usage Report",
          "Savings Plans",
          "Reserved Instance Reporting",
        ],
      },
    ],
  },
  {
    id: "integration",
    title: "Application Integration",
    sections: [
      {
        title: "Messaging",
        items: ["SQS", "SNS", "MQ", "EventBridge", "EventBridge Scheduler"],
      },
      {
        title: "Workflows",
        items: [
          "Step Functions",
          "AppFlow",
          "Managed Workflows for Apache Airflow",
        ],
      },
      {
        title: "APIs",
        items: ["API Gateway", "AppSync", "Location Service"],
      },
    ],
  },
];

const WorkspaceSwitcher = ({
  workspaces,
  activeWorkspace,
}: {
  workspaces: Workspace[];
  activeWorkspace: Workspace;
}) => {
  const [selected, setSelected] = React.useState(activeWorkspace);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                <img
                  src={selected.logo}
                  alt={selected.name}
                  className="size-6 text-primary-foreground invert dark:invert-0"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{selected.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {selected.plan}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Workspaces
            </DropdownMenuLabel>
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onClick={() => setSelected(workspace)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm bg-primary">
                  <img
                    src={workspace.logo}
                    alt={workspace.name}
                    className="size-4 text-primary-foreground invert dark:invert-0"
                  />
                </div>
                <span>{workspace.name}</span>
                {workspace.id === selected.id && (
                  <Check className="ml-auto size-4" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const SearchForm = () => {
  return (
    <form>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput id="search" placeholder="Search..." className="pl-8" />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
};

// Full-screen mega menu panel component (AWS-style)
const MegaMenuPanel = ({
  category,
  onClose,
}: {
  category: (typeof megaMenuCategories)[0];
  onClose: () => void;
}) => {
  return (
    <div className="absolute top-0 left-full z-50 h-full w-[calc(100vw-var(--sidebar-width))] animate-in border-l bg-background shadow-lg slide-in-from-left-2">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="rounded-sm p-1 hover:bg-muted">
              <ChevronRight className="size-4 rotate-180" />
            </button>
            <h2 className="text-lg font-semibold">{category.title}</h2>
          </div>
          <button onClick={onClose} className="rounded-sm p-1 hover:bg-muted">
            <X className="size-5" />
          </button>
        </div>

        {/* Content - scrollable grid of sections */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {category.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block rounded px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Category nav item
const CategoryItem = ({
  category,
  isSelected,
  onClick,
}: {
  category: (typeof megaMenuCategories)[0];
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={isSelected} onClick={onClick}>
        <span>{category.title}</span>
        <ChevronRight className="ml-auto size-4" />
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const NavUser = ({ user }: { user: UserData }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const activeWorkspace = getActiveWorkspace(sidebarData);
  const [selectedCategory, setSelectedCategory] = React.useState<
    (typeof megaMenuCategories)[0] | null
  >(null);

  const handleCategoryClick = (category: (typeof megaMenuCategories)[0]) => {
    setSelectedCategory(selectedCategory?.id === category.id ? null : category);
  };

  return (
    <Sidebar {...props} className="relative overflow-visible">
      <SidebarHeader>
        {sidebarData.workspaces && activeWorkspace && (
          <WorkspaceSwitcher
            workspaces={sidebarData.workspaces}
            activeWorkspace={activeWorkspace}
          />
        )}
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {megaMenuCategories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory?.id === category.id}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {sidebarData.user && <NavUser user={sidebarData.user} />}
      </SidebarFooter>
      <SidebarRail />
      {selectedCategory && (
        <MegaMenuPanel
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </Sidebar>
  );
};

interface Sidebar16Props {
  className?: string;
}

const Sidebar16 = ({ className }: Sidebar16Props) => {
  return (
    <SidebarProvider className={cn(className)}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Overview</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export { Sidebar16 };
```
