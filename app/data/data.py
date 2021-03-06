import os
from typing import Dict
from datetime import datetime, timedelta
import requests
from app.model.weather import Weather


BASETIME = [2, 5, 8, 11, 14, 17, 20, 23]
FETCH_LENGTH = 16
FETCH_DAYS = 2
URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst"


def weather_data():
    data_ = fetch_data()
    if data_:
        return parse(data_)
    else:
        raise Exception("Data is None")


def fetch_data() -> Dict:
    WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
    if WEATHER_API_KEY is None:
        raise ValueError("Weather api key is unvalid")

    CURRENT_TIME: datetime = current_time()
    DATE = CURRENT_TIME.strftime(r"%Y%m%d")
    TIME = CURRENT_TIME.strftime(r"%H00")

    params = {
        "ServiceKey": WEATHER_API_KEY,
        "pageNo": 1,
        "numOfRows": FETCH_LENGTH * 14,
        "dataType": "JSON",
        "base_date": DATE,
        "base_time": TIME,
        "nx": 89,
        "ny": 111,
    }
    req = requests.sessions.PreparedRequest()
    req.prepare_url(URL, params)
    if req.url:
        url = req.url
        response = requests.get(url)

        data_ = response.json()
        return data_
    else:
        raise ValueError("req.url is invalid")


def current_time():
    utctime = datetime.utcnow()
    time = utctime + timedelta(hours=9)
    time -= timedelta(minutes=5)
    while time.hour not in BASETIME:
        time -= timedelta(hours=1)
    time -= timedelta(hours=3)
    return time


def get_date(date, time):
    date_str = f"{date}{time}"
    return str(datetime.strptime(date_str, r"%Y%m%d%H%M"))


def parse(data_: Dict):
    result: Dict = {}
    items: Dict = data_["response"]["body"]["items"]["item"]

    count = 0
    length = len(items)
    for index in range(2):
        weather = Weather()
        while count < length:
            item = items[count]
            count += 1
            if weather.should_break(item):
                break
            else:
                weather.add(item)
        result[index] = weather.to_dict()
    return result
