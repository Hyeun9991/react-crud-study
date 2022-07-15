# React CRA 설치
Create React App
```
npx create-react-app my-app
cd my-app
npm start
```

---

# 폴더, 파일 설명
## src/index.js
* 입구 파일
* `npm start` 명령어를 이용해서 cra을 구동시키면 index.js파일을 찾고 적혀있는대로 동작

## src/App.js
* 화면을 구성하는 UI

---

# 배포
`npm start`를 이용해서 실행시킨 애플리케이션은 개발을 위한 애플리케이션임
개발하기엔 좋지만, 실제로 서비스하기에는 용량도 크고 불필요한 코드들이 있음
즉, 서비스하기엔 좋지 않음

## 서비스에 최적화, 효율적인 배포본을 만드는 방법 
### build : 배포판을 만드는 과정
* `npm run build`를 입력하면 build 명령어가 시작되고 build라는 폴더가 생성됨
* build 폴더 안에는 index.html파일과 index.html을 의지한 다른파일들이 존재함
  * index.html에는 배포시에 필요없는 공백없이 minimal화 되어 있음
    * 파일 용량을 줄이기 위해

* `npx serve -s build` | build폴더안에 있는 index.html파일을 서비스해주는 웹 서버가 실행됨
  * 명령어 실행 시 접속할 수 있는 url이 나옴
  * 개발환경을 위한 버전이 아니라 실제 서비스할 수 있는 버전의 파일이 만들어짐

--- 

# props
react는 사용자 정의 태그를 만드는 기술 (react 본질)
## 어떻게 사용자 정의 태그를 만들 수 있나?
* 사용자 정의 태그 = **Component**
* **함수**로 만들 수 있음
* Component는 반드시 **첫 글자는 대문자** 여야 함

``` jsx
// Header.js
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

// App.js
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
```