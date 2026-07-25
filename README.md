# Zensho: MERN Stack Revision Project

This is a structural dummy project designed specifically to revise every concept learned in the Web Development repository. The focus here is **logic and structure**, not fancy CSS.

Below is the complete checklist of topics and subtopics (based exactly on the repository folders) along with how to implement them in this project to successfully revise them.

---

## 🖥️ BackEnd (Express & Node.js)
*Folder: `Zensho/backend/`*

- [ ] **1_commonjs_and_ecmascript_modules**
  - *How to use:* Setup your `server.js` using `require()` (CommonJS) to import `express`, and maybe write a separate small helper module and import it.
- [ ] **2_fs_and_path_modules**
  - *How to use:* Write a script that uses `fs.appendFile` and `path.join` to log whenever the server is started into a `logs.txt` file.
- [ ] **3_expressJS**
  - *How to use:* Set up basic routing. Create a `GET /api/data` route and a `POST /api/data` route to handle requests.
- [ ] **4_middleware**
  - *How to use:* Create a custom middleware function `app.use((req, res, next) => { ... })` that logs the HTTP method and URL of every incoming request to the console.
- [ ] **5_ejs_templete_engine**
  - *How to use:* Set `app.set('view engine', 'ejs')`. Create a single route `GET /admin` that renders an `.ejs` file displaying the server's current status in plain HTML.

---

## 🗄️ DataBase (MongoDB)
*Folder: `Zensho/backend/`*

- [ ] **6_mongodb_crud_op & 7_mongoose**
  - *How to use:* 
    1. Connect to MongoDB using `mongoose.connect()`.
    2. Create a simple `Item` or `User` Schema.
    3. Use Mongoose methods (`.find()`, `.create()`, `.findByIdAndDelete()`) inside your Express routes to perform CRUD operations.

---

## ⚛️ FrontEnd (React & Vite)
*Folder: `Zensho/`*

- [ ] **intro_to_react & props_and_components**
  - *How to use:* Create basic components (e.g., `<Navbar />`, `<DataCard />`). Pass data like `{title, description}` as props from the parent to `<DataCard />`.
- [ ] **Hooks_and_states**
  - *How to use:* Use `useState` to store the list of data you get from the backend or to handle input fields.
- [ ] **UseEffectHook**
  - *How to use:* Use `useEffect` with an empty dependency array `[]` to `fetch()` data from your Express backend as soon as the component loads.
- [ ] **conditionalRendering**
  - *How to use:* If your state array is empty, render `<p>No data found</p>`. If it has items, render the list.
- [ ] **events_in_react & handlingFormHook**
  - *How to use:* Create a form to submit new data to the backend. Handle the `onSubmit` event to prevent default reload, and use a form hook to manage the inputs.
- [ ] **useRefHook**
  - *How to use:* Attach a `ref` to the main text input in your form. Use `useEffect` to automatically `.focus()` on that input when the page loads.
- [ ] **react_routers**
  - *How to use:* Install `react-router-dom`. Create routes for `/` (Home/List view) and `/add` (Form view) to navigate without page reloads.
- [ ] **useContextHook**
  - *How to use:* Create a `ThemeContext` (Light/Dark) or a `UserContext` (Dummy logged-in user info) and wrap your app. Access this context in the `<Navbar />`.
- [ ] **usemenohook & useCallbackHook**
  - *How to use:* Add a search bar to filter your list. Use `useCallback` for the search input `onChange` function, and `useMemo` to return the filtered list without recalculating on every render.
- [ ] **redux**
  - *How to use:* Setup Redux Toolkit. Create a global counter state (e.g., "Total Items Created"). Dispatch an action to increment it every time a new item is submitted, and read it in the `<Navbar />`.

---

### 📝 How to use this file:
Whenever you sit down to revise, pick the next unchecked box. Write the code for it in `Zensho`, test it, and then mark it as `[x]`!