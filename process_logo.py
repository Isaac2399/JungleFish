from PIL import Image

def process_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Calculate perceived brightness or just use simple threshold
        # item is (R, G, B, A)
        brightness = (item[0] + item[1] + item[2]) / 3
        
        # If pixel is bright (close to white background), make it transparent
        if brightness > 200:
            new_data.append((255, 255, 255, 0))
        else:
            # If pixel is dark (the actual logo), make it solid white so it shows on dark background
            # You could preserve alpha if you want anti-aliasing, let's try preserving it somewhat
            # But making the color white.
            # For anti-aliasing: dark pixels are solid, gray pixels are semi-transparent.
            # alpha = 255 - brightness
            # Let's just make it white with alpha mapped from darkness
            alpha = int(255 - brightness)
            new_data.append((255, 255, 255, alpha))

    img.putdata(new_data)
    img.save(output_path, "PNG")

process_logo("public/assets/logo.png", "public/assets/logo-transparent.png")
print("Logo processed successfully!")
