<style>
  body {
    background-color: darkblue;
  }
  h1,h2,h3,p {
    color: yellow;
  }

  ol,ul {
    color: lightgreen;
  }

  ol ol {
    list-style-type: hiragana;
    color: purple;
  } 

  ol ol ol {
    list-style-type: lower-roman;
    color: #dd5020;
  }
</style>

# Markdown Lesson

You can start writing content here. This content will update live in the preview to the side.


## Basic `p` Tags

You can write each setence out in plain text, and Markdown will know to put it in a p tag.
Notice that even though I broke a line, the text continues as though I had not!
This allows us to write text and break lines however often we want in the source document and have it rendered in HTML as if we had written the whole paragraph coherently.

## Formatting Text

To emphasize text, add *asterisks*! It's *that* easy!

Breaking two lines or more begins a new paragraph, btw.

If you want to bold text (render as a strong element), you can use **two asterisks**!!

And in those rare cases where you need to *italicize* and **bold** text, any guesses? ***THREE ASTERISKS***

## Lists!

To make an ordered list:

1. Start a list.
2. That's it!

For an unordered list, you have some options...

- Usually, I use dashes.
- But you can use + or * for each list item as well.
- It
- is
- up
- to
- you.

Oh, and also, if it makes sense to you visually, feel free to indent your lists.

  - This is the same kind of list.
  - But the indentation, it looks nicer.
    - Also did I mention we can nest lists like this using indentation?
    - It's true!
      - You can clearly see that we are getting nested lists.

And:

  1. To answer Jake's question,
      2. If it doesn't work, it might be a quirk of the GFM spec, not HTML or Markdown itself.

<ol>
  <li>First thing</li>
  <li>Second thing
    <ol>
      <li>Second thing, first subthing</li>
      <li>Second thing, 2nd subthing
        <ol>
          <li>2nd thing, 2nd subthing, 1st subsubthing</li>
        </ol>
    </ol></li>
</ol>

## CODE

To add code to your documents, you have two options depending on context.

### Inline Code

For code in line, mark the `code` portion with backticks. (This is the character to the left of the `1` key.)

**Example:** Help, my `addTwo` function doesn't seem to work, the last line of the function is `return x + 2` but it isn't doing that?

### Code Blocks

What if you have several lines of code, like an HTML element with several child elements or a JavaScript function that goes on for like five lines? We can represent that in the code like so:

```
<p>Write your code here! Anything will be interpreted *literally*.</p>
```
Done. But wait, there's more! That code was HTML, let's see if we can take advantage of that.

```html
<p><em>This</em> code is syntax-highlit? Or is it <span class="unsure-content">"highlighted"</span>?</p>
```
Available values for language (relevant to this class) include "html", "css", "javascript" or just "js", and probably a million more.


## Other Little Tricks

### Horizontal Lines

For a line across, let's just verify:

---

Or:

*****************************************





## Links

Remember, our example `README.md` that we were looking at is [the README for flower on GitHub](https://github.com/adap/flower/blob/main/README.md).

Sometimes a Markdown compiler/parser/tool will also support adding `a` tags to bare links like google.com. But in most cases not. If you just want the link text to *be* the URL.

## Images (for funsies and actual legit uses)

All an image is, is a link tag preceded by an exclamation point. Observe!

![alt text goes here](https://www.thespruce.com/thmb/E9MczWg73Q-SRuvvVG-7VaXrE4I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-pelican-a7fa2b8e21e84f61bc520cc87af63125.jpg)


## And, Lastly, the Big Secret!!

Markdown is what we call a "strict subset" of HTML. What this means is that **every HTML document *is* a markdown document**. Let me prove it to you.

<em>Italicized text!</em>

<p>Arbitrary <code>HTML</code> goes here!</p>

Actually, darn, I should have been typing that. Let me repeat: if we need to, we can always use HTML in our Markdown documents. Here are a few examples of when you might want to do that.

<span style="color: red">This text is red.</span>

## Commenting

<!-- this is a comment -->

I swear, there is a comment above this in the source!