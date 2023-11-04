import pyautogui
import time
import PIL
from getCoordinates import getCoordinates
import pyscreeze
import numpy as np

__PIL_TUPLE_VERSION = tuple(int(x) for x in PIL.__version__.split("."))
pyscreeze.PIL__version__ = __PIL_TUPLE_VERSION

[sizeX, sizeY] = pyautogui.size()


def captureScreenshot():
    [initClientX, initClientY] = pyautogui.position()
    print(f"Coordinates : {initClientX} {initClientY}")
    time.sleep(5)
    output = ()
    [newClientX, newClienty] = pyautogui.position()
    if (initClientX == newClientX and initClientY == newClienty):
        screenshot = pyautogui.screenshot()
        coords = getCoordinates(screenshot)
        coordsNumpy = np.asarray(coords)
        coord = []
        clientX = 2 * newClientX
        clientY = 2 * newClienty
        for cord in coordsNumpy[0]:
            if (clientX < cord[2] and clientX > cord[0] and clientY > cord[1] and clientY < cord[3]):
                coord.append(cord)
        if (len(coord) == 0):
            screenshot = screenshot.crop(
                (0, (newClienty - 30) * 2, sizeX * 2, (newClienty + 30) * 2,))
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
