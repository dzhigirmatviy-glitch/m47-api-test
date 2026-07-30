from fastapi import FastAPI, HTTPException
from fastapi.responses import PlainTextResponse

app = FastAPI()

TRANSLATIONS = {
    ("apple", "es-es"): "manzana",
    ("apple", "ru-ru"): "яблоко",
    ("apple", "fr-fr"): "pomme",
}

@app.get("/translate", response_class=PlainTextResponse)
def translate(query: str, locale: str):
    key = (query.strip().lower(), locale.strip().lower())
    if key not in TRANSLATIONS:
        raise HTTPException(404, detail=f"No translation found for '{query}' in '{locale}'")
    return TRANSLATIONS[key]
