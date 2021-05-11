module.exports = {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      require("stylelint-config-recess-order").rules["order/properties-order"],
      { severity: "warning" },
    ],
  },
};
