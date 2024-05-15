export type GenericObject = { [key: string]: any };
const ICONS: GenericObject = {
  personCover: require("./person_cover.svg").default,
  mailIcon: require("./mail_icon.svg").default,
  mailAt: require("./mail@.svg").default,
  flagIcon: require("./flag.svg").default,
  checkIcon: require("./check.svg").default,
};

export default ICONS;
