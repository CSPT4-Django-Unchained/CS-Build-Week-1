import json
from decouple import config
from adventure.models import Player, Room, World

Room.objects.all().delete()

# Get unqiue room information from API service
def getRoomData(url, headers, params, limit):
    import requests
    offset = 0
    room_data = []
    while offset < limit:
        params['offset'] = offset
        response = requests.get(url, headers=headers, params=params)

        if response.status_code == 200:
            room_data.extend(response.json()['results'])
        else:
            print("No data available")
            return None
        offset += 100
    return room_data


################### GENERATE ROOMS ##########################
# API information
url = 'https://www.giantbomb.com/api/locations/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
}

parameters = {
    "api_key": config('API_KEY'),
    "format": "json",
    "field_list": "name,description,id",
}

# Retrieve API data
room_list = getRoomData(url, headers, parameters, 500)
# Create game world
w = World()
width = 50
height = 50
if room_list:
    w.generate_rooms(width, height, room_list)
    w.print_rooms()
    num_rooms = len(room_list)
else:
    print("Unavailable API data, no rooms were created.")
    num_rooms = 0

# Print World Summary
print(f"\n\nWorld\n  height: {height}\n  width: {width},\n  num_rooms: {num_rooms}\n")
