import pyautogui
import time
import PIL
from captureUpdated import captureUpdated
import pyscreeze

__PIL_TUPLE_VERSION = tuple(int(x) for x in PIL.__version__.split("."))
pyscreeze.PIL__version__ = __PIL_TUPLE_VERSION

[sizeX, sizeY] = pyautogui.size()


def captureScreenshot():
    [initClientX, initClientY] = pyautogui.position()
    print(f"Coordinates : {initClientX} {initClientY}")
    time.sleep(5)
    [newClientX, newClienty] = pyautogui.position()
    if (initClientX == newClientX and initClientY == newClienty):
        return captureUpdated(newClientX, newClienty)
