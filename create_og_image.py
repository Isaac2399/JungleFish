from PIL import Image

def create_og_image(logo_path, output_path):
    # Standard OG Image size
    width = 1200
    height = 630
    
    # Create background image with color #0A110D
    bg = Image.new("RGBA", (width, height), (10, 17, 13, 255))
    
    # Load transparent logo
    logo = Image.open(logo_path).convert("RGBA")
    
    # Resize logo to fit well inside the OG image
    # Let's say we want the logo to be at most 800px wide or 300px tall
    logo.thumbnail((800, 300), Image.LANCZOS)
    
    # Calculate position to center the logo
    x = (width - logo.width) // 2
    y = (height - logo.height) // 2
    
    # Paste logo onto background, using logo as alpha mask
    bg.paste(logo, (x, y), logo)
    
    # Save as JPG since it's an OG image (smaller size, solid background)
    bg.convert("RGB").save(output_path, "JPEG", quality=90)

create_og_image("public/assets/logo-transparent.png", "public/assets/og-image.jpg")
print("OG Image created successfully!")
