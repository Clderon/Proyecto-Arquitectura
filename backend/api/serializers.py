# spell: disable 
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Usuario, Rol

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nombre', 'apellido', 'email', 'contraseña', 'genero', 'fecha_creacion', 'ultimo_acceso', 'estado']  

        extra_kwargs = {
            # Esto asegura que la contraseña solo se envíe al crear o actualizar, no se expone en la respuesta
            'contraseña': {'write_only': True}  
        }

    def create(self, validated_data):
        # Hashear la contraseña antes de crear el usuario
        contraseña = validated_data.pop('contraseña')
        contraseña_hasheada = make_password(contraseña)

        # Asignar el rol (esto lo puedes mantener igual, dependiendo de tu lógica)
        rol = Rol.objects.get(id=2)
        
        # Crear el usuario con la contraseña hasheada
        usuario = Usuario.objects.create(**validated_data, idRol=rol, contraseña=contraseña_hasheada)
        return usuario
