import {
  HomePageContentProps,
  HomeFeaturesSlideProps,
  flexabilityContentProps,
  HomeFeaturesModulesProps,
} from "@/types/home";

// home page content data object
export const homePageContent: HomePageContentProps = {
  introMainTitle: "AI Powered",
  introSubTitle: "HRMS Platform",
  introDescription:
    "The Ultimate Cloud-Based HRMS Platform For Your HR Operations.",
  introBtnLabel: "See Mawared HR in Action",
  introImgUrl: "./img/laptop-view.svg",
  joinEmpowerdSectionTitleFirstPart: "Trusted by",
  joinEmpowerdSectionTitleSecPart: "Businesses.",
  joinEmpowerdSectionTitleThirdPart: "Empowering Workforces Every Day.",
  joinEmpowerdSectionNumber: "500+",
  joinEmpowerdSectionBtnLabel: "Join the Empowered",
  companyLogsUrls: [
    "./img/talabat-logo.svg",
    "./img/handler-logo.svg",
    "./img/iq-logo.svg",
    "./img/tabibi-logo.svg",
    "./img/caizo-logo.svg",
    "./img/derma-logo.svg",
    "./img/ufc-gym-logo.svg",
    "./img/next-logo.svg",
    "./img/lazaro-logo.svg",
    "./img/the-chef-logo.svg",
    "./img/fhakrany-logo.svg",
    "./img/merkah-logo.svg",
    "./img/zumra.svg",
    "./img/future-it-logo.svg",
    "./img/folrisita-logo.svg",
    "./img/farm-logo.svg",
    "./img/haier-logo.svg",
    "./img/tawheed-logo.svg",
    "./img/projects-logo.svg",
    "./img/ricci-logo.svg",
    "./img/nour-logo.svg",
    "./img/jovia-logo.svg",
    "./img/lady-egypt-logo.svg",
    "./img/bio-stream-logo.svg",
    "./img/qahera-logo.svg",
    "./img/kobay-logo.svg",
    "./img/otbessy-logo.svg",
    "./img/lines-logo.svg",
    "./img/sultana-logo.svg",
  ],
  mawaredModulesMainTitle: "Mawared HR",
  mawaredModulesSubTitle: "Modules",
  flexabilityFirstSectionTitle: "Success at Your",
  flexabilitySecondSectionTitle: "Fingertips",
  flexabilityDescription:
    "Manage attendance, payroll, and operations effortlessly with AI-powered tools, GPS tracking, real-time alerts, and custom policies. Access insights, handle tasks, and stay connected with a cloud-based platform.",
  flexabilityImgUrl: "./img/flexibility-img.svg",
  featuresSectionTitleFirstPart: "All Features",
  featuresSectionTitleSecPart: "You Need at One Place",
  featuresSectionDescription:
    "Explore comprehensive tools like attendance tracking, payroll integration, shift scheduling, real-time dashboards, employee requests, and more. designed to handle every need and enhance your HR operations.",
  featuresSectionBtnLabel: "Explore more features",
  servicesSectionTitleFirstPart: "Employee",
  servicesSectionTitleSecPart: "Self-Services",
  servicesSectionDescription:
    "Effortlessly manage your entire workforce from one centralized system. Track employee profiles, roles, performance, and attendance with ease. Automate routine tasks.",
  servicesSectionFirstRowImgUrl: "./img/service-fisrt-row-img.svg",
  servicesSectionSecRowImgUrl: "./img/service-sec-row-img.svg",
  trustedSectionTitleFirstPart: "Your",
  trustedSectionTitleSecPart: "Best Partner",
  trustedSectionTitleThirdPart: "in Numbers",
  trustedSectionDescription:
    "Discover Mawared HR's measurable impact on businesses",
  trustedSectionImgUrl: "./img/stats-img.svg",
  contactUsSectionTitleFirstPart: "Fill Out",
  contactUsSectionTitleSecPart: "The Form",
  contactUsSectionDescription: "Start using the system on the same day!",
};

// home feautres modules data array
export const homeFeaturesModules: HomeFeaturesModulesProps[] = [
  {
    titleFirstSection: "Employee Management",
    content:
      "Mawared HR’s employee management centralizes profiles, allowing HR to access and update balances, statuses, calendars, salaries, documents, and assets in real-time. This advanced system enhances decision-making, organization, and efficiency by keeping all employee details in one place.",
    imgUrl: "./img/employee-managment.svg",
    btnLabel: "Discover more",
  },
  {
    titleFirstSection: "Attendance Management",
    content:
      "Mawared HR’s attendance module uses GPS and facial recognition for accurate employee tracking and verification. It automates tardiness penalties, supports customizable policies, and adapts to various work setups, including remote and multi-site operations. This ensures efficient, tailored attendance management with reduced manual effort.",
    imgUrl: "./img/att-managment-img.svg",
    btnLabel: "Discover more",
  },
  {
    titleFirstSection: "Payroll & Financials",
    content:
      "Mawared HR’s payroll module ensures precise salary calculations, integrating attendance, allowances, deductions, and loan management. Employees can request loans, with installments automatically deducted and reflected in pay slips. The module also supports expense management, enabling detailed tracking and reporting for better financial oversight. Running payroll and financial operations in one platform.",
    imgUrl: "./img/payroll-finances-img.svg",
    btnLabel: "Discover more",
  },
];

// home features data object
export const homeFeaturesfirstSlide: HomeFeaturesSlideProps[] = [
  {
    title: "Biometrics",
    iconUrl: "./img/biometrics-icon.svg",
    description:
      "Employees sign in/out using facial recognition, GPS, with optional restrictions.",
  },
  {
    title: "Smart Attendance Policies",
    iconUrl: "./img/att-policy-icon.svg",
    description:
      "Automated penalty calculations for tardiness, no-shows, missed sign-outs, early sign-outs, and absences.",
  },
  {
    title: "Flexible & Fixed Shift Scheduling",
    iconUrl: "./img/flexable-shift-icon.svg",
    description:
      "Schedule rotational or fixed shifts easily, with different cycles, and custom sign-in rules.",
  },
  {
    title: "Breaks",
    iconUrl: "./img/break-icon.svg",
    description:
      "Set breaks with specific timings, session limits, and work-hour inclusion options.",
  },
  {
    title: "Employee Requests",
    iconUrl: "./img/emp-request-icon.svg",
    description:
      "Employees can request leaves, remote work, shift changes, and more via mobile, track approvals, and exchange comments with direct managers.",
  },
  {
    title: "Request Rules",
    iconUrl: "./img/request-rules-icon.svg",
    description:
      "Define rules to auto-approve, reject, or deny specific request types for selected employees.",
  },
  {
    title: "Request Approval Layers",
    iconUrl: "./img/approval-layers-icon.svg",
    description:
      "Set multi-level approval chains, routing requests through managers sequentially until final approval.",
  },
  {
    title: "Overtime Calculation",
    iconUrl: "./img/overtime-icon.svg",
    description:
      "Automatically calculate overtime based on hour rates, intervals, and completed work hours, with customizable limits and rounding options.",
  },
];

// home features data object
export const homeFeaturesSecSlide: HomeFeaturesSlideProps[] = [
  {
    title: "Leave Adjustment",
    iconUrl: "./img/leave-adjust-icon.svg",
    description: "Adjust employee leave balances by adding or removing days.",
  },
  {
    title: "Reports",
    iconUrl: "./img/report-icon.svg",
    description:
      "View comprehensive and detailed reports in an interactive chart format.",
  },
  {
    title: "Office Account Attendance",
    iconUrl: "./img/office-account-icon.svg",
    description:
      "Employees without smartphones can sign in/out via office accounts, using facial recognition and location too.",
  },
  {
    title: "Change or Add Shifts",
    iconUrl: "./img/change-shift-icon.svg",
    description:
      "Add multiple shifts or change shifts between employees with ease.",
  },
  {
    title: "Check-Ins",
    iconUrl: "./img/checkin-cion.svg",
    description:
      "Employees can check in/out at locations between shifts, with optional forms and facial recognition. Details are logged in attendance history with time and location breakdowns.",
  },
  {
    title: "Facial Recognition Report",
    iconUrl: "./img/facial-icon.svg",
    description:
      "View a report of employee sign-ins/outs with photos, locations, and authenticity status.",
  },
  {
    title: "Sign-in on Behalf",
    iconUrl: "./img/sign-in-behalf-icon.svg",
    description: "Managers can perform sigs-ins/outs on behalf of employees.",
  },
  {
    title: "Assignments",
    iconUrl: "./img/assigment-icon.svg",
    description:
      "Assign temporary shifts or sign-in rules for specific days, reverting to original settings afterward.",
  },
];

// home features data object
export const homeFeaturesThirdSlide: HomeFeaturesSlideProps[] = [
  {
    title: "Payroll Setup",
    iconUrl: "./img/payroll-setup-icon.svg",
    description:
      "Configure salaries for employees or groups with rules for calculation, overtime rates, allowances, and deductibles.",
  },
  {
    title: "Payroll Tracking",
    iconUrl: "./img/payroll-tracking-icon.svg",
    description:
      "Track payroll updates daily, weekly, or monthly projection view for expected payouts.",
  },
  {
    title: "Loans",
    iconUrl: "./img/loans-icon.svg",
    description:
      "Create or approve employee loan requests, set amounts and installments, and the system automatically schedules deductions in payroll and updates pay slips.",
  },
  {
    title: "Bonuses",
    iconUrl: "./img/bonus-icon.svg",
    description: "Assign bonuses or import and apply them in bulk.",
  },
  {
    title: "Deductions",
    iconUrl: "./img/deductions-icon.svg",
    description:
      "Apply deductions manually, in bulk, or set custom policies for quick application.",
  },
  {
    title: "Claims",
    iconUrl: "./img/claims-icon.svg",
    description:
      "Employees can request claims with descriptions and documents. Approved claims are added to payroll automatically.",
  },
  {
    title: "Petty Cash",
    iconUrl: "./img/pety-cash-icon.svg",
    description:
      "Allocate petty cash to employees, who can log expenses and payments against the given amount in the system.",
  },
  {
    title: "Expense Categories",
    iconUrl: "./img/expense-icon.svg",
    description: "Create and manage expense categories for the company.",
  },
];

// home features data object
export const homeFeaturesFourthSlide: HomeFeaturesSlideProps[] = [
  {
    title: "Company Expenses",
    iconUrl: "./img/company-expense-icon.svg",
    description:
      "Log company expenses with a monthly view, detailing dates, purposes, and employee-incurred costs.",
  },
  {
    title: "Employee Documents",
    iconUrl: "./img/emp-deoc-icon.svg",
    description:
      "Upload employee documents like IDs, passports, and contracts, with customizable requirements by company, department, position, or employee level.",
  },
  {
    title: "Announcements",
    iconUrl: "./img/ann-icon.svg",
    description:
      "Create announcements and send them to all or selected employees via their app.",
  },
  {
    title: "Biometrics",
    iconUrl: "./img/biometrics-icon.svg",
    description:
      "Employees sign in/out using facial recognition, GPS, with optional restrictions.",
  },
  {
    title: "Smart Attendance Policies",
    iconUrl: "./img/att-policy-icon.svg",
    description:
      "Automated penalty calculations for tardiness, no-shows, missed sign-outs, early sign-outs, and absences.",
  },
  {
    title: "Flexible & Fixed Shift Scheduling",
    iconUrl: "./img/flexable-shift-icon.svg",
    description:
      "Schedule rotational or fixed shifts easily, with different cycles, and custom sign-in rules.",
  },
  {
    title: "Breaks",
    iconUrl: "./img/break-icon.svg",
    description:
      "Set breaks with specific timings, session limits, and work-hour inclusion options.",
  },
  {
    title: "Employee Requests",
    iconUrl: "./img/emp-request-icon.svg",
    description:
      "Employees can request leaves, remote work, shift changes, and more via mobile, track approvals, and exchange comments with direct managers.",
  },
];

// home flexabilty array data object
export const flexabilityContent: flexabilityContentProps[] = [
  {
    firstTitle: "AI-Powered",
    secondTitle: "Biometrics",
    description: "Facial recognition for with anti-spoofing AI tech.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[175px] xl:w-[280px] 2xl:w-[423px]",
  },
  {
    firstTitle: "GPS",
    secondTitle: "Tracking",
    description: "Mock location detection for precise monitoring.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[273px] xl:w-[368px] 2xl:w-[497px]",
  },
  {
    firstTitle: "Automated Attendance",
    secondTitle: "Management",
    description: "Monitor attendance and enforce policies in no time.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[350px] xl:w-[444px] 2xl:w-[554px]",
  },
  {
    firstTitle: "Payroll",
    secondTitle: "Integration",
    description: "Connect attendance data directly to payroll.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[415px] xl:w-[530px] 2xl:w-[610px]",
  },
  {
    firstTitle: "Customizable",
    secondTitle: "Policies",
    description: "Tailor attendance rules to fit your business needs.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[175px] xl:w-[280px] 2xl:w-[423px]",
  },
  {
    firstTitle: "Real-Time",
    secondTitle: "Notifications",
    description: "Notify managers and employees of activity updates.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[273px] xl:w-[368px] 2xl:w-[497px]",
  },
  {
    firstTitle: "Analytics",
    secondTitle: "and Reporting",
    description: "Gain insights through comprehensive and detailed reports.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[350px] xl:w-[444px] 2xl:w-[554px]",
  },
  {
    firstTitle: "Cloud-Based",
    secondTitle: "Accessibility",
    description: "Access data anytime, anywhere with ease.",
    iconUrl: "./img/flex-check-iocn.svg",
    gapSpace: "lg:w-[415px] xl:w-[530px] 2xl:w-[610px]",
  },
];

// home services data array
export const homeServices: HomeFeaturesSlideProps[] = [
  {
    title: "Biometrics",
    iconUrl: "./img/biometric-service-icon.svg",
    description:
      "Sign in/out using facial recognition and GPS from your phone.",
  },
  {
    title: "Requests",
    iconUrl: "./img/request-service-icon.svg",
    description: "Submit, view and track requests. All directly from the app.",
  },
  {
    title: "Payroll Access",
    iconUrl: "./img/payroll-service-icon.svg",
    description:
      "Employees can check their detailed pay-slips at the end of each month.",
  },
  {
    title: "Attendance history",
    iconUrl: "./img/att-history-service-icon.svg",
    description: "Track detailed attendance records with timing and locations.",
  },
  {
    title: "Dashboard & real-time statistics",
    iconUrl: "./img/dashboard-service-icon.svg",
    description: "Access a dashboard with real-time statistics.",
  },
  {
    title: "Break management",
    iconUrl: "./img/break-service-icon.svg",
    description:
      "Manage and track break times, durations, and sessions directly from the app.",
  },
  {
    title: "Penalty tracking",
    iconUrl: "./img/penalty-tracking-service-icon.svg",
    description:
      "Track and check for penalties with Type, reason, value and more across the month.",
  },
  {
    title: "Push Notifications",
    iconUrl: "./img/push-not-service-icon.svg",
    description:
      "Receive real-time updates for sign-ins, penalties, requests, and more.",
  },
];
