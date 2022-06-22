import { Configuration, DefaultApi } from "@xwmtp/bingo-tournament";
import { websiteSettings } from "../Settings";

export const getApi: () => DefaultApi = () => {
  return new DefaultApi(
    new Configuration({
      basePath: websiteSettings.BACKEND_URL,
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": document.cookie.replace(
          /(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        ),
      },
    })
  );
};
