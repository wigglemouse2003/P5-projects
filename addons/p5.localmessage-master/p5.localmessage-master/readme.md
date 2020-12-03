## p5.localmessage
![logo for p5.localmessage](p5.localmessage.png)

p5.localmessage provides a simple interface to send messages **locally** from one sketch to another. This is a very useful tool for multi window sketches, or allowing sketches to communicate with one another across multiple displays connected to the same machine. A typical application is having one sketch as a controller window and another sketch as the visual output.

This is a prerelease software. At some point it might be expanded – maybe even to include a bunch of other service worker things that would be cool to use in p5.js.

[How to Add a library to your p5.js sketch](http://p5js.org/libraries/#using-a-library)

##### Important tips & known limitations
+ You must register the `service-worker.js` file using the `registerServiceWorker()` function in the `setup()` before you begin.
+ currently p5.localmessage will **NOT** work with the p5.js web editor. Consider moving your project to an external editor with your own web hosting setup.
+ Be aware that not all browsers support service workers, or all functionality of service workers. Check the JS console for errors. When in doubt, try another browser! *(testing shows best functionality currently in CHROME)*
+ The word clients in the documentation below refers to *other* pages opened on the same URL with the same service worker enabled.
+ This library will only work if you're running sketches from the **same domain**.
+ There are full sketch examples in the various example folders
+ The `sendMessage()`'s message cannot be anything beyond a base datatype, so strings, booleans, JSON objects, numbers, and floats are great, but p5 objects like `color()` will not be able to be sent.

##### Live Examples
+ [Basic Example](http://bmoren.github.io/p5.localmessage/basic_example/index.html) (open the console on all pages, click the page to interact)
+ [Draw Example](http://bmoren.github.io/p5.localmessage/draw_example/index.html) (Click the page to interact)
+ [Basic Communication between a controller sketch & display sketch](http://bmoren.github.io/p5.localmessage/two_sketch_communication_example/index.html)
+ [Advanced Communication with multiple pieces of data](http://bmoren.github.io/p5.localmessage/advanced_communication_example/index.html)

![animated gif showing features of p5.localmessage](p5.localmessage.gif)


##### License
p5.localmessage is licensed [MIT](https://choosealicense.com/licenses/mit/) just like the [service worker cookbook](https://github.com/mozilla/serviceworker-cookbook) it's based upon.

---

### p5.localmessage table of contents:
+ [registerServiceWorker()](#registerServiceWorker)
+ [sendMessage()](#sendmessage)
+ [listenMessage()](#listenmessage)
<!-- + [getLocalID()](#getLocalID) -->

---

### registerServiceWorker()
###### registerServiceWorker('path/to/service-worker.js')
Registers the service worker which conducts the message relay using a relative path to the service-worker.js file from the main sketch.js file. **You must do this first.** This interface is provided so you can organize your files however you'd like. The example below is representative of how this would look on the provided examples.

```javascript
function setup() {
  registerServiceWorker('../service-worker.js')
}
```

### sendMessage()
###### sendMessage('the message to send')
sendMessage() sends a message to other clients, it will not send the message to itself. This can be any datatype, including a JSON object which can be used to send more complex data! This can be used in the `draw()` loop for real time interaction across windows!

##### sendMessage() basic example:
```javascript
function mouseClicked(){
  //this will only go to the other clients that are connected (not itself).
  sendMessage('hello world! with a unique message: ' + random(100))
}
```

##### sendMessage() JSON example:
```javascript
function mouseClicked(){
  //package up data as a JSON object
  let person = {
    "name": "amy",
    "height": "5.75",
    "skills": "programming"
  }

  //send the message
  sendMessage(person)

}
```

### listenMessage()
###### listenMessage(callback)
listenMessage() listens for incoming messages from other clients. It will ignore messages from itself! It takes a callback function which will be fired each time a new message arrives. The incoming data to the callback is a JSON object containing 2 keys. `client` and `message`.

`client` is the unique client ID #. example: `955a9982-7a12-4dae-babc-18789401f141` which can be used to identify specific clients that are sending messages.

`message` contains the message that the client sent. Keep in mind that if the client sends JSON, it'll need to be traversed accordingly.

*Note:* Do NOT put the listenMessage() function in the `draw()` loop, as this will continually add event listeners to the page and may cause issues. Use it in the `setup()`! You can use a temporary variable to relay things in the `draw()` loop, see the [draw_example](draw_example) folder for a complete example of this functionality.

```javascript
function setup() {

  //only listening to messages sent from other clients (it ignores itself.)
  listenMessage(function(incomingData){

    //the incoming data has 2 keys, client and message
    console.log(incomingData.client, incomingData.message)

  })
}
  ```


<!-- ### getLocalID()
###### getLocalID()
returns the client's **own** ID #. This can be used for comparison on other clients in order to filter specific behaviors based on which specific client sent the message. See the `client_filtering` example for more details

```javascript

``` -->
