import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import PieChart from "./index";
import "jest-styled-components";

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

const PieChartComponentWithThemeProvider = (
  <ThemeProvider theme={theme}>
    <PieChart reposLanguage={mockReposLanguage} loading={false} />
  </ThemeProvider>
);

describe("PieChartContainer 렌더링 확인", () => {
  test("로딩 중일 때", () => {
    render(
      <ThemeProvider theme={theme}>
        <PieChart reposLanguage={mockReposLanguage} loading />
      </ThemeProvider>,
    );
    const outputElement = screen.queryByText("사용 언어 비율");
    expect(outputElement).toBeNull();
  });

  test("로딩 끝 && reposLanguage가 잘 들어왔을 때", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("사용 언어 비율");
    expect(outputElement).toBeInTheDocument();
  });

  test("로딩 끝 && reposLanguage가 빈 배열로 들어와서 예외 처리된 경우", () => {
    render(
      <ThemeProvider theme={theme}>
        <PieChart reposLanguage={[]} loading={false} />
      </ThemeProvider>,
    );
    const outputElement = screen.getByText("데이터가 없습니다.");
    expect(outputElement).toBeInTheDocument();
  });
});

describe("languageRatioArray && COLORS 데이터 확인", () => {
  test("languageRatioArray 비율 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("43.24%");
    expect(outputElement).toBeInTheDocument();
  });

  test("languageRatioArray 언어 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("JavaScript");
    expect(outputElement).toBeInTheDocument();
  });

  test("languageRatioArray 언어 색상 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("JavaScript");
    const javascriptColor = outputElement.parentElement.previousSibling;
    expect(javascriptColor).toHaveStyleRule("background-color", "#f1e05a");
  });
});
