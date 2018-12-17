import requests

def post(headers, payload, uri):
    try:
        r = requests.post(
            url=uri,
            data=payload,
            headers=headers
        )
    except:
        return None
    return {
        "body": r
    }


