import gtts
import playsound


def textToAudio(text):
    myobj = gtts.gTTS(text=text, lang="en", slow=False)
    myobj.save("audio.mp3")
    playsound.playsound("audio.mp3")
