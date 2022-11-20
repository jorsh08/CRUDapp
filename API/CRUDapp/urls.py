
from rest_framework import routers
from .API import PersonasViewSet

router = routers.DefaultRouter()

router.register('Persona', PersonasViewSet, 'Persona')

urlpatterns = router.urls