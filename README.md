# ๐ ๋ชฉ์ฐจ
* [์ค์น](#์ค์น)
* [ํด๋์ค๋ช](#ํด๋์ค๋ช)
* [๋ฐฐํฌ](#๋ฐฐํฌ)
* [Component](#component)
   * [props](#props)
   * [event](#event)
   * [state](#state)
* [CRUD](#crud)
   * [Read](#read)
   * [Create](#create)
   * [Update](#update)
   * [Delete](#delete)

---

# ๐พ ์ค์น
Create React App ์ค์น
```
npx create-react-app my-app
cd my-app
npm start
```

---

# ๐ ํด๋์ค๋ช
## src/index.js
* ์๊ตฌ ํ์ผ
* `npm start` ๋ช๋ น์ด๋ฅผ ์ด์ฉํด์ cra๋ฅผ ๊ตฌ๋์ํค๋ฉด index.jsํ์ผ์ ์ฐพ๊ณ  ์ ํ์๋๋๋ก ๋์

## src/App.js
* ํ๋ฉด์ ๊ตฌ์ฑํ๋ UI

---

# ๐ฝ ๋ฐฐํฌ
* `npm start`๋ฅผ ์ด์ฉํด์ ์คํ์ํจ ์ ํ๋ฆฌ์ผ์ด์์ ๊ฐ๋ฐ์ ์ํ ์ ํ๋ฆฌ์ผ์ด์์
* ๊ฐ๋ฐํ๊ธฐ์ ์ข์ง๋ง, ์ค์ ๋ก ์๋น์คํ๊ธฐ์๋ ์ฉ๋๋ ํฌ๊ณ  ๋ถํ์ํ ์ฝ๋๋ค์ด ์์
  ์ฆ, ์๋น์คํ๊ธฐ์ ์ข์ง ์์

## ์๋น์ค์ ์ต์ ํ, ํจ์จ์ ์ธ ๋ฐฐํฌ๋ณธ์ ๋ง๋๋ ๋ฐฉ๋ฒ 
### build : ๋ฐฐํฌํ์ ๋ง๋๋ ๊ณผ์ 
* `npm run build`๋ฅผ ์๋ ฅํ๋ฉด build ๋ช๋ น์ด๊ฐ ์์๋๊ณ  build๋ผ๋ ํด๋๊ฐ ์์ฑ๋จ
* build ํด๋ ์์๋ index.htmlํ์ผ๊ณผ index.html์ ์์งํ ๋ค๋ฅธํ์ผ๋ค์ด ์กด์ฌํจ
  * index.html์๋ ๋ฐฐํฌ์์ ํ์์๋ ๊ณต๋ฐฑ์์ด minimalํ ๋์ด ์์
    * ํ์ผ ์ฉ๋์ ์ค์ด๊ธฐ ์ํด
#
* `npx serve -s build` | buildํด๋์์ ์๋ index.htmlํ์ผ์ ์๋น์คํด์ฃผ๋ ์น ์๋ฒ๊ฐ ์คํ๋จ
  * ๋ช๋ น์ด ์คํ ์ ์ ์ํ  ์ ์๋ url์ด ๋์ด
  * ๊ฐ๋ฐํ๊ฒฝ์ ์ํ ๋ฒ์ ์ด ์๋๋ผ ์ค์  ์๋น์คํ  ์ ์๋ ๋ฒ์ ์ ํ์ผ์ด ๋ง๋ค์ด์ง

--- 

# ๐งฉ Component
React๋ ์ฌ์ฉ์ ์ ์ ํ๊ทธ๋ฅผ ๋ง๋๋ ๊ธฐ์  (react์ ๋ณธ์ง)
## ๋ง๋๋ ๋ฐฉ๋ฒ
* ์ฌ์ฉ์ ์ ์ ํ๊ทธ = **Component (์ปดํฌ๋ํธ)**
* **ํจ์**๋ก ๋ง๋ค ์ ์์
* Component๋ ๋ฐ๋์ **์ฒซ ๊ธ์๋ ๋๋ฌธ์** ์ฌ์ผ ํจ

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

---

## props
* ์ปดํฌ๋ํธ ์ธ๋ถ์์ ์ฌ์ฉํ๋ ์๋ ฅ๊ฐ
* img ํ๊ทธ ๋ฑ ๋ง์ htmlํ๊ทธ์๋ src, width, height ๋ฑ **์์ฑ**์ด ์กด์ฌ
  * `<img src='image/logo.png' width='50' height='50'>` 
* ์ปดํฌ๋ํธ์์๋ ์์ฑ์ด ์๋๋ฐ react์์๋ ์์ฑ์ **props**๋ผ๊ณ  ๋ถ๋ฆ

### ์ปดํฌ๋ํธ์์ props๋ฅผ ๋๊ฒจ์ฃผ๊ณ , ๋ฐ๋ ๋ฐฉ๋ฒ
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
      <Nav topics={topics}/> // props ๋๊น
    </div>
  );
}

// Nav.js
function Nav(props) { // props ๋ฐ์
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
* App.js์์ ๋๋ฏธ ๋ฐ์ดํฐ์ธ `topics`๋ฅผ ๋ง๋ค๊ณ  `Nav` ์ปดํฌ๋ํธ์ `topics`๋ก props ์ ๋ฌ
* `topics`๋ก ์ ๋ฌ ๋ฐ์๊ธฐ ๋๋ฌธ์ `props.topics`๋ก ์ฌ์ฉ

์ด ์ธ์ ๋ค๋ฅธ ์ฝ๋
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

---

## event
์ด๋ฒคํธ๋ props๋ฅผ ์ด์ฉ

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

function Header({ onChangeMode }) { // ๊ตฌ์กฐ๋ถํด ํ ๋น์ผ๋ก ๋ฐ๊ธฐ
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onChangeMode(); // props ์๋ต ๊ฐ๋ฅ
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
```
* App.js์์ `onChangeMode()` ํจ์๋ฅผ props๋ก ๋ณด๋
  * Header์ปดํฌ๋ํธ์ aํ๊ทธ๋ฅผ ํด๋ฆญํ๋ฉด 'Header'๋ผ๋ ๋ฉ์ธ์ง๊ฐ ๊ฒฝ๊ณ ์ฐฝ์ผ๋ก ๋์์ง๋ ํจ์
* props๋ก ๋ฐ์ ํจ์๋ `props.๋ฐ์ ํจ์๋ช`์ผ๋ก ํธ์ถํ  ์ ์์
* `e.preventDefault()` : ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ๋์์ ๋นํ์ฑํ ํ  ์ ์์ (์๋ก๊ณ ์นจ)
* `({ ์ฌ๊ธฐ์ ๋ฃ์ด์ })` ๊ตฌ์กฐ๋ถํด ํ ๋น์ผ๋ก ๋ฐ์ ์ ์์

---

## state
* `prop`๊ณผ ํจ๊ป ์ปดํฌ๋ํธ ํจ์๋ฅผ ๋ค์ ์คํํด์ ์๋ก์ด `return`๊ฐ์ ๋ง๋ค์ด์ฃผ๋ ๋ํ๋์ ๋ฐ์ดํฐ

### ์ปดํฌ๋ํธ์ ์๋ ฅ๊ณผ ์ถ๋ ฅ
* `prop`์ ํตํด ์๋ ฅ๋ ๋ฐ์ดํฐ๋ฅผ ์ปดํฌ๋ํธ ํจ์๊ฐ ์ฒ๋ฆฌํด์ `return`๊ฐ์ ๋ง๋ค๋ฉด,
`return`๊ฐ์ด ์๋ก์ด UI์ด๊ฐ ๋จ
#
### prop๊ณผ state ์ฐจ์ด์ 
* `prop`: ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๋ ์ธ๋ถ์๋ฅผ ์ํ ๋ฐ์ดํฐ
* `state`: ์ปดํฌ๋ํธ๋ฅผ ๋ง๋๋ ๋ด๋ถ์๋ฅผ ์ํ ๋ฐ์ดํฐ
#
### useState
``` js
const _mode = useState("WELCOME"); // useState์ ์ด๊ธฐ๊ฐ
const mode =  _mode[0]; // ๊ฐ์ ์ฝ์ ์ ์์
const setMode = _mode[1]; // ๊ฐ์ ๋ฐ๊ฟ ์ ์์
console.log("_mode", _mode);
```
![](./image/state.png)
* 0๋ฒ์งธ ์์๋ ์ํ์ ๊ฐ์ **์ฝ์ ๋** ์ฐ๋ ๋ฐ์ดํฐ
* 1๋ฒ์งธ ์์๋ ์ํ์ ๊ฐ์ **๋ณ๊ฒฝํ  ๋** ์ฌ์ฉํ๋ ํจ์

์ ์ฝ๋๋ฅผ ๋ ๊ฐ๊ฒฐํ๊ฒ ์์ฑ
``` jsx
const [mode, setMode] = useState('WELCOME');
```
* `mode`์ ๊ฐ์ด `setMode`๋ฅผ ํตํด ๋ณ๊ฒฝ๋๋ฉด `App` ์ปดํฌ๋ํธ๊ฐ ๋ค์ ์คํ๋จ
  * `setMode("READ");`
    * useState๊ฐ mode์ ๊ฐ์ `'READ'`๋ก ์ธํํด์ค

#
### state๋ฅผ ๋ณ๊ฒฝํ  ๋
#### ์์ ๋ฐ์ดํฐ (primitive)
* `const [value, setValue] = useState(PRIMITIVE);`
* string
* number
* boolean
``` js
const [value, setValue] = useState(1); // ์์ ๋ฐ์ดํฐ
setValue(2); 
```

์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ์ ์๋ก์๋ ฅ๋ ๋ฐ์ดํฐ๊ฐ ์๋ก ๋ค๋ฅธ ๊ฐ์ด๋ฏ๋ก ๋๋๋ง ๋จ

#
#### ๋ฒ ๊ฐ์ฒด
* `const [value, setValue] = useState(Object);`
* object
* array

``` js
const [value, setValue] = useState([1]); // ๋ฒ๊ฐ์ฒด ๋ฐ์ดํฐ
value.push(2); // ์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ๋ฅผ ๋ฐ๊พผ ๊ฒ
setValue(value); // ์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ๋ฅผ ์๋ ฅํ ๊ฒ
```
์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ์ ์๋ก ์๋ ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๋น๊ตํ ๊ฒฐ๊ณผ ๊ฐ์ด ๊ฐ๊ธฐ ๋๋ฌธ์ ๋๋๋ง ๋์ง ์์  
#
##### ๊ฐ์ ๋ฐ๊พธ๋ ค๋ฉด?
react๋ ์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ์ ์๋ก ์๋ ฅ๋ ๋ฐ์ดํฐ๋ฅผ ๋น๊ตํ๊ณ  ๊ฐ์ด ๋ค๋ฅด๋ฉด ๋๋๋ง ํจ

1. ์ค๋ฆฌ์ง๋ ๋ฐ์ดํฐ๋ฅผ ๋ณต์ 
    * `const = newValue = [...value]`
2. ๋ณต์ ํ ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝ
    * `newValue.push(2)`
3. ๋ณ๊ฒฝํ ๋ฐ์ดํฐ๋ฅผ set
    * `setValue(newValue)`

---
# ๐ป CRUD
## Read
* ์์ฑํ ๊ธ ๋ชฉ๋ก์ ํด๋ฆญํ์ ๋ ์์ฑํ ๊ธ์ ๋ณด์ฌ์ฃผ๊ธฐ
* `Article` ์ปดํฌ๋ํธ์ `props`๋ก `title, body`๋ฅผ ๋๊ฒจ์ค ๋ ์ ์ ํ ๊ฐ์ ๋ณด๋ด์ฃผ๋ฉด ๋จ

``` jsx
function App() {
  const [id, setId] = useState(null);

  let content = null;
  if (mode === "WELCOME") {
    // ์๋ต
  } else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
  }

  return (
    <div style={{ marginLeft: 10 }}>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
      {content}
    </div>
  );
}


```
* ์ด๋ค ๊ธ์ ์ ํํ๋์ง ์ ์ ์๊ฒ id state ์์ฑ
  * `Nav` ์ปดํฌ๋ํธ (๊ธ ๋ชฉ๋ก)์ ํด๋ฆญ ํ๋ฉด ์คํ๋๋ ํจ์์ id state ๋ณ๊ฒฝ
* id state์ ์ ํํ topics.id๊ฐ ๊ฐ์ ๊ฒ๋ง ํํฐ๋ง

#### Nav๋ก ์ ๋ฌํ id props๊ฐ ๋ฌธ์์ด
* id๊ฐ ๋ฌธ์์ด์ด๋ผ์ ์ปดํฌ๋ํธ๊ฐ ๋ณ๊ฒฝ์ด ์๋จ
* ์๋ ฅํ  ๋ id๊ฐ ์ซ์์ด์ง๋ง ํ๊ทธ์ ์์ฑ์ผ๋ก ๋๊ธฐ๋ฉด ๋ฌธ์์ด์ด ๋จ
  * `<a id={item.id}></a>`
* ๋ฌธ์์ด id๋ฅผ ์ซ์๋ก ์ปด๋ฒํ ํด์ฃผ๋ฉด ๋จ
  * `onChangeMode(Number(e.target.id));`

---

## Create
### ๋ก์ง
1. create ๋ฒํผ์ ํด๋ฆญํ๋ฉด ๊ธ์ ์์ฑํ๋ form์ด ๋์ด
2. ๊ธ์ ์๋ ฅํ๊ณ  create ๋ฒํผ์ ๋๋ฅด๋ฉด ์๋ก์ด ๊ธ์ด ์์ฑ๋๊ณ , ์์ฑ๋ ๊ธ์ ์์ธ๋ณด๊ธฐ ํ์ด์ง๋ก ์ด๋

* `<form>` : ์ด๋ค ์ ๋ณด๋ฅผ ์๋ฒ๋ก ์ ์กํ  ๋ ์ฌ์ฉํ๋ html ํ๊ทธ
<br />

``` jsx
// Create.js
function Create(props) {
  return (
  <article>
    <h2>Create</h2> 
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="์ ๋ชฉ์ ์๋ ฅํ์ธ์."/></p>
      <p><textarea type="text" name="body" placeholder="๋ด์ฉ์ ์๋ ฅํ์ธ์."/></p>
      <p><input type="submit" value="Create" /></p>
    </form>
  </article>
  );
}

// App.js
function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);

  let content = null;
  if (mode === "WELCOME") {
    // ์๋ต
  } else if (mode === "READ") {
    // ์๋ต
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          // topics์ ์๋ก์ด ์์๋ฅผ ์ถ๊ฐํด์ ๋ชฉ๋ก์ ์ถ๊ฐ
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);

          // ๊ธ ์์ฑ ํ ์์ธ๋ณด๊ธฐ ํ์ด์ง๋ก ๋์ด๊ฐ๊ธฐ
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1); // ๋ค์์ ์ถ๊ฐํ  ๊ธ์ ์ํด
        }}
      ></Create>
    );
  }
}
```

### App.js
#### [topics ๊ธ ๋ชฉ์ฐจ์ ์๋ก์ด ๊ธ ๋ฃ๊ธฐ]
* Create ์ปดํฌ๋ํธ์ `props.ํจ์` ์ ๋ฌ (_title, _body)
* `Create`์์ ์ ๋ฌ๋ฐ์ props๋ฅผ ํ์ฉํด์ ์๋ก์ด ๋ฐฐ์ด์ ์์ฑ
* ๋ฒ ๊ฐ์ฒด state๋ฅผ ๋ณ๊ฒฝํ๊ธฐ ์ํด ๊ธฐ์กด topics๋ฅผ ๋ณต์  ํ ๋ณต์ ๋ณธ์ ๋ณ๊ฒฝ
* `setTopics`์ ๋ณต์ ๋ณธ์ ๋ฃ์ด์ ๋๋๋ง
<br />

#### [๊ธ ์์ฑ ํ ์์ธ๋ณด๊ธฐ ํ์ด์ง๋ก ๋์ด๊ฐ๊ธฐ]
* ๊ธ ์์ฑ ํ mode๋ฅผ  `'READ'` mode๋ก ๋ณ๊ฒฝ
* id ๋ณ๊ฒฝ `setId(nextId)`
* ๋ค์์ ์ถ๊ฐํ  ๊ธ์ ์ํด `setNextId(nextId + 1)`
<br />

#### Create.js
* form ํ๊ทธ์์ name์ด title, body์ธ ํ๊ทธ์ value๋ฅผ ์ฐพ๊ธฐ
* `props.ํจ์`์ ๋ฃ์ด์ ์ ๋ฌํ๊ธฐ

---

## Update
create,read๋ฅผ ํ์ด๋ธ๋ฆฌ๋ํด์ ๊ตฌํ
  * ํ์ด๋ธ๋ฆฌ๋: ํน์ ํ ๋ชฉํ๋ฅผ ๋ฌ์ฑํ๊ธฐ ์ํด ๋ ๊ฐ ์ด์์ ์์๊ฐ ํฉ์น ๊ฒ
### 1. update๋ก ๊ฐ๋ ๋งํฌ ์ถ๊ฐ
* aํ๊ทธ๋ฅผ ulํ๊ทธ๋ก ๊ฐ์ธ์ ๋ชฉ๋กํ
``` jsx
function App() {
  return (
    <ul>
      <li>
        <a href="/create"> /* Create ์๋ต */ </a>
      </li>
      <li>
        <a href="/update">Update</a>
      </li>
    </ul>
  )
}
```

<br />

### 2. 'READ'๋ชจ๋์ผ ๋๋ง Update ๋งํฌ๊ฐ ๋์ค๊ฒ ํ๊ธฐ
ํ์์๋ ์๊ณ  ๊ธ ๋ชฉ๋ก์ ํด๋ฆญํ  ๋๋ง ๋ณด์
1. contextControl ์ง์ญ๋ณ์ ์์ฑ (๋งฅ๋ฝ์ ์ผ๋ก ๋ธ์ถ๋๋ UI๋ผ๋ ๋ป)
    * `contextControl = <li><a href="/update">Update</a></li>`
2. Update์ ๊ณ ์ ํ id๋ฅผ ์ฃผ์์ ์ถ๊ฐ (ํ์ ์งํฌ๋ ค๊ณ )
3. `onClick` ์ด๋ฒคํธ 
    * update mode๋ก ๋ณ๊ฒฝ
``` jsx
// App.js
let contextControl = null;
else if (mode === "READ") {
  // ์๋ต
  contextControl = (
    <li>
      <a
        href={"/update" + id} 
        onClick={(e) => {
          e.preventDefault();
          setMode("UPDATE");
        }}
      >
        Update
      </a>
    </li>
  );
} 
```
<br />

### 3. ๊ธฐ์กด์ ์์ฑํ title, body ๊ฐ์ ธ์์ ๋ณ๊ฒฝํ๊ณ  App์ผ๋ก ์ ๋ฌํ๊ธฐ
> * ์์  ๊ธฐ๋ฅ์ ๋ง๋ค๊ธฐ ์ํด์  Update ๋ฒํผ์ ํด๋ฆญํ์ ๋ ์ฌ์ฉ์๊ฐ ์์ฑํ ๋ด์ฉ์ ๋ถ๋ฌ์์ผ ํจ
>* `Update` ์ปดํฌ๋ํธ๊ฐ `title, body`์ props๋ฅผ ๊ธฐ๋ณธ์ ์ผ๋ก ๊ฐ์ง๊ณ  ์์ด์ผ ํจ

``` jsx
// App.js
let content = null;
let contextControl = null;
if (mode === "WELCOME") {
  // ์๋ต
} else if (mode === "READ") {
  // ์๋ต
} else if (mode === "CREATE") {
  // ์๋ต
} else if (mode === "UPDATE") {
  let title,
    body = null;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  content = (
    <Update 
      title={title} // props ์ ๋ฌ
      body={body} 
      onUpdate={(title, body) => {}} // ์ ๋ฌ๋ฐ์ ๋ฐ์ดํฐ ์ธ์๋ก ๋ฐ๊ธฐ
    ></Update>
  );
}


// Update.js
function Update(props) { // props ๋ฐ์
  // props๋ฅผ state๋ก ๋ณ๊ฒฝ
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value; // ์๋ ฅ๊ฐ
          const body = e.target.body.value;
          props.onUpdate(title, body); // ์ ๋ฌ
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="์ ๋ชฉ์ ์๋ ฅํ์ธ์."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value); // state ๋ณ๊ฒฝ
            }}
          />
        </p>
        <p>
          // body ์๋ต
        </p>
      </form>
    </article>
  )
}
```

1. title, body๋ฅผ ๊ตฌํด์ `Update` ์ปดํฌ๋ํธ์ props๋ก ์ ๋ฌ
    * `Update` ์ปดํฌ๋ํธ์์ props ๋ฐ๊ธฐ
<br/>

2. **์ ๋ฌ ๋ฐ์ props๋ฅผ state๋ก ๋ณ๊ฒฝ**
    * `props`๋ **์ธ๋ถ์**๊ฐ ์ฌ์ฉํ๋ ๋ช๋ น์ด๊ธฐ ๋๋ฌธ์ ๋ด๋ถ์์  ๋ณ๊ฒฝํ์ง ๋ชปํจ
      * ๋ด๋ถ์์ ๋ณ๊ฒฝํ  ์ ์๋ `state`๋ก ๋ณ๊ฒฝ
<br/>

3. **onChange event ์์ฑ** 
    * ์ฌ์ฉ์์ ์๋ ฅ๊ฐ์ ๊ตฌํด์ state๋ฅผ ๋ณ๊ฒฝ
    * `e.target.value`๋ก ์๋ ฅ๊ฐ์ ๊ตฌํ๊ณ  setState๋ก ์ต์ข์ ์ผ๋ก ๋ฐ๊ฟ
      * `setTitle(e.target.value);`
<br/>

4. ๋ณ๊ฒฝํ `state(title, body)`๋ฅผ `onUpdate` ํจ์๋ก ์ ๋ฌ
<br/>


### 4. ๋ณ๊ฒฝ๋ ๊ฐ์ผ๋ก topics ๋ณ๊ฒฝ
``` jsx
// App.js Update mode
else if (mode === "UPDATE") {
  // title, body ๊ตฌํ๊ธฐ
  let title,
    body = null;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      title = topics[i].title;
      body = topics[i].body;
    }
  }

  content = (
    <Update 
      title={title} 
      body={body} 
      onUpdate={(title, body) => {
        const newTopics = [...topics]; // ๋ณต์ ๋ณธ
        const updatedTopic = { id: id, title: title, body: body }; 
        for (let i = 0; i < newTopics.length; i++) {
          if (newTopics[i].id === id) { // ์ ํํ topic
            newTopics[i] = updatedTopic; // ์ ํํ topic์ updatedTopic๋ก ๋ฐ๊ฟ
            break; // ๋ฐ๋ณต๋ฌธ ์ข๋ฃ
          }
        }
        setTopics(newTopics); 
        setMode("READ");
      }}
    ></Update>
  );
}
```

1. `topics`  ๋ณต์ ๋ณธ `newTopics` ์์ฑ
2. `updatedTopic`์ ๋ณ๊ฒฝ๋ ๋ฐ์ดํฐ ๋ฃ๊ธฐ
3. `setTopics`์ `newTopics`์ ๋ฃ์ด์ ๋ณต์ ๋ณธ ๋ณ๊ฒฝ
4. ์์  ํ ์์ธ๋ณด๊ธฐ ํ์ด์ง๋ก ๋์ด๊ฐ๊ธฐ

---

## Delete

``` jsx
function App() {
  if (mode === "WELCOME") {
    // ์๋ต
  } else if (mode === "READ") {
    // title, body ๊ตฌํ๊ธฐ ์๋ต
    contextControl = (
      <>
        <li><a> /* Update ์๋ต */ </a></li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  // id๊ฐ ์ผ์นํ์ง ์๋ topic๋ค๋ง push
                  newTopics.push(topics[i]);
                }
              }
              setTopics(newTopics);
              setMode("WELCOME");
            }}
          />
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    // ์๋ต
  } else if (mode === "UPDATE") {
    // ์๋ต
  }
}
```
1. newTopics๋ผ๋ ๋น ๋ฐฐ์ด ์์ฑ
2. ๊ธฐ์กด topics์ id์ ์ ํํ ๋ฐ์ดํฐ์ id๊ฐ ์ผ์นํ์ง ์๋ ๋ฐ์ดํฐ๋ง newTopics(๋น ๋ฐฐ์ด)์ ๋ฃ๊ธฐ
3. setTopics์ newTopics ๋ฃ๊ธฐ
4. ์ญ์  ํ ๋ฉ์ธ ํ์ด์ง๋ก ๊ฐ๊ธฐ

#

[๐ผ ๋ชฉ์ฐจ๋ก ๋์๊ฐ๊ธฐ ](#๋ชฉ์ฐจ)