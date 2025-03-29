# CS 260 Notes


## Github

I learned how to make a new repository in github.
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

[My startup](https://startup.recipebook260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.156.25.111
Command to ssh: ssh -i /Downloads/kirgan11.pem ubuntu@recipebook260.click
Check my DNS: AWS - Route 53 - Hosted Zones

## Caddy

If it says insert, press escape. Use :wq to exit


## HTML

This was not as difficult as I expected. I used the html elements correctly, but it has a lot of placeholders. Links are used to navigate the different pages.

## CSS

./deployFiles.sh -k C:/users/Quintin/Downloads/kirgan11.pem -h recipebook260.click -s simon

The css took longer than I expected and it's still not where I would like it to be, but it's in a good place. I struggled with using flex-column with my main element, but I got it working with a style element.

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

./deployReact.sh -k C:/users/Quintin/Downloads/kirgan11.pem -h recipebook260.click -s simon
 cd C:/users/Quintin/CS260/startup


## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

## Service

added 3rd party api in home.jsx
had some errors with 404, but I fixed it somehow
if you change index.js, rerun node index.js to see changes


## DB

i had an issue with deploying but i reinstalled mongodb into my service class
  - ssh -i C:/users/Quintin/Downloads/kirgan11.pem ubuntu@recipebook260.click 
  - pm2 logs startup
- ./deployService.sh -k C:/users/Quintin/Downloads/kirgan11.pem -h recipebook260.click -s startup


## Websocket

i had an issue with connecting to the websocket, but i need to change to port to the same as the server
