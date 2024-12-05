from django.shortcuts import render
from rest_framework import generics
from .models import Usuario  
from .serializers import UsuarioSerializer
from rest_framework.permissions import AllowAny

# Vista para crear un nuevo usuario
class CrearUsuarioView(generics.CreateAPIView):
    queryset = Usuario.objects.all() 

    serializer_class = UsuarioSerializer  
    permission_classes = [AllowAny]  
