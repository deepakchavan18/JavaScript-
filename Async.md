## JavaScript Asynchronous Code

**Synchronous vs. Asynchronous:**

* **Synchronous:** Code executes one line after another, blocking the flow of the program.
* **Asynchronous:** Code doesn't block the execution, allowing other tasks to proceed while waiting for asynchronous operations to complete.

**JavaScript and the Execution Context:**

JavaScript operates in a single-threaded environment. Each operation waits for the previous one to finish before executing.

**Blocking vs. Non-Blocking Code:**

* **Blocking Code:** Pauses the program's execution until a task is completed (e.g., reading a file synchronously).
* **Non-Blocking Code:** Allows the program to continue executing while waiting for asynchronous operations (e.g., reading a file asynchronously).

**Example:**

```javascript
// Synchronous code (blocking)
const data = readFileSync('file.txt');
console.log(data);

// Asynchronous code (non-blocking)
readFileAsync('file.txt', (data) => {
  console.log(data);
});