import { Configuration, DefaultApi } from "@xwmtp/bingo-tournament";

export const getApi: () => DefaultApi = () => {
  return new DefaultApi(
    new Configuration({
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
