# Our Story Website 💕

A romantic, elegant memory website for a birthday gift.

## 📁 File Structure

```
our-story/
├── index.html       ← Main page (edit stories & notes here)
├── style.css        ← All styling (colors, fonts, layout)
├── script.js        ← Animations & interactions
├── photos/          ← 📸 Put your photos here
└── clips/           ← 🎥 Put your video clips here
```

## 🛠 How to Add Your Photos

1. Create a `photos/` folder inside `our-story/`
2. Put your photo files there (e.g. `photo1.jpg`, `photo2.jpg`)
3. Open `index.html` and find the placeholder comments like:
   ```html
   <!-- <img src="photos/photo1.jpg" alt="Our first memory" /> -->
   ```
4. Remove the `<!--` and `-->` comment tags to activate the image
5. Also remove the `<div class="photo-placeholder">...</div>` above it

## 🎬 How to Add a Video

**Option A — Local video file:**
```html
<video controls>
  <source src="clips/clip1.mp4" type="video/mp4" />
</video>
```

**Option B — YouTube/Vimeo embed:**
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        allowfullscreen title="Our clip"></iframe>
```

## ✏️ How to Edit the Stories

Open `index.html` and find sections marked with `<!-- ✏️ EDIT THIS: -->` comments.
Edit the text between the `<p>` tags to add your own memories and love notes.

## 🌸 To Open the Website

Just double-click `index.html` — it opens in your browser. No server needed!

## 🎨 Color Customization

Edit `style.css` at the top — the `:root` section has all the colors:
- `--deep-rose` — main accent color
- `--rose` — lighter accent
- `--blush` — background tint
- `--cream` — section backgrounds
