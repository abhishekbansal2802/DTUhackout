from textToAudio import textToAudio
from imageToText import imageToText
from capture import captureScreenshot
from imageCaptioning import predict_step


def starting():
    while (True):
        tempVar = captureScreenshot()
        if (tempVar == None):
            continue
        (screenshot, flag) = tempVar
        if (flag == 1):
            if (screenshot):
                text = imageToText(screenshot)
                if (text):
                    textToAudio(text)
        else:
            screenshot.save("temp.png")
            text = predict_step(["./temp.png"])
            if (len(text) > 0):
                textToAudio(text[0])
