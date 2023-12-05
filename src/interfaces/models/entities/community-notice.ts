export interface CommunityNotice {
  communityNoticeId: number;
  communityNoticeName: string;
  contactWhatsApp: string;
  contactPhone: string;
  contactOther: string;
  buttonText: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
  displayMask: number;
  description: string;
  directoryId: number;
  imagePath: string;
  iconPath: string;
  bannerPath: string;
  hashKey: string;
  status: number;
  latitude: number;
  longitude: number;
  rank: number;
  meta: Record<string, any>;
  openTime: string;
  closeTime: string;
  expiryDate: Date;
  createdBy: number;
  createdAt: Date;
  modifiedBy: number;
  modifiedAt: Date;
}