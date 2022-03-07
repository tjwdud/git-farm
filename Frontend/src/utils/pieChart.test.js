import { makeLanguageRatioArray, languageColor } from "./pieChart";

const mockReposLanguage = [
  {
    repo: "have-u-tried-this",
    language: "TypeScript",
  },
  {
    repo: "bucketplace-assigngment",
    language: "TypeScript",
  },
  {
    repo: "alice-sw-engineer-track",
    language: "HTML",
  },
  {
    repo: "ci-cd-practice",
    language: "JavaScript",
  },
  {
    repo: "commento-assignment",
    language: "TypeScript",
  },
  {
    repo: "consider-of-reusable-input-component",
    language: "TypeScript",
  },
  {
    repo: "custombucks-api",
    language: "JavaScript",
  },
  {
    repo: "get-address-with-EXIF",
    language: "JavaScript",
  },
  {
    repo: "have-u-tried-this",
    language: "TypeScript",
  },
  {
    repo: "image-drag-and-drop",
    language: "JavaScript",
  },
  {
    repo: "image-upload-test",
    language: "JavaScript",
  },
  {
    repo: "infinite-scroll",
    language: "HTML",
  },
  {
    repo: "intersection-observer-pratice",
    language: "TypeScript",
  },
  {
    repo: "JP2-this-week-I-learned",
    language: "CSS",
  },
  {
    repo: "next-js-init-practice",
    language: "JavaScript",
  },
  {
    repo: "now_news",
    language: "HTML",
  },
  {
    repo: "project-military-test",
    language: "JavaScript",
  },
  {
    repo: "quiz_project",
    language: "JavaScript",
  },
  {
    repo: "quiz_project_practice",
    language: "JavaScript",
  },
  {
    repo: "react-webpack-babel-jest-bolierplate",
    language: "JavaScript",
  },
  {
    repo: "redux_example",
    language: "JavaScript",
  },
  {
    repo: "ssr-with-react-node-practice",
    language: "JavaScript",
  },
  {
    repo: "starbucks-recipe-project",
    language: "TypeScript",
  },
  {
    repo: "starter-quiz-app-week07-00",
    language: "JavaScript",
  },
  {
    repo: "test_shop",
    language: "JavaScript",
  },
  {
    repo: "text-ellipsis-example",
    language: "HTML",
  },
  {
    repo: "todo-list-project",
    language: "TypeScript",
  },
  {
    repo: "todo-list-with-localstorage",
    language: "HTML",
  },
  {
    repo: "todo-list-with-mvc-patterns",
    language: "TypeScript",
  },
  {
    repo: "todo-list_with_typescript",
    language: "TypeScript",
  },
  {
    repo: "typescript_tips",
    language: "TypeScript",
  },
  {
    repo: "use-book-search-hook",
    language: "HTML",
  },
  {
    repo: "usePosts-example",
    language: "TypeScript",
  },
  {
    repo: "velopertStudy",
    language: "JavaScript",
  },
  {
    repo: "ywBot",
    language: "JavaScript",
  },
  {
    repo: "YWTech1",
    language: "HTML",
  },
  {
    repo: "YWTechIT.github.io",
    language: "HTML",
  },
];

const languageRatioArray = [
  { name: "JavaScript", value: 43.24 },
  { name: "TypeScript", value: 32.43 },
  { name: "HTML", value: 21.62 },
  { name: "CSS", value: 2.7 },
];

test("makeLanguageRatioArray function test", () => {
  const output = makeLanguageRatioArray(mockReposLanguage);
  expect(output).toEqual(languageRatioArray);
});

test("languageColor function test", () => {
  const output = languageColor(languageRatioArray);
  const expected = ["#f1e05a", "#2b7489", "#e44b23", "#563d7c"];
  expect(output).toEqual(expected);
});
