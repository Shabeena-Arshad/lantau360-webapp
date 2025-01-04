// entity-url.ts

export const ENTITY_URL = {
  ACCOUNT: "Account",
  ADVERTISEMENT: `/Advertisement`,
  ADVERTISEMENT_GALLERY: `/AdvertisementImage/GalleryImages`,
  ATTRACTION: `/Site/ByDirectoryId/1`,
  BUSINESS: `/Business`,
  BUSINESS_DIRECTORIES: `/BusinessDirectory`,
  BUSINESS_GALLERY: `/BusinessImage/GalleryImages`,
  BUSINESS_PROMOTION: `/BusinessPromotion/Datatable`,
  BUSINESS_PROMOTION_GALLERY: `/BusinessPromotionImage/GalleryImages`,
  BUSINESS_VOUCHER: `/BusinessVoucher/Datatable`,
  CHECKIN: `/CheckIn/AddCheckIn`,
  CHECKIN_BY_MEMBER: `/CheckIn/GetByMemberId`,
  COMMUNITY: `/Community`,
  COMMUNITY_DIRECTORY: `/CommunityDirectory`,
  COMMUNITY_EVENT: `/CommunityEvent`,
  COMMUNITY_EVENT_CURRENT: `/CommunityEvent/CommunityEventCurrent`,
  COMMUNITY_EVENT_GALLERY: `/CommunityEventImage/GalleryImages`,
  COMMUNITY_NEWS_CURRENT: `/CommunityNews/CommunityNewsCurrent`,
  COMMUNITY_NOTICE: `/CommunityNotice`,
  COMMUNITY_NOTICE_CURRENT: `/CommunityNotice/CommunityNoticeCurrent`,
  COMMUNITY_NOTICE_GALLERY: `/CommunityNoticeImage/GalleryImages`,
  CONTENT_NAME: `/Content/ContentByName`,
  DIRECTORY_LIST: {
    BUSINESS: `/Business/ByDirectoryId`,
    MEMBER_CHECKED_IN_SITES: `/Site/Directory/Member`,
    POSTING: `/Posting/Active/ByDirectoryId`,
    SITE: `/Site/ByDirectoryId`
  },
  FAVOURITE: `posting`,
  MEMBER: "/Member",
  MEMBER_BY_ID: `/Member/MemberById`,
  MEMBER_CONFIG: "/Content/ContentByName/MemberConfig",
  MEMBER_DIRECTORY_CHECK_IN: "/CheckIn/GetMemberDirectoryCheckIn",
  MEMBER_IMAGE: `/MemberImage`,
  MEMBER_POINTS: `/Member/GetMemberPoints`,
  MEMBER_RECENT_TRANSACTIONS: `/Transaction/MemberRecentTransactions`,
  MEMBER_SITE_CHECK_IN: "/CheckIn/GetByMemberAndSiteId",
  MEMBER_TRANSACTIONS: `/Transaction/MemberTransactions`,
  POSTING: "/Posting",
  POSTING_BY_DIRECTORY: "Posting/ByDirectoryId",
  POSTING_GALLERY: "/PostingImage/GalleryImages",
  REFRESH_TOKEN: `/StaffAuth/RefreshToken`,
  RESET_PASSWORD: "/MemberAuth/RecoverPassword",
  SEND_OTP: "/MemberAuth/SendOtp",
  SIGN_IN: "/MemberAuth/SignIn",
  SIGN_UP: "/MemberAuth/SignUp",
  SITE: `/Site`,
  SITE_DIRECTORIES: `/SiteDirectory`,
  SITE_GALLERY: `/SiteImage/GalleryImages`,
  TRANSACTION: `/Transactoin/MemberTransactions`,
  WEATHER: `/Weather`,
  FAVOURITE_SITE_UPSERT:'/FavouriteSite/UpsertSite',
  FAVOURITE_BUSINESS_UPSERT:'/FavouriteBusiness/UpsertBusiness',
  FAVOURITE_SITE:'/FavouriteSite',
  FAVOURITE_BUSINESS: 'FavouriteBusiness',
  FAVOURITE_UPDATE:'/Member/UpdateFavourite',
  FAVOURITE_DATA_IDS:'/Member/GetFavouriteData/Ids',
  FAVOURITE_DATA:'/Member/GetFavouriteData',
  CHECKIN_DATA:'/Member/GetCheckInData',
  CHECKIN_UPDATE:'/Member/UpdateCheckIn',



  EMAIL_CONFIRMATION: {
    SEND_LINK: "/MemberAuth/SendEmailConfirmationLink",
    RESEND_LINK: "/MemberAuth/ReSendEmailConfirmationLink",
    CONFIRM_EMAIL: "/MemberAuth/VerifyEmail"
  }
};

export type EntityURLKey = keyof typeof ENTITY_URL;
