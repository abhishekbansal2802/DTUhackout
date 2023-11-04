import torch

model = torch.hub.load(
    "ultralytics/yolov5",
    "custom",
    path="./model/MLModel/model.pt",
    force_reload=True,
)


def getCoordinates(image):
    output = model(image)
    output.save("newPng.png")
    return output.xyxy
