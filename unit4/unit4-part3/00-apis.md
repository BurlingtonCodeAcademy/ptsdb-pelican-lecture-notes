
# APIs

## What is an API?

**Application Programming Interface.**

APIs are about code talking to each other.

It's about standardization of interfaces.


## RESTful Interfaces

These are on the internet and accessed through HTTP requests.

REST is an acronym for four properties of the API.

These operate on a REQUEST/RESPONSE basis.

What happens is:

1. I am the client code, I send a request to the server
2. The server gets my request and computes a response.
3. The server sends me back a response and I can act appropriately.


One important thing to remember about REST is:
***no "stateful" communication***.
What this means is that every request is independent
and does not depend or use data from any earlier or later requests.


You can of course use information from the server's responses
to determine what requests to make next, but the server is not
keeping track of all your requests.




## Structure of requests and responses

BOTH Request and Response objects have headers.

BOTH Request and Response objects have an (optional) body.

Requests are sent with a VERB (e.g. GET, POST, etc.).

Responses have a status code (200, 404, etc.).



### Headers

On the request and response, there are several headers that end up being important to us.

We will talk about `Authorization` later.

One important header is `Content-Type`. It will specify what kind of data is in the body of the request or the response.
Common values are
- 'text/html'
- 'application/json'
- 'image/jpeg'
etc.








# In JavaScript

## Making `fetch` Happen

`fetch` is a top-level function in JavaScript that does HTTP requests.

It is async, so will return the response inside of a promise.
You can `await` a call to fetch to get the response out.

The first argument to `fetch` is the URL you want to send a request to.

The second argument is an "options object", which is a common pattern in JS where all the options that the function needs are specified in one object using keys and values instead of as additional arguments to the function.

For example, one thing we can set using the options object is the method/verb of the request:

```js
const response = await fetch(url, {
  method: 'POST'
})
```







# JSON

**JavaScript Object Notation**.

This is about sending pure data over the internet.

Basically, the format is JavaScript objects/arrays with
a few modifications..

Objects are key-value pairs with pairs separated by commas.

Arrays are sequences of values, with elements separated by commas.

Base types: strings, numbers, boolean.


## BIG DIFFERENCES

- No trailing commas allowed.
- In objects, keys must be quoted always.
- All quotes are double quotes, no exceptions.




# APIs and Getting Data

When we ask a server for data, it will very often give it to us as JSON data. This is good because JSON can easily be converted into JavaScript data (objects, arrays, etc.) using the async `.json` method on the response object.