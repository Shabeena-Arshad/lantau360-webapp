import i18n from "@/plugins/i18n/i18n";
// Interface files
import { Member } from "@/interfaces/models/entities/member";

// .ts files
import { useUserStore } from "@/stores/user";
import { BASE_URL, NO_FREE_POINTS } from "@/constants";

const { notify } = useUtilities();
const userStore = useUserStore();
const error = ref<string | null>(null);
const newInput = () => {
  return {
    modifiedAt: new Date()
  } as Member;
};

const { t } = i18n.global;

const toolTipCreate = ref("member.gallery.uploadNewImage");

const locale = ref("hk");
const lang = ref("hk");

export function useMoreInput() {
  const memberInput = ref<Member>(newInput());

  function setMemberInput(val: Member) {
    memberInput.value.alias = val.alias;
    memberInput.value.userName = val.userName;
    memberInput.value.email = val.email;
    memberInput.value.firstName = val.firstName;
    memberInput.value.lastName = val.lastName;
    memberInput.value.phone = val.phone;
  }

  function setValidatedInput(values: any) {
    memberInput.value.alias = values.alias;
    memberInput.value.userName = values.userName;
    memberInput.value.email = values.email;
    memberInput.value.firstName = values.firstName;
    memberInput.value.lastName = values.lastName;
    memberInput.value.phone = values.phone;
  }

  function successCallback(successMessage: string) {
    notify(successMessage, "positive");
  }

  function updateMember(onDialogCancel: any) {
    memberInput.value.modifiedBy = parseInt(userStore.userId);
    axios
      .put(`/Member/${memberInput.value.memberId}`, memberInput.value)
      .then(async () => {
        const successMessage = t("more.profileSetting.profileUpdate");

        successCallback(successMessage);

        setTimeout(() => {
          onDialogCancel();
        }, 1200);
      })
      .catch(errors => {
        notify(errors.message, "negative");
      });
  }

  function claimFreePoints(onDialogCancel: any) {
    const memberId = parseInt(userStore.userId);
    axios
      .post(`/Points/RequestFreePoints?memberId=${memberId}`)
      .then(async () => {
        const successMessage = t("more.message.claimedFreePointsSuccessfully");
        successCallback(successMessage);

        userStore.totalPoints += NO_FREE_POINTS;
        userStore.availabelPoints += NO_FREE_POINTS;

        setTimeout(() => {
          onDialogCancel();
        }, 1200);
      })
      .catch(err => {
        if (err instanceof AxiosError) {
          if (err.response?.status === 400 && err.response?.data === "have_enough_points") {
            notify(t("more.message.enoughPoints"), "negative");
          } else {
            notify(err.message, "negative");
          }
        } else {
          notify(err.message, "negative");
        }
      });
  }

  async function handleUpdateMemberAvatar(newAvatar: any) {
    const url = `${BASE_URL}/MemberImage/${userStore.userId}`;

    const formData = new FormData();
    formData.append("image", newAvatar);

    await axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(response => {
        if (response.status == 200) {
          userStore.profilePic = response.data;
        }
      })
      .catch(err => {
        if (err instanceof AxiosError) {
          if (err.response && err.response.status === 404) {
            error.value = t("errors.404");
          } else {
            error.value = t("errors.anErrorOccured");
          }
        } else {
          error.value = t("errors.anErrorOccured");
        }
      });
  }
  return {
    memberInput,
    handleUpdateMemberAvatar,
    updateMember,
    toolTipCreate,
    locale,
    lang,
    useMoreInput,
    setValidatedInput,
    setMemberInput,
    claimFreePoints,
    userStore
  };
}
