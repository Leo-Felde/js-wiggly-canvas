# Chirp Paint — Wiggly Canvas Playground

A minimalist drawing tool built with vanilla JavaScript and HTML5 Canvas

Pick your colors, draw, and share your art! No installs, no setups, just fun

---

<div align="center">

### Simple but complete
<img width="500" alt="Drawing Interface preview" src="https://github.com/user-attachments/assets/8b517451-f094-4eb7-b600-9eab16fd8413" />

### Colorful
<img width="500" alt="Palette Menu preview" src="https://github.com/user-attachments/assets/19f7bdf9-c6f0-484d-a512-ec6140d141af" />


### Export as GIF
<img width="500" alt="Exported as gif example" src="https://github.com/user-attachments/assets/c95b0b2b-12d8-4301-9215-1fe0c3ae3de3" />

### Or as PNG with no background!
<img width="500" alt="Static as image example" src="https://github.com/user-attachments/assets/8b2bbb49-95be-4569-9b3c-e14f33c520e5" />



</div>

> ### 🚀 [**Try the Live Demo here!**](https://leo-felde.github.io/js-wiggly-canvas/)

## Key Enhancements
* **Higher Resolution:** Almost DOUBLE the resolution of the original wigglypaint!
* **Tamed Wiggle:** The wiggle can be **turned off completely** (why would you?) for static illustrations.
* **Dual Export:** Support for static **PNG** and animated **GIF**!

## Features
* **Dynamic Animation:** Real-time rendering of animated strokes.
* **Palette Selection:** A curated 3-color palette, easily customizable and expandable.
* **Local Processing:** GIF encoding happens entirely in your browser using Web Workers.
* **Zero Dependencies:** Built with pure HTML5, CSS3, and Vanilla JS! who doesn't love js????

## Tech Stack
* **Canvas API:** For high-performance drawing and frame manipulation.
* **JavaScript (ES6+):** Core logic and animation loop.
* **gif.js:** A JavaScript GIF encoder that runs in the background via Web Workers.

## Installation & Local Setup
Because this project uses **Web Workers** for GIF encoding, browsers block the worker from running via the `file://` protocol. You only need this if you want to export your beautiful art as a gif with it's wigglyness, otherwise you can just open index.html and get painting!

1.  **Clone the project:**
    ```bash
    git clone https://github.com/Leo-Felde/js-painter.git
    cd js-painter
    ```

2.  **Run a local server:**
    If you have Node.js, you can use:
    ```bash
    npx http-server
    ```
    Or if you have Python installed (nerd):
    ```bash
    python -m http.server 8080
    ```

3.  **Open the App:**
    Go to `http://127.0.0.1:8080` in your browser.

## How to Use
3.  **Toggle Wiggle:** For precision drawings, toggle the wiggly animation under the Options Menu.
4.  **Draw:** Select the Pencil or Brush and click and drag on the canvas to create your masterpiece.
5.  **Change Colors:** Under the Options Menu, select from many 5-color palettes or make your own.
6.  **Background transparency** In the Palette Menu, toggle the Transparency Mask and add your own background wherever you want!
7.  **Export:** * Export as animated gif, static image with or without a background!

## TODOS?
- [ ] **MORE (or less?) WIGGLE** Ajust and control PRECISELY how much MORE wigglyness you deserve.
- [ ] **LESS Jank** The UX could use some more love and art.

## 📜 Credits
- Inspired by the original [WigglyPaint](https://wiggly.paint/).
- GIF generation logic powered by [gif.js](https://github.com/jnordberg/gif.js).
