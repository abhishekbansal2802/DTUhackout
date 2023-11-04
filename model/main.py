from textToAudio import textToAudio
from imageToText import imageToText
from capture import captureScreenshot
from imageCaptioning import predict_step


if __name__ == "__main__":
    while (True):
        (screenshot, flag) = captureScreenshot()
        if (flag == 1):
            if (screenshot):
                text = imageToText(screenshot)
                if (text):
                    textToAudio(text)
        else:
            text = predict_step(screenshot)
            if (text):
                textToAudio(text)
