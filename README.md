# Lumbini Miracle AR - Vesak 2026

A complete first-version QR-based WebAR project for a Vesak 2026 experience.

The app flow:

1. QR code opens the website.
2. Landing page appears.
3. User taps Start Experience.
4. User allows camera access.
5. User points phone camera at the target image.
6. A stylized Lumbini scene appears with:
   - sacred tree
   - Queen Mahamaya symbolic figure
   - baby Siddhartha symbolic figure
   - seven lotus bloom animation
   - golden glow
   - story popup
   - soft ambient sound toggle

## Tech stack

- React
- Vite
- Tailwind CSS
- A-Frame
- MindAR image tracking

## How to run

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:5173
```

## Important mobile testing note

Camera access usually needs HTTPS.

For local mobile testing, you can:

1. Run the app on your laptop:
   ```bash
   npm run dev
   ```

2. Make sure phone and laptop are on the same Wi-Fi.

3. Open the network URL shown by Vite, for example:
   ```txt
   http://192.168.1.5:5173
   ```

Some phones/browsers may block camera on normal HTTP. For final testing, deploy to Vercel, Netlify, or Firebase Hosting because they provide HTTPS.

## How to test AR

1. Open:
   ```txt
   /target.html
   ```

2. Print the target image or open it on another device.

3. Open:
   ```txt
   /ar.html
   ```

4. Allow camera.

5. Point your phone at the target image.

## Replace with your own Vesak target image

This first version uses the official MindAR sample target so you can test immediately.

Later:

1. Design your own Vesak/Lumbini target poster.
2. Use MindAR image target compiler to generate a `.mind` file.
3. Put it in:
   ```txt
   public/assets/targets/lumbini-target.mind
   ```
4. Change this line in `public/ar.html`:

```html
mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/examples/image-tracking/assets/card-example/card.mind;"
```

to:

```html
mindar-image="imageTargetSrc: /assets/targets/lumbini-target.mind;"
```

## Replace simple shapes with GLB models

This project uses primitive shapes so it works without 3D assets.

Later, create or download optimized `.glb` models:

```txt
public/assets/models/
├── sal-tree.glb
├── queen-mayamaya.glb
├── baby-siddhartha.glb
└── lotus.glb
```

Then replace primitives in `public/ar.html` with:

```html
<a-gltf-model src="/assets/models/sal-tree.glb"></a-gltf-model>
```

## QR Code

After deploy, create a QR code for your website URL.

Example final link:

```txt
https://your-vesak-ar-site.vercel.app
```

The QR should open the home page.

## Recommended next improvements

- Add custom Vesak target poster
- Add real GLB models
- Add Sinhala audio narration
- Add photo capture/share button
- Add loading progress for assets
- Add more polished particle effects
