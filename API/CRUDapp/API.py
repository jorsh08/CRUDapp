from .models import Persona
from rest_framework import viewsets, permissions
from .serializers import PersonaSerializer

class PersonasViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    permmisions_classes = [permissions.AllowAny]
    serializer_class = PersonaSerializer
