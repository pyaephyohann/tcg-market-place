interface Config {
  apiBaseUrl: string;
  apiKey: string;
}

export const config: Config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "",
  apiKey: process.env.REACT_APP_API_KEY || "",
};
