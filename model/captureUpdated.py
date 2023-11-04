import pyautogui
from getCoordinates import getCoordinates
import numpy as np

[sizeX, sizeY] = pyautogui.size()


def captureUpdated(clientXOld, clientYOld):
    output = ()
    screenshot = pyautogui.screenshot()
    coords = getCoordinates(screenshot)
    coordsNumpy = np.asarray(coords)
    coord = []
    clientX = 2 * clientXOld
    clientY = 2 * clientYOld
    for cord in coordsNumpy[0]:
        if (clientX < cord[2] and clientX > cord[0] and clientY > cord[1] and clientY < cord[3]):
            coord.append(cord)
    if (len(coord) == 0):
        screenshot = screenshot.crop(
            (0, (clientYOld - 30) * 2, sizeX * 2, (clientYOld + 30) * 2,))
        output = (screenshot, 1)
    else:
        maxArr = []
        maxAcc = 0
        for cord in coord:
            print(cord)
            if (maxAcc < cord[4]):
                maxAcc = cord[4]
                maxArr = cord
        screenshot = screenshot.crop(
            (
                maxArr[0],
                maxArr[1],
                maxArr[2],
                maxArr[3],
            )
        )
        output = (screenshot, maxArr[5])
    screenshot.save("newScreenshotPng.png")
    return output
