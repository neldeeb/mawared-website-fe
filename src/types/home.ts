// define home page content interface
export interface HomePageContentProps {
  introMainTitle: string;
  introSubTitle: string;
  introDescription: string;
  introBtnLabel: string;
  introImgUrl: string;
  joinEmpowerdSectionTitleFirstPart: string;
  joinEmpowerdSectionTitleSecPart: string;
  joinEmpowerdSectionNumber: string;
  joinEmpowerdSectionBtnLabel: string;
  companyLogsUrls: string[];
  featuresSectionTitleFirstPart: string;
  featuresSectionTitleSecPart: string;
  featuresSectionDescription: string;
  featuresSectionImgUrl: string;
  featuresSectionBtnLabel: string;
  joinSectionTitleFirstPart: string;
  joinSectionTitleSecPart: string;
  joinSectionDescription: string;
  joinSectionImgUrl: string;
  globeSectionTitleFirstPart: string;
  globeSectionTitleSecPart: string;
  globeSectionImgUrl: string;
  trustedSectionTitleFirstPart: string;
  trustedSectionTitleSecPart: string;
  trustedSectionTitleThirdPart: string;
  flexabilityFirstSectionTitle: string;
  flexabilitySecondSectionTitle: string;
  flexabilityDescription: string;
  flexabilityImgUrl: string;
}

// define home features modules interface
export interface HomeFeaturesModulesProps {
  titleFirstSection: string;
  titleSecSection: string;
  content: string;
  imgUrl: string;
  btnLabel: string;
}

// define home features icons interface
export interface HomeFeaturesFirstGridIconsProps {
  title: string;
  imgUrl: string;
}

export interface HomeFeaturesSecGridIconsProps {
  title: string;
  imgUrl: string;
}

// define home flexability Content Props interface
export interface flexabilityContentProps {
  firstTitle: string;
  secondTitle: string;
  description: string;
  iconUrl: string;
}
