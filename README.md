1. [설치](#설치)
2. [배포](#배포)
3. [컴포넌트](#컴포넌트)

# 설치
Create React App 설치
```
npx create-react-app my-app
cd my-app
npm start
```

---

# 폴더, 파일 설명
## src/index.js
* 입구 파일
* `npm start` 명령어를 이용해서 cra를 구동시키면 index.js파일을 찾고 적혀있는대로 동작

## src/App.js
* 화면을 구성하는 UI

---

# 배포
* `npm start`를 이용해서 실행시킨 애플리케이션은 개발을 위한 애플리케이션임
* 개발하기엔 좋지만, 실제로 서비스하기에는 용량도 크고 불필요한 코드들이 있음
  즉, 서비스하기엔 좋지 않음

## 서비스에 최적화, 효율적인 배포본을 만드는 방법 
### build : 배포판을 만드는 과정
* `npm run build`를 입력하면 build 명령어가 시작되고 build라는 폴더가 생성됨
* build 폴더 안에는 index.html파일과 index.html을 의지한 다른파일들이 존재함
  * index.html에는 배포시에 필요없는 공백없이 minimal화 되어 있음
    * 파일 용량을 줄이기 위해
#
* `npx serve -s build` | build폴더안에 있는 index.html파일을 서비스해주는 웹 서버가 실행됨
  * 명령어 실행 시 접속할 수 있는 url이 나옴
  * 개발환경을 위한 버전이 아니라 실제 서비스할 수 있는 버전의 파일이 만들어짐

--- 

# 컴포넌트
React는 사용자 정의 태그를 만드는 기술 (react의 본질)
## 어떻게 사용자 정의 태그를 만들 수 있나?
* 사용자 정의 태그 = **Component (컴포넌트)**
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

## props
* 컴포넌트 외부에서 사용하는 입력값
* img 태그 등 많은 html태그에는 src, width, height 등 **속성**이 존재
  * `<img src='image/logo.png' width='50' height='50'>` 
* 컴포넌트에서도 속성이 있는데 react에서는 속성을 **props**라고 부름

### 컴포넌트에서 props를 넘겨주고, 받는 방법
``` jsx
// App.js
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'javascript', body: 'javascript is...' },
  ]

  return (
    <div>
      <Nav topics={topics}/> // props 넘김
    </div>
  );
}

// Nav.js
function Nav(props) { // props 받음
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read" + t.id}>{t.title}</a>
      </li>
    );
  }         
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
```
* App.js에서 더미 데이터인 `topics`를 만들고 `Nav` 컴포넌트에 `topics`로 props 전달
* `topics`로 전달 받았기 때문에 `props.topics`로 사용

이 외에 다른 코드
``` jsx
// App.js
<Article title='Welcome' body='Hello, WEB'/>

// Article.js
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
```

## 이벤트
이벤트는 props를 이용

``` jsx
// App.js
<Header
  title="WEB"
  onChangeMode={() => {
    alert("Header");
  }}
/>

// Header.js
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Header({ onChangeMode }) { // 구조분해 할당으로 받기
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onChangeMode(); // props 생략 가능
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
```
* App.js에서 `onChangeMode()` 함수를 props로 보냄
  * Header컴포넌트의 a태그를 클릭하면 'Header'라는 메세지가 경고창으로 띄워지는 함수
* props로 받은 함수는 `props.받은 함수명`으로 호출할 수 있음
* `e.preventDefault()` : 브라우저의 기본동작을 비활성화 할 수 있음 (새로고침)
* `({ 여기에 넣어서 })` 구조분해 할당으로 받을 수 있음