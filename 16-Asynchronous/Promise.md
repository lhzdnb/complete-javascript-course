# Promise

### Promise的状态和微任务（microtasks）

1. **Promise状态**：在调用`resolve`之前，Promise处于`Pending`（待定）状态。这期间，Promise本身并不在微任务队列（microtasks queue）中，而是在等待某个操作（通常是异步的）来解析它。

2. **微任务队列**：微任务队列是一个特殊的队列，用于存放那些需要在当前执行栈（call stack）清空后、但在下一次事件循环（event loop）之前执行的任务。Promise相关的回调（例如`then`、`catch`、`finally`）在Promise被解析（通过`resolve`或`reject`）时，被加入到微任务队列。

### 工作流程

1. **Promise创建和执行**：当一个Promise被创建并执行时（例如进行某个异步操作），它开始时处于 `Pending` 状态。此时，与Promise相关的代码继续执行，但`then`、`catch`、`finally`中的回调不会立即执行。

2. **调用resolve/reject**：一旦异步操作完成（成功或失败），`resolve`或`reject`会被调用。这会将Promise的状态改变为`Fulfilled`或`Rejected`。

3. **微任务加入队列**：调用`resolve`或`reject`后，相应的`then`、`catch`、`finally`中的回调函数会被添加到微任务队列。

4. **执行微任务**：当前的执行栈（call stack）清空后，事件循环（event loop）会检查微任务队列。如果队列中有任务，它们将被依次取出并执行，直到微任务队列为空。

5. **进入下一轮事件循环**：微任务队列清空后，事件循环继续，进行如宏任务（例如setTimeout、setInterval、I/O）的处理。

### 示例

假设有以下代码：

```javascript
let promise = new Promise((resolve, reject) => {
    // 假设这里有一些异步操作
    setTimeout(() => {
        resolve("操作成功");
    }, 1000);
});

promise.then(result => {
    console.log(result);
});

console.log("代码执行结束");
```

在这个例子中的执行顺序是：
1. Promise被创建并执行，开始处于`Pending`状态。
2. `console.log("代码执行结束")`执行。
3. 约1秒后，setTimeout的回调执行，调用`resolve`。
4. `then`的回调加入微任务队列。
5. 当前执行栈清空后，事件循环检查微任务队列，执行`then`的回调。

在这个流程中，`then`的回调是作为微任务被处理的，确保在当前执行栈完成后、新的事件循环开始前执行。这就是为什么我们通常看到Promise的回调似乎总是在同步代码执行完毕后才运行。

![asynchronous](./assets/asynchronous.png)![promise](./assets/promise.png)

要理解这段代码的输出顺序，我们需要深入了解 JavaScript 的事件循环（Event Loop）和任务队列（Task Queue）的概念，以及微任务（microtasks）和宏任务（macrotasks）的区别。

### JavaScript的事件循环和任务队列
JavaScript 在浏览器环境中是单线程执行的，这意味着它一次只能执行一个任务。为了处理异步操作（如定时器、HTTP请求等），JavaScript 使用了事件循环和任务队列的机制。

- **事件循环（Event Loop）**：负责不断地检查主调用栈（call stack）是否为空，如果为空，它会查看任务队列是否有等待的任务需要执行。
- **任务队列（Task Queue）**：存放准备好被执行的回调函数。这里的任务分为两类：宏任务（macrotasks）和微任务（microtasks）。

### 宏任务和微任务
- **宏任务（Macrotasks）**：包括整体的脚本代码、`setTimeout`、`setInterval`、I/O、UI渲染等。
- **微任务（Microtasks）**：包括`Promise.then()`、`MutationObserver`、`process.nextTick`（在Node.js中）等。微任务的优先级高于宏任务。

### 执行顺序规则
1. 执行同步代码，这属于宏任务。
2. 执行完所有同步代码后，执行当前宏任务中所有的微任务。
3. 当所有微任务完成后，如果有必要，进行UI渲染。
4. 然后开始下一个宏任务（如由`setTimeout`等设置的），重复上述步骤。

### 分析给定的代码
根据上述规则，我们来逐步分析你的代码：

1. **同步代码执行**：
    
    - 执行 `console.log('Test start')`。
    - 设置一个 `setTimeout`，它被放入宏任务队列。
    - 执行两个 `Promise.resolve`，它们的 `then` 部分被放入微任务队列。
    - 执行 `console.log('Test end')`。
   
   **当前输出**：
    ```
    Test start
    Test end
     ```
    
2. **执行微任务**：
    
    - 执行 `Promise.resolve('Resolved promise 1').then(...)` 的回调，输出 `'Resolved promise 1'`。
    - 执行 `Promise.resolve('Resolved promise 2').then(...)` 的回调。即使这里有一个循环，但它是同步执行的，所以在输出 `'Resolved promise 2'` 前，会先完成循环。
   
   **当前输出**：
    ```
    Test start
    Test end
    Resolved promise 1
    Resolved promise 2
     ```
    
3. **执行宏任务**：
    - 执行 `setTimeout(..., 0)` 的回调，输出 `'0 sec timer'`。

   **最终输出**：
    ```
    Test start
    Test end
    Resolved promise 1
    Resolved promise 2
    0 sec timer
    ```
