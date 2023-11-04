import gtts
import playsound
from deep_translator import GoogleTranslator


def textToAudio(text, lang="en"):
    text = GoogleTranslator(target=lang).translate(text)
    myobj = gtts.gTTS(text=text, lang=lang, slow=False)
    myobj.save("audio.mp3")
    playsound.playsound("audio.mp3")
