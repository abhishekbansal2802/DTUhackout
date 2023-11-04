import pytesseract

print(f"pytesseract version {pytesseract.__version__}")


def imageToText(image):
    text = pytesseract.image_to_string(image)
    return text
