from rest_framework import viewsets
from .serializers import RoomSerializer
from .models import Room, Player

class RoomViewSet(viewsets.ModelViewSet):
    """
    API endpoint that displays rooms
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer