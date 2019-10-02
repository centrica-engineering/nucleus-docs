---
description: How to optimise your images for production.
---

# Optimise your images

### Links

* [ImageOptim](https://imageoptim.com/mac)
* [Squoosh](https://squoosh.app/)
* [Kraken](https://kraken.io/web-interface)
* [TinyPNG](https://tinypng.com/)

### Why optimise?

Reducing the size of images benefits the user by allowing their page to feel like the page has rendered quicker and will save data on their mobile networks. A perceptively faster-running page, for us, reduces bounce rates and increases conversion.

> A 1-second delay in page load time equals 11% fewer page views, a 16% decrease in customer satisfaction, and 7% loss in conversions

[https://headspin.io/resources/marketing/reports/5136-RR-performance-web-application.pdf](https://headspin.io/resources/marketing/reports/5136-RR-performance-web-application.pdf)

### What image size should I be aiming for?

The answer is: The smallest size that does not degrade the image too much that it becomes distracting to the customer.

These numbers are just a guide and shouldn’t be treated as “I have hit the number, so I don’t need to optimise it anymore”. If they can go much lower than these numbers - then they should.

* Full width image: &lt; 200kb.
* Side image: &lt; 100kb.
* Additional image: &lt; 50kb.
* Decoration: &lt; 10kb.

\(For PNGs add an additional 50kb\).

### How to optimise

Resize your image to the smallest it can be. If it is a full-width image the highest width should be 1440px.

Images such be JPEGs, unless they have some transparency which in that case should be PNGs. Lossless compression is the first step. We need to remove all the metadata and additional garbage from the image, while not removing the quality of the image. This will reduce the image by 5-20%. With the lossless compressed image, incrementally reduce the quality by 10%. Depending on the initial size, there will probably be a reduction of 70% in file size.

Sometimes with PNG images that have transparency, corners, gradients and shadows the images will degrade really quickly. For these images, it is essential to resize the image optimally. If these parts of the images aren’t required they should be removed to allow the image to reduce properly \(such as shadows can be added via CSS\).

If you want to get a specific quality percentage, kraken.io web interface has an expert mode that lets you pick.

## Guide \(Mac\)

### Resizing

Double click your image in Finder to open it in Preview. In the menu, Tools &gt; Adjust Size... An overlay will appear. Keep "Scale proportionally" ticked and change your dimension to what is the required size. After that click OK and then save the image.

![Resizing image in Preview \(macOS\)](https://user-images.githubusercontent.com/43471890/62051302-00d73900-b20b-11e9-9a42-7845f06d7dda.png)

### Optimising with ImageOptim

```text
It is best for each iteration of optimisation to create a new folder of duplicates as ImageOptim will overwrite.
```

1. Click the setting button, at the bottom right corner. Go into Optimisation level and set it to insane; in General, tick PNGCrush and in Quality, disable loss minification.

![ImageOptim settings](https://user-images.githubusercontent.com/43471890/62051350-18162680-b20b-11e9-8a4a-d8badfbe5cc2.png)

1. Drag and drop images and wait for them to tick green ✅.
2. With the duplicated versions of these images, enable lossy minification and go down on the level of quality \(as explained in "How to Optimise"\).
3. Compare the original lossless version to the lossy, to check there isn't too much degradation.

### Squoosh

This is a nice web interface that allows the comparison of the original and the compressed version. It gets almost comparative results to ImageOptim, but they are slightly \(5%\) larger. It can also resize images.

### Kraken

Kraken gets similar results to ImageOptim and has more advanced controls, but has a limit on file size uploaded which can be an issue at the start if you are given a 10-20mb image.

