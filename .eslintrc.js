module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb","prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "packages/my-app/pages/"],
    "linebreak-style": 0,
    quotes: ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
    "no-unused-vars": "off", //사용안한 변수 경고 중복
    "@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
    "jsx-a11y/control-has-associated-label": "off", // 상호작용하는 엘리먼트에 label을 넣는다
    "react/no-array-index-key": "off", // key값으로 index를 사용할수 있다.
    "comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
    "react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
    "react/prop-types": "off", //proptypes를 사용하지 않는다.
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    "react/jsx-one-expression-per-line": "off", //한라인에 여러개의 JSX를 사용 할 수 있다.
    "implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    "no-shadow": "off", //파일 내에서 중복 이름을 사용 할 수 있다.
    "spaced-comment": "off", //주석을 뒤에 달 수 있다.
    "operator-linebreak": "off", //연산자 다음 줄 바꿈을 사용 할 수 있다.
    "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    "react/jsx-props-no-spreading": "off", //props를 스프래드 할 수 있다.
    "jsx-a11y/anchor-is-valid": "off", // next js에서는 a에 href없이 사용
    "global-require": "off", //함수 내에서 require 사용가능
    "jsx-a11y/label-has-associated-control": "off", //label htmlFor을 사용하지 않아도 된다.
    "import/prefer-default-export": "off", //export default 를 사용하라.
    "no-param-reassign": "off",
    "react/function-component-definition": "off",
    "react/jsx-curly-newline": "off", // jsx안에 }를 새로운 라인에 사용할 수 있다.
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }, //jsx사용가능한 확장자 설정
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, //import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
