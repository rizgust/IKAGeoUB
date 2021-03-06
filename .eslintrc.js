module.exports = {
  root: true,
  parserOptions: {
      "parser": "babel-eslint", 
      "sourceType": "module",
      "ecmaVersion": 6
  },
  env: {
      browser: true,
      node: true,
      es6: true,
  },
  extends: ["eslint:recommended","plugin:vue/base"],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-redeclare": "off",
      "no-empty": "off",
      "indent": ["warn", 4],
      "vue/max-attributes-per-line": "off", 
      "vue/order-in-components": "off",
      "vue/html-end-tags": "off",
  }
}