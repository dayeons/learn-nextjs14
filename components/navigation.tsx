"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log("hello");
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "⚾️" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "⚾️" : ""}
        </li>
      </ul>
    </nav>
  );
}
/**
 * 렌더링이란?
 * Next JS가 리액트 컴포넌트를 브라우저가 이해할 수 있는 html로 변환하는 작업
 *
 * CSR
 * 모든 렌더링이 클라이언트 측에서 발생
 * 브라우저는 서버로부터 html 껍데기와 자바스크립트 번들 파일을 받아 ui를 빌드함
 *
 * SSR
 * 브라우저의 요청이 있을 때마다 서버에서 html를 생성하고 반환함
 *
 * Next JS에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
 * ('use client' 사용 여부와 상관없음 )
 */
/**
 * Hydration 단순 html을 React application로 초기화하는 작업
 * 서버사이드 렌더링(SSR)을 통해 만들어진 인터렉티브하지 않는 html을 클라이언트 측
 * 자바스크립트를 사용하여 인터렉티브한 리액트 컴포넌트로 변환하는 과정
 * (서버 환경에서 이미 렌더링된 html에 React를 붙이는 것)
 *
 * Next JS는 초기 html 파일을 먼저 전달하고 이후 html 요소들을
 * React컴포넌트로 변환 및 이벤트리스너를 부착하여 React DOM에서 관리하게 한다.
 */
/**
 *
 */
