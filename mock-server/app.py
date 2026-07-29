from fastapi import FastAPI
from fastapi.responses import PlainTextResponse

app = FastAPI()

@app.get("/translate", response_class=PlainTextResponse)
def translate(query: str, locale: str):
    if query.lower() == "apple" and locale.lower() == "es-es":
        return "manzana"
    return f"Translation for {query} to {locale} was not found"