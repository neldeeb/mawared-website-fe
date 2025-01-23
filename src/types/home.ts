// define home page content interface
export interface HomePageContentProps {
  introMainTitle: string;
  introSubTitle: string;
  introDescription: string;
  introBtnLabel: string;
  introImgUrl: string;
  joinEmpowerdSectionTitleFirstPart: string;
  joinEmpowerdSectionTitleSecPart: string;
  joinEmpowerdSectionTitleThirdPart: string;
  joinEmpowerdSectionNumber: string;
  joinEmpowerdSectionBtnLabel: string;
  companyLogsUrls: string[];
  mawaredModulesMainTitle: string;
  mawaredModulesSubTitle: string;
  featuresSectionTitleFirstPart: string;
  featuresSectionTitleSecPart: string;
  featuresSectionDescription: string;
  featuresSectionBtnLabel: string;
  flexabilityFirstSectionTitle: string;
  flexabilitySecondSectionTitle: string;
  flexabilityDescription: string;
  flexabilityImgUrl: string;
  servicesSectionTitleFirstPart: string;
  servicesSectionTitleSecPart: string;
  servicesSectionDescription: string;
  servicesSectionFirstRowImgUrl: string;
  servicesSectionSecRowImgUrl: string;
  trustedSectionTitleFirstPart: string;
  trustedSectionTitleSecPart: string;
  trustedSectionTitleThirdPart: string;
  trustedSectionDescription: string;
  trustedSectionImgUrl: string;
  contactUsSectionTitleFirstPart: string;
  contactUsSectionTitleSecPart: string;
  contactUsSectionDescription: string;
}

// define home features modules interface
export interface HomeFeaturesModulesProps {
  titleFirstSection: string;
  content: string;
  imgUrl: string;
  btnLabel: string;
}

// define home features interface
export interface HomeFeaturesSlideProps {
  title: string;
  description: string;
  iconUrl: string;
}

// define home flexability Content Props interface
export interface flexabilityContentProps {
  firstTitle: string;
  secondTitle: string;
  description: string;
  iconUrl: string;
  gapSpace: string;
}
