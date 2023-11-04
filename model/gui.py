# import pyautogui
# import keyboard
import tkinter as tk
from tkinter import font
from captureUpdated import captureUpdated
from starting import starting
from threading import Thread
from imageToText import imageToText
from textToAudio import textToAudio
import state
from imageCaptioning import predict_step

import os
# Create the main application window
app = tk.Tk()
app.title("We Eye")
# Increased the height to accommodate the new "Stop" button
app.geometry("400x450")
app.configure(bg="white")  # Set the background color to white

# Create a custom font for the label
custom_font = font.nametofont("TkDefaultFont")
custom_font.configure(size=24)
app.option_add("*Font", custom_font)


# Function to set a label's text color with opacity (simulated)


def set_label_text_with_opacity(label, text, color, opacity):
    hex_color = "#{:02X}{:02X}{:02X}".format(*color)
    label.config(text=text, fg=hex_color, bg="white")


# Create a label at the top
label = tk.Label(app, text="We Eye", font=("Arial", 24), bg="white")
label.pack(pady=20)

# Simulated black color with 80% opacity (semi-transparent)
label_color = (0, 0, 0)  # Black
opacity = 0.8  # Opacity (0.0 = fully transparent, 1.0 = fully opaque)
set_label_text_with_opacity(label, "We Eye", label_color, opacity)

# Function to set button background color


def set_button_bg(button, color):
    hex_color = "#{:02X}{:02X}{:02X}".format(*color)
    button.config(bg=hex_color)

# Create a function to handle the "Start" button click


def start_clicked():
    app.iconify()
    global thread
    thread = Thread(target=starting, args=(state.lang, state.full_language))
    thread.start()


start_button = tk.Button(
    app, text="Start", command=start_clicked, width=15, height=2)
start_button.pack(pady=5)  # Reduced padding
set_button_bg(start_button, (0, 0, 128))  # Navy blue background


def setLanguageEnglish():
    state.change_lang("en", "english")
    window.destroy()


def setLanguageHindi():
    state.change_lang("hi", "hindi")
    window.destroy()


def setLanguageFrench():
    state.change_lang("fr", "french")
    window.destroy()


def setLanguageGerman():
    state.change_lang("de", "german")
    window.destroy()


def setLanguageKorean():
    state.change_lang("ko", "korean")
    window.destroy()


def change_language_clicked():
    global window
    window = tk.Tk()
    window.title("Change Language")
    window.geometry("400x450")
    window.configure(bg="white")  # Set the background color to white
    window.option_add("*Font", custom_font)
    newLabel = tk.Label(window, text="Change Language",
                        font=("Arial", 24), bg="white")
    newLabel.pack(pady=20)
    set_label_text_with_opacity(
        newLabel, "Choose Language", label_color, opacity)

    tk.Button(window, text="English", command=setLanguageEnglish,
              width=15, height=2).pack(pady=10)
    tk.Button(window, text="Hindi", command=setLanguageHindi,
              width=15, height=2).pack(pady=10)
    tk.Button(window, text="French", command=setLanguageFrench,
              width=15, height=2).pack(pady=10)
    tk.Button(window, text="German", command=setLanguageGerman,
              width=15, height=2).pack(pady=10)
    tk.Button(window, text="Korean", command=setLanguageKorean,
              width=15, height=2).pack(pady=10)


change_language_button = tk.Button(
    app, text="Change Language", command=change_language_clicked, width=15, height=2)
change_language_button.pack(pady=10)
set_button_bg(change_language_button, (0, 0, 128))  # Navy blue background

# Create a function to handle the "Exit" button click


def exit_clicked():
    os._exit(0)


exit_button = tk.Button(
    app, text="Exit", command=exit_clicked, width=15, height=2)
exit_button.pack(pady=10)
set_button_bg(exit_button, (0, 0, 128))  # Navy blue background


# def workingAndDone():
#     [clientX, clientY] = pyautogui.position()
#     tempVar = captureUpdated(clientX, clientY)
#     if (tempVar == None):
#         return
#     (screenshot, flag) = tempVar
#     if (flag == 1):
#         text = imageToText(screenshot)
#         if (text):
#             textToAudio(text)
#     else:
#         screenshot.save("temp.png")
#         text = predict_step(["./model/temp.png"])
#         if (len(text) > 0):
#             text = text[0]
#             textToAudio(text)


# keyboard.add_hotkey("space", workingAndDone)

app.mainloop()
# keyboard.wait()
